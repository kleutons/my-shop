interface percentValueProps {
    price: number;
    originalPrice: number;
}
export function percentValue({price, originalPrice} : percentValueProps){
    
    if ( price <= 0 || originalPrice <= 0) {
        // 'Os valores devem ser números positivos maiores que zero.'
        return null
    }else
    if(price > originalPrice){
        //'Preço Original tem que ser maior que preço de Desconto'
        return null;
    }
    const percent = Math.round(((originalPrice - price) / originalPrice) * 100);
    return percent;
}

export function ShuffleArray<T>(array:T[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  
    return array;
}

export const nameCategory = [
    {
        0: 'Categorias',
    },
    {
        'furniture': 'Móveis'
    },
    {
        'electronic': 'Eletrônicos'
    },
    {
        'lamp': 'Lâmpadas'
    },
    {
        'kitchen':'Cozinha'
    },
    {
        'chair': 'Cadeiras'
    },
    {
        'cosmetic': 'Cosméticos'
    }
    
]

export function getCategoryName(slug?:string | number){
    const categoryObject = nameCategory.find((item) => item.hasOwnProperty(slug!));
    return categoryObject ? Object.values(categoryObject)[0] : 'Categorias';
}