'use client'
import { TestM } from "@/components/Teste/testeM";
import { useState } from "react"

interface TestePageMProps {

}
export default function TestePageM(props : TestePageMProps){

    const [ showModal, setShowModal ] = useState(false);

    return(
        <div className="py-6 text-lg min-h-screen">
            
            <button onClick={() => setShowModal(true)} className="rounded-md bg-zinc-200 hover:bg-zinc-300 py-2 px-4"> Abri Modal </button>
            

            <TestM showModal={showModal} setShowModal={setShowModal} />

        </div>
    )
}