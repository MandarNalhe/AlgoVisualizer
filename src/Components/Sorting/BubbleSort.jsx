import React, { useEffect, useState } from "react";
import NavbarPages from "../Templates/NavbarPages";
import "../../index.css";
import gsap from "gsap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { vsDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const BubbleSort = () => {
  const incresingbubbleSrotVisualization = async () => {
    setisSorting(true);
    const bars = document.querySelectorAll(".bars");
    const sarr = [...array];
    const newSteps = [];

    const updateSteps = (step) => {
      newSteps.push(step);
      setSteps([...newSteps]);
      const stepList = document.querySelector(".step-list");
      if (stepList) {
        stepList.scrollTop = stepList.scrollHeight;
      }
    };

    for (let i = 0; i < sarr.length - 1; i++) {
      updateSteps(`${i + 1}th itreation`);
      for (let j = 0; j < sarr.length - i - 1; j++) {
        const bar1 = bars[j];
        const bar2 = bars[j + 1];

        bar1.style.backgroundColor = "red";
        bar2.style.backgroundColor = "red";
        updateSteps(`Comparing: ${sarr[j]} and ${sarr[j + 1]}`);
        await delay(500);

        if (sarr[j] > sarr[j + 1]) {
          updateSteps(`Swapping: ${sarr[j]} and ${sarr[j + 1]}`);
          bar1.style.backgroundColor = "green";
          bar2.style.backgroundColor = "green";
          gsap.to(bar1, { y: -20, duration: 0.2 });
          gsap.to(bar2, { y: 20, duration: 0.2 });
          await delay(500);
          [sarr[j], sarr[j + 1]] = [sarr[j + 1], sarr[j]];
          setarray([...sarr]);
          gsap.to(bar1, { y: 0, duration: 0.2 });
          gsap.to(bar2, { y: 0, duration: 0.2 });
        }
        bar1.style.backgroundColor = "#38BDF8";
        bar2.style.backgroundColor = "#38BDF8";
      }
    }
    setisSorting(false);
  };

  const decresingbubbleSrotVisualization = async () => {
    setisSorting(true);
    const bars = document.querySelectorAll(".bars");
    const sarr = [...array];
    const newSteps = [];

    const updateSteps = (step) => {
      newSteps.push(step);
      setSteps([...newSteps]);
      const stepList = document.querySelector(".step-list");
      if (stepList) {
        stepList.scrollTop = stepList.scrollHeight;
      }
    };

    for (let i = 0; i < sarr.length - 1; i++) {
      updateSteps(`${i + 1}th itreation`);
      for (let j = 0; j < sarr.length - i - 1; j++) {
        const bar1 = bars[j];
        const bar2 = bars[j + 1];

        bar1.style.backgroundColor = "red";
        bar2.style.backgroundColor = "red";
        updateSteps(`Comparing: ${sarr[j]} and ${sarr[j + 1]}`);
        await delay(10000);

        if (sarr[j] < sarr[j + 1]) {
          updateSteps(`Swapping: ${sarr[j]} and ${sarr[j + 1]}`);
          bar1.style.backgroundColor = "green";
          bar2.style.backgroundColor = "green";
          gsap.to(bar1, { y: -20, duration: 0.2 });
          gsap.to(bar2, { y: 20, duration: 0.2 });
          await delay(10000);
          [sarr[j], sarr[j + 1]] = [sarr[j + 1], sarr[j]];
          setarray([...sarr]);
          gsap.to(bar1, { y: 0, duration: 0.2 });
          gsap.to(bar2, { y: 0, duration: 0.2 });
        }
        bar1.style.backgroundColor = "#38BDF8";
        bar2.style.backgroundColor = "#38BDF8";
      }
    }
    setisSorting(false);
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const dataSorting = [
    {
      name: "Bubble Sort",
      active: true,
      incFunction: incresingbubbleSrotVisualization,
      decFunction: decresingbubbleSrotVisualization,
      overview:
        "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity are quite high.",
      olist: [
        "We sort the array using multiple passes. After the first pass, the maximum element goes to end (its correct position). Same way, after second pass, the second largest element goes to second last position and so on.",
        "In every pass, we process only those elements that have already not moved to correct position. After k passes, the largest k elements must have been moved to the last k positions.",
        "In a pass, we consider remaining elements and compare all adjacent and swap if larger element is before a smaller element. If we keep doing this, we get the largest (among the remaining elements) at its correct position.",
      ],
      algo: `BubbleSort(arr): 
  n = length of arr 
for i from 0 to n-1:
for j from 0 to n-i-2:
if arr[j] > arr[j+1]:{" "}
Swap arr[j] and arr[j+1] `,
      list: [
        "Start with an unsorted list of elements.",
        "Compare each pair of adjacent elements in the list.",
        "If the first element is greater than the second, swap them so the larger element moves towards the end.",
        "Repeat this process for the entire list. After the first pass, the largest element will be in its correct position at the end of the list.",
        "Ignore the last sorted element in subsequent passes since it is already in the correct place.",
        "Continue this process until no swaps are needed, indicating that the list is fully sorted.",
      ],
      cppCode: `#include <iostream>
using namespace std;

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    bubbleSort(arr, n);
    cout << "Sorted array: ";
    printArray(arr, n);
    return 0;
}`,
      pyCode: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

def print_array(arr):
    for i in arr:
        print(i, end=" ")
    print()

# Example usage
arr = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(arr)
print("Sorted array:")
print_array(arr)
`,
      javaCode: `
      public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    public static void printArray(int[] arr) {
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        bubbleSort(arr);
        System.out.println("Sorted array:");
        printArray(arr);
    }
}`,
    },
    // OUICK SORT
    {
      name: "Quick Sort",
      active: false,
      incFunction: incresingbubbleSrotVisualization,
      decFunction: decresingbubbleSrotVisualization,
      overview:
        "Quick Sort is a highly efficient sorting algorithm and is based on the divide-and-conquer paradigm. It works by selecting a pivot element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.",
      olist: [
        "The process is recursively applied to each sub-array until the entire array is sorted.",
        "Quick Sort has an average and best-case time complexity of O(nlog⁡n)O(n log n)O(nlogn), though in the worst case (when the pivot is poorly chosen) it can degrade to O(n2)O(n^2)O(n2).",
        "Quick Sort is often faster than other algorithms like Merge Sort and Insertion Sort due to its smaller constant factors, despite having the same average time complexity.",
      ],
      algo: `QuickSort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        QuickSort(arr, low, pi - 1)
        QuickSort(arr, pi + 1, high)

partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j from low to high - 1:
        if arr[j] < pivot:
            i = i + 1
            swap arr[i] and arr[j]
    swap arr[i + 1] and arr[high]
    return i + 1
`,
      list: [
        "Pick a pivot element from the array (usually the last element)",
        "Partition the array into two sub-arrays: one with elements less than the pivot and the other with elements greater than the pivot.",
        "Recursively apply the same process to the two sub-arrays.",
        "Continue the process until the entire array is sorted.",
        "After each pass, the pivot element is placed in its correct position.",
      ],
      cppCode: `#include <iostream>
using namespace std;

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return (i + 1);
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    quickSort(arr, 0, n - 1);
    cout << "Sorted array: ";
    printArray(arr, n);
    return 0;
}
`,
      pyCode: `def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

def print_array(arr):
    for i in arr:
        print(i, end=" ")
    print()
`,
      javaCode: `public class QuickSort {
    public static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }

    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    public static void printArray(int[] arr) {
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        quickSort(arr, 0, arr.length - 1);
        System.out.println("Sorted array:");
        printArray(arr);
    }
}
`,
    },
    // merge sort
    {
      name: "Merge Sort",
      active: false,
      incFunction: incresingbubbleSrotVisualization,
      decFunction: decresingbubbleSrotVisualization,
      overview:
        "Merge Sort is a divide-and-conquer sorting algorithm that works by recursively dividing the array into two halves, sorting each half, and then merging the sorted halves back together. It is an efficient algorithm with a time complexity of O(nlog⁡n)O(n log n)O(nlogn) in the best, average, and worst cases.",
      olist: [
        "The key idea is to divide the array into smaller subarrays, sort them, and then merge them back in sorted order.",
        "Merge Sort is stable, meaning that it maintains the relative order of equal elements.",
        "It is not an in-place sorting algorithm, meaning it requires additional space for merging the subarrays.",
      ],
      algo: `MergeSort(arr):
    if length of arr > 1:
        mid = length of arr / 2
        left_half = arr[0...mid-1]
        right_half = arr[mid...n]
        
        MergeSort(left_half)
        MergeSort(right_half)
        
        Merge(arr, left_half, right_half)

