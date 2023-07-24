'use client'
import React, { createContext, useState, ReactNode } from "react";

interface IModalContext {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface IModalProvider {
  children: ReactNode;
}

export const ModalContext = createContext<IModalContext>({
  isOpen: false,
  setIsOpen: () => {},
});

export const ModalProvider: React.FC<IModalProvider> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSetIsOpen = (newIsOpen: boolean) => {
    setIsOpen(newIsOpen);
  };

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen: handleSetIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};