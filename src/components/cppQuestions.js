export default [
    {
      id: 'q1',
      text: 'Which of the following best defines a reference in C++?',
      answers: [
        'An alias for another variable.',
        'A pointer that automatically dereferences.',
        'A temporary variable created during runtime.',
        'A constant memory address.',
      ],
    },
    {
      id: 'q2',
      text: 'What is the output of the following code?\n\n```cpp\nint a = 5;\nint b = a++;\nstd::cout << b;\n```',
      answers: [
        '5',
        '6',
        'Compilation error',
        'Undefined behavior',
      ],
    },
    {
      id: 'q3',
      text: 'What is the main purpose of a virtual function in C++?',
      answers: [
        'To allow method overriding and dynamic dispatch at runtime.',
        'To define static methods in a class.',
        'To initialize objects during construction.',
        'To call parent class constructors.',
      ],
    },
    {
      id: 'q4',
      text: 'Which of these keywords is used to prevent a class from being inherited?',
      answers: [
        'final (C++11)',
        'static',
        'sealed',
        'explicit',
      ],
    },
    {
      id: 'q5',
      text: 'What is the significance of the `explicit` keyword in constructors?',
      answers: [
        'It prevents implicit conversions when a constructor is called with a single argument.',
        'It makes the constructor inline.',
        'It allows constructor overloading.',
        'It ensures the constructor is always virtual.',
      ],
    },
    {
      id: 'q6',
      text: 'What does the `delete` keyword do in C++?',
      answers: [
        'It deallocates memory allocated with `new`.',
        'It destroys an object’s class definition.',
        'It removes a function from memory.',
        'It clears all variables inside a class.',
      ],
    },
    {
      id: 'q7',
      text: 'Which of the following best describes a pure virtual function?',
      answers: [
        'A function declared with `= 0` and must be overridden in derived classes.',
        'A function that can’t be overridden.',
        'A virtual function with no return type.',
        'A virtual function with default parameters.',
      ],
    },
    {
      id: 'q8',
      text: 'What will be printed?\n\n```cpp\nint arr[] = {10, 20, 30};\nstd::cout << *(arr + 1);\n```',
      answers: [
        '20',
        '10',
        '30',
        'Garbage value',
      ],
    },
    {
      id: 'q9',
      text: 'What is RAII in C++?',
      answers: [
        'A design pattern where resource allocation is tied to object lifetime.',
        'A garbage collection strategy.',
        'A rule to prevent multiple inheritance.',
        'A security mechanism in modern compilers.',
      ],
    },
    {
      id: 'q10',
      text: 'What is the output of this code?\n\n```cpp\nint x = 5;\nint& ref = x;\nref = 10;\nstd::cout << x;\n```',
      answers: [
        '10',
        '5',
        '0',
        'Compilation error',
      ],
    }
  ];  