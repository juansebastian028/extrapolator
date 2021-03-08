import React, { useState } from "react";
import { extrapolateSimilitudeMethod } from "../helpers/similitude";
import { AddCreditCard } from "./AddCreditCard";

export const Similitude = React.memo(() => {
  const [bin, setBin] = useState("");

  const extrapolate = ({ creditCardOne, creditCardTwo }) => {
    const bin = extrapolateSimilitudeMethod(creditCardOne, creditCardTwo);
    setBin(bin);
  };

  return (
    <div>
      <h2>Similitude</h2>
      <AddCreditCard isCreditCardTwoRequired={true} extrapolate={extrapolate} bin={bin} exampleBin="49151101xxxx8x9x"/>
    </div>
  );
});
