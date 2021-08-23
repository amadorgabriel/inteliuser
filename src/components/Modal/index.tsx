import { ReactNode, useRef } from "react";
import { useModal } from "../../hooks/useModal";

import "./styles.css";

interface ModalProps {
  children: ReactNode;
}

export function Modal({ children }: ModalProps) {
  const { isActive, handleShowModal } = useModal();

  const contentModalRef = useRef<HTMLDivElement>(null);

  function handleClickOutsideModal(event: React.MouseEvent<HTMLDivElement>) {
    const contentArea = event.target as HTMLDivElement;
    if (
      contentModalRef.current &&
      !contentModalRef.current.contains(contentArea)
    ) {
      handleShowModal()
    }
  }

  return (
    <div
      className={`modalContainer ${isActive ? "show" : "hide"}`}
      onClick={event => handleClickOutsideModal(event)}
    >
      <div ref={contentModalRef} className="modalContent">
        {children}
      </div>
    </div>
  );
}
