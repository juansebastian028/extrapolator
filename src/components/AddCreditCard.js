import React, { useState } from "react";
import PropTypes from "prop-types";
import { ResultExtrapolate } from "./ResultExtrapolate";

export const AddCreditCard = ({
  isCreditCardTwoRequired,
  extrapolate,
  bin,
  exampleBin,
}) => {
  const [inputsValues, setInputsValues] = useState({
    creditCardOne: "",
    creditCardTwo: "",
  });

  const handleInputChange = (e, property) => {
    let state = { ...inputsValues };
    let value = e.target.value.replace(/\s/g, "");

    state[property] = value;
    setInputsValues(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (creditCardTwo) {
      if (
        creditCardOne.match("^[0-9]{16}$") !== null &&
        creditCardTwo.match("^[0-9]{16}$") !== null
      ) {
        extrapolate(inputsValues);
      }
    } else {
      if (creditCardOne.match("^[0-9]{16}$") !== null) {
        extrapolate(inputsValues);
      }
    }
  };

  const { creditCardOne, creditCardTwo } = inputsValues;

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="wrapper">
        <div className="form__group">
          <label className="form__label" htmlFor="creditCardOne">
            {!isCreditCardTwoRequired ? "Credit Card:" : "Credit Card One:"}
          </label>
          <input
            className="form__input--text"
            name="creditCardOne"
            type="text"
            placeholder="4915110176928790"
            value={creditCardOne}
            onChange={(e) => handleInputChange(e, "creditCardOne")}
          />

          {isCreditCardTwoRequired && (
            <>
              <label className="form__label" htmlFor="creditCardTwo">
                Credit Card Two:
              </label>
              <input
                className="form__input--text"
                name="creditCardTwo"
                type="text"
                placeholder="4915110191768499"
                value={creditCardTwo}
                onChange={(e) => handleInputChange(e, "creditCardTwo")}
              />
            </>
          )}
          <input className="btn" type="submit" value="Extrapolate" />
        </div>
        <ResultExtrapolate bin={bin} exampleBin={exampleBin} />
      </div>
    </form>
  );
};

AddCreditCard.propTypes = {
  isCreditCardTwoRequired: PropTypes.bool.isRequired,
  extrapolate: PropTypes.func.isRequired,
};
