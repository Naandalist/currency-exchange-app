export const numberFormatter = numb => {
  const newNumb = numb.toString().split('');

  //Check. is it decimal
  for (e of newNumb) {
    if (e === '.') {
      return numb.toFixed(3);
    }
  }
  return numb.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export const numberFormatterV2 = numb => {
  return numb
    .toFixed(2)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
