import Big from 'big.js';

const operate = (num1, num2, operation) => {
  switch (operation) {
    case '-':
      return Big(num1).minus(Big(num2)).toString();
    case 'X':
      return Big(num1).times(Big(num2)).toString();
    case '÷':
      return Big(num1).div(Big(num2)).toString();
    case '+':
      return Big(num1).plus(Big(num2)).toString();
    case '%':
      return Big(num1).div(100).toString();
    default:
      return 'Operation not possible';
  }
};

export default operate;
