export interface ProductObjProps {

    id: string;
    name: string;
    quantity: number;
    code: string;
    price: number,
    comapny: string;
};

export interface ProductProps {
    data: ProductObjProps[]
};
