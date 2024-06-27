export const shortenNumber = (num: number): string => {
  const numberFormatted = new Intl.NumberFormat('fr', { notation: 'compact' }).format(num);
  return numberFormatted.replace(/\s/g, '');
};
