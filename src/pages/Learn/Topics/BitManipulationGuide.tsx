import React from 'react';

const BitManipulationGuide: React.FC = () => {
  return (
    <div className="text-secondary p-6 mx-auto">
      <h1 className="text-3xl text-gold font-bold mb-4">Bit Manipulation</h1>
      <p className="mb-4">
        Bit manipulation is a technique used in programming to perform operations at the bit level.
        It involves direct operations on the binary representation of numbers, allowing efficient
        computation for certain tasks.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Key Concepts</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>
          <strong>Bitwise Operators:</strong> These operators allow manipulation of individual bits
          within a number.
        </li>
        <li>
          <strong>Binary Representation:</strong> Numbers in memory are stored in binary (0s and
          1s).
        </li>
        <li>
          <strong>Shift Operations:</strong> Shifting the bits of a number to the left or right.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Bitwise Operators</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>
          <strong>AND (&):</strong> Compares each bit of two numbers. If both bits are 1, the result
          is 1; otherwise, it's 0.
        </li>
        <li>
          <strong>OR (|):</strong> Compares each bit of two numbers. If either bit is 1, the result
          is 1; otherwise, it's 0.
        </li>
        <li>
          <strong>XOR (^):</strong> Compares each bit of two numbers. If one bit is 1 and the other
          is 0, the result is 1; otherwise, it's 0.
        </li>
        <li>
          <strong>NOT (~):</strong> Inverts each bit of a number (0 becomes 1 and 1 becomes 0).
        </li>
        <li>
          <strong>Left Shift ({'<<'}):</strong> Shifts the bits of a number to the left by a
          specified number of positions. Each left shift doubles the number.
        </li>
        <li>
          <strong>Right Shift ({'>>'}):</strong> Shifts the bits of a number to the right by a
          specified number of positions. Each right shift halves the number (integer division).
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Common Bit Manipulation Tricks</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>
          <strong>Check if a number is even or odd:</strong> Use <code>n & 1</code>. If the result
          is 1, the number is odd; if 0, it's even.
        </li>
        <li>
          <strong>Swapping two numbers:</strong> Using XOR to swap two numbers without using a
          temporary variable:
        </li>
        <pre className="bg-primary p-4 rounded mb-4">
          <code>
            {`a = a ^ b
b = a ^ b
a = a ^ b`}
          </code>
        </pre>
        <li>
          <strong>Clearing the lowest set bit:</strong> Use <code>n & (n - 1)</code> to clear the
          lowest set bit of a number.
        </li>
        <li>
          <strong>Checking if a number is a power of 2:</strong> Use <code>n & (n - 1)</code>. If
          the result is 0, the number is a power of 2.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Algorithm (Counting Set Bits)</h2>
      <p className="mb-4">
        The following algorithm counts the number of set bits (1s) in a number:
      </p>
      <ol className="list-decimal ml-5 mb-4">
        <li>Initialize a counter to 0.</li>
        <li>
          While the number is not 0, perform <code>n = n & (n - 1)</code> to clear the lowest set
          bit and increment the counter.
        </li>
        <li>Return the counter once all bits are cleared.</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-2">Pseudocode</h2>
      <pre className="bg-primary p-4 rounded mb-4">
        <code>
          {`countSetBits(n):
    count = 0
    while n > 0:
        n = n & (n - 1)
        count = count + 1
    return count`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Time Complexity</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>
          <strong>Time Complexity:</strong> O(log n) for most bit manipulation operations, as the
          number of bits to process depends on the number of bits in the input.
        </li>
        <li>
          <strong>Space Complexity:</strong> O(1) since only a few variables are used regardless of
          input size.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Example: Flipping Bits</h2>
      <p className="mb-4">
        To flip the bits of a number, use the bitwise NOT (~) operator. For example, if{' '}
        <code>n = 5</code> (binary <code>0101</code>), the result of <code>~n</code> will be{' '}
        <code>1010</code> (in two's complement form).
      </p>

      <h2 className="text-2xl font-semibold mb-2">Applications of Bit Manipulation</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>
          <strong>Performance Optimization:</strong> Bit manipulation can make certain operations,
          like multiplication or division by powers of 2, faster.
        </li>
        <li>
          <strong>Compression Algorithms:</strong> Many data compression algorithms use bit
          manipulation to process data efficiently.
        </li>
        <li>
          <strong>Cryptography:</strong> Bitwise operations are heavily used in cryptographic
          algorithms for encryption and decryption.
        </li>
        <li>
          <strong>Graphics Programming:</strong> Pixels in images are represented as binary values,
          so bit manipulation is often used to process images.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Common Problems Solved Using Bit Manipulation</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>
          <strong>Finding the single number in an array:</strong> Given an array where every element
          appears twice except for one, find that single element using XOR.
        </li>
        <li>
          <strong>Counting set bits:</strong> Count the number of 1s in the binary representation of
          a number.
        </li>
        <li>
          <strong>Finding the missing number:</strong> In an array of integers from 1 to n, find the
          missing number using XOR.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Advantages of Bit Manipulation</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>
          <strong>Efficiency:</strong> Bit manipulation is often faster than other approaches
          because it operates directly on the binary representation.
        </li>
        <li>
          <strong>Memory Usage:</strong> Bit-level operations can save memory in cases where storage
          of individual bits is necessary.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Disadvantages</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>
          <strong>Complexity:</strong> Bit manipulation can be tricky to understand and debug,
          especially for larger or more complicated operations.
        </li>
        <li>
          <strong>Readability:</strong> Code involving bitwise operations is often harder to read
          and maintain.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
      <p className="mb-4">
        Bit manipulation is a powerful technique that can optimize the performance of your code and
        reduce memory usage in certain situations. By understanding how to use bitwise operators and
        common tricks, you can solve a wide range of problems efficiently.
      </p>
    </div>
  );
};

export default BitManipulationGuide;
