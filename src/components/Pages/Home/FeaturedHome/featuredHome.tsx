import HomeImg from '@/assets/img/home/LiveComfortably.jpg';
import Skincare from '@/assets/img/home/Skincare.jpg';
import Kitchen from '@/assets/img/home/Kitchen.jpg'; 
import Electronics from '@/assets/img/home/Electronics.jpg';
import Image from 'next/image';
import { FeaturedImg } from './featuredImg';

interface FeaturedHomeProps {

}
export function FeaturedHome(props : FeaturedHomeProps){
    return(
        <>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 h-[500px] gap-4 my-4">
            <div className="relative bg-gray-200 md:row-span-2 md:col-span-2">
                <FeaturedImg name='Casa' src={HomeImg} />
            </div>
            <div className="relative md:row-span-2">
                <FeaturedImg name='Beleza' src={Skincare} />
            </div>
            <div className="relative">
                <FeaturedImg name='Cozinha' src={Kitchen} />
            </div>
            <div className="relative">
                <FeaturedImg name='Eletrônicos' src={Electronics} />
            </div>
        </div>
        </>
    )
}