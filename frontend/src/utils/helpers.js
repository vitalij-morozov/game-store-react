export const priceFormat = (num) => {
  const newNum = Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(num / 100);
  return newNum;
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  return ['all', ...new Set(unique)];
};
