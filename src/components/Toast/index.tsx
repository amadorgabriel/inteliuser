import { forwardRef, useImperativeHandle, useState } from "react";
import "./styles.css";

type ToastVariantType = "sucess" | "error" | "warning";

export interface HtmlToastElement extends HTMLDivElement {
  showToast: (message: string, type: ToastVariantType) => void;
}

export const Toast = forwardRef((props, ref) => {
  const [a, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  useImperativeHandle(ref, () => ({
    showToast(message: string, type: ToastVariantType) {
      setShowToast(true);
      setToastMessage(message);
      setToastType(type);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    },
  }));

  return (
    <div
      className={`toastContainer ${toastType}`}
      id={a ? "show" : "hide"}
    >
      <p>{toastMessage}</p>
    </div>
  );
});
