export const numberWithDots = (number) => {
  return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatPrice = (amount) => {
  let value = amount;
  if (value) {
    if (isFloat(value)) {
      value = value.toFixed(2);
    }
    value = numberWithDots(value);
  } else {
    value = '0.00';
  }
  return value;
};

const isFloat = (n) => {
  return Number(n) === n && n % 1 !== 0;
}

export const formatWeight = (number) => {
  return !number || number === 0 ? '-' : numberWithDots(number);
};

export const cleanAmount = (amount) => {
  return amount.replace(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/g, '');
};

export const handleOnChangeAmountInput = (amount, callback) => {
  const value = cleanAmount(amount);
  let numberValue;
  let integerPart;
  let decimalPart;
  let decimalText;
  if (value.length > 1 && value.lastIndexOf('.') === value.length - 1) {
    [integerPart, decimalPart] = value.split('.');
    decimalText = '.';
  } else {
    [integerPart, decimalPart] = value.split('.');
    decimalText = decimalPart ? `.${decimalPart.slice(0, 2)}` : '';
  }
  numberValue = Number(value);
  if (numberValue >= 0) {
    callback(`${numberWithDots(integerPart)}${decimalText}`);
  } else {
    if (!value) {
      callback(value);
    }
  }
};