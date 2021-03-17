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
      if (next) {
        next = operate(next, null, button);
      } else {
        total = operate(total, null, button);
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
      if (!operation) {
        if (!total) {
          total = 0 + button;
        } else if (!/[.]/.test(total)) {
          total += button;
        }
      } else if (!next) {
        next = 0 + button;
      } else if (!/[.]/.test(next)) {
        next += button;
      }
      break;
    case '+':
    case '-':
    case '÷':
    case 'X':
      if (!total) {
        total = 0;
      }
      if (!total && !next && !operation) {
        total = operate(total, next, operation);
        next = null;
      }
      operation = button;
      break;

    case '=':
      if (!operation) {
        total = operate(total, next, operation);
        next = null;
        operation = null;
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

const calculate = (data, button) => {
  buttonOperations(button, data);
};

export default calculate;