Merge(arr, left_half, right_half):
    i = j = k = 0
    while i < length of left_half and j < length of right_half:
        if left_half[i] < right_half[j]:
            arr[k] = left_half[i]
            i = i + 1
        else:
            arr[k] = right_half[j]
            j = j + 1
        k = k + 1
        
    while i < length of left_half:
        arr[k] = left_half[i]
        i = i + 1
        k = k + 1
        
    while j < length of right_half:
        arr[k] = right_half[j]
        j = j + 1
        k = k + 1
`,
      list: [
        "Divide:The array is recursively divided into two halves until each subarray contains only one element.",
        "Conquer:Each subarray is sorted recursively. Since an array with one element is trivially sorted, this step essentially organizes smaller subarrays.",
        "Merge:After the subarrays are sorted, they are merged back together in sorted order. This is done by comparing the elements of the subarrays one by one and placing the smaller element in the result array",
        "Result:The final array is completely sorted after all merges are done.",
      ],
      cppCode: `#include <iostream>
using namespace std;

void merge(int arr[], int left, int right) {
    if (left >= right) return;
    
    int mid = left + (right - left) / 2;
    
    merge(arr, left, mid);        // Sorting the left half
    merge(arr, mid + 1, right);   // Sorting the right half
    
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    int left_arr[n1], right_arr[n2];
    
    for (int i = 0; i < n1; i++) {
        left_arr[i] = arr[left + i];
    }
    for (int i = 0; i < n2; i++) {
        right_arr[i] = arr[mid + 1 + i];
    }
    
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (left_arr[i] <= right_arr[j]) {
            arr[k] = left_arr[i];
            i++;
        } else {
            arr[k] = right_arr[j];
            j++;
        }
        k++;
    }
    
    while (i < n1) {
        arr[k] = left_arr[i];
        i++;
        k++;
    }
    
    while (j < n2) {
        arr[k] = right_arr[j];
        j++;
        k++;
    }
}

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    merge(arr, 0, n - 1);
    cout << "Sorted array: ";
    printArray(arr, n);
    return 0;
}
`,
      pyCode: `def merge(arr, left, right):
    if left >= right:
        return
    
    mid = (left + right) // 2
    
    merge(arr, left, mid)         # Sorting the left half
    merge(arr, mid + 1, right)    # Sorting the right half
    
    n1 = mid - left + 1
    n2 = right - mid
    
    left_arr = arr[left:left + n1]
    right_arr = arr[mid + 1:mid + 1 + n2]
    
    i = j = k = left
    while i < n1 and j < n2:
        if left_arr[i] <= right_arr[j]:
            arr[k] = left_arr[i]
            i += 1
        else:
            arr[k] = right_arr[j]
            j += 1
        k += 1
    
    while i < n1:
        arr[k] = left_arr[i]
        i += 1
        k += 1
    
    while j < n2:
        arr[k] = right_arr[j]
        j += 1
        k += 1

