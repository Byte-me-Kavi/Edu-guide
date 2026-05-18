using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace AlgorithmVisualizer.Pathfinding
{
    public class AStar : IPathfindingAlgorithm
    {
        public string Name => "A* Search";

        public IEnumerator FindPath(Node[,] grid, Node start, Node end)
        {
            int width = grid.GetLength(0);
            int height = grid.GetLength(1);

            List<Node> openList = new List<Node>();
            HashSet<Node> closedList = new HashSet<Node>();

            start.G = 0;
            start.H = GetHeuristic(start, end);
            openList.Add(start);

            while (openList.Count > 0)
            {
                // Get node with lowest F score
                Node current = openList.OrderBy(n => n.F).First();

                if (current == end)
                {
                    // Path found, retrace
                    yield return RetracePath(start, end);
                    yield break;
                }

                openList.Remove(current);
                closedList.Add(current);

                if (current != start && current != end)
                {
                    current.State = TileState.Visited;
                    yield return null; // Animate visit
                }

                foreach (Node neighbor in GetNeighbors(grid, current, width, height))
                {
                    if (neighbor.State == TileState.Wall || closedList.Contains(neighbor))
                        continue;

                    int newCostToNeighbor = current.G + 1; // Assuming cost 1 for all moves (no diagonals for simplicity)

                    if (newCostToNeighbor < neighbor.G || !openList.Contains(neighbor))
                    {
                        neighbor.G = newCostToNeighbor;
                        neighbor.H = GetHeuristic(neighbor, end);
                        neighbor.Parent = current;

                        if (!openList.Contains(neighbor))
                        {
                            openList.Add(neighbor);
                            if (neighbor != start && neighbor != end)
                            {
                                neighbor.State = TileState.Explored;
                                yield return null; // Animate exploration
                            }
                        }
                    }
                }
            }
        }

        private IEnumerator RetracePath(Node start, Node end)
        {
            Node current = end.Parent;
            while (current != start)
            {
                current.State = TileState.Path;
                current = current.Parent;
                yield return null; // Animate path drawing
            }
        }

        private int GetHeuristic(Node a, Node b)
        {
            // Manhattan distance
            return Math.Abs(a.X - b.X) + Math.Abs(a.Y - b.Y);
        }

        private List<Node> GetNeighbors(Node[,] grid, Node node, int width, int height)
        {
            List<Node> neighbors = new List<Node>();

            if (node.Y - 1 >= 0) neighbors.Add(grid[node.X, node.Y - 1]); // Up
            if (node.Y + 1 < height) neighbors.Add(grid[node.X, node.Y + 1]); // Down
            if (node.X - 1 >= 0) neighbors.Add(grid[node.X - 1, node.Y]); // Left
            if (node.X + 1 < width) neighbors.Add(grid[node.X + 1, node.Y]); // Right

            return neighbors;
        }
    }
}
