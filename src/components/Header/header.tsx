

import Image from 'next/image';
import logo from '../../assets/img/logoWhite.png';
import Link from 'next/link';
import { NavMenu } from './navMenu';
import { InputSearch } from './inputSearch';
import { BtnSearchMobile } from '../Buttons/btnSearchMobile';
import { CartControl } from './cartControl';
import { MenuMobile } from './menuMobile';


export function Header(){

    return(
        <header className="h-14 md:h-20 w-full sticky top-0 left-0 flex items-center z-10 shadow-md bg-cl-primary text-white shadow-black/20">
            <nav className="mx-auto container w-full flex justify-between items-center gap-2">
                <Link href='/' >
                    <Image alt='logo myshop' src={logo} width={128} height={40} className='w-[100px] min-w-[80px] md:min-w-[128px]' />
                </Link>
                
                <div className='hidden md:block w-[40%]'>
                    <InputSearch />
                </div>
                <div className="flex gap-4 items-center">
                    <ul className="hidden md:flex gap-3 items-center text-xl">
                       <NavMenu />
                    </ul>

                    <BtnSearchMobile />
                    <CartControl />
                    <MenuMobile />
                </div>
            </nav>
        </header>
        
    )
}