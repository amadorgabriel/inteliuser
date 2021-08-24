import { HTMLProps, ReactNode, useRef } from "react";
import { useModal } from "../../hooks/useModal";

import "./styles.css";

interface ModalProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export function Modal({ children, ...rest }: ModalProps) {
  const { isActive, handleShowModal } = useModal();

  const contentModalRef = useRef<HTMLDivElement>(null);

  function handleClickOutsideModal(event: React.MouseEvent<HTMLDivElement>) {
    const contentArea = event.target as HTMLDivElement;
    if (
      contentModalRef.current &&
      !contentModalRef.current.contains(contentArea)
    ) {
      handleShowModal();
    }
  }

  return (
    <div
      className={`modalContainer ${isActive ? "show" : "hide"}`}
      onClick={event => handleClickOutsideModal(event)}
      {...rest}
    >
      <div ref={contentModalRef} className="modalContent">
        {children}
      </div>
    </div>
  );
}
