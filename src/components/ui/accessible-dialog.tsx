"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/icon";

export function AccessibleDialog({
  open,
  onClose,
  titleId,
  closeLabel,
  className = "",
  children,
}: {
  open: boolean;
  onClose: () => void;
  titleId: string;
  closeLabel: string;
  className?: string;
  children: React.ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !open) return;

    returnFocusRef.current = document.activeElement as HTMLElement;
    dialog.showModal();

    return () => {
      if (dialog.open) dialog.close();
      returnFocusRef.current?.focus();
    };
  }, [open]);

  const requestClose = () => {
    if (isClosing) return;
    setIsClosing(true);
    window.setTimeout(onClose, 180);
  };

  if (!open) return null;

  return (
    <dialog
      ref={dialogRef}
      className={`modal-shell ${isClosing ? "is-closing" : ""} ${className}`}
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        requestClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) requestClose();
      }}
    >
      <button
        type="button"
        className="modal-close"
        aria-label={closeLabel}
        onClick={requestClose}
      >
        <Icon name="close" className="size-5" />
      </button>
      {children}
    </dialog>
  );
}
