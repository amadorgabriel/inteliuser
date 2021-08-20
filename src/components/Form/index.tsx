import { FormEvent, FormHTMLAttributes, ReactNode } from "react";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export function Form({ children, onSubmit, ...rest }: FormProps) {

  function validateForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      //Dispara warning toast message
      alert('Preencha os campos de forma correta')

      event.stopPropagation();
      return;
    }

    if (!!onSubmit) onSubmit(event);
  }

  return (
    <form
      onSubmit={validateForm}
      {...rest}
    >
      {children}
    </form>
  );
}
