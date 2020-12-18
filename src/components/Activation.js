import React, {useState} from "react";
import { AddCreditCard } from "./AddCreditCard";

export const Activation = () => {
  const [bin, setBin] = useState('');

  const extrapolate = ({creditCardOne}) => {
    const lastSixNumbers = creditCardOne.substr(creditCardOne.length - 6);
    const bin = creditCardOne.replace(lastSixNumbers, "xxxxxx");
    setBin(bin);
  };


  return (
    <div>
      <h2>Activation</h2>
      <AddCreditCard isCreditCardTwoRequired={false} extrapolate = {extrapolate} bin={bin} exampleBin="4915110176xxxxxx"/>
    </div>
  );
};
