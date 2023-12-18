const createCounter = () => {
    let count = 0;

    const getCount = () => count

    const increaseCount = () => count++

    return {
        getCount,
        increaseCount
    }
}

const counterInstance = createCounter()


counterInstance.increaseCount()
counterInstance.getCount()



// REPEAT FUNCTION INCLASS
const repeatFn = (num, callback) => {
  for (let i = 0; i < num; i++) {
    callback(i)
  }
}

const doubleNumber = (num) => {
  console.log(num * 2)
}

repeatFn(5, (param)=>{
  console.log(param)
})

repeatFn(5, doubleNumber)

repeatFn(5, counterInstance.getCount)


// MESSAGES FUNCTION 
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



//CURRYING
const addToNumber = function(num1){
    const addToFirst = function(num2) {
        return num1 + num2
    }
    return addToFirst;
}

const addThree = addToNumber(3);

console.log(addThree(9)) // 12



//GREETING FUNCTION 
const createGreeting = (greeting) => {
    return (name) => {
        return `${greeting}, ${name}`
    }
}

const greet = createGreeting("Yo what's up?")
console.log(greet("dennis"));


const formalGreeting = createGreeting("Good day fine chap,")
formalGreeting("Charles");