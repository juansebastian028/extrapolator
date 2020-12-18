import React, {useState} from 'react'
import { AddCreditCard } from './AddCreditCard'

export const Sofia = () => {

    const [bin, setBin] = useState("");

    const getMiddleNumbersGroupThree = (creditCard) => {
        const middleNumbersGroupThree = creditCard.substring(
          creditCard.length / 2 + 1,
          creditCard.length / 2 + 3
        );
        return middleNumbersGroupThree;
    };

    const operateMiddleNumbersCreditCards = (numOne, numTwo) => {
        const firstDigitNumOne = Math.trunc(parseInt(numOne) / 10);
        const secondDigitNumOne = parseInt(numOne) % 10;
        const firstDigitNumTwo = Math.trunc(parseInt(numTwo) / 10);
        const secondDigitNumTwo = parseInt(numTwo) % 10;
      
        const result1 = Math.trunc(((firstDigitNumOne + secondDigitNumOne) / 2) * 5);
        const result2 = Math.trunc(((firstDigitNumTwo + secondDigitNumTwo) / 2) * 5);
        const sum = result1 + result2;
        return sum.toString();
    };

    const extrapolate = ({creditCardOne, creditCardTwo}) => {
        const middleNumbersCreditCardOne = getMiddleNumbersGroupThree(creditCardOne);
        const middleNumbersCreditCardTwo = getMiddleNumbersGroupThree(creditCardTwo);

        const result = operateMiddleNumbersCreditCards(
          middleNumbersCreditCardOne,
          middleNumbersCreditCardTwo
        );

        const firstEightNumbers = creditCardOne.substr(0, 8);
      
        setBin(firstEightNumbers + result + "xxxxxx");
    };

    return (
        <div>
            <h2>SoFIA</h2>
            <AddCreditCard isCreditCardTwoRequired={true} extrapolate={extrapolate} bin={bin} exampleBin="4915110157xxxxxx" />
        </div>
    )
}
