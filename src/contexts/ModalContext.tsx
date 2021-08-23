import { createContext, ReactNode, useState } from "react";

interface ModalContextData {
  isActive: boolean;
  handleShowModal: () => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext({} as ModalContextData);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isActive, setIsActive] = useState(false);

  function handleShowModal() {
    setIsActive(!isActive);
  }

  return (
    <ModalContext.Provider value={{ isActive, handleShowModal }}>
      {children}
    </ModalContext.Provider>
  );
};
