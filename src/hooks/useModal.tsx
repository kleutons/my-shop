'use client'
import { ModalContext } from "@/context/modalContext";
import { useContext } from "react";

export function useModal(){
    return useContext(ModalContext);
}