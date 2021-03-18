import operate from './operate';

const buttonOperations = (button, data) => {
  let { total, next, operation } = data;
  switch (button) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      if (next) {
        next *= -1;
      } else {
        total *= -1;
      }
      break;
    case '%':
      if (!next) {
        total /= 100;
      } else {
        next /= 100;
      }
      break;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (!operation) {
        if (!total) {
          total = button;
        } else if (typeof total === 'number') {
          total = button;
        } else {
          total += button;
        }
      } else if (!next) {
        next = button;
      } else {
        next += button;
      }
      break;
    case '.':
      if (!total) total = '0.';
      if (!operation && !total.includes('.')) {
        total += '.';
      } else if (operation && !next.includes('.')) {
        next += '.';
      }
      break;
    case '+':
    case '-':
    case '÷':
    case 'X':
      if (!total) {
        total = 0;
      }

      if (total && next && operation) {
        total = operate(total, next, operation);
        next = null;
        operation = null;
      }
      operation = button;
      break;

    case '=':
      if (!operation) {
        total = operate(total, next, operation);
        next = null;
        operation = null;
      }

      if (total && next) {
        total = operate(total, next, operation);
        next = null;
        operation = button;
      }
      break;
    default:
      total = 'Error';
      next = null;
      operation = null;
      break;
  }
  return { total, next, operation };
};

const calculate = (data, buttonName) => buttonOperations(buttonName, data);

export default calculate;
