import React from 'react';

const MergeSortGuide: React.FC = () => {
  return (
    <div className="p-6 text-secondary shadow-md">
      <h1 className="text-3xl text-gold font-bold mb-4">Merge Sort</h1>
      <p className="mb-4">
        Merge Sort is a highly efficient sorting algorithm that follows the divide-and-conquer
        principle. It divides the unsorted list into two approximately equal halves, sorts each
        half, and then merges the two sorted halves back together.
      </p>

      <h2 className="text-2xl font-semibold mb-2">How Merge Sort Works</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Divide: Split the array into two halves.</li>
        <li>Conquer: Recursively sort both halves.</li>
        <li>Combine: Merge the two sorted halves into a single sorted array.</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-2">Algorithm Steps</h2>
      <p className="mb-4">The algorithm can be described using the following steps:</p>
      <ol className="list-decimal list-inside mb-4">
        <li>If the array has one or zero elements, it is already sorted. Return the array.</li>
        <li>Split the array into two halves.</li>
        <li>Call the merge sort function recursively on both halves.</li>
        <li>Merge the two sorted halves together.</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-2">Time Complexity</h2>
      <p className="mb-4">
        The time complexity of Merge Sort is O(n log n), where n is the number of elements in the
        array. This is because the algorithm splits the array in half (log n) and then merges the
        elements (n).
      </p>

      <h2 className="text-2xl font-semibold mb-2">Space Complexity</h2>
      <p className="mb-4">
        The space complexity of Merge Sort is O(n) due to the temporary arrays used for merging.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Example</h2>
      <p className="mb-4">
        Consider the array [38, 27, 43, 3, 9, 82, 10]. After applying Merge Sort, the steps would
        look like this:
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li>Divide into [38, 27, 43] and [3, 9, 82, 10]</li>
        <li>Further divide into [38] and [27, 43]</li>
        <li>Sort [27, 43] to [27, 38, 43]</li>
        <li>Merge to get [3, 9, 10, 27, 38, 43, 82]</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-2">Applications</h2>
      <p className="mb-4">Merge Sort is used in various applications, such as:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Sorting linked lists</li>
        <li>External sorting (when data doesn't fit into memory)</li>
        <li>Parallel processing of sorting tasks</li>
      </ul>
    </div>
  );
};

export default MergeSortGuide;
