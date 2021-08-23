import { FocusEvent, SelectHTMLAttributes, useState } from "react";
import { useInput } from "../../../hooks/useInput";

import "../styles.css";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  children: React.ReactNode;
}

export function Select({ label, children, ...rest }: SelectProps) {
  const value = useInput("");
  const isRequiredField = rest.required;

  const [isValid, setIsValid] = useState<Boolean>();
  const [validationMessage, setValidationMessage] = useState("");

  function validateInput(event: FocusEvent<HTMLSelectElement>) {
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

      <div
        className={
          isValid === undefined
            ? "select"
            : isValid
            ? "select valid"
            : "select invalid"
        }
      >
        <select {...rest} {...value} onBlur={event => validateInput(event)}>
          {children}
        </select>
      </div>

      {validationMessage && (
        <p className="error-message">{validationMessage}</p>
      )}
    </div>
  );
}