def print_array(arr):
    for i in arr:
        print(i, end=" ")
    print()
`,
      javaCode: `public class MergeSort {
    public static void merge(int[] arr, int left, int right) {
        if (left >= right) return;
        
        int mid = left + (right - left) / 2;
        
        merge(arr, left, mid);         // Sorting the left half
        merge(arr, mid + 1, right);    // Sorting the right half
        
        int n1 = mid - left + 1;
        int n2 = right - mid;
        
        int[] left_arr = new int[n1];
        int[] right_arr = new int[n2];
        
        for (int i = 0; i < n1; i++) {
            left_arr[i] = arr[left + i];
        }
        for (int i = 0; i < n2; i++) {
            right_arr[i] = arr[mid + 1 + i];
        }
        
        int i = 0, j = 0, k = left;
        while (i < n1 && j < n2) {
            if (left_arr[i] <= right_arr[j]) {
                arr[k] = left_arr[i];
                i++;
            } else {
                arr[k] = right_arr[j];
                j++;
            }
            k++;
        }
        
        while (i < n1) {
            arr[k] = left_arr[i];
            i++;
            k++;
        }
        
        while (j < n2) {
            arr[k] = right_arr[j];
            j++;
            k++;
        }
    }

    public static void printArray(int[] arr) {
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        merge(arr, 0, arr.length - 1);
        System.out.println("Sorted array:");
        printArray(arr);
    }
}
`,
    },
    // heap sort
    {
      name: "Heap Sort",
      active: false,
      incFunction: incresingbubbleSrotVisualization,
      decFunction: decresingbubbleSrotVisualization,
      overview:
        "Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure to efficiently sort elements. It works by first building a max heap (or min heap) from the input data, then repeatedly extracting the root element (the maximum or minimum element) and rebuilding the heap with the remaining elements.",
      olist: [
        "The heap structure ensures that the maximum (or minimum) element is always at the root, so we can efficiently extract it and maintain the heap property with each extraction.",
        "Heap Sort has a time complexity of O(nlog⁡n)O(n log n)O(nlogn) in all cases (best, average, and worst). However, it is not stable, meaning equal elements might not retain their relative order.",
      ],
      algo: `HeapSort(arr):
    n = length of arr
    BuildMaxHeap(arr)
    for i from n-1 down to 1:
        Swap arr[0] and arr[i]
        Heapify(arr, 0, i)

