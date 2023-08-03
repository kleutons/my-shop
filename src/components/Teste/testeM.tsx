import { useEffect, useState } from "react";

interface TestMProps {
    showModal: boolean,
    setShowModal: (value:boolean) => void;
}
export function TestM({showModal, setShowModal} : TestMProps){
    
    const [cData, setCData] = useState(false);
    const handleClose = () => {
        setCData(false);
        setTimeout(function() {
            setShowModal(false)
          }, 500);
    };
    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            handleClose();
        }
    };
    

    useEffect(() => {

        if (showModal) {
        document.body.style.overflow = 'hidden';
        document.addEventListener("keydown", handleKeyPress);
        setTimeout(function() {
            setCData(true)
          }, 100);

        } else {
        document.body.style.overflow = 'unset';
        document.removeEventListener("keydown", handleKeyPress);
        }

        // Limpa o efeito ao desmontar o componente
        return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener("keydown", handleKeyPress);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showModal]);

    return(
        <>
            {showModal && 
                <>
                    <div data-show={cData} 
                     className="fixed bg-black/30 left-0 right-0 top-0 bottom-0 z-20 pointer-events-none  opacity-0 data-[show=true]:opacity-100 data-[show=true]:pointer-events-auto transition-all duration-500" onClick={handleClose}></div>
                    
                    <div data-show={cData} className="fixed z-30 w-1/2 top-0 h-full flex flex-col gap-2 bg-white min-h-[150px] p-6 pointer-events-none opacity-0 -right-full data-[show=true]:opacity-100 data-[show=true]:pointer-events-auto data-[show=true]:right-0 transition-all duration-500 delay-100">
                        <button onClick={handleClose} className="rounded-md bg-zinc-200 hove:bg-zinx-300 py-2 px-4">
                            X
                        </button>
                        Content Modal test
                    </div>
                </>
            }
            
        </>
    )
}