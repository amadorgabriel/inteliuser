import { HTMLProps, ReactNode, useEffect, useRef, useState } from "react";

import "./styles.css";

interface ModalProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  isActive: boolean;
  onClose?: () => void;
  onCloseClickOutside?: (isActive: boolean) => void;
}

export function Modal({
  children,
  isActive,
  onClose,
  onCloseClickOutside,
  ...rest
}: ModalProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const contentModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(isActive);
  }, [isActive]);

  useEffect(() => {
    if (!isOpen && onClose) {
      onClose();
    }
  }, [isOpen, onClose]);

  function handleClickOutsideModal(event: React.MouseEvent<HTMLDivElement>) {
    const contentArea = event.target as HTMLDivElement;
    if (
      contentModalRef.current &&
      !contentModalRef.current.contains(contentArea) &&
      onCloseClickOutside
    ) {
      onCloseClickOutside(isActive);
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
