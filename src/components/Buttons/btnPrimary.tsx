interface BtnPrimaryProps {
    text: string;
}
export function BtnPrimary({text} : BtnPrimaryProps){
    return(
        <button className="bg-black border-2 border-black p-2 text-white font-bold text-xl uppercase hover:bg-transparent hover:text-black hover:border-2 hover:border-black transition-all duration-500">
            {text}
        </button>
    )
}