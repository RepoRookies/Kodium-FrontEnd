import React from 'react';

const BinarySearchGuide: React.FC = () => {
  return (
    <div className="text-secondary p-6 mx-auto">
      <h1 className="text-3xl text-gold font-bold mb-4">Binary Search</h1>
      <p className="mb-4">
        Binary Search is an efficient algorithm to search for an element in a{' '}
        <strong>sorted</strong> array or list. It follows a divide-and-conquer approach to
        systematically reduce the search space by half after each iteration.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Key Concepts</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>
          <strong>Sorted Array:</strong> Binary search works only on arrays that are sorted in
          increasing or decreasing order.
        </li>
        <li>
          <strong>Time Complexity:</strong> The time complexity of binary search is{' '}
          <strong>O(log n)</strong>, where <code>n</code> is the number of elements in the array.
        </li>
        <li>
          <strong>Space Complexity:</strong> The space complexity is <strong>O(1)</strong> for
          iterative binary search and <strong>O(log n)</strong> for recursive binary search due to
          the recursion stack.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Algorithm (Iterative Approach)</h2>
      <ol className="list-decimal ml-5 mb-4">
        <li>
          Initialize two pointers:
          <ul className="ml-5">
            <li>
              <code>left</code> points to the start of the array (index 0).
            </li>
            <li>
              <code>right</code> points to the end of the array (index <code>n-1</code>).
            </li>
          </ul>
        </li>
        <li>
          While <code>left &lt;= right</code>:
          <ul className="ml-5">
            <li>
              Find the middle element <code>mid = left + (right - left) // 2</code>.
            </li>
            <li>If the target is equal to the middle element, return the index of the middle.</li>
            <li>
              If the target is less than the middle element, update <code>right = mid - 1</code> to
              search in the left half.
            </li>
            <li>
              If the target is greater than the middle element, update <code>left = mid + 1</code>{' '}
              to search in the right half.
            </li>
          </ul>
        </li>
        <li>
          If the target is not found, return <code>-1</code>.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mb-2">Pseudocode</h2>
      <pre className="bg-primary p-4 rounded mb-4">
        <code>
          {`binarySearch(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = left + (right - left) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] > target:
            right = mid - 1
        else:
            left = mid + 1
    
    return -1`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Example</h2>
      <p className="mb-4">Consider the following sorted array:</p>
      <pre className="bg-primary p-4 rounded mb-4">
        <code>
          {`arr = [1, 3, 5, 7, 9, 11, 13]
target = 7`}
        </code>
      </pre>
      <h3 className="font-semibold mb-2">Steps:</h3>
      <ol className="list-decimal ml-5 mb-4">
        <li>
          <strong>Initial Pointers:</strong>
          <ul className="ml-5">
            <li>
              <code>left = 0</code>, <code>right = 6</code>
            </li>
            <li>
              Middle index: <code>mid = 3</code>, middle value: <code>arr[3] = 7</code>
            </li>
          </ul>
        </li>
        <li>
          Since <code>arr[mid] == target</code>, we return the index <code>3</code>.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mb-2">Time Complexity</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>
          <strong>Best Case:</strong> O(1) when the middle element is the target in the first
          iteration.
        </li>
        <li>
          <strong>Average Case:</strong> O(log n), where the search space is halved with each step.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Recursive Approach</h2>
      <p className="mb-4">The binary search algorithm can also be implemented recursively.</p>

      <h3 className="font-semibold mb-2">Recursive Pseudocode</h3>
      <pre className="bg-primary p-4 rounded mb-4">
        <code>
          {`recursiveBinarySearch(arr, target, left, right):
    if left > right:
        return -1

    mid = left + (right - left) // 2
    
    if arr[mid] == target:
        return mid
    elif arr[mid] > target:
        return recursiveBinarySearch(arr, target, left, mid - 1)
    else:
        return recursiveBinarySearch(arr, target, mid + 1, right)`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Edge Cases</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>
          <strong>Empty Array:</strong> If the array is empty, the function should return{' '}
          <code>-1</code>.
        </li>
        <li>
          <strong>Target Not in Array:</strong> If the target is not present, the function should
          return <code>-1</code>.
        </li>
        <li>
          <strong>Single Element Array:</strong> If the array has only one element, the algorithm
          should handle it appropriately.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Visual Representation</h2>
      <p className="mb-4">
        Consider an array: <code>[1, 2, 3, 4, 5, 6, 7]</code>, target is <code>5</code>.
      </p>
      <h3 className="font-semibold mb-2">Steps:</h3>
      <pre className="bg-primary p-4 rounded mb-4">
        <code>
          {`Step 1: [1, 2, 3, 4, 5, 6, 7] (target is 5)
       Check middle: 4 (index 3)
       Target is greater, search right half

Step 2: [5, 6, 7] (target is 5)
       Check middle: 6 (index 5)
       Target is smaller, search left half

Step 3: [5] (target is 5)
       Check middle: 5 (index 4)
       Target found at index 4`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Advantages of Binary Search</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>
          <strong>Efficiency:</strong> It has a logarithmic time complexity, making it highly
          efficient for large datasets.
        </li>
        <li>
          <strong>Low Space Usage:</strong> The iterative version uses constant space.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Disadvantages</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>
          <strong>Sorted Array Requirement:</strong> Binary search only works on sorted arrays,
          which may require preprocessing.
        </li>
        <li>
          <strong>Overhead:</strong> For small arrays, linear search may be more efficient due to
          lower overhead.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Applications</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>
          <strong>Searching in Large Databases:</strong> Binary search is used in situations where
          large amounts of data need to be searched efficiently.
        </li>
        <li>
          <strong>Solving Algorithmic Problems:</strong> Many problems such as finding the square
          root, finding the first/last occurrence, or guessing a number can be solved using
          variations of binary search.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
      <p className="mb-4">
        Binary Search is a fundamental algorithm that is widely used in computer science.
        Understanding its principles and applications can significantly enhance your problem-solving
        skills and efficiency in coding interviews.
      </p>
    </div>
  );
};

export default BinarySearchGuide;
