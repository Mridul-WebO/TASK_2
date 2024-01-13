// counter dilemma

// Function to increment counter
const add = (function () {
  let counter = 0;
  return (counter += 1);
})();

// Note: IIFE(Immidiately invoked function expression runs only once )

const sum = (function () {
  let counter = 0;
  return function () {
    return (counter += 1);
  };
})();

console.log(sum());
console.log(sum());
