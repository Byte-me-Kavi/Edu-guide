using System;
using System.Collections;
using System.Collections.Generic;
using System.Drawing;
using System.Windows.Forms;
using AlgorithmVisualizer.Pathfinding;

namespace AlgorithmVisualizer
{
    public partial class PathfindingVisualizerForm : Form
    {
        private Node[,] grid;
        private int gridSize;
        private float cellWidth;
        private float cellHeight;
        private bool isMouseDown = false;
        
        private Node startNode;
        private Node endNode;
        
        private IPathfindingAlgorithm currentAlgorithm;
        private IEnumerator pathEnumerator;

        public PathfindingVisualizerForm()
        {
            InitializeComponent();

            typeof(Panel).InvokeMember("DoubleBuffered", 
                System.Reflection.BindingFlags.SetProperty | 
                System.Reflection.BindingFlags.Instance | 
                System.Reflection.BindingFlags.NonPublic, 
                null, pnlGrid, new object[] { true });

            cmbAlgorithms.Items.Add(new AStar().Name);
            cmbAlgorithms.SelectedIndex = 0;
            currentAlgorithm = new AStar();

            InitGrid();
        }

        private void InitGrid()
        {
            StopAnimation();
            gridSize = AppSettings.GridSize;
            grid = new Node[gridSize, gridSize];
            startNode = null;
            endNode = null;

            for (int x = 0; x < gridSize; x++)
            {
                for (int y = 0; y < gridSize; y++)
                {
                    grid[x, y] = new Node(x, y);
                }
            }
            pnlGrid.Invalidate();
        }

        private void ClearPaths()
        {
            StopAnimation();
            for (int x = 0; x < gridSize; x++)
            {
                for (int y = 0; y < gridSize; y++)
                {
                    if (grid[x, y].State == TileState.Visited || grid[x, y].State == TileState.Explored || grid[x, y].State == TileState.Path)
                    {
                        grid[x, y].State = TileState.Unvisited;
                    }
                    grid[x,y].G = int.MaxValue;
                    grid[x,y].H = 0;
                    grid[x,y].Parent = null;
                }
            }
            pnlGrid.Invalidate();
        }

        private void pnlGrid_Paint(object sender, PaintEventArgs e)
        {
            if (grid == null) return;

            Graphics g = e.Graphics;
            cellWidth = (float)pnlGrid.Width / gridSize;
            cellHeight = (float)pnlGrid.Height / gridSize;

            for (int x = 0; x < gridSize; x++)
            {
                for (int y = 0; y < gridSize; y++)
                {
                    Brush brush = Brushes.White;
                    switch (grid[x, y].State)
                    {
                        case TileState.Wall: brush = Brushes.Black; break;
                        case TileState.Start: brush = Brushes.Green; break;
                        case TileState.End: brush = Brushes.Red; break;
                        case TileState.Explored: brush = Brushes.LightSkyBlue; break;
                        case TileState.Visited: brush = Brushes.CornflowerBlue; break;
                        case TileState.Path: brush = Brushes.Gold; break;
                    }

                    float px = x * cellWidth;
                    float py = y * cellHeight;

                    g.FillRectangle(brush, px, py, cellWidth, cellHeight);
                    g.DrawRectangle(Pens.LightGray, px, py, cellWidth, cellHeight);
                }
            }
        }

        private void HandleMouseClick(MouseEventArgs e)
        {
            if (grid == null || timer1.Enabled) return;

            int x = (int)(e.X / cellWidth);
            int y = (int)(e.Y / cellHeight);

            if (x >= 0 && x < gridSize && y >= 0 && y < gridSize)
            {
                Node clickedNode = grid[x, y];

                if (rdoStart.Checked)
                {
                    if (startNode != null) startNode.State = TileState.Unvisited;
                    if (clickedNode == endNode) endNode = null;
                    startNode = clickedNode;
                    startNode.State = TileState.Start;
                }
                else if (rdoEnd.Checked)
                {
                    if (endNode != null) endNode.State = TileState.Unvisited;
                    if (clickedNode == startNode) startNode = null;
                    endNode = clickedNode;
                    endNode.State = TileState.End;
                }
                else if (rdoWall.Checked)
                {
                    if (clickedNode != startNode && clickedNode != endNode)
                    {
                        // Toggle wall
                        clickedNode.State = clickedNode.State == TileState.Wall ? TileState.Unvisited : TileState.Wall;
                    }
                }
                pnlGrid.Invalidate();
            }
        }

        private void pnlGrid_MouseDown(object sender, MouseEventArgs e)
        {
            isMouseDown = true;
            HandleMouseClick(e);
        }

        private void pnlGrid_MouseMove(object sender, MouseEventArgs e)
        {
            if (isMouseDown && rdoWall.Checked) // Only draw continuous walls
            {
                HandleMouseClick(e);
            }
        }

        private void pnlGrid_MouseUp(object sender, MouseEventArgs e)
        {
            isMouseDown = false;
        }

        private void StartAnimation()
        {
            if (startNode == null || endNode == null)
            {
                MessageBox.Show("Please place a Start and End node first.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }

            ClearPaths(); // Clear old paths before starting new search
            
            pathEnumerator = currentAlgorithm.FindPath(grid, startNode, endNode);
            timer1.Interval = AppSettings.PathfindingAnimationSpeedMs;
            
            btnStart.Enabled = false;
            btnClear.Enabled = false;
            btnSettings.Enabled = false;
            groupBox1.Enabled = false; // Disable drawing
            
            timer1.Start();
        }

        private void StopAnimation()
        {
            timer1.Stop();
            btnStart.Enabled = true;
            btnClear.Enabled = true;
            btnSettings.Enabled = true;
            groupBox1.Enabled = true;
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            if (pathEnumerator != null && pathEnumerator.MoveNext())
            {
                pnlGrid.Invalidate();
            }
            else
            {
                StopAnimation();
                pnlGrid.Invalidate();
            }
        }

        private void btnStart_Click(object sender, EventArgs e)
        {
            StartAnimation();
        }

        private void btnClear_Click(object sender, EventArgs e)
        {
            InitGrid();
        }

        private void btnSettings_Click(object sender, EventArgs e)
        {
            SettingsForm settings = new SettingsForm();
            if (settings.ShowDialog() == DialogResult.OK)
            {
                if (gridSize != AppSettings.GridSize)
                {
                    InitGrid(); // Resize grid
                }
            }
        }

        private void PathfindingVisualizerForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            StopAnimation();
        }
    }
}
