const userInput =  document.getElementById("#user_input");
let expression = "";

press = (num) => {
  expression += num;
  userInput.value = expression;
}

equal = () => {
  userInput.value = eval(expression);
  expression = "";
}

erase = () => {
  expression = "";
  userInput.value = expression;
}