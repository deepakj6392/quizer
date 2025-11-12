export const QUESTIONS_DATA = [
  // --------- JavaScript (1-50) ----------
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
    question: "What's the output of `typeof Symbol('x')`?",
    options: [
      "'symbol'",
      "'object'",
      "'string'",
      "'unique'"
    ],
    correctAnswer: "'symbol'",
    topic: "JavaScript"
  },
  {
    id: 16,
    question: "Which statement about `Array.prototype.sort()` is true?",
    options: [
      "It is stable in all browsers",
      "It sorts numerically by default",
      "It sorts elements in place and may be unstable in some engines",
      "It returns a new sorted array without mutating the original"
    ],
    correctAnswer: "It sorts elements in place and may be unstable in some engines",
    topic: "JavaScript"
  },
  {
    id: 17,
    question: "What does `'use strict'` enable?",
    options: [
      "Allows implicit global variable creation",
      "Disables strict equality",
      "Enables stricter parsing and error handling (e.g., prevents implicit globals)",
      "Makes JS code run faster by default"
    ],
    correctAnswer: "Enables stricter parsing and error handling (e.g., prevents implicit globals)",
    topic: "JavaScript"
  },
  {
    id: 18,
    question: "Which is a correct advantage of using Web Workers?",
    options: [
      "They share the same JS heap with main thread",
      "They allow running JS on background threads without blocking main thread",
      "They make DOM access faster from worker",
      "They provide synchronous network requests"
    ],
    correctAnswer: "They allow running JS on background threads without blocking main thread",
    topic: "JavaScript"
  },
  {
    id: 19,
    question: "How do `Map` and plain object `{}` differ for string keys?",
    options: [
      "Map maintains insertion order and allows any type as key; plain objects may have prototype keys and don't guarantee insertion order for numeric-like keys",
      "Objects are always faster and should be used for everything",
      "Map converts keys to strings always",
      "Map cannot use objects as keys"
    ],
    correctAnswer: "Map maintains insertion order and allows any type as key; plain objects may have prototype keys and don't guarantee insertion order for numeric-like keys",
    topic: "JavaScript"
  },
  {
    id: 20,
    question: "Which approach correctly debounces a function in JS?",
    options: [
      "Call the function repeatedly and ignore duplicates",
      "Use a timer: clear existing timeout and set a new one on every invocation",
      "Use `setInterval` without clearing it",
      "Use a Promise to delay execution"
    ],
    correctAnswer: "Use a timer: clear existing timeout and set a new one on every invocation",
    topic: "JavaScript"
  },
  {
    id: 21,
    question: "Why use `requestAnimationFrame` over `setTimeout` for animations?",
    options: [
      "It's synchronous and blocks rendering",
      "It aligns updates with the browser's paint cycle and is more efficient",
      "It guarantees 60fps always",
      "It runs on a separate thread"
    ],
    correctAnswer: "It aligns updates with the browser's paint cycle and is more efficient",
    topic: "JavaScript"
  },
  {
    id: 22,
    question: "Which is true about `class` syntax in ES6?",
    options: [
      "`class` introduces a new kind of function and hoists definitions",
      "`class` is syntactic sugar over prototype-based inheritance and is not hoisted",
      "`class` instances cannot have methods",
      "`class` makes objects immutable"
    ],
    correctAnswer: "`class` is syntactic sugar over prototype-based inheritance and is not hoisted",
    topic: "JavaScript"
  },
  {
    id: 23,
    question: "Given `const a = [1,2]; const b = [...a];` which is true?",
    options: [
      "`b` is a shallow copy of `a` — nested objects would still be referenced",
      "`b` is a deep clone of `a` including nested structures",
      "`a` and `b` reference the same array",
      "Spread operator serializes elements to JSON"
    ],
    correctAnswer: "`b` is a shallow copy of `a` — nested objects would still be referenced",
    topic: "JavaScript"
  },
  {
    id: 24,
    question: "Which of these yields the highest precision for decimal math in JS?",
    options: [
      "Number type is precise for all decimals",
      "Use `BigInt` for decimals",
      "Use libraries like decimal.js or BigNumber for arbitrary-precision decimals",
      "Use parseFloat with rounding"
    ],
    correctAnswer: "Use libraries like decimal.js or BigNumber for arbitrary-precision decimals",
    topic: "JavaScript"
  },
  {
    id: 25,
    question: "Which is correct when catching errors from an async function inside `Array.map`?",
    options: [
      "You can `await` inside `map` callback directly and handle errors synchronously",
      "Using `await Promise.all(array.map(async fn => { ... }))` collects errors properly",
      "`map` automatically awaits async callbacks",
      "Errors thrown inside async map callbacks don't propagate"
    ],
    correctAnswer: "Using `await Promise.all(array.map(async fn => { ... }))` collects errors properly",
    topic: "JavaScript"
  },
  {
    id: 26,
    question: "Which technique avoids blocking the main thread when processing a large array?",
    options: [
      "Process all elements in a single tight loop",
      "Use chunking with `setTimeout`/`requestIdleCallback`/WebWorker to yield between chunks",
      "Perform operations synchronously in render cycle",
      "Use `alert` to pause"
    ],
    correctAnswer: "Use chunking with `setTimeout`/`requestIdleCallback`/WebWorker to yield between chunks",
    topic: "JavaScript"
  },
  {
    id: 27,
    question: "What does `Symbol.for('x')` do compared to `Symbol('x')`?",
    options: [
      "Both create unique symbols that are never equal",
      "`Symbol.for` looks up a global symbol registry and may return same symbol across files; `Symbol` always creates a new unique symbol",
      "`Symbol.for` returns a string",
      "They are identical"
    ],
    correctAnswer: "`Symbol.for` looks up a global symbol registry and may return same symbol across files; `Symbol` always creates a new unique symbol",
    topic: "JavaScript"
  },
  {
    id: 28,
    question: "How can you make a method private in ES6 classes without using naming conventions?",
    options: [
      "Use a name starting with `_` to enforce privacy",
      "Use closures or the new private fields syntax `#field`",
      "Use `Object.seal` to hide methods",
      "You cannot create private state in ES6"
    ],
    correctAnswer: "Use closures or the new private fields syntax `#field`",
    topic: "JavaScript"
  },
  {
    id: 29,
    question: "Which is correct about tail recursion in JS engines?",
    options: [
      "All JS engines guarantee tail call optimization",
      "Tail call optimization is rarely available; do not rely on it for performance",
      "Tail recursion consumes more stack than plain recursion",
      "Tail calls are automatically converted to loops by Babel"
    ],
    correctAnswer: "Tail call optimization is rarely available; do not rely on it for performance",
    topic: "JavaScript"
  },
  {
    id: 30,
    question: "What is the significance of `Object.getOwnPropertyDescriptors(obj)`?",
    options: [
      "It returns descriptors (writable, enumerable, configurable, get/set) for all own properties — useful for creating accurate shallow clones",
      "It lists only enumerable properties",
      "It clones functions bound to the object",
      "It returns the prototype chain"
    ],
    correctAnswer: "It returns descriptors (writable, enumerable, configurable, get/set) for all own properties — useful for creating accurate shallow clones",
    topic: "JavaScript"
  },
  {
    id: 31,
    question: "Which technique helps detect accidental global variables?",
    options: [
      "Always use `var`",
      "Use `'use strict'` which throws on assignment to undeclared variables",
      "Use `console.log` for each variable",
      "Globals cannot be detected"
    ],
    correctAnswer: "Use `'use strict'` which throws on assignment to undeclared variables",
    topic: "JavaScript"
  },
  {
    id: 32,
    question: "Which of the following is NOT a characteristic of JavaScript Proxies?",
    options: [
      "They allow intercepting fundamental operations like get, set, has",
      "They can be used to validate or log property access",
      "They can change an object's prototype directly",
      "They can trap calls to functions if target is callable"
    ],
    correctAnswer: "They can change an object's prototype directly",
    topic: "JavaScript"
  },
  {
    id: 33,
    question: "What's the output of `(0.1 + 0.2) === 0.3` and why?",
    options: [
      "true because JS does decimal arithmetic precisely",
      "false because of floating-point representation error",
      "throws an error due to precision mismatch",
      "undefined"
    ],
    correctAnswer: "false because of floating-point representation error",
    topic: "JavaScript"
  },
  {
    id: 34,
    question: "Which approach best serializes functions or closures for transfer between threads/processes?",
    options: [
      "JSON.stringify can serialize closures with code intact",
      "You must serialize by sending code as string and `eval` on other side — generally unsafe; prefer structured cloning or rearchitect",
      "Functions are automatically transferred by postMessage",
      "Use `btoa` to encode functions"
    ],
    correctAnswer: "You must serialize by sending code as string and `eval` on other side — generally unsafe; prefer structured cloning or rearchitect",
    topic: "JavaScript"
  },
  {
    id: 35,
    question: "Which is the correct reason to prefer `const` over `let` where possible?",
    options: [
      "`const` makes values deeply immutable",
      "It signals intent that binding shouldn't be reassigned and helps prevent bugs from accidental reassign",
      "`const` variables are stored in faster memory",
      "`const` allows block scoping while `let` does not"
    ],
    correctAnswer: "It signals intent that binding shouldn't be reassigned and helps prevent bugs from accidental reassign",
    topic: "JavaScript"
  },
  {
    id: 36,
    question: "Which data structure gives O(1) average-time membership checks for primitive values?",
    options: [
      "Array.prototype.includes",
      "Set",
      "Object.keys",
      "for loop"
    ],
    correctAnswer: "Set",
    topic: "JavaScript"
  },
  {
    id: 37,
    question: "What will `new Promise(r => r(1)).then(x => x + 1)` return?",
    options: [
      "2",
      "A Promise that resolves to 2",
      "A rejected Promise",
      "Undefined"
    ],
    correctAnswer: "A Promise that resolves to 2",
    topic: "JavaScript"
  },
  {
    id: 38,
    question: "Which is the most accurate statement about `JSON.stringify` and `undefined`?",
    options: [
      "`undefined` is serialized as `null` in arrays and omitted in objects",
      "`undefined` serializes to the string 'undefined'",
      "`undefined` cannot appear in objects or arrays",
      "`undefined` is preserved when parsing back"
    ],
    correctAnswer: "`undefined` is serialized as `null` in arrays and omitted in objects",
    topic: "JavaScript"
  },
  {
    id: 39,
    question: "How does the module system differ between ES Modules (ESM) and CommonJS in Node/browser?",
    options: [
      "ESM supports static analysis and top-level `await`; CommonJS is dynamic and uses `require`",
      "CommonJS supports top-level `await`",
      "ESM uses `require` and CommonJS uses `import`",
      "Both are identical"
    ],
    correctAnswer: "ESM supports static analysis and top-level `await`; CommonJS is dynamic and uses `require`",
    topic: "JavaScript"
  },
  {
    id: 40,
    question: "Which technique mocks time-dependent code in tests reliably?",
    options: [
      "Using real timers and waiting",
      "Use library time mocking (like Sinon fake timers) or dependency injection for clock",
      "Call `Date.now = null`",
      "Use `setTimeout` with very large delays"
    ],
    correctAnswer: "Use library time mocking (like Sinon fake timers) or dependency injection for clock",
    topic: "JavaScript"
  },
  {
    id: 41,
    question: "Which of these best describes 'currying' in JS functional programming?",
    options: [
      "Combining functions sequentially",
      "Transforming a function of multiple args into a sequence of functions each taking one arg",
      "A memoization technique",
      "A way to create classes"
    ],
    correctAnswer: "Transforming a function of multiple args into a sequence of functions each taking one arg",
    topic: "JavaScript"
  },
  {
    id: 42,
    question: "Which property of a function determines its number of expected (declared) parameters?",
    options: [
      "length",
      "arity",
      "params",
      "prototype"
    ],
    correctAnswer: "length",
    topic: "JavaScript"
  },
  {
    id: 43,
    question: "Which is true about JS `Proxy` invariants?",
    options: [
      "Proxies can freely violate invariants like non-configurable property existence",
      "Proxy handlers must respect invariants such as non-configurable/non-writable properties, otherwise a TypeError is thrown",
      "Proxy doesn't check invariants",
      "Invariants apply only in strict mode"
    ],
    correctAnswer: "Proxy handlers must respect invariants such as non-configurable/non-writable properties, otherwise a TypeError is thrown",
    topic: "JavaScript"
  },
  {
    id: 44,
    question: "Which of the following is the appropriate use of `WeakRef`?",
    options: [
      "To guarantee an object persists in memory",
      "To hold a non-owning reference that does not prevent GC — for caches where you can tolerate missing entries",
      "To replace regular references for performance",
      "To serialize references across workers"
    ],
    correctAnswer: "To hold a non-owning reference that does not prevent GC — for caches where you can tolerate missing entries",
    topic: "JavaScript"
  },
  {
    id: 45,
    question: "What is the effect of `await` on microtask queue when used within an async function?",
    options: [
      "`await` converts the remainder of the function into a microtask after the awaited promise resolves",
      "`await` blocks the entire thread synchronously",
      "`await` schedules work as a macrotask only",
      "`await` flushes the microtask queue immediately"
    ],
    correctAnswer: "`await` converts the remainder of the function into a microtask after the awaited promise resolves",
    topic: "JavaScript"
  },
  {
    id: 46,
    question: "How would you implement memoization for a pure function in JS?",
    options: [
      "Use a Map/WeakMap keyed by argument signature and cache results",
      "Use global variables for return values",
      "Rely on Babel transform to auto-memoize",
      "Use `setTimeout` to cache values asynchronously"
    ],
    correctAnswer: "Use a Map/WeakMap keyed by argument signature and cache results",
    topic: "JavaScript"
  },
  {
    id: 47,
    question: "Which approach ensures deterministic iteration order over object keys in JS?",
    options: [
      "Use plain `{}` and rely on engine behavior",
      "Use `Map` which preserves insertion order deterministically",
      "Sort `Object.keys()` each time to preserve order",
      "Use `for...in` without sorting"
    ],
    correctAnswer: "Use `Map` which preserves insertion order deterministically",
    topic: "JavaScript"
  },
  {
    id: 48,
    question: "Which is true about `Proxy` and reflective `Reflect` API?",
    options: [
      "Reflect methods mirror default object's internal methods and help implement traps cleanly",
      "Reflect replaces Proxy entirely",
      "Reflect can only be used in strict mode",
      "Reflect automatically logs all calls"
    ],
    correctAnswer: "Reflect methods mirror default object's internal methods and help implement traps cleanly",
    topic: "JavaScript"
  },
  {
    id: 49,
    question: "What is the output of `Array.from({length:3}, (_,i)=>i)`?",
    options: [
      "[undefined, undefined, undefined]",
      "[0,1,2]",
      "[]",
      "['0','1','2']"
    ],
    correctAnswer: "[0,1,2]",
    topic: "JavaScript"
  },
  {
    id: 50,
    question: "Which approach best prevents prototype pollution vulnerabilities when merging objects?",
    options: [
      "Using `Object.assign` blindly with untrusted input",
      "Deep merge libraries that do property checks and disallow `__proto__` or `constructor` keys",
      "Using `eval` to merge objects",
      "Using `JSON.stringify` then parsing"
    ],
    correctAnswer: "Deep merge libraries that do property checks and disallow `__proto__` or `constructor` keys",
    topic: "JavaScript"
  },

  // --------- Node.js (51-100) ----------
  {
    id: 51,
    question: "Which description best explains Node.js event loop phases?",
    options: [
      "There is a single phase named 'event' that handles everything",
      "The event loop has phases (timers, pending callbacks, idle/prepare, poll, check, close) and microtasks run between operations",
      "Node uses separate OS-level threads for each callback",
      "Event loop phases only exist in browsers"
    ],
    correctAnswer: "The event loop has phases (timers, pending callbacks, idle/prepare, poll, check, close) and microtasks run between operations",
    topic: "Node.js"
  },
  {
    id: 52,
    question: "How do Worker Threads in Node.js differ from child processes?",
    options: [
      "Worker Threads run in the same event loop and share memory via SharedArrayBuffer; child processes have separate memory spaces",
      "Worker Threads always spawn a new Node process",
      "Child processes share the same memory as the parent",
      "There is no difference"
    ],
    correctAnswer: "Worker Threads run in the same event loop and share memory via SharedArrayBuffer; child processes have separate memory spaces",
    topic: "Node.js"
  },
  {
    id: 53,
    question: "What is backpressure in Node.js streams?",
    options: [
      "A bug that crashes the stream",
      "A flow-control mechanism where writable streams signal they cannot accept more data so readable streams should pause",
      "When data is lost due to network hiccups",
      "A security feature"
    ],
    correctAnswer: "A flow-control mechanism where writable streams signal they cannot accept more data so readable streams should pause",
    topic: "Node.js"
  },
  {
    id: 54,
    question: "Which statement about `process.nextTick()` vs `setImmediate()` is true in Node?",
    options: [
      "`setImmediate` always runs before `process.nextTick`",
      "`process.nextTick` queues callbacks to run before I/O, possibly starving I/O; `setImmediate` runs on the check phase after polling",
      "They behave identically",
      "`process.nextTick` runs on a separate thread"
    ],
    correctAnswer: "`process.nextTick` queues callbacks to run before I/O, possibly starving I/O; `setImmediate` runs on the check phase after polling",
    topic: "Node.js"
  },
  {
    id: 55,
    question: "Which approach most reliably prevents blocking the Node.js event loop in CPU-intensive tasks?",
    options: [
      "Perform heavy computation synchronously in the main thread",
      "Offload computation to Worker Threads, child processes, or native addons",
      "Use `setTimeout` to break computations into microtasks on the main thread",
      "Use synchronous file I/O for speed"
    ],
    correctAnswer: "Offload computation to Worker Threads, child processes, or native addons",
    topic: "Node.js"
  },
  {
    id: 56,
    question: "How does Node.js handle a high number of simultaneous TCP connections efficiently?",
    options: [
      "By spawning a new OS thread per connection",
      "By using a single-threaded event loop with non-blocking I/O and underlying OS support (epoll/kqueue)",
      "By using synchronous blocking sockets",
      "By serializing connections"
    ],
    correctAnswer: "By using a single-threaded event loop with non-blocking I/O and underlying OS support (epoll/kqueue)",
    topic: "Node.js"
  },
  {
    id: 57,
    question: "Which is the recommended way to handle uncaught exceptions in production Node apps?",
    options: [
      "Ignore them; Node recovers automatically",
      "Log the error, perform safe shutdown/restart — do not continue with corrupted state",
      "Catch them with a global try/catch in every function",
      "Swallow them silently"
    ],
    correctAnswer: "Log the error, perform safe shutdown/restart — do not continue with corrupted state",
    topic: "Node.js"
  },
  {
    id: 58,
    question: "What is the advantage of using `cluster` module?",
    options: [
      "It runs multiple Node instances to utilize multi-core CPUs while sharing a single port",
      "It automatically parallelizes synchronous CPU tasks across threads",
      "It shares memory between workers by default",
      "It is deprecated and has no use"
    ],
    correctAnswer: "It runs multiple Node instances to utilize multi-core CPUs while sharing a single port",
    topic: "Node.js"
  },
  {
    id: 59,
    question: "Which scenario demonstrates stream piping with built-in backpressure?",
    options: [
      "Readable.pipe(Writable) where `pipe` pauses/resumes readable automatically based on writable's buffer",
      "Manually reading chunks and always writing without checking drain events",
      "Using `fs.readFile` for streaming large files",
      "Using `console.log` as destination"
    ],
    correctAnswer: "Readable.pipe(Writable) where `pipe` pauses/resumes readable automatically based on writable's buffer",
    topic: "Node.js"
  },
  {
    id: 60,
    question: "What's the key benefit of Node's asynchronous non-blocking I/O model?",
    options: [
      "Lower latency by avoiding blocking operations and enabling concurrency with fewer OS threads",
      "Allowing multiple simultaneous JS threads",
      "Guaranteeing FIFO execution for all callbacks",
      "Simplifying multithreaded locking"
    ],
    correctAnswer: "Lower latency by avoiding blocking operations and enabling concurrency with fewer OS threads",
    topic: "Node.js"
  },
  {
    id: 61,
    question: "Which of these best explains Node.js module caching?",
    options: [
      "Each `require` call loads a new module instance always",
      "Modules are cached after first load; subsequent `require` returns same exported object",
      "Caching only occurs for JSON files",
      "Module caching prevents memory leaks automatically"
    ],
    correctAnswer: "Modules are cached after first load; subsequent `require` returns same exported object",
    topic: "Node.js"
  },
  {
    id: 62,
    question: "Which method gets called when a writable stream's internal buffer drains?",
    options: [
      "`error` event",
      "`drain` event — indicates it's safe to write again`",
      "`finish` event",
      "`close` event"
    ],
    correctAnswer: "`drain` event — indicates it's safe to write again`",
    topic: "Node.js"
  },
  {
    id: 63,
    question: "Which statement about `process.env` and configuration is advised?",
    options: [
      "Store secrets in code and check into VCS",
      "Use environment variables for configuration and secrets (with secure secret management in production)",
      "Use `process.env` as a typed config source without validation",
      "Never validate environment variables"
    ],
    correctAnswer: "Use environment variables for configuration and secrets (with secure secret management in production)",
    topic: "Node.js"
  },
  {
    id: 64,
    question: "Which API is used for non-blocking file read streams?",
    options: [
      "`fs.readFileSync`",
      "`fs.createReadStream`",
      "`fs.readFile` with callback — which buffers entire file into memory`",
      "`require('fs').readAll`"
    ],
    correctAnswer: "`fs.createReadStream`",
    topic: "Node.js"
  },
  {
    id: 65,
    question: "What is the behavior of Node's `cluster` with respect to sticky sessions?",
    options: [
      "Clusters automatically handle sticky sessions out of the box",
      "You need a load balancer or custom logic to ensure same client goes to same worker (sticky sessions)",
      "Sticky sessions are not needed for HTTP",
      "Node.js prevents sticky sessions intentionally"
    ],
    correctAnswer: "You need a load balancer or custom logic to ensure same client goes to same worker (sticky sessions)",
    topic: "Node.js"
  },
  {
    id: 66,
    question: "Which is a correct reason to use `child_process.fork()` instead of `exec`/`spawn`?",
    options: [
      "`fork` spawns a new V8 instance and sets up IPC channel for sending messages between parent and child (suitable for Node-to-Node work)",
      "`fork` shares memory with parent",
      "`fork` is synchronous",
      "`fork` is only used for running shell scripts"
    ],
    correctAnswer: "`fork` spawns a new V8 instance and sets up IPC channel for sending messages between parent and child (suitable for Node-to-Node work)",
    topic: "Node.js"
  },
  {
    id: 67,
    question: "What is the purpose of `domain` module in Node.js?",
    options: [
      "To provide modern error handling and recommended for new apps",
      "It was used to handle multiple async errors but is deprecated/unrecommended; use domains alternatives like per-request error handling, async_hooks, or promises",
      "To manage memory domains",
      "To isolate file system access"
    ],
    correctAnswer: "It was used to handle multiple async errors but is deprecated/unrecommended; use domains alternatives like per-request error handling, async_hooks, or promises",
    topic: "Node.js"
  },
  {
    id: 68,
    question: "Which Node API is appropriate for measuring high-resolution time intervals?",
    options: [
      "Date.now()",
      "process.hrtime.bigint() or process.hrtime()",
      "performance.now() is not available in Node",
      "console.time always yields nanosecond precision"
    ],
    correctAnswer: "process.hrtime.bigint() or process.hrtime()",
    topic: "Node.js"
  },
  {
    id: 69,
    question: "How would you reduce memory usage for serving large file downloads?",
    options: [
      "Read the whole file into memory via `fs.readFile` and send",
      "Use streaming (`fs.createReadStream`) and set proper headers — avoid buffering the entire file",
      "Use synchronous reads in main loop",
      "Copy file into a string first"
    ],
    correctAnswer: "Use streaming (`fs.createReadStream`) and set proper headers — avoid buffering the entire file",
    topic: "Node.js"
  },
  {
    id: 70,
    question: "What does `uncaughtException` handler do and why must it be used carefully?",
    options: [
      "It catches all errors and allows continuing normally without side effects",
      "It catches exceptions not handled elsewhere; process state may be corrupted — recommended to log and exit gracefully, not continue",
      "It eliminates the need for try/catch in code",
      "It is only for debug mode"
    ],
    correctAnswer: "It catches exceptions not handled elsewhere; process state may be corrupted — recommended to log and exit gracefully, not continue",
    topic: "Node.js"
  },
  {
    id: 71,
    question: "Which Node core module can be used to profile CPU usage and take heap snapshots?",
    options: [
      "http",
      "v8 and inspector (or use `node --inspect`/`--prof` and tools like clinic/0x)",
      "fs",
      "cluster"
    ],
    correctAnswer: "v8 and inspector (or use `node --inspect`/`--prof` and tools like clinic/0x)",
    topic: "Node.js"
  },
  {
    id: 72,
    question: "Which is a correct use-case for `async_hooks`?",
    options: [
      "Replacing the event loop entirely",
      "Track async resource lifecycle (useful for correlating async operations, debugging, tracing) — but use carefully for performance",
      "Automatically make functions synchronous",
      "Auto-garbage-collect resources"
    ],
    correctAnswer: "Track async resource lifecycle (useful for correlating async operations, debugging, tracing) — but use carefully for performance",
    topic: "Node.js"
  },
  {
    id: 73,
    question: "Which header could you set to let the browser cache static resources aggressively and validate them later?",
    options: [
      "Cache-Control: no-cache",
      "Cache-Control: public, max-age=31536000, immutable (with fingerprinted URLs)",
      "Server: no-store",
      "Content-Security-Policy"
    ],
    correctAnswer: "Cache-Control: public, max-age=31536000, immutable (with fingerprinted URLs)",
    topic: "Node.js"
  },
  {
    id: 74,
    question: "What is the correct way to detect if a stream consumer can't accept more data?",
    options: [
      "Ignoring the boolean return value of `.write()`",
      "Check `.write()` return value; if false, wait for `drain` event before further writes",
      "Continuously call `.write()` until it throws",
      "Use `.pause()` always"
    ],
    correctAnswer: "Check `.write()` return value; if false, wait for `drain` event before further writes",
    topic: "Node.js"
  },
  {
    id: 75,
    question: "How does Node's ESM `import` differ in timing from CommonJS `require`?",
    options: [
      "ESM `import` is synchronous and evaluated at runtime only",
      "ESM `import` is statically analyzable and can be hoisted; it may perform module load before top-level execution and supports top-level await",
      "CommonJS supports top-level await by default",
      "They are interchangeable with no differences"
    ],
    correctAnswer: "ESM `import` is statically analyzable and can be hoisted; it may perform module load before top-level execution and supports top-level await",
    topic: "Node.js"
  },
  {
    id: 76,
    question: "Which approach secures an Express app against HTTP parameter pollution?",
    options: [
      "Trust all query parameters blindly",
      "Validate and sanitize inputs, use libraries to normalize parameter arrays, and set strict parser options",
      "Use `eval` to parse incoming params",
      "Rely only on client validation"
    ],
    correctAnswer: "Validate and sanitize inputs, use libraries to normalize parameter arrays, and set strict parser options",
    topic: "Node.js"
  },
  {
    id: 77,
    question: "What is the result of calling `Buffer.from('caf\u00E9', 'utf8')` in Node?",
    options: [
      "A buffer containing UTF-8 bytes of the string 'café'",
      "An error due to special characters",
      "A buffer with hex representation of characters",
      "An array of code points"
    ],
    correctAnswer: "A buffer containing UTF-8 bytes of the string 'café'",
    topic: "Node.js"
  },
  {
    id: 78,
    question: "Which pattern helps to gracefully restart Node processes with zero downtime?",
    options: [
      "Kill and start without coordination",
      "Use cluster/PM2/nginx with rolling restarts and a load balancer to route traffic to healthy workers",
      "Use a single monolithic process and restart it often",
      "Use `process.exit()` in response to health checks"
    ],
    correctAnswer: "Use cluster/PM2/nginx with rolling restarts and a load balancer to route traffic to healthy workers",
    topic: "Node.js"
  },
  {
    id: 79,
    question: "Which Node feature helps share compiled native code between multiple Node instances?",
    options: [
      "Native addons built as shared libraries can be loaded by multiple processes, but memory isn't shared; consider worker_threads for shared memory",
      "Node automatically shares heap memory across processes",
      "`cluster` shares C++ addons automatically in memory",
      "There is no mechanism to load native code"
    ],
    correctAnswer: "Native addons built as shared libraries can be loaded by multiple processes, but memory isn't shared; consider worker_threads for shared memory",
    topic: "Node.js"
  },
  {
    id: 80,
    question: "Which is true about `require.cache` in Node?",
    options: [
      "It prevents modules from being garbage collected and can be modified to clear cache (e.g., for hot-reload during development)",
      "It is read-only",
      "It holds code in string format only",
      "Clearing it has no effect"
    ],
    correctAnswer: "It prevents modules from being garbage collected and can be modified to clear cache (e.g., for hot-reload during development)",
    topic: "Node.js"
  },
  {
    id: 81,
    question: "What is Zapier/Express-style 'middleware' conceptually?",
    options: [
      "An in-memory queue service",
      "Functions that receive request, response, and next; they can modify req/res or short-circuit the pipeline",
      "A database design pattern",
      "A CSS framework"
    ],
    correctAnswer: "Functions that receive request, response, and next; they can modify req/res or short-circuit the pipeline",
    topic: "Node.js"
  },
  {
    id: 82,
    question: "Which Node technique is recommended to protect against DOS via large request bodies?",
    options: [
      "Trust all clients and accept unlimited size",
      "Use body size limits in parsers (e.g., `limit` in body-parser), streaming parsers, and validate content-length",
      "Read full body into memory for every request",
      "Use `setTimeout` to delay reads"
    ],
    correctAnswer: "Use body size limits in parsers (e.g., `limit` in body-parser), streaming parsers, and validate content-length",
    topic: "Node.js"
  },
  {
    id: 83,
    question: "How can you capture heap snapshots to diagnose memory leaks in Node?",
    options: [
      "Use `process.memoryUsage()` and combination with tools like `heapdump`, Chrome DevTools via `--inspect`, or `clinic` to take snapshots and analyze retained objects",
      "Rely only on `console.log` of objects",
      "Use `JSON.stringify` to produce a full heap dump",
      "Node doesn't allow heap snapshots"
    ],
    correctAnswer: "Use `process.memoryUsage()` and combination with tools like `heapdump`, Chrome DevTools via `--inspect`, or `clinic` to take snapshots and analyze retained objects",
    topic: "Node.js"
  },
  {
    id: 84,
    question: "What does `setImmediate(()=>console.log('a')); process.nextTick(()=>console.log('b'));` print first?",
    options: [
      "'a' then 'b'",
      "'b' then 'a'",
      "Order is undefined",
      "They run in parallel"
    ],
    correctAnswer: "'b' then 'a'",
    topic: "Node.js"
  },
  {
    id: 85,
    question: "Which approach improves throughput for an HTTP server that does CPU work per request?",
    options: [
      "Do CPU work synchronously in request handler",
      "Use a pool of worker threads/child processes to offload CPU-bound computation and keep event loop responsive",
      "Increase `setTimeout` delays",
      "Use blocking `fs` calls for speed"
    ],
    correctAnswer: "Use a pool of worker threads/child processes to offload CPU-bound computation and keep event loop responsive",
    topic: "Node.js"
  },
  {
    id: 86,
    question: "Which header and server behavior helps prevent MIME type sniffing vulnerabilities?",
    options: [
      "Content-Security-Policy only",
      "Set `X-Content-Type-Options: nosniff` and send correct `Content-Type` headers",
      "Omit the Content-Type header",
      "Send `Content-Type: text/plain` always"
    ],
    correctAnswer: "Set `X-Content-Type-Options: nosniff` and send correct `Content-Type` headers",
    topic: "Node.js"
  },
  {
    id: 87,
    question: "What happens when you call `res.send()` twice in Express?",
    options: [
      "Express buffers and merges responses",
      "An error is thrown or the second call is ignored if headers already sent — you must avoid multiple sends",
      "Second call replaces the first automatically",
      "res.send has no effect on HTTP response"
    ],
    correctAnswer: "An error is thrown or the second call is ignored if headers already sent — you must avoid multiple sends",
    topic: "Node.js"
  },
  {
    id: 88,
    question: "Which method would you use to convert an existing callback-style API into Promise-based API?",
    options: [
      "Use synchronous wrapper",
      "Use `util.promisify` or manually wrap with `new Promise((resolve,reject)=>...)`",
      "Use `eval` to convert functions",
      "It is not possible to convert callbacks to promises"
    ],
    correctAnswer: "Use `util.promisify` or manually wrap with `new Promise((resolve,reject)=>...)`",
    topic: "Node.js"
  },
  {
    id: 89,
    question: "Which mechanism allows safe sharing of binary data between worker threads?",
    options: [
      "Stringify binary data to JSON",
      "Use SharedArrayBuffer / Transferable `ArrayBuffer` objects for zero-copy transfer or shared memory",
      "Copy data via file system only",
      "Use `postMessage` without transfer"
    ],
    correctAnswer: "Use SharedArrayBuffer / Transferable `ArrayBuffer` objects for zero-copy transfer or shared memory",
    topic: "Node.js"
  },
  {
    id: 90,
    question: "Which is an advantage of using HTTP/2 in Node.js servers?",
    options: [
      "No need for TLS",
      "Multiplexing multiple streams on single connection reduces head-of-line blocking and can improve performance",
      "Browser compatibility decreases",
      "It disables compression"
    ],
    correctAnswer: "Multiplexing multiple streams on single connection reduces head-of-line blocking and can improve performance",
    topic: "Node.js"
  },
  {
    id: 91,
    question: "What is the correct approach to log structured JSON logs for production?",
    options: [
      "Use `console.log` with concatenated strings",
      "Use structured logging libraries (pino/winston) with JSON output, appropriate log levels, and transport to centralized system",
      "Write logs to random files without rotation",
      "Log secrets directly"
    ],
    correctAnswer: "Use structured logging libraries (pino/winston) with JSON output, appropriate log levels, and transport to centralized system",
    topic: "Node.js"
  },
  {
    id: 92,
    question: "Which Node capability helps implement graceful shutdown on SIGTERM?",
    options: [
      "Ignore signals",
      "Listen for `SIGTERM`/`SIGINT`, stop accepting new connections, finish in-flight requests, then close server and exit",
      "Call `process.exit()` immediately on SIGTERM",
      "Kill all worker threads abruptly"
    ],
    correctAnswer: "Listen for `SIGTERM`/`SIGINT`, stop accepting new connections, finish in-flight requests, then close server and exit",
    topic: "Node.js"
  },
  {
    id: 93,
    question: "Which pattern is recommended for safely reading large JSON payloads without OOM?",
    options: [
      "Use `JSON.parse` on the whole body",
      "Use a streaming JSON parser (e.g., `stream-json`) to process portions of the payload incrementally",
      "Rely on client to split payloads into multiple requests",
      "Buffer the full body in memory then parse"
    ],
    correctAnswer: "Use a streaming JSON parser (e.g., `stream-json`) to process portions of the payload incrementally",
    topic: "Node.js"
  },
  {
    id: 94,
    question: "How can you mitigate NPM dependency supply-chain attacks?",
    options: [
      "Blindly install all packages",
      "Pin exact versions, use lockfiles, audit packages (`npm audit`), review transitive packages, and use tools like `npm ci`, private registries, and vulnerability scanners",
      "Avoid using package managers completely",
      "Install from random third-party registries"
    ],
    correctAnswer: "Pin exact versions, use lockfiles, audit packages (`npm audit`), review transitive packages, and use tools like `npm ci`, private registries, and vulnerability scanners",
    topic: "Node.js"
  },
  {
    id: 95,
    question: "Which is true about `http.Agent` in Node?",
    options: [
      "It doesn't manage sockets",
      "It manages connection pooling for outgoing HTTP requests and can be tuned for max sockets/keep-alive behavior",
      "It only used for servers",
      "It is deprecated"
    ],
    correctAnswer: "It manages connection pooling for outgoing HTTP requests and can be tuned for max sockets/keep-alive behavior",
    topic: "Node.js"
  },
  {
    id: 96,
    question: "Which is correct about native addons (C/C++ modules) for Node?",
    options: [
      "They always improve performance drastically without maintenance cost",
      "They can improve CPU-bound performance but add complexity, cross-platform build overhead, and maintenance cost",
      "They are written in Java and compiled to Node",
      "They run in a separate OS process automatically"
    ],
    correctAnswer: "They can improve CPU-bound performance but add complexity, cross-platform build overhead, and maintenance cost",
    topic: "Node.js"
  },
  {
    id: 97,
    question: "Which method helps detect event loop lag/latency in production?",
    options: [
      "Use `setInterval` to sample `Date.now()` vs expected time or use monitoring libraries that measure event-loop delay (e.g., `event-loop-lag`)",
      "Use `console.log` to measure lag",
      "Event loop lag cannot be measured",
      "Only CPU metrics matter"
    ],
    correctAnswer: "Use `setInterval` to sample `Date.now()` vs expected time or use monitoring libraries that measure event-loop delay (e.g., `event-loop-lag`)",
    topic: "Node.js"
  },
  {
    id: 98,
    question: "Which is the recommended approach for storing sessions in a scalable Node/Express app?",
    options: [
      "Store sessions in memory in each process",
      "Use a shared store like Redis or a database for sessions so multiple instances can share session state",
      "Store sessions in client-side cookies only without integrity",
      "Use a flat file per session on disk"
    ],
    correctAnswer: "Use a shared store like Redis or a database for sessions so multiple instances can share session state",
    topic: "Node.js"
  },
  {
    id: 99,
    question: "Which Node API helps create a TLS server with certificate-based mutual TLS?",
    options: [
      "http.createServer only",
      "tls.createServer or https.createServer with `requestCert: true` and client certificate verification",
      "net.createServer automatically does TLS",
      "fs.createServer"
    ],
    correctAnswer: "tls.createServer or https.createServer with `requestCert: true` and client certificate verification",
    topic: "Node.js"
  },
  {
    id: 100,
    question: "Which strategy improves cold-start time for serverless Node functions?",
    options: [
      "Bundle large devDependencies at runtime",
      "Minimize package size, use lighter runtimes, apply lazy initialization, cache DB connections across invocations if platform permits",
      "Initialize all heavy resources synchronously on every request",
      "Use `require` at random places"
    ],
    correctAnswer: "Minimize package size, use lighter runtimes, apply lazy initialization, cache DB connections across invocations if platform permits",
    topic: "Node.js"
  }
];
