import Axios from 'axios';

const Url = `api.exchangeratesapi.io/latest`;
const base = `USD`;

export const getRates = async () => {
  try {
    const result = await Axios.get(`https://${Url}?base=${base}`);
    const data = result.data.rates;
    return data;
  } catch (err) {
    return console.log('GET DATA ERROR: ', err);
  }
};
