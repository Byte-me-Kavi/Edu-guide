using System;
using System.Collections;
using System.Collections.Generic;
using System.Drawing;
using System.Windows.Forms;
using AlgorithmVisualizer.Sorting;

namespace AlgorithmVisualizer
{
    public partial class SortingVisualizerForm : Form
    {
        private SortElement[] array;
        private Random random = new Random();
        private ISortingAlgorithm currentAlgorithm;
        private IEnumerator sortEnumerator;
        private List<ISortingAlgorithm> algorithms;

        // Custom Pleasant Colors
        private readonly Brush defaultBrush = new SolidBrush(Color.FromArgb(137, 180, 250)); // Soft Blue
        private readonly Brush compareBrush = new SolidBrush(Color.FromArgb(243, 139, 168)); // Soft Red
        private readonly Brush swapBrush = new SolidBrush(Color.FromArgb(249, 226, 175));    // Soft Yellow
        private readonly Brush sortedBrush = new SolidBrush(Color.FromArgb(166, 227, 161));  // Soft Green

        public SortingVisualizerForm()
        {
            InitializeComponent();
            
            // Double buffer the panel to prevent flickering
            typeof(Panel).InvokeMember("DoubleBuffered", 
                System.Reflection.BindingFlags.SetProperty | 
                System.Reflection.BindingFlags.Instance | 
                System.Reflection.BindingFlags.NonPublic, 
                null, pnlVisualizer, new object[] { true });

            algorithms = new List<ISortingAlgorithm>
            {
                new QuickSort(),
                new InsertionSort()
            };

            foreach (var algo in algorithms)
            {
                cmbAlgorithms.Items.Add(algo.Name);
            }
            if (cmbAlgorithms.Items.Count > 0)
                cmbAlgorithms.SelectedIndex = 0;

            GenerateArray();
        }

        private void GenerateArray()
        {
            StopAnimation();
            array = new SortElement[AppSettings.ArraySize];
            for (int i = 0; i < AppSettings.ArraySize; i++)
            {
                // Values between 10 and panel height
                array[i] = new SortElement(random.Next(10, pnlVisualizer.Height - 10));
            }
            pnlVisualizer.Invalidate();
        }

        private void StartAnimation()
        {
            if (array == null || array.Length == 0) return;

            if (currentAlgorithm == null) return;

            // Reset states before sorting again if we are already sorted (or generate new)
            bool isSorted = true;
            for(int i = 0; i < array.Length - 1; i++) {
                if(array[i].Value > array[i+1].Value) isSorted = false;
                array[i].State = ElementState.Default;
            }
            array[array.Length-1].State = ElementState.Default;

            if(isSorted) {
                GenerateArray();
            }

            sortEnumerator = currentAlgorithm.Sort(array);
            timer1.Interval = AppSettings.SortingAnimationSpeedMs;
            
            btnStart.Enabled = false;
            btnNewArray.Enabled = false;
            btnSettings.Enabled = false;
            cmbAlgorithms.Enabled = false;
            
            timer1.Start();
        }

        private void StopAnimation()
        {
            timer1.Stop();
            btnStart.Enabled = true;
            btnNewArray.Enabled = true;
            btnSettings.Enabled = true;
            cmbAlgorithms.Enabled = true;
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            if (sortEnumerator != null && sortEnumerator.MoveNext())
            {
                lblComparisons.Text = $"Comparisons: {currentAlgorithm.Comparisons}";
                pnlVisualizer.Invalidate();
            }
            else
            {
                StopAnimation();
                // Ensure everything is marked sorted at the end
                if (array != null)
                {
                    foreach (var el in array) el.State = ElementState.Sorted;
                    pnlVisualizer.Invalidate();
                }
            }
        }

        private void pnlVisualizer_Paint(object sender, PaintEventArgs e)
        {
            if (array == null) return;

            Graphics g = e.Graphics;
            int width = pnlVisualizer.Width;
            int height = pnlVisualizer.Height;

            float barWidth = (float)width / array.Length;

            for (int i = 0; i < array.Length; i++)
            {
                Brush brush = defaultBrush;
                switch (array[i].State)
                {
                    case ElementState.Comparing:
                        brush = compareBrush;
                        break;
                    case ElementState.Swapping:
                        brush = swapBrush;
                        break;
                    case ElementState.Sorted:
                        brush = sortedBrush;
                        break;
                }

                float x = i * barWidth;
                float y = height - array[i].Value;
                
                // Draw bar
                g.FillRectangle(brush, x, y, barWidth - 1, array[i].Value);
            }
        }

        private void btnStart_Click(object sender, EventArgs e)
        {
            StartAnimation();
        }

        private void btnReset_Click(object sender, EventArgs e)
        {
            StopAnimation();
            GenerateArray();
            lblComparisons.Text = "Comparisons: 0";
        }

        private void btnNewArray_Click(object sender, EventArgs e)
        {
            GenerateArray();
            lblComparisons.Text = "Comparisons: 0";
        }

        private void btnSettings_Click(object sender, EventArgs e)
        {
            SettingsForm settings = new SettingsForm();
            if (settings.ShowDialog() == DialogResult.OK)
            {
                GenerateArray(); // Re-generate with new size
            }
        }

        private void cmbAlgorithms_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (cmbAlgorithms.SelectedIndex >= 0 && cmbAlgorithms.SelectedIndex < algorithms.Count)
            {
                currentAlgorithm = algorithms[cmbAlgorithms.SelectedIndex];
            }
        }

        private void SortingVisualizerForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            StopAnimation();
        }
    }
}
