export interface Client {
  id: number
  name: string;
  email: string;
  birthDate: Date;
  sex: string; //'M' | 'F' | 'N/A' | 'Outro'
}

export interface User {
  id: number;
  email: string;
  password: string;
}

export type ToastMessage = {
  message: string;
  type: "sucess" | "error" | "warning";
};