export const separeteCreditCard = (creditCard, endFirstNumbers) => {
  const firstNumbers = creditCard.substr(0, endFirstNumbers);
  const lastNumbers = creditCard.length - endFirstNumbers;
  const remainingNumbers = creditCard.substr(firstNumbers.length, lastNumbers);
  return [firstNumbers, remainingNumbers];
};
