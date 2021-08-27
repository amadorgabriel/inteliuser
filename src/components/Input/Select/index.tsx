import { FocusEvent, SelectHTMLAttributes, useEffect, useState } from "react";

import "../styles.css";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  resetField?: boolean;
  children: React.ReactNode;
}

export function Select({ label, children, resetField, ...rest }: SelectProps) {
  const isRequiredField = rest.required;
  const [isValid, setIsValid] = useState<Boolean>();
  const [validationMessage, setValidationMessage] = useState("");

  //Limpa validação do input
  useEffect(() => {
    if (resetField) {
      setIsValid(undefined);
      setValidationMessage("");
    }
  }, [resetField]);

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
        <select {...rest} onBlur={event => validateInput(event)}>
          {children}
        </select>
      </div>

      {validationMessage && (
        <p className="error-message">{validationMessage}</p>
      )}
    </div>
  );
}
