import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      open() {
        if (dialog.current) {
          dialog.current.showModal();
        }
      },
    }),
    []
  );

  return createPortal(
    <dialog ref={dialog}>
      {children}
      <form method="dialog">
        <button type="button" onClick={() => dialog.current.close()}>
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root") || document.body // Fallback in case modal-root doesn't exist
  );
});

export default Modal;
