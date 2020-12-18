import React, { useRef } from "react";
import PropTypes from "prop-types";

export const ResultExtrapolate = ({ bin, exampleBin }) => {
  const inputEl = useRef(null);

  const copyCodeToClipboard = () => {
    inputEl.current.select();
    document.execCommand("copy");
  };

  return (
    <div className="form__group">
      <label className="form__label" htmlFor="inputBin">
        Result:
      </label>
      <input       
          className="form__input--text"
          name="inputBin"
          ref={inputEl}
          type="text"
          placeholder={exampleBin}
          value={bin}
          readOnly
        />
      <button className="btn" onClick={copyCodeToClipboard}>Copy!</button>
    </div>
  );
};

ResultExtrapolate.propTypes = {
  bin: PropTypes.string.isRequired,
  exampleBin: PropTypes.string.isRequired,
};