BuildMaxHeap(arr):
    for i from n/2 - 1 down to 0:
        Heapify(arr, i, n)

Heapify(arr, i, n):
    left = 2 * i + 1
    right = 2 * i + 2
    largest = i
    if left < n and arr[left] > arr[largest]:
        largest = left
    if right < n and arr[right] > arr[largest]:
        largest = right
    if largest != i:
        Swap arr[i] and arr[largest]
        Heapify(arr, largest, n)
`,
      list: [
        "Build the Max Heap: Start by rearranging the elements into a max heap. The largest element will be at the root of the heap.",
        "Extract the Maximum Element: Swap the root element (the maximum element) with the last element in the heap. Reduce the size of the heap by 1 and heapify the root to restore the heap property.",
        "Repeat the Process: Repeat the process until the entire array is sorted. Each iteration reduces the heap size by 1, placing the largest remaining element in its correct position.",
        "Result: The elements are sorted in ascending order by the end of the process.",
      ],
      cppCode: `#include <iostream>
using namespace std;

void heapify(int arr[], int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}

void buildMaxHeap(int arr[], int n) {
    for (int i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
}

void heapSort(int arr[], int n) {
    buildMaxHeap(arr, n);

    for (int i = n - 1; i >= 1; i--) {
        swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    heapSort(arr, n);
    cout << "Sorted array: ";
    printArray(arr, n);
    return 0;
}
`,
      pyCode: `def heapify(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and arr[left] > arr[largest]:
        largest = left
    if right < n and arr[right] > arr[largest]:
        largest = right

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def build_max_heap(arr, n):
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

def heap_sort(arr):
    n = len(arr)
    build_max_heap(arr, n)

    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, i, 0)

def print_array(arr):
    for i in arr:
        print(i, end=" ")
    print()
`,
      javaCode: `public class HeapSort {
    public static void heapify(int[] arr, int n, int i) {
        int largest = i;
        int left = 2 * i + 1;
        int right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }
        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest != i) {
            int temp = arr[i];
            arr[i] = arr[largest];
            arr[largest] = temp;
            heapify(arr, n, largest);
        }
    }

    public static void buildMaxHeap(int[] arr, int n) {
        for (int i = n / 2 - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }
    }

    public static void heapSort(int[] arr) {
        int n = arr.length;
        buildMaxHeap(arr, n);

        for (int i = n - 1; i >= 1; i--) {
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            heapify(arr, i, 0);
        }
    }

    public static void printArray(int[] arr) {
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        heapSort(arr);
        System.out.println("Sorted array:");
        printArray(arr);
    }
}
`,
    },
    // insertion sort
    {
      name: "Insertion Sort",
      active: false,
      incFunction: incresingbubbleSrotVisualization,
      decFunction: decresingbubbleSrotVisualization,
      overview:
        "Insertion Sort is a simple and intuitive sorting algorithm that builds the final sorted array one element at a time. It takes elements from the unsorted part of the array and inserts them into their correct position in the sorted part.",
      olist: [
        "The algorithm starts with the second element (considering the first element as sorted) and compares it with the elements in the sorted part to find its correct position.",
        "This process continues until all elements are in their correct positions.",
        "Insertion Sort is particularly efficient for small datasets or nearly sorted data, as its time complexity is O(n^2)in the worst and average cases butO(n) in the best case when the array is already sorted.",
      ],
      algo: `InsertionSort(arr):
    n = length of arr
    for i from 1 to n-1:
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j = j - 1
        arr[j + 1] = key
