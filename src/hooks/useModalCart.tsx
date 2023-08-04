'use client'
import { ModalCartContext } from "@/context/modalCartContext";
import { useContext } from "react";

export function useModalCart(){
    return useContext(ModalCartContext);
}