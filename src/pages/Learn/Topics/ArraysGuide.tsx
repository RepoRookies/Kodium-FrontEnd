import React from 'react';

const ArraysGuide: React.FC = () => {
  return (
    <div className="bg-primary/85 text-secondary p-8 mx-auto">
      <h1 className="text-3xl text-gold font-bold mb-4">Arrays</h1>
      <p className="mb-4">
        An array is a data structure that stores a fixed-size sequence of elements of the same data type. Arrays are used to store multiple values in a single variable and are one of the most common data structures in programming.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Key Concepts</h2>
      <ul className="list-disc ml-5 mb-4">
        <li><strong>Fixed Size:</strong> Arrays have a fixed size that is defined at the time of creation.</li>
        <li><strong>Indexing:</strong> Array elements are accessed using an index, which starts at 0 in most programming languages.</li>
        <li><strong>Homogeneous Elements:</strong> All elements in an array are of the same data type.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Array Operations</h2>
      <ul className="list-disc ml-5 mb-4">
        <li><strong>Accessing an Element:</strong> You can access an element of an array using its index (e.g., <code>arr[i]</code>).</li>
        <li><strong>Updating an Element:</strong> Modify an element by assigning a new value to its index (e.g., <code>arr[i] = newValue</code>).</li>
        <li><strong>Traversing an Array:</strong> Loop through each element in the array, typically using a <code>for</code> loop or a <code>forEach</code> method.</li>
        <li><strong>Inserting an Element:</strong> Insertion at a specific position requires shifting other elements (not possible directly in some languages).</li>
        <li><strong>Deleting an Element:</strong> Deleting requires shifting elements to fill the gap left by the removed element.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Common Algorithms Involving Arrays</h2>
      <ul className="list-disc ml-5 mb-4">
        <li><strong>Searching:</strong> Finding a specific element in an array. Common algorithms include:
          <ul className="list-disc ml-5">
            <li><strong>Linear Search:</strong> Iterating through each element to find the target.</li>
            <li><strong>Binary Search:</strong> Efficiently searching a sorted array by repeatedly dividing the search interval in half.</li>
          </ul>
        </li>
        <li><strong>Sorting:</strong> Rearranging the elements of an array in a specific order, such as ascending or descending. Common sorting algorithms include:
          <ul className="list-disc ml-5">
            <li><strong>Bubble Sort</strong></li>
            <li><strong>Merge Sort</strong></li>
            <li><strong>Quick Sort</strong></li>
          </ul>
        </li>
        <li><strong>Reversing an Array:</strong> Changing the order of elements so that the last element becomes the first, the second-to-last becomes the second, etc.</li>
        <li><strong>Rotating an Array:</strong> Shifting elements to the left or right by a given number of positions.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Array Traversal</h2>
      <p className="mb-4">
        Traversing an array means accessing each element of the array, usually to perform some operation on it. Here’s a simple example of traversing an array in pseudocode:
      </p>
      <pre className="bg-primary p-4 rounded mb-4">
        <code>
{`for i = 0 to n-1:
    print(arr[i])`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Pseudocode for Array Operations</h2>

      <h3 className="text-xl font-semibold mb-2">Linear Search</h3>
      <pre className="bg-primary p-4 rounded mb-4">
        <code>
{`linearSearch(arr, target):
    for i = 0 to n-1:
        if arr[i] == target:
            return i
    return -1  # Target not found`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold mb-2">Binary Search</h3>
      <pre className="bg-primary p-4 rounded mb-4">
        <code>
{`binarySearch(arr, target):
    low = 0
    high = n - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1  # Target not found`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Time Complexity of Array Operations</h2>
      <ul className="list-disc ml-5 mb-4">
        <li><strong>Access:</strong> O(1) – Direct access using index.</li>
        <li><strong>Search:</strong>
          <ul className="list-disc ml-5">
            <li>O(n) for linear search.</li>
            <li>O(log n) for binary search (in a sorted array).</li>
          </ul>
        </li>
        <li><strong>Insertion/Deletion:</strong> O(n) – Since elements may need to be shifted.</li>
        <li><strong>Sorting:</strong> O(n log n) for efficient sorting algorithms like Merge Sort or Quick Sort.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Applications of Arrays</h2>
      <ul className="list-disc ml-5 mb-4">
        <li><strong>Storing Data:</strong> Arrays are used to store a collection of data, such as a list of numbers, characters, or strings.</li>
        <li><strong>Mathematical Computations:</strong> Arrays are used in matrix operations, such as addition, subtraction, multiplication, etc.</li>
        <li><strong>Searching and Sorting:</strong> Arrays are the basis for many searching and sorting algorithms.</li>
        <li><strong>Dynamic Programming:</strong> Arrays are used to store intermediate results to avoid redundant calculations.</li>
        <li><strong>Graph Algorithms:</strong> Arrays are often used to represent graphs, adjacency matrices, etc.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Advantages of Arrays</h2>
      <ul className="list-disc ml-5 mb-4">
        <li><strong>Random Access:</strong> You can access any element in constant time using its index.</li>
        <li><strong>Ease of Use:</strong> Arrays are easy to use and manipulate.</li>
        <li><strong>Cache Friendly:</strong> Since elements are stored in contiguous memory locations, arrays provide good cache locality.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Disadvantages of Arrays</h2>
      <ul className="list-disc ml-5 mb-4">
        <li><strong>Fixed Size:</strong> Arrays have a fixed size, so once declared, you cannot change their size dynamically (unless using dynamic arrays).</li>
        <li><strong>Cost of Insertion/Deletion:</strong> Inserting or deleting an element in an array requires shifting elements, which can be inefficient.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
      <p className="mb-4">
        Arrays are a fundamental data structure used in almost every programming language. Understanding how to manipulate arrays, search through them, and optimize their usage is key to solving a wide range of computational problems.
      </p>
    </div>
  );
};

export default ArraysGuide;
