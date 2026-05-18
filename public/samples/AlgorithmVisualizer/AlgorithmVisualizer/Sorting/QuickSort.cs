using System.Collections;

namespace AlgorithmVisualizer.Sorting
{
    public class QuickSort : ISortingAlgorithm
    {
        public string Name => "Quick Sort";
        public int Comparisons { get; private set; }

        public IEnumerator Sort(SortElement[] array)
        {
            Comparisons = 0;
            IEnumerator sorter = QuickSortRecursive(array, 0, array.Length - 1);
            while (sorter.MoveNext())
            {
                yield return sorter.Current;
            }

            for (int i = 0; i < array.Length; i++)
            {
                array[i].State = ElementState.Sorted;
                yield return null;
            }
        }

        private IEnumerator QuickSortRecursive(SortElement[] array, int low, int high)
        {
            if (low < high)
            {
                int pivotIndex = -1;
                IEnumerator partitioner = Partition(array, low, high, (result) => pivotIndex = result);
                while (partitioner.MoveNext()) yield return partitioner.Current;

                IEnumerator leftSorter = QuickSortRecursive(array, low, pivotIndex - 1);
                while (leftSorter.MoveNext()) yield return leftSorter.Current;

                IEnumerator rightSorter = QuickSortRecursive(array, pivotIndex + 1, high);
                while (rightSorter.MoveNext()) yield return rightSorter.Current;
            }
            else if (low == high)
            {
                 // Base case for 1 element - let's visually show it's done being processed (will be marked green at the end though)
                 yield return null;
            }
        }

        private IEnumerator Partition(SortElement[] array, int low, int high, System.Action<int> setPivotIndex)
        {
            int pivotValue = array[high].Value;
            array[high].State = ElementState.Swapping; // pivot
            yield return null;

            int i = low - 1;

            for (int j = low; j < high; j++)
            {
                Comparisons++;
                array[j].State = ElementState.Comparing;
                yield return null;

                if (array[j].Value < pivotValue)
                {
                    i++;
                    
                    array[i].State = ElementState.Swapping;
                    array[j].State = ElementState.Swapping;
                    yield return null;

                    int temp = array[i].Value;
                    array[i].Value = array[j].Value;
                    array[j].Value = temp;
                    yield return null;

                    array[i].State = ElementState.Default;
                }
                
                array[j].State = ElementState.Default;
            }

            array[i + 1].State = ElementState.Swapping;
            array[high].State = ElementState.Swapping;
            yield return null;

            int tempPivot = array[i + 1].Value;
            array[i + 1].Value = array[high].Value;
            array[high].Value = tempPivot;
            yield return null;

            array[i + 1].State = ElementState.Default;
            array[high].State = ElementState.Default;

            setPivotIndex(i + 1);
        }
    }
}
