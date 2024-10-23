import React from 'react';

const RecursionGuide: React.FC = () => {
  return (
    <div className="text-secondary p-6 mx-auto">
      <h1 className="text-3xl text-gold font-bold mb-4">Recursion</h1>
      <p className="mb-4">
        Recursion is a programming technique where a function calls itself in order to solve smaller
        instances of a problem. It divides a problem into subproblems, solving each one recursively
        until a base case is reached.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Key Concepts</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>
          <strong>Base Case:</strong> The simplest case in recursion that stops further recursive
          calls.
        </li>
        <li>
          <strong>Recursive Case:</strong> The part of the function where it calls itself to solve a
          smaller instance of the problem.
        </li>
        <li>
          <strong>Call Stack:</strong> Recursion uses a call stack to manage the multiple recursive
          calls, which can lead to stack overflow if not handled properly.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Types of Recursion</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>
          <strong>Direct Recursion:</strong> When a function calls itself directly.
        </li>
        <li>
          <strong>Indirect Recursion:</strong> When a function calls another function, which
          eventually leads to the original function being called again.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Algorithm (Factorial Example)</h2>
      <ol className="list-decimal ml-5 mb-4">
        <li>
          Identify the base case. For factorial, the base case is when <code>n = 0</code>, and the
          result is 1.
        </li>
        <li>
          Identify the recursive case. The factorial of <code>n</code> is{' '}
          <code>n * factorial(n - 1)</code>.
        </li>
        <li>
          Recursively call the function with <code>n - 1</code> until the base case is reached.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mb-2">Pseudocode</h2>
      <pre className="bg-primary p-4 rounded mb-4">
        <code>
          {`factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Example</h2>
      <p className="mb-4">
        Consider the following example to calculate <code>factorial(5)</code>:
      </p>
      <pre className="bg-primary p-4 rounded mb-4">
        <code>
          {`factorial(5):
    5 * factorial(4):
        4 * factorial(3):
            3 * factorial(2):
                2 * factorial(1):
                    1 * factorial(0) => 1`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Time Complexity</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>
          <strong>Time Complexity:</strong> O(n) for factorial, as there are n recursive calls to
          compute the result.
        </li>
        <li>
          <strong>Space Complexity:</strong> O(n) due to the recursion stack.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Recursive vs. Iterative Approach</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>
          <strong>Recursive:</strong> Easier to write and understand, especially for problems like
          factorial or Fibonacci. However, it can lead to stack overflow if the depth is too large.
        </li>
        <li>
          <strong>Iterative:</strong> Generally more efficient in terms of space as it doesn’t use
          the call stack, but may be more complex to write.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Common Problems Solved Using Recursion</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>
          <strong>Factorial Calculation:</strong> Computing factorial of a number using recursion.
        </li>
        <li>
          <strong>Fibonacci Sequence:</strong> Generating Fibonacci numbers using recursion.
        </li>
        <li>
          <strong>Tree Traversals:</strong> Recursion is commonly used to traverse binary trees
          (in-order, pre-order, post-order).
        </li>
        <li>
          <strong>Backtracking Algorithms:</strong> Many problems such as solving mazes, N-Queens,
          and Sudoku are solved using recursive backtracking.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Edge Cases</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>
          <strong>Base Case Absence:</strong> If the base case is not defined, the recursion will
          continue indefinitely, causing a stack overflow.
        </li>
        <li>
          <strong>Excessive Recursion Depth:</strong> Some problems might have too many recursive
          calls, leading to stack overflow if not optimized using techniques like tail recursion.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Advantages of Recursion</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>
          <strong>Natural Fit for Certain Problems:</strong> Problems like tree traversals and
          divide-and-conquer algorithms are naturally recursive.
        </li>
        <li>
          <strong>Code Clarity:</strong> Recursive solutions are often more elegant and easier to
          understand.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Disadvantages</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>
          <strong>Performance Overhead:</strong> Recursion can have significant performance overhead
          due to repeated function calls and stack usage.
        </li>
        <li>
          <strong>Risk of Stack Overflow:</strong> Deep recursion can result in stack overflow if
          the recursion depth exceeds the call stack limit.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
      <p className="mb-4">
        Recursion is a powerful tool in a programmer's arsenal. It provides a simple and elegant way
        to solve complex problems, but care must be taken to ensure that the base case is defined
        correctly and that the recursion depth is manageable.
      </p>
    </div>
  );
};

export default RecursionGuide;
