import React, { useState } from "react";
import { AddCreditCard } from "./AddCreditCard";
import { separeteCreditCard } from "../helpers/separateCreditCard";
import { extrapolateSimilitudeMethod } from "../helpers/similitude";

export const MaTerialDInVerter = React.memo(() => {
  const [bin, setBin] = useState("");

  const extrapolate = ({ creditCardOne, creditCardTwo }) => {
    const [
      firstEightNumbersCreditCardTwo,
      remainingNumbersCreditCardTwo,
    ] = separeteCreditCard(creditCardTwo, 8);

    const multDigitByDigitCreditCardTwo = firstEightNumbersCreditCardTwo
      .split("")
      .map((number, index) => {
        return (
          parseInt(number) *
          parseInt(remainingNumbersCreditCardTwo.charAt(index))
        );
      });

    const numbersJoined = multDigitByDigitCreditCardTwo.join("").substr(0, 8);
    const remainingCreditCard = firstEightNumbersCreditCardTwo + numbersJoined;
    const bin = extrapolateSimilitudeMethod(creditCardOne, remainingCreditCard);
    let binModified = "";

    if (bin.substr(bin.length - 1) === "x") {
      binModified = bin.slice(0, -1) + "1";
      setBin(binModified);
      
    }else{
      setBin(bin);
    }

  };

  return (
    <div>
      <h2>MaTerialDInVerter</h2>
      <AddCreditCard isCreditCardTwoRequired={true} extrapolate={extrapolate} bin={bin} exampleBin="49151101x69xxxx1" />
    </div>
  );
});
