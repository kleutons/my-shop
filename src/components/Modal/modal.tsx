
'use client'
import { ComponentProps, ReactNode, useEffect, useState } from "react";
import { SvgClose } from "@/assets/icons/close";
import { tv } from 'tailwind-variants'

const classVariable = tv({
  base: 'fixed z-30 bg-white text-gray-700 text-lg pointer-events-none opacity-0 -right-full data-[show=true]:opacity-100 data-[show=true]:pointer-events-auto data-[show=true]:right-0 transition-all duration-300 delay-100',
});


type IProps = {
  showModal: boolean;
  setShowModal: (show:boolean) => void;
  children: ReactNode;
}

type ModalProps = ComponentProps<'div'> & IProps;

export function Modal({ showModal, setShowModal, className, children } : ModalProps){ 

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
          <div data-show={cData} className='fixed z-20 top-0 bottom-0 left-0 right-0 bg-black/30 pointer-events-none  opacity-0 data-[show=true]:opacity-100 data-[show=true]:pointer-events-auto transition-all duration-500' onClick={handleClose} />
          
          <div data-show={cData} className={classVariable({className})}>
            <button type="button" className="h-8 w-8 absolute top-3 right-3 z-50" onClick={handleClose}>
              <SvgClose />
            </button>
            {children}
          </div>
        </>
       } 
      
      </>
    )
}