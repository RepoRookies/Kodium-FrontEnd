import React from 'react';

const LinkedListGuide: React.FC = () => {
  return (
    <div className="p-6 bg-primary/85 text-secondary shadow-md">
      <h1 className="text-3xl font-bold mb-4">Linked List</h1>
      <p className="mb-4">
        A linked list is a linear data structure where elements, called nodes, are stored in a sequence. 
        Each node contains data and a reference (or link) to the next node in the sequence, allowing for efficient 
        insertion and deletion of elements.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Types of Linked Lists</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Singly Linked List:</strong> Each node points to the next node in the sequence.</li>
        <li><strong>Doubly Linked List:</strong> Each node contains two references: one to the next node and one to the previous node.</li>
        <li><strong>Circular Linked List:</strong> The last node points back to the first node, forming a circular structure.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Structure of a Node</h2>
      <p className="mb-4">
        Each node in a linked list typically consists of two components:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Data:</strong> The value or information stored in the node.</li>
        <li><strong>Next:</strong> A pointer/reference to the next node in the sequence.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Basic Operations</h2>
      <p className="mb-4">
        Linked lists support various operations, including:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Insertion:</strong> Adding a new node to the list (at the beginning, end, or any position).</li>
        <li><strong>Deletion:</strong> Removing a node from the list (by value or position).</li>
        <li><strong>Traversal:</strong> Accessing each node in the list to perform operations.</li>
        <li><strong>Searching:</strong> Finding a node by value.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Advantages</h2>
      <p className="mb-4">
        Linked lists offer several advantages over arrays, including:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Dynamic size: The size of a linked list can grow and shrink as needed, unlike arrays.</li>
        <li>Efficient insertions/deletions: Inserting or deleting a node doesn't require shifting other elements.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Disadvantages</h2>
      <p className="mb-4">
        However, linked lists also have some disadvantages:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Increased memory usage: Each node requires additional memory for a pointer.</li>
        <li>Sequential access: Accessing elements requires traversing the list from the head, making it less efficient than arrays for random access.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Use Cases</h2>
      <p className="mb-4">
        Linked lists are commonly used in applications such as:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Implementing stacks and queues.</li>
        <li>Dynamic memory allocation.</li>
        <li>Manipulating polynomial expressions.</li>
      </ul>
    </div>
  );
};

export default LinkedListGuide;
