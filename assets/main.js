// 1. Use the id-selector to get your inputs' and the output element from the DOM
const inputOne = document.querySelector(`#one`);
const inputTwo = document.querySelector(`#two`);
const inputThree = document.querySelector(`#three`);
const inputFour = document.querySelector(`#four`);
const inputFive = document.querySelector(`#five`);
const inputSix = document.querySelector(`#six`);
const inputSeven = document.querySelector(`#seven`);
const inputEight = document.querySelector(`#eight`);
const inputNine = document.querySelector (`#nine`);
const inputTen = document.querySelector (`#ten`);

const output = document.querySelector(`.output`);
// 2. For each of the inputs, get the value (word) from them

// 3. Generate your template using the values from above and set the output element's value equal to it!
//HINT: You'll need a ton of code before doing anything in this function that's called in your index.html 😜
function generateTemplate() {
  let madlib = `${inputOne.value} is quite the ${inputTwo.value} person ${inputThree.value} his ${inputFour.value} is very ${inputFive.value}. One day when he is a ${inputSix.value} woman he will ${inputSeven.value} everything ${inputEight.value}like he ${inputNine.value} for the ${inputTen.value}.`
  output.innerHTML = madlib;
}
