export const fetchApi = async<T>(revalidate?: number): Promise<T> => {

    const urlFetch = process.env.API_URL!;
    const response = await fetch(urlFetch, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        next:{
            revalidate
        }
    })

    const { products } = await response.json();

    return products;
}
