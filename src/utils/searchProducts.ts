import { Product } from "@/types/product";

function removeAccents(texto:string) {
    return texto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
}

const equivalentCategories:{[key:string]:string} = {
    'moveis': 'furniture',
    'eletronico': 'electronic',
    'lampada': 'lamp',
    'cozinha': 'kitchen',
    'cadeira': 'chair',
    'cosmetico': 'cosmetic',
    // Adicione outros mapeamentos conforme necessário
};

function searchEquivalentCategory(keyword: string): string | null {
    const keywordSearched = keyword.toLowerCase();

    for (const key in equivalentCategories) {
        const normalizedKey = key.toLowerCase();
        if (normalizedKey.startsWith(keywordSearched) || normalizedKey.includes(keywordSearched)) {
            return equivalentCategories[key];
        }
    }
    return null;
}

export function searchProducts(arrayProducts:Product[], keyWord: string):Product[] {
    keyWord = removeAccents(keyWord.toLowerCase());
    const categorySearch = searchEquivalentCategory(keyWord);

    if(categorySearch){
        return arrayProducts.filter(x => x.category === categorySearch);;
    }

    return arrayProducts.filter((item: Product) => {
        const itemTitle = item.title.toLowerCase();
        const itemSpecs = item.specs.toLowerCase();
        return itemTitle.includes(keyWord) || itemSpecs.includes(keyWord);
    });

   
}