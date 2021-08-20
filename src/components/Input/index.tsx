import { FocusEvent, InputHTMLAttributes, useState } from "react";
import { useInput } from "../../hooks/useInput";

import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, ...rest }: InputProps) {
  const value = useInput("");

  const [isValid, setIsValid] = useState<Boolean>();
  const [validationMessage, setValidationMessage] = useState("");

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
      {label && <p className="label">{label}</p>}
      <input
        {...rest}
        {...value}
        className={isValid === undefined ? "" : isValid ? "valid" : "invalid"}
        onBlur={event => validateInput(event)}
      />

      {validationMessage && (
        <p className="error-message">{validationMessage}</p>
      )}
    </div>
  );
}
