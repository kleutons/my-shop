interface percentValueProps {
    price: number;
    priceSale: number;
}
export function percentValue({price, priceSale} : percentValueProps){
    
    if ( price <= 0 || priceSale <= 0) {
        // 'Os valores devem ser números positivos maiores que zero.'
        return null
    }else
    if(price < priceSale){
        //'Preço total é maior que preço de Desconto'
        return null;
    }
    const percent = Math.round(((price - priceSale) / price) * 100);
    return percent;
}

export function ShuffleArray<T>(array:T[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  
    return array;
  }