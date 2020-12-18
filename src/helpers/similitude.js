import {separeteCreditCard} from './separateCreditCard';

export const extrapolateSimilitudeMethod = (creditCardOne, creditCardTwo) => {
    const [
      firstSixNumbersCreditCardOne,
      remainingNumbersCreditCardOne,
    ] = separeteCreditCard(creditCardOne,6);
    const [
      ,
      remainingNumbersCreditCardTwo,
    ] = separeteCreditCard(creditCardTwo,6);

    let bin = "";

    for (let i = 0; i < remainingNumbersCreditCardOne.length; i++) {
      if (
        remainingNumbersCreditCardOne.charAt(i) !==
        remainingNumbersCreditCardTwo.charAt(i)
      ) {
        bin += "x";
      } else {
        bin += remainingNumbersCreditCardOne.charAt(i);
      }
    }
    return firstSixNumbersCreditCardOne + bin;
  };