import {currencyDesc} from './CurrencyDesc';

export const addDescription = async data => {
  const keys = Object.keys(data);
  for (e of keys) {
    for (d of currencyDesc) {
      if (e === d[0]) {
        data[e] = [d[1], data[e]];
      }
    }
  }
  return data;
};

export const getSomeRates = async data => {
  //convert typeof data from object to array
  const arrRates = Object.entries(data);
  const choosenRates = ['IDR', 'EUR', 'GBP', 'SGD'];
  const result = [];

  // elem is element
  for ([i, elem] of arrRates.entries()) {
    for (choosenElem of choosenRates) {
      if (elem[0] === choosenElem) {
        result.push(elem);
      }
    }
  }
  return result;
};

export const addOneRate = async (allRates, someRates, newRates) => {
  const arrRates = Object.entries(allRates);
  let result = [];

  for (elem of someRates) {
    if (elem[0] === newRates) {
      return false;
    }
  }
  for ([i, elem] of arrRates.entries()) {
    if (elem[0] === newRates) {
      result = elem;
    }
  }
  return result;
};

export const RemoveOneRate = async (someRates, codeCountry) => {
  const result = [];
  for (elem of someRates) {
    if (elem[0] !== codeCountry) {
      result.push(elem);
    }
  }
  return result;
};
