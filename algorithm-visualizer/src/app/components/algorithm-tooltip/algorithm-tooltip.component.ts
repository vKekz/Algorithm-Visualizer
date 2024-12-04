import { Component } from "@angular/core";
import { AlgorithmService } from "../../../services/algorithm.service";
import { AlgorithmType } from "../../../algorithms/enums/algorithm-type.enum";

@Component({
  selector: "app-algorithm-tooltip",
  imports: [],
  templateUrl: "./algorithm-tooltip.component.html",
  standalone: true,
  styleUrl: "./algorithm-tooltip.component.css",
})
export class AlgorithmTooltipComponent {
  constructor(private readonly algorithmService: AlgorithmService) {}

  public getAlgorithmToolTip() {
    const algorithm = this.algorithmService.currentAlgorithm;
    if (algorithm == null) {
      return "Select an algorithm!";
    }

    switch (algorithm.type) {
      case AlgorithmType.BubbleSort:
        return `Bubble sort is a simple comparison-based sorting
         algorithm that repeatedly steps through the list, compares
         adjacent elements, and swaps them if they are in the wrong order,
         continuing this process until the list is sorted. Its time complexity
         is O(n²) in the average and worst cases, and O(n) in the best case
         when the array is already sorted.`;
      case AlgorithmType.SelectionSort:
        return `Selection sort is a simple comparison-based algorithm that
        repeatedly selects the smallest (or largest) element from the unsorted
        portion of the array and swaps it with the first unsorted element. Its
        time complexity is O(n²) in all cases, as it performs the same number of
        comparisons regardless of the initial order of the elements.`;
      case AlgorithmType.ShellSort:
        return `Shell sort is an in-place comparison-based algorithm that generalizes
        insertion sort by first sorting elements far apart (based on a gap sequence)
        and gradually reducing the gap until the array is fully sorted. Its time
        complexity varies depending on the gap sequence, ranging from O(n²) in the
        worst case to O(n log² n) or better with optimized gap sequences, though the
        exact complexity can be difficult to analyze.`;
      case AlgorithmType.QuickSort:
        return `Quick sort is a divide-and-conquer algorithm that selects a pivot
        element, partitions the array into two subarrays (elements less than the pivot
        and elements greater than the pivot), and recursively sorts the subarrays.
        Its time complexity is O(n²) in the worst case (e.g., when the pivot is poorly
        chosen) and O(n log n) on average and in the best case, making it efficient
        for most practical scenarios.`;
      case AlgorithmType.MergeSort:
        return `Merge sort is a divide-and-conquer algorithm that recursively divides
        the array into smaller halves, sorts each half, and then merges the sorted halves
        back together. Its time complexity is O(n log n) in all cases, making it efficient
        for large datasets but requiring additional space for merging.`;
      case AlgorithmType.InsertionSort:
        return `Insertion sort is a simple sorting algorithm that builds the sorted portion
        of the list one element at a time by repeatedly taking the next element and inserting
        it into its correct position within the sorted section. Its time complexity is O(n²)
        in the average and worst cases and O(n) in the best case when the array is already nearly sorted.`;
      case AlgorithmType.HeapSort:
        return `Heap sort is a comparison-based sorting algorithm that builds a binary heap from
        the input data and repeatedly extracts the maximum (or minimum) element, placing it at the
        end of the sorted section of the array. Its time complexity is O(n log n) in all cases due
        to the heap's balanced tree structure, making it efficient and consistent.`;
      default:
        break;
    }

    return "Unknown";
  }
}
