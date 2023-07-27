

import Image from 'next/image';
import logo from '../../assets/img/logoWhite.png';
import Link from 'next/link';
import { SvgCard } from '@/assets/icons/card';
import { NavMenu } from './navMenu';
import { InputSearch } from './inputSearch';
import { BtnMenuMobile } from '../Buttons/btnMenuMobile';
import { BtnSearchMobile } from '../Buttons/btnSearchMobile';


export function Header(){

    return(
        <header className="h-14 sm:h-20 w-full sticky top-0 left-0 flex items-center z-10 shadow-md bg-cl-primary text-white shadow-black/20">
            <nav className="mx-auto container w-full flex justify-between items-center gap-2">
                <Link href='/' >
                    <Image alt='logo myshop' src={logo} width={128} height={40} className='w-[100px] min-w-[80px] sm:min-w-[128px]' />
                </Link>
                
                <div className='hidden sm:block w-[40%]'>
                    <InputSearch />
                </div>
                <div className="flex gap-4 items-center">
                    <ul className="hidden sm:flex gap-3 items-center text-xl">
                       <NavMenu />
                    </ul>

                    <BtnSearchMobile />
                    <button className='w-7 h-5 sm:w-8 sm:h-6'>
                        <SvgCard />
                    </button>
                    <BtnMenuMobile />
                </div>
            </nav>
        </header>
        
    )
}