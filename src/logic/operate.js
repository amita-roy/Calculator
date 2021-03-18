import Big from 'big.js';

const operate = (num1, num2, operation) => {
  const numOne = Big(num1);
  const numTwo = Big(num2);
  switch (operation) {
    case '-':
      return numOne.minus(numTwo).toString();
    case 'X':
      return numOne.times(numTwo).toString();
    case '+':
      return numOne.plus(numTwo).toString();
    case '÷':
      return num1 === '0' || num2 === '0' ? 'Division by zero error' : numOne.div(numTwo);
    default:
      return 'Operation not possible';
  }
};

export default operate;
