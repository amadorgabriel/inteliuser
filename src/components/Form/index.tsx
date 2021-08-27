import {
  FormEvent,
  FormHTMLAttributes,
  ReactNode,
  useRef,
} from "react";
import { HtmlToastElement, Toast } from "../Toast";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  resetFormFields?: boolean;
}

export function Form({
  children,
  onSubmit,
  resetFormFields,
  ...rest
}: FormProps) {
  const toastRef = useRef<HtmlToastElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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
      <form ref={formRef} onSubmit={validateForm} {...rest}>
        {children}
      </form>

      <Toast ref={toastRef} />
    </>
  );
}
