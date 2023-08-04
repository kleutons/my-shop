'use client'
import React, { createContext, useState, ReactNode } from "react";

interface IModalCartContext {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface IModalCartProvider {
  children: ReactNode;
}

export const ModalCartContext = createContext<IModalCartContext>({
  isOpen: false,
  setIsOpen: () => {},
});

export const ModalCartProvider: React.FC<IModalCartProvider> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSetIsOpen = (newIsOpen: boolean) => {
    setIsOpen(newIsOpen);
  };

  return (
    <ModalCartContext.Provider value={{ isOpen, setIsOpen: handleSetIsOpen }}>
      {children}
    </ModalCartContext.Provider>
  );
};