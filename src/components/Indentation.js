import React, {useState} from "react";
import { separeteCreditCard } from "../helpers/separateCreditCard";
import { AddCreditCard } from "./AddCreditCard";

export const Indentation = () => {
  const [bin, setBin] = useState('');

  const extrapolate = ({creditCardOne}) => {
    
    const [firstSixNumbers, remainingNumbers] = separeteCreditCard(creditCardOne,6);

    let chuck1 = "";
    let chuck2 = "";
    let chuck3 = "";

    for (let i = 0; i < remainingNumbers.length; i++) {
      if (chuck1.length - 1 < 2) {
        chuck1.length - 1 === 0
          ? (chuck1 += "x")
          : (chuck1 += remainingNumbers.charAt(i));
      } else if (chuck2.length - 1 < 3) {
        chuck2.length - 1 === 0 || chuck2.length - 1 === 1
          ? (chuck2 += "x")
          : (chuck2 += remainingNumbers.charAt(i));
      } else if (chuck3.length - 1 < 2) {
        chuck3.length - 1 === 0
          ? (chuck3 += "x")
          : (chuck3 += remainingNumbers.charAt(i));
      }
    }

    const bin = firstSixNumbers + chuck1 + chuck2 + chuck3;

    setBin(bin);
  };

  return (
    <div>
      <h2>Indentation</h2>
      <AddCreditCard isCreditCardTwoRequired={false} extrapolate = {extrapolate} bin={bin} exampleBin="4915110x76xx87x0" />
    </div>
  );
};
