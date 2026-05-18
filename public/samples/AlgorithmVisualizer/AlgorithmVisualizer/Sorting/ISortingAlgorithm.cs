using System.Collections;

namespace AlgorithmVisualizer.Sorting
{
    public enum ElementState
    {
        Default,
        Comparing,
        Swapping,
        Sorted
    }

    public class SortElement
    {
        public int Value { get; set; }
        public ElementState State { get; set; }

        public SortElement(int value)
        {
            Value = value;
            State = ElementState.Default;
        }
    }

    public interface ISortingAlgorithm
    {
        string Name { get; }
        int Comparisons { get; }
        IEnumerator Sort(SortElement[] array);
    }
}