`,
      list: [
        "Start with the second element (index 1) and consider the first element as sorted.",
        "Compare the current element with the elements in the sorted part.",
        "Shift all elements larger than the current element to the right to make space for it.",
        "Insert the current element in its correct position.",
        "Move to the next element and repeat the process until all elements are sorted.",
        "After each pass, the sorted part of the array grows by one element.",
      ],
      cppCode: `#include <iostream>
using namespace std;

void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    insertionSort(arr, n);
    cout << "Sorted array: ";
    printArray(arr, n);
    return 0;
}

`,
      pyCode: `def insertion_sort(arr):
    n = len(arr)
    for i in range(1, n):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

def print_array(arr):
    for i in arr:
        print(i, end=" ")
    print()

# Example usage
arr = [64, 34, 25, 12, 22, 11, 90]
insertion_sort(arr)
print("Sorted array:")
print_array(arr)
`,
      javaCode: `public class InsertionSort {
    public static void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }

    public static void printArray(int[] arr) {
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        insertionSort(arr);
        System.out.println("Sorted array:");
        printArray(arr);
    }
}

`,
    },
    {
      name: "Selection Sort",
      active: false,
      incFunction: incresingbubbleSrotVisualization,
      decFunction: decresingbubbleSrotVisualization,
      overview:
        "Selection Sort is a simple sorting algorithm that divides the array into two parts: the sorted part and the unsorted part. It repeatedly selects the smallest element from the unsorted part and moves it to the sorted part.",
      olist: [
        "The algorithm starts with the first element and finds the smallest element in the entire array, swapping it with the first element.",
        "In the next iteration, it selects the second element and finds the smallest element from the remaining unsorted portion, swapping it with the second element.",
        "This process continues, reducing the size of the unsorted portion by one in each iteration, until the entire array is sorted.",
        "Selection Sort is not efficient for large datasets as it has a time complexity of O(n²) in both average and worst cases.",
      ],
      algo: `n = length of arr
for i from 0 to n-1:
Set minIndex = i
for j from i+1 to n:
if arr[j] < arr[minIndex]:
Set minIndex = j
Swap arr[i] and arr[minIndex]
`,
      list: [
        "Start with an unsorted list of elements.",
        "Find the smallest element in the unsorted portion of the list.",
        "Swap the smallest element with the first element of the unsorted portion.",
        "Move to the next element and repeat the process, finding the smallest element in the remaining unsorted portion",
        "Continue until all elements are sorted.",
        "After each pass, the smallest element from the unsorted portion is moved to its correct position in the sorted portion.",
      ],
      cppCode: `#include <iostream>
using namespace std;

void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr[minIndex], arr[i]);
    }
}

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    selectionSort(arr, n);
    cout << "Sorted array: ";
    printArray(arr, n);
    return 0;
}
`,
      pyCode: `
def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        min_index = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]

