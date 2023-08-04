'use client'
import { ProductCartAdd, ProductInCart } from '@/types/product';
import { ReactNode, createContext, useState, useEffect } from 'react';

const cartLocalName = 'cartMyShop' as string;
const cartLimit = 30 as number;


type ICartContext ={
    cartItems: ProductInCart[];
    addToCart: (item: ProductCartAdd) => void;
    updateQuantity: (id:number, quantity:number) => void;
    removeFromCart: (item: ProductInCart) => void;
    clearCart: () => void;
}

type ICartProvider ={
    children: ReactNode;
}

export const CartContext = createContext<ICartContext>({
    cartItems: [],
    addToCart: () => {},
    updateQuantity: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
});

export const CartProvider = ({children}:ICartProvider) =>{
    const [cartItems, setCartItems] = useState<ProductInCart[]>([]);

    useEffect(() =>{
        const storedCartItems = localStorage.getItem(cartLocalName);
        if(storedCartItems) {
            setCartItems(JSON.parse(storedCartItems))
        }
    }, []);

    useEffect(() =>{
        localStorage.setItem(cartLocalName, JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item: ProductCartAdd) =>{
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
            if(existingItem) {
                 // Item already exists in the cart, increase the quantity
                 return prevItems.map((cartItem) => cartItem.id == item.id ? 
                    { ...cartItem, quantity: cartItem.quantity + item.quantity }
                    : cartItem
                 );
            }else{
                return [...prevItems, {...item, quantity: item.quantity}];
            }
        });
    }

    const updateQuantity = (id:number, quantity:number) => {
        const newValue = cartItems.map(item => {
            if( item.id !== id) return item;
            if(quantity <= cartLimit){
                return { ...item, quantity: quantity}
            }else{
                return item;
            }
        });

        setCartItems(newValue);
        localStorage.setItem(cartLocalName, JSON.stringify(newValue));
    }

    const removeFromCart = (item: ProductInCart) => {
        const confir = confirm('Deseja Excluir o Item do Carrinho?');
        if(confir){
            setCartItems((prevItems) => 
                prevItems.filter((value) => value.id !== item.id)
            );
        }
    }

    const clearCart = () => {
        setCartItems([]);
    }

    return(
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                updateQuantity,
                removeFromCart,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};