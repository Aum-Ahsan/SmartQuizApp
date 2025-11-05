export default [
    {
      id: 'q1',
      text: 'Which of the following is **not** one of the four main pillars of OOP?',
      answers: [
        'Compilation',
        'Encapsulation',
        'Inheritance',
        'Polymorphism',
      ],
    },
    {
      id: 'q2',
      text: 'What is **encapsulation** in OOP?',
      answers: [
        'Binding data and methods that operate on that data into a single unit.',
        'The ability of different classes to be treated as instances of the same class.',
        'Inheriting properties from multiple base classes.',
        'Wrapping one function inside another.',
      ],
    },
    {
      id: 'q3',
      text: 'What is the **main advantage** of inheritance?',
      answers: [
        'Code reusability and hierarchical classification.',
        'Hiding implementation details from users.',
        'Improving compilation speed.',
        'Creating multiple constructors in a class.',
      ],
    },
    {
      id: 'q4',
      text: 'Which concept allows the same function name to behave differently based on input or class?',
      answers: [
        'Polymorphism',
        'Inheritance',
        'Encapsulation',
        'Abstraction',
      ],
    },
    {
      id: 'q5',
      text: 'What is the purpose of **abstraction** in OOP?',
      answers: [
        'To hide internal implementation and show only the relevant details.',
        'To allow subclassing and method overriding.',
        'To implement data hiding using private variables.',
        'To convert procedural code to object-oriented code.',
      ],
    },
    {
      id: 'q6',
      text: 'Which of the following best defines **method overriding**?',
      answers: [
        'Redefining a base class method in a derived class with the same signature.',
        'Creating multiple methods with the same name but different parameters.',
        'Writing a method that overrides memory allocation.',
        'Changing the return type of a function in a subclass.',
      ],
    },
    {
      id: 'q7',
      text: 'What is **dynamic dispatch** in object-oriented programming?',
      answers: [
        'Calling the correct overridden method at runtime based on object type.',
        'Compiling methods based on their return types.',
        'Switching between static methods.',
        'Loading classes dynamically during compilation.',
      ],
    },
    {
      id: 'q8',
      text: 'Which of the following is **TRUE** about constructors in OOP?',
      answers: [
        'Constructors are special methods used to initialize objects.',
        'Constructors are only used in functional programming.',
        'Constructors can’t be overloaded.',
        'Constructors must be called explicitly every time.',
      ],
    },
    {
      id: 'q9',
      text: 'What is the output of this code?\n\n```cpp\nclass A {\n  public:\n    void show() { std::cout << "A"; }\n};\n\nclass B : public A {\n  public:\n    void show() { std::cout << "B"; }\n};\n\nA* obj = new B();\nobj->show();\n```',
      answers: [
        'A',
        'B',
        'AB',
        'Compilation Error',
      ],
    },
    {
      id: 'q10',
      text: 'Which statement about **access modifiers** is correct?',
      answers: [
        '`private` members are only accessible within the class.',
        '`protected` members are accessible from any part of the program.',
        '`public` members are not inherited.',
        '`private` members can be accessed by derived classes.',
      ],
    }
  ];
  