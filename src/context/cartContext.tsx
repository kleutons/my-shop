
import { ReactNode, createContext } from 'react';

const cartLocalName = 'cartMyShop' as string;
const cartLimit = 30 as number;


type ICartContext ={

}

type ICartProvider ={
    childrem: ReactNode;
}

export const CartContext = createContext<ICartContext>({

});