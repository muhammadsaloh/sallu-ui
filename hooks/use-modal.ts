import React, { useState } from "react";

interface IUseModal {
  initialState: boolean;
}

const useModal: React.FC<IUseModal> = (initialState = false) => {
  const [modalOpen, setModalOpen] = useState(initialState);
  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);
  const toggle = () => setModalOpen(!modalOpen);

  return {
    open,
    close,
    toggle,
    isActive: modalOpen,
  };
};

export default useModal;
