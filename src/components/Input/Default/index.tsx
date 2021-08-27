import { FocusEvent, InputHTMLAttributes, useEffect, useState } from "react";

import "../styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  resetField?: boolean
}

export function Input({ label, resetField, ...rest }: InputProps) {
  const isRequiredField = rest.required;
  const [isValid, setIsValid] = useState<Boolean>();
  const [validationMessage, setValidationMessage] = useState("");

  //Limpa validação do input
  useEffect(() => {
    if(resetField) {
      setIsValid(undefined)
      setValidationMessage('')
    }
  }, [resetField])

  function validateInput(event: FocusEvent<HTMLInputElement>) {
    const input = event.target;

    if (!input.checkValidity()) {
      setValidationMessage(event.target.validationMessage);
    } else {
      setValidationMessage("");
    }

    setIsValid(input.checkValidity());
  }

  return (
    <div className="input-wrapper">
      {label && (
        <p className={isRequiredField ? "label required" : "label"}>{label}</p>
      )}
      <input
        {...rest}
        className={isValid === undefined ? "" : isValid ? "valid" : "invalid"}
        onBlur={event => validateInput(event)}
      />

      {validationMessage && (
        <p className="error-message">{validationMessage}</p>
      )}
    </div>
  );
}
