import { HTMLProps, ReactNode, useEffect, useRef, useState } from "react";

import "./styles.css";

interface ModalProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  isActive: boolean;
}

export function Modal({ children, isActive, ...rest }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const contentModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      setIsOpen(isActive)
  }, [isActive])
  

  function handleClickOutsideModal(event: React.MouseEvent<HTMLDivElement>) {
    const contentArea = event.target as HTMLDivElement;
    if (
      contentModalRef.current &&
      !contentModalRef.current.contains(contentArea)
    ) {
      setIsOpen(false);
    }
  }

  return (
    <div
      className={`modalContainer ${isOpen ? "show" : "hide"}`}
      onClick={event => handleClickOutsideModal(event)}
      {...rest}
    >
      <div ref={contentModalRef} className="modalContent">
        {children}
      </div>
    </div>
  );
}
