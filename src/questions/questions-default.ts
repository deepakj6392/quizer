export const QUESTIONS_DATA = [
    {
        id: 1,
        question: "What is the correct way to declare a variable in JavaScript?",
        options: ["var myVar;", "variable myVar;", "v myVar;", "declare myVar;"],
        correctAnswer: "var myVar;",
        topic: "JavaScript"
    },
    {
        id: 2,
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correctAnswer: "<a>",
        topic: "HTML"
    },
    {
        id: 3,
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        correctAnswer: "Cascading Style Sheets",
        topic: "CSS"
    },
    {
        id: 4,
        question: "Which React hook is used to manage state in functional components?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correctAnswer: "useState",
        topic: "React"
    },
    {
        id: 5,
        question: "What is the purpose of Node.js?",
        options: ["To style web pages", "To run JavaScript on the server", "To create databases", "To design user interfaces"],
        correctAnswer: "To run JavaScript on the server",
        topic: "Node.js"
    },
    {
        id: 6,
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["string", "boolean", "integer", "undefined"],
        correctAnswer: "integer",
        topic: "JavaScript"
    },
    {
        id: 7,
        question: "What does the '===' operator do in JavaScript?",
        options: ["Assignment", "Comparison with type coercion", "Strict equality comparison", "Logical AND"],
        correctAnswer: "Strict equality comparison",
        topic: "JavaScript"
    },
    {
        id: 8,
        question: "Which HTML element is used to define the structure of an HTML document?",
        options: ["<body>", "<head>", "<html>", "<div>"],
        correctAnswer: "<html>",
        topic: "HTML"
    },
    {
        id: 9,
        question: "What CSS property is used to change the text color of an element?",
        options: ["font-color", "text-color", "color", "foreground-color"],
        correctAnswer: "color",
        topic: "CSS"
    },
    {
        id: 10,
        question: "In React, what is the purpose of the 'key' prop?",
        options: ["To style components", "To uniquely identify elements in a list", "To handle events", "To manage state"],
        correctAnswer: "To uniquely identify elements in a list",
        topic: "React"
    },
    {
        id: 11,
        question: "Which of the following statements about JavaScript 'event loop' is correct?",
        options: [
            "Microtasks run before rendering and before macrotasks queued earlier",
            "Macrotasks always run before microtasks",
            "Microtasks are processed only when the call stack is empty and no rendering is pending",
            "Microtasks are scheduled on a separate thread"
        ],
        correctAnswer: "Microtasks run before rendering and before macrotasks queued earlier",
        topic: "JavaScript"
    },
    {
        id: 12,
        question: "Given `const a = {}; Object.freeze(a); a.x = 1;` what is true?",
        options: [
            "`a.x` becomes 1 because object properties can be added even when frozen",
            "A runtime error is thrown in strict mode when trying to add `x`",
            "`Object.freeze` only prevents deletion of properties",
            "`Object.freeze` makes nested objects immutable recursively"
        ],
        correctAnswer: "A runtime error is thrown in strict mode when trying to add `x`",
        topic: "JavaScript"
    },
    {
        id: 13,
        question: "Which is the best description of JavaScript WeakMap characteristics?",
        options: [
            "Keys are strings and are strongly referenced",
            "Keys are objects and are held weakly allowing garbage collection",
            "Values are held weakly and may be garbage collected",
            "WeakMap preserves insertion order"
        ],
        correctAnswer: "Keys are objects and are held weakly allowing garbage collection",
        topic: "JavaScript"
    },
    {
        id: 14,
        question: "What is the practical difference between `==` and `===` in JavaScript?",
        options: [
            "`==` compares both type and value; `===` only compares value",
            "`==` performs type coercion before comparison; `===` does not",
            "`===` performs type coercion; `==` is strict",
            "They are identical in behavior"
        ],
        correctAnswer: "`==` performs type coercion before comparison; `===` does not",
        topic: "JavaScript"
    },
    {
        id: 15,
        question: "Which of these patterns prevents memory leaks from DOM references in long-lived JS single-page apps?",
        options: [
            "Storing DOM elements on global variables",
            "Removing event listeners and nulling references when elements are removed",
            "Keeping references inside closures indefinitely",
            "Using `setInterval` without clearing it"
        ],
        correctAnswer: "Removing event listeners and nulling references when elements are removed",
        topic: "JavaScript"
    },
    {
        id: 16,
        question: "Consider `async function f(){ return 1 }`. What does `f()` return?",
        options: [
            "1",
            "A Promise resolved with 1",
            "undefined",
            "A generator"
        ],
        correctAnswer: "A Promise resolved with 1",
        topic: "JavaScript"
    },
    {
        id: 17,
        question: "Why is `for (var i=0; i<3; i++) setTimeout(()=>console.log(i),0)` logging `3,3,3`?",
        options: [
            "Because arrow functions don't capture variables",
            "Because `setTimeout` delays binding of `i` until after loop, `var` is function-scoped",
            "Because `console.log` queues outputs in batch",
            "Because the loop runs on a different thread"
        ],
        correctAnswer: "Because `setTimeout` delays binding of `i` until after loop, `var` is function-scoped",
        topic: "JavaScript"
    },
    {
        id: 18,
        question: "What will `Object.create(null)` produce?",
        options: [
            "An object that inherits from Object.prototype",
            "An object with no prototype (no inherited properties)",
            "A frozen object",
            "A Proxy object"
        ],
        correctAnswer: "An object with no prototype (no inherited properties)",
        topic: "JavaScript"
    },
    {
        id: 19,
        question: "Which of these correctly describes JavaScript generators?",
        options: [
            "They are functions that can yield multiple times and return a lazy iterator",
            "They run asynchronously by default",
            "They are equivalent to async functions",
            "They create new execution threads"
        ],
        correctAnswer: "They are functions that can yield multiple times and return a lazy iterator",
        topic: "JavaScript"
    },
    {
        id: 20,
        question: "Given `const obj = {a:1}; const {a: b} = obj;` what is `b`?",
        options: [
            "A reference to `obj.a` such that updating `b` updates `obj.a`",
            "A new variable `b` with value `1`",
            "An alias to `a` property name (string)",
            "Undefined because destructuring failed"
        ],
        correctAnswer: "A new variable `b` with value `1`",
        topic: "JavaScript"
    },
    {
        id: 21,
        question: "Which technique provides fast lookups for a cache keyed by complex objects without preventing GC?",
        options: [
            "Using Map with object keys",
            "Using WeakMap with object keys",
            "Using Array with serialized keys",
            "Using cookie storage"
        ],
        correctAnswer: "Using WeakMap with object keys",
        topic: "JavaScript"
    },
    {
        id: 22,
        question: "What does `Function.prototype.bind` do?",
        options: [
            "Creates a new function with preset `this` and optionally initial arguments",
            "Immediately calls the function with new `this`",
            "Mutates the original function's `this` permanently",
            "Converts a function into an arrow function"
        ],
        correctAnswer: "Creates a new function with preset `this` and optionally initial arguments",
        topic: "JavaScript"
    },
    {
        id: 23,
        question: "In JS, what is a 'temporal dead zone' for `let`/`const`?",
        options: [
            "The period after the variable is used and before it is declared",
            "The interval between block start and variable declaration where accessing it throws ReferenceError",
            "A memory leak caused by closures",
            "A deprecated feature"
        ],
        correctAnswer: "The interval between block start and variable declaration where accessing it throws ReferenceError",
        topic: "JavaScript"
    },
    {
        id: 24,
        question: "Which is correct about `Promise.all([p1,p2])`?",
        options: [
            "Resolves when first promise resolves",
            "Resolves when all promises resolve; rejects if any reject",
            "Never rejects",
            "Returns an iterator"
        ],
        correctAnswer: "Resolves when all promises resolve; rejects if any reject",
        topic: "JavaScript"
    },
    {
        id: 25,
        question: "What's the output of `typeof Symbol('x')`?",
        options: [
            "'symbol'",
            "'object'",
            "'string'",
            "'unique'"
        ],
        correctAnswer: "'symbol'",
        topic: "JavaScript"
    }
]