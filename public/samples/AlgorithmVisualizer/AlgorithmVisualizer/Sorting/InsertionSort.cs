using System.Collections;

namespace AlgorithmVisualizer.Sorting
{
    public class InsertionSort : ISortingAlgorithm
    {
        public string Name => "Insertion Sort";
        public int Comparisons { get; private set; }

        public IEnumerator Sort(SortElement[] array)
        {
            Comparisons = 0;
            for (int i = 1; i < array.Length; i++)
            {
                int j = i;
                
                // Highlight the element we are moving
                array[j].State = ElementState.Swapping;
                yield return null;

                while (j > 0)
                {
                    Comparisons++;
                    
                    array[j].State = ElementState.Comparing;
                    array[j - 1].State = ElementState.Comparing;
                    yield return null;

                    if (array[j].Value < array[j - 1].Value)
                    {
                        array[j].State = ElementState.Swapping;
                        array[j - 1].State = ElementState.Swapping;
                        yield return null;

                        // Swap
                        int temp = array[j].Value;
                        array[j].Value = array[j - 1].Value;
                        array[j - 1].Value = temp;
                        yield return null;

                        array[j].State = ElementState.Default;
                        array[j - 1].State = ElementState.Default;
                        j--;
                    }
                    else
                    {
                        array[j].State = ElementState.Default;
                        array[j - 1].State = ElementState.Default;
                        break;
                    }
                }
                
                if (j >= 0 && j < array.Length)
                {
                   array[j].State = ElementState.Default;
                }
            }

            // Mark all as sorted
            for (int i = 0; i < array.Length; i++)
            {
                array[i].State = ElementState.Sorted;
                yield return null;
            }
        }
    }
}
