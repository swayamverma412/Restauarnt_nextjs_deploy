"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({
  isVisible,
  onClose,
  children,
  top = "0",
  bottom = "0",
  left = "0",
  right = "0",
}) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "modalWrapper") onClose();
  };
  return mounted
    ? createPortal(
        <div
          className={`fixed w-full h-full overflow-hidden inset-0 z-[110] flex items-center justify-center bg-black/30 backdrop-blur-sm`}
          id="modalWrapper"
          onClick={handleClose}
          style={{
            top: `${top}px`,
            bottom: `${bottom}px`,
            left: `${left}px`,
            right: `${right}px`,
          }}
        >
          {children}
        </div>,
        document.getElementById("portal-root")
      )
    : null;
};

export default Modal;
