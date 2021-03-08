import React, {useState} from "react";
import { AddCreditCard } from "./AddCreditCard";

export const Basic = React.memo(() => {
  const [bin, setBin] = useState("");

  const extrapolate = ({ creditCardOne }) => {
    const lastTenNumbers = creditCardOne.substr(creditCardOne.length - 10);
    const bin = creditCardOne.replace(lastTenNumbers, "xxxxxxxxxx");
    setBin(bin);
  };

  return (
    <div>
      <h2>Basic</h2>
      <AddCreditCard
        isCreditCardTwoRequired={false}
        extrapolate={extrapolate}
        bin={bin} 
        exampleBin="491511xxxxxxxxxx"
      />
    </div>
  );
});