def print_array(arr):
    for i in arr:
        print(i, end=" ")
    print()
    `,
      javaCode: `public class SelectionSort {
    public static void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }

    public static void printArray(int[] arr) {
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        selectionSort(arr);
        System.out.println("Sorted array:");
        printArray(arr);
    }
}

`,
    },
  ];

  const [sData, setsData] = useState(dataSorting);

  const [array, setarray] = useState([3, 10, 60, 30, 5]);
  const [SortingAlgo, setSortingAlgo] = useState("Bubble Sort");
  const [maxval, setmaxval] = useState(Math.max(...array));
  const [isSorting, setisSorting] = useState(false);
  const [inc, setinc] = useState(true);
  const [Steps, setSteps] = useState([]);
  const [overview, setoverview] = useState(
    "    Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in thewrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity are quite high."
  );

  const [olist, setolist] = useState([
    "We sort the array using multiple passes. After the first pass, the maximum element goes to end (its correct position). Same way, after second pass, the second largest element goes to second last position and so on.",
    "In every pass, we process only those elements that have already not moved to correct position. After k passes, the largest k elements must have been moved to the last k positions.",
    "In a pass, we consider remaining elements and compare all adjacent and swap if larger element is before a smaller element. If we keep doing this, we get the largest (among the remaining elements) at its correct position.",
  ]);

  const [list, setlist] = useState([
    "Start with an unsorted list of elements.",
    "Compare each pair of adjacent elements in the list.",
    "If the first element is greater than the second, swap them so the larger element moves towards the end.",
    "Repeat this process for the entire list. After the first pass, the largest element will be in its correct position at the end of the list.",
    "Ignore the last sorted element in subsequent passes since it is already in the correct place.",
    "Continue this process until no swaps are needed, indicating that the list is fully sorted.",
  ]);

  const [algo, setalgo] = useState(`BubbleSort(arr): 
  n = length of arr 
