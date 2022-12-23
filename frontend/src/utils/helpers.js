export const priceFormat = (num) => {
  const newNum = Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(num / 100);
  return newNum;
};
