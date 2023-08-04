'use client'
import { SvgSearch } from "@/assets/icons/search";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export function InputSearch(){
    const router = useRouter();
    const [word, setWord] = useState('');
    const inputSearch = useRef<HTMLInputElement>(null);

    const handleSearch = () => {
       if(word){
        router.push('/search?keyword='+word);
       }else{
         alert('Digite o que deseja pesquisar.');
         inputSearch.current?.focus();
       }
    }

    const handleValue = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setWord(value);
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          handleSearch();
        }
      }

    return(
        <div className='bg-white p-2 flex w-full items-center gap-2 border-s border-gray-400 ml-2'>
            <input 
            ref={inputSearch}
            onChange={handleValue}
            onKeyDown ={handleKeyPress}
            type="text" 
            placeholder='Buscar Produto' 
            className='w-full focus:outline-none text-orange-900 text-lg' />
            <div onClick={handleSearch} className='min-h-[22px] min-w-[22px]  text-orange-900'>
                <SvgSearch />
            </div>
        </div>
    )
}