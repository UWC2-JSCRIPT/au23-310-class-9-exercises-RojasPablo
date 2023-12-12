// Example
const createCounter = () => {
  let count = 0;
  const getCount = () => count;
  const increaseCount = () => count++;

  return {
    getCount,
    increaseCount
  };
};
const counter = createCounter();
counter.increaseCount();
console.log(counter.getCount());
// 1

// Exercise:
// This function should create an empty array of messages, and should then
// return an object with the following methods:
// - addMessage method that adds a message to the array
// - getMessage(index) method that returns the message at index index

const createMessageHolder = () => {

    
    const messages = [];
    return {
    
      addMessage: (message) => {
        messages.push(message);
      },
       
      getMessage: (index) => {

        if (index >= 0 && index < messages.length) {
          return messages[index];
        } else {
          return "No message at that Index";
        }
      }
    };
}

const messageTools = createMessageHolder();

messageTools.addMessage('Message number 1');
messageTools.addMessage('Message number 2');
messageTools.addMessage('Message number 3');

messageTools.getMessage(1);

// Test
const messageHolder = createMessageHolder();
messageHolder.addMessage('Hello!');
messageHolder.addMessage('Goodbye!');
console.log(messageHolder.getMessage(0));
// "Hello!""

// Example: non-currying
const addNumbers = function(num1, num2) {
  return num1 + num2;
};
console.log(addNumbers(5, 3));
// 8

// Example: currying
const addToNumber = function(num1) {
  const addToFirst = function(num2) {
    return num1 + num2;
  };
  return addToFirst;
};
const addThree = addToNumber(3);
console.log(addThree(9));
// 12

console.log(addThree(41));
// 44

// Create a function createGreeting
// - This should accept a single argument: greeting (i.e. "Hello")
// This will return a function a function greet
// - This accepts a single argument, name (i.e. "Matt")
// - This function should return the greeting combined with the name, (i.e. "Hello Matt")
const createGreeting = (greeting) => {
    return (name) => {
        return `${greeting}, ${name}`
    }
}

const greet = createGreeting("Yo what's up?")
console.log(greet("dennis"));


const formalGreeting = createGreeting("Good day fine chap,")
formalGreeting("Charles");

// Test
const welcomeGreet = createGreeting('Welcome');
console.log(welcomeGreet('Alice'));

const helloGreet = createGreeting('Hello');
console.log(helloGreet('Winnie'));


