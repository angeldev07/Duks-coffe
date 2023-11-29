import { useState } from "react";

export const useModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = (callback = () => {})  => {
    setOpen(true);
    if (typeof callback === "function") callback();
  };

  const handleClose = (callback = () => {})  => {
    setOpen(false);
    if (typeof callback === "function") callback();
  };

  const handleAccept = (callback = () => {})  => {
    setOpen(false);
    if (typeof callback === "function") callback();
  };

  return {
    open,
    handleOpenModal,
    handleClose,
    handleAccept,
  };
};
