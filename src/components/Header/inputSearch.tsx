import { SvgSearch } from "@/assets/icons/search";

interface InputSearchProps {

}
export function InputSearch(props : InputSearchProps){
    return(
        <div className='bg-white border-2 border-white p-2 flex w-full items-center gap-2'>
            <input type="text" placeholder='Burscar Produto' className='w-full focus:outline-none text-orange-900 text-lg' />
            <div className='min-h-[18px] min-w-[18px] sm:min-h-[22px] sm:min-w-[22px] text-orange-900'>
                <SvgSearch />
            </div>
        </div>
    )
}