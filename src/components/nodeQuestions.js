export default [
    {
      id: 'q1',
      text: 'What is the purpose of the `cluster` module in Node.js?',
      answers: [
        'To enable the creation of child processes that can share server ports.',
        'To group modules based on dependencies.',
        'To scale applications across multiple servers.',
        'To manage async I/O calls in a pool.',
      ],
    },
    {
      id: 'q2',
      text: 'What will the following code output?\n\n```js\nconsole.log(typeof null);\n```',
      answers: [
        '"object"',
        '"null"',
        '"undefined"',
        '"boolean"',
      ],
    },
    {
      id: 'q3',
      text: 'Which statement best describes the Event Loop in Node.js?',
      answers: [
        'It handles asynchronous callbacks in a single-threaded environment.',
        'It manages server routes in the express framework.',
        'It loops over synchronous functions until memory is free.',
        'It runs in a separate thread for better performance.',
      ],
    },
    {
      id: 'q4',
      text: 'How does Node.js handle file system operations asynchronously?',
      answers: [
        'Using an internal thread pool provided by libuv.',
        'By offloading tasks to the browser’s event loop.',
        'Using Web Workers.',
        'By using promises natively without a thread pool.',
      ],
    },
    {
      id: 'q5',
      text: 'What is the role of the `process.nextTick()` function?',
      answers: [
        'To defer the execution of a callback until the next iteration of the Event Loop, before I/O events.',
        'To delay a callback until all promises have been resolved.',
        'To queue the callback for execution after a timeout.',
        'To trigger a garbage collection cycle.',
      ],
    },
    {
      id: 'q6',
      text: 'Which of these is true about Node.js streams?',
      answers: [
        'They are instances of EventEmitter and allow efficient data handling.',
        'They only support reading, not writing.',
        'They automatically buffer all data before processing.',
        'They block the Event Loop during execution.',
      ],
    },
    {
      id: 'q7',
      text: 'Why is it important to handle uncaught exceptions in Node.js?',
      answers: [
        'Because unhandled exceptions can crash the application.',
        'Because exceptions can overwrite environment variables.',
        'Because they can expose memory leaks to the network.',
        'Because they prevent async/await from working correctly.',
      ],
    },
    {
      id: 'q8',
      text: 'What will be printed?\n\n```js\nconsole.log(1);\nsetTimeout(() => console.log(2), 0);\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);\n```',
      answers: [
        '1, 4, 3, 2',
        '1, 3, 2, 4',
        '1, 2, 3, 4',
        '1, 3, 4, 2',
      ],
    },
    {
      id: 'q9',
      text: 'What is the purpose of middleware in Express.js?',
      answers: [
        'To execute code before the request reaches the route handler.',
        'To connect to databases only.',
        'To create new server instances.',
        'To return static files directly to the browser.',
      ],
    },
    {
      id: 'q10',
      text: 'Which of the following is NOT true about Node.js?',
      answers: [
        'Node.js is multi-threaded by default.',
        'Node.js uses non-blocking I/O operations.',
        'Node.js is built on the V8 JavaScript engine.',
        'Node.js is suitable for building scalable network applications.',
      ],
    }
  ];
  