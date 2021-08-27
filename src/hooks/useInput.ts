import { ChangeEvent, useState } from "react";

export function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const [resetField, setResetField] = useState(false)

  function setInput(value:string){
    setValue(value);
  }

  function resetInput() {
    setResetField(true);
    setValue('')
  }

  function onChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setValue(event.target.value);
    setResetField(false);
  }

  return { value, onChange, setInput, resetField, resetInput };
}
