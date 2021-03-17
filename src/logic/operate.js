import Big from 'big.js';

const operate = (num1, num2, operation) => {
  switch (operation) {
    case '-':
      return Big(num1).minus(num2).toString();
    case 'X':
      return Big(num1).times(num2).toString();
    case '÷':
      return Big(num1).div(num2).toString();
    case '+':
      return Big(num1).plus(num2).toString();
    case '%':
      return Big(num1).div(100).toString();
    default:
      return 'Operation not possible';
  }
};

export default operate;
