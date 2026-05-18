using System.Collections;
using System.Collections.Generic;

namespace AlgorithmVisualizer.Pathfinding
{
    public enum TileState
    {
        Unvisited,
        Wall,
        Start,
        End,
        Visited,
        Explored,
        Path
    }

    public class Node
    {
        public int X { get; set; }
        public int Y { get; set; }
        public TileState State { get; set; }
        
        // A* specific properties
        public int G { get; set; }
        public int H { get; set; }
        public int F => G + H;
        public Node Parent { get; set; }

        public Node(int x, int y)
        {
            X = x;
            Y = y;
            State = TileState.Unvisited;
            G = int.MaxValue;
            H = 0;
            Parent = null;
        }
    }

    public interface IPathfindingAlgorithm
    {
        string Name { get; }
        IEnumerator FindPath(Node[,] grid, Node start, Node end);
    }
}
