export default [
    {
      id: 'q1',
      text: 'What will be the output of the following code?\n\n```python\nx = [1, 2, 3]\nprint(x * 2)\n```',
      answers: [
        '[1, 2, 3, 1, 2, 3]',
        '[2, 4, 6]',
        'Error',
        '[1, 2, 3, 2]',
      ],
    },
    {
      id: 'q2',
      text: 'Which of the following best describes Python decorators?',
      answers: [
        'Functions that modify the behavior of other functions or methods.',
        'Functions that create a copy of another function.',
        'Functions used for memoization.',
        'Special syntax for creating closures.',
      ],
    },
    {
      id: 'q3',
      text: 'What does the `@staticmethod` decorator do in Python?',
      answers: [
        'Defines a method that doesn’t access or modify class or instance state.',
        'Defines a method that only modifies class-level attributes.',
        'Defines a method that is only available in static memory.',
        'Marks a method to be lazily loaded.',
      ],
    },
    {
      id: 'q4',
      text: 'What is a generator in Python?',
      answers: [
        'A function that yields values one at a time using the `yield` keyword.',
        'A function that returns a list comprehension.',
        'A built-in object for random number generation.',
        'A module used for concurrency.',
      ],
    },
    {
      id: 'q5',
      text: 'What will be the output of this code?\n\n```python\ndef func(a, L=[]):\n    L.append(a)\n    return L\nprint(func(1))\nprint(func(2))\n```',
      answers: [
        '[1] and then [1, 2]',
        '[1] and then [2]',
        '[1, 2] and then [1, 2, 3]',
        'Raises a TypeError',
      ],
    },
    {
      id: 'q6',
      text: 'Which of these best describes Python’s Global Interpreter Lock (GIL)?',
      answers: [
        'A mutex that allows only one thread to execute Python bytecode at a time.',
        'A lock that ensures memory safety across distributed systems.',
        'A mechanism for database locking in concurrent queries.',
        'A lock that manages multiprocessing pool execution.',
      ],
    },
    {
      id: 'q7',
      text: 'Which of the following statements about Python scopes is true?',
      answers: [
        'LEGB stands for Local, Enclosing, Global, Built-in scopes.',
        'Global variables always override local variables.',
        'Variables in enclosing functions cannot be accessed by inner functions.',
        'Built-in scope has higher priority than local scope.',
      ],
    },
    {
      id: 'q8',
      text: 'What is the purpose of `__slots__` in a Python class?',
      answers: [
        'To restrict dynamic creation of attributes and save memory.',
        'To enable polymorphism in Python classes.',
        'To automatically generate getters and setters.',
        'To store method decorators.',
      ],
    },
    {
      id: 'q9',
      text: 'What is the difference between `is` and `==` in Python?',
      answers: [
        '`is` compares identity, `==` compares values.',
        '`is` compares values, `==` compares identity.',
        'They are equivalent.',
        '`is` is only used for strings, `==` is used for numbers.',
      ],
    },
    {
      id: 'q10',
      text: 'Which of the following best describes a Python metaclass?',
      answers: [
        'A class of a class that defines how classes behave.',
        'A special instance of a decorator.',
        'An advanced data structure used in metaprogramming.',
        'A parent class of all built-in types.',
      ],
    }
  ];
  