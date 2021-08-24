import { ChangeEvent, useState } from "react";

export function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  function setInput(value:string){
    setValue(value);
  }

  function onChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setValue(event.target.value);
  }

  return { value, onChange, setInput };
}
