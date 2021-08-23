import { FormEvent, FormHTMLAttributes, ReactNode, useRef } from "react";
import { HtmlToastElement, Toast } from "../Toast";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export function Form({ children, onSubmit, ...rest }: FormProps) {
  const toastRef = useRef<HtmlToastElement>(null);

  function validateForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      if (toastRef.current) {
        toastRef.current.showToast(
          "Preencha os campos de forma correta",
          "error"
        );
      }

      event.stopPropagation();
      return;
    }

    if (!!onSubmit) onSubmit(event);
  }

  return (
    <>
      <form onSubmit={validateForm} {...rest}>
        {children}
      </form>

      <Toast ref={toastRef} />
    </>
  );
}