for i from 0 to n-1:
for j from 0 to n-i-2:
if arr[j] > arr[j+1]:{" "}
Swap arr[j] and arr[j+1] `);

  const [cppCode, setcppCode] = useState(sData[1].cppCode);
  const [pyCode, setpyCode] = useState(sData[1].pyCode);
  const [javaCode, setjavaCode] = useState(sData[1].javaCode);

  const getSortingName = (index) => {
    const updatedData = sData.map((item, i) => ({
      ...item,
      active: i === index,
    }));

    setsData(updatedData);
    setSortingAlgo(sData[index].name);
    setoverview(sData[index].overview);
    setolist(sData[index].olist);
    setlist(sData[index].list);
    setalgo(sData[index].algo);
    setcppCode(sData[index].cppCode);
    setjavaCode(sData[index].javaCode);
    setpyCode(sData[index].pyCode);
  };

  const createRandomArray = () => {
    if (isSorting) return;
    let arr = [];
    for (let i = 0; i < 8; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }
    setarray(arr);
    setmaxval(Math.max(...array));
    setSteps([]);
  };

  // useEffect(() => {}, [array, maxval, sData]);

  return (
    <main className="w-full flex flex-col bg-zinc-900 text-zinc-100">
      <NavbarPages data={sData} getSortingName={getSortingName} />

      {/* 1 st secttion  */}
      <section className="w-hull h-[120] flex flex-col pt-5 border-b-[1px] border-green-300 ">
        {/* heading div  */}
        <div className="w-full h-[10vh] border-[1px] flex items-center px-10 border-green-300">
          <h1 className="heading text-4xl tracking-wider">
            Sorting : {SortingAlgo}
          </h1>
        </div>

        {/* learn div container */}

        <div className="flex h-[130vh] w-full ">
          {/* left cont  */}
          <div className="flex h-full w-[25%] justify-center border-green-300 border-r-[1px] ">
            <div className="flex w-[80%] h-[20%]  gap-4 items-center justify-center ">
              {/* circle  */}
              <div className="rounded-full w-[22px] h-[16px]   border-green-300 border-[1px]"></div>
              <h1 className="heading text-4xl">Learn</h1>
            </div>
          </div>

          {/* right cont  */}

          <div className="flex flex-col h-full w-[75%]  ">
            {/* overview cont  */}
            <div className="flex flex-col h-[55%] w-full  border-green-300 border-b-[1px] py-7 px-14">
              <h2 className="text-2xl font-bold mt-5">Overview</h2>
              {/* / */}
              <p className="mt-5 ml-3 text-base">{overview}</p>
              {/* / */}
              <ul className="mt-3 ml-8 list-disc w-[90%] flex flex-col gap-4 text-base ">
                {olist.map((e, i) => {
                  return <li key={i}>{e}</li>;
                })}
              </ul>
              {/* / */}
            </div>
            {/* // */}

            {/* algorithm cont  */}
            <div className="flex w-full h-[45%]  ">
              {/* algorithm  */}
              <div className="flex w-[35%] h-full  border-green-300 border-r-[1px] flex-col p-6 pt-10 ">
                <h1 className="text-2xl font-bold">Algorithm</h1>

                <SyntaxHighlighter
                  language="cpp"
                  style={vscDarkPlus}
                  customStyle={{
                    backgroundColor: "black",
                    height: "100%",
                    width: "100%",
                    padding: "3rem",
                    fontSize: "16px",
                    lineHeight: "1.2",
                  }}
                >
                  {algo}
                </SyntaxHighlighter>
              </div>
              {/* / */}
              {/* steps  */}
              <div className="flex w-[65%] h-full flex-col p-5">
                <h2 className="text-2xl font-bold">Steps</h2>
                <ul className="mt-5 w-[96%] list-disc px-5 text-[1em]">
                  {list.map((step, i) => {
                    console.log(step);
                    return <li key={i}>{step}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* /// */}
        </div>
      </section>
      {/* //// */}

      {/* 2section  */}

      <section className="flex w-full h-screen border-green-300 border-b-[1px]">
        {/* left cont  */}
        <div className="flex h-full w-[25%] justify-center border-green-300 border-r-[1px] ">
          <div className="flex w-[80%] h-[20%]  gap-4 items-center justify-center ">
            {/* circle  */}
            <div className="rounded-full w-[22px] h-[16px]   border-green-300 border-[1px]"></div>
            <h1 className="heading text-4xl">Visualize</h1>
          </div>
        </div>

        {/* //*/}
        {/* right cont  */}
        <div className="flex flex-col w-[75%] h-full  ">
          {/* visualizer array cont  */}
          <div className="flex h-[50%] items-end justify-center  ">
            <div className="w-[94%] h-[94%]  border-green-300 border-[1px] flex relative  justify-center gap-4">
              {/* srting heading  */}
              <h1 className="absolute heading top-3 left-5 text-xl">
                Bubble sort
              </h1>

              {/* //  */}

              {/* sorting status  */}

              <p className="absolute top-12 left-5 capitalize">
                sorting order : {inc ? "increasing " : "decreasing"}
              </p>

              {/* start button  */}
              <button
                onClick={
                  inc
                    ? () => incresingbubbleSrotVisualization()
                    : () => decresingbubbleSrotVisualization()
                }
                className="absolute px-10 pt-3 py-2 rounded-full heading border-green-300 border-[1px] font-bold tracking-widest text-xl bottom-6 right-[10%]"
              >
                Start
              </button>
              {/* // */}

              <div className="flex h-[80%] items-end  gap-5">
                {array.map((e, i) => {
                  return (
                    <div
                      className={`bars bg-sky-400 flex justify-center items-end w-[2.2em]  `}
                      style={{ height: `${(e / maxval) * 70}%` }}
                      key={i}
                    >
                      {e}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* // */}

          {/* options and steps cont  */}

          <div className="flex h-[50%] w-full ">
            {/* left options cont  */}
            <div className="h-full w-[50%] border-green-300 border-r-[1px] flex flex-col justify-center gap-10">
              {/* 1 */}
              <div className="flex w-full flex-col items-center gap-6">
                <h3 className="text-xl font-bold">Create New Array</h3>
                <div className="w-full flex justify-center gap-6">
                  <button className="px-5 py-2  border-green-300 border-[1px]">
                    Coustom Array
                  </button>
                  {/* random btn */}
                  <button
                    onClick={() => createRandomArray()}
                    className="px-5 py-2  border-green-300 border-[1px]"
                  >
                    Random Array
                  </button>
                </div>
              </div>

              {/* 2nd  */}

              <div className="flex w-full flex-col items-center gap-6">
                <h3 className="text-xl font-bold">Sorting Order</h3>
                <div className="w-full flex justify-center gap-6">
                  <button
                    onClick={() => {
                      setSteps([]);
                      setinc(true);
                    }}
                    className="px-5 py-2  border-green-300 border-[1px]"
                  >
                    Increseing Order
                  </button>
                  <button
                    onClick={() => {
                      setSteps([]);
                      setinc(false);
                    }}
                    className="px-5 py-2  border-green-300 border-[1px]"
                  >
                    Decresing Order
                  </button>
                </div>
              </div>
            </div>

            {/* // */}
            {/* right steps cont  */}
            <div className="h-full w-[50%] flex flex-col items-center justify-center gap-5 ">
              <h3 className="w-[85%] text-xl font-bold">Working Steps</h3>
              <div className="steps step-list flex flex-col w-[80%] h-[70%] border-green-300 border-[1px] px-3 overflow-auto">
                {Steps.map((step, index) => (
                  <div className="p-2" key={index}>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* //// */}

      {/* 3section  */}

      <section className="flex w-full  border-green-300 border-b-[1px]">
        {/* left cont  */}
        <div className="flex  w-[25%] justify-center border-green-300 border-r-[1px] ">
          <div className="flex w-[80%] h-[20%]  gap-4 items-center justify-center ">
            {/* circle  */}
            <div className="rounded-full w-[22px] h-[16px]   border-green-300 border-[1px]"></div>
            <h1 className="heading text-4xl">Code</h1>
          </div>
        </div>

        {/* //*/}
        {/* right cont  */}
        <div className="flex flex-col w-[75%] h-full px-10 pb-5 gap-5 ">
          <h1 className="mt-14 text-3xl font-semibold">
            Implementation of Bubble sort
          </h1>

          {/* / */}

          {/* cpp  */}

          <div className=" p-5 flex flex-col gap-5 ">
            {/* language heading  */}
            <li className="text-2xl">C++</li>
            <pre className=" w-[80%] flex items-center ">
              <SyntaxHighlighter
                language="cpp"
                style={vscDarkPlus}
                customStyle={{
                  backgroundColor: "black",
                  height: "100%",
                  width: "80%",
                  padding: "3rem",
                  fontSize: "16px",
                  lineHeight: "1.2",
                }}
              >
                {cppCode}
              </SyntaxHighlighter>{" "}
            </pre>
          </div>

          {/* // */}

          {/* python */}

          <div className=" p-5 flex flex-col gap-5 ">
            {/* language heading  */}
            <li className="text-2xl">python</li>
            <pre className=" w-[80%] flex items-center ">
              <SyntaxHighlighter
                language="python"
                style={vscDarkPlus}
                customStyle={{
                  backgroundColor: "black",
                  height: "100%",
                  width: "80%",
                  padding: "3rem",
                  fontSize: "16px",
                  lineHeight: "1.2",
                }}
              >
                {pyCode}
              </SyntaxHighlighter>{" "}
            </pre>
          </div>
          {/* //  */}

          {/* java  */}

          <div className=" p-5 flex flex-col gap-5  ">
            {/* language heading  */}
            <li className="text-2xl">Java</li>
            <pre className=" w-[80%] flex items-center ">
              <SyntaxHighlighter
                language="python"
                style={vscDarkPlus}
                customStyle={{
                  backgroundColor: "black",
                  height: "100%",
                  width: "80%",
                  padding: "3rem",
                  fontSize: "16px",
                  lineHeight: "1.2",
                }}
              >
                {javaCode}
              </SyntaxHighlighter>{" "}
            </pre>
          </div>
          {/* // */}
        </div>
      </section>
    </main>
  );
};

export default BubbleSort;
