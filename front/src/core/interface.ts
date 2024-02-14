
interface GET_PRODUCTS {
  type: "GET_PRODUCTS";
  payload: ProductProps[];
};

export type All_Actions = GET_PRODUCTS;


//
export interface ProductProps {

    id?: string;
    name: string;
    quantity: number;
    code: string;
    price: number,
    comapny: string;
};


//
export interface State {
  theme: string;
  products: ProductProps[];
  product: ProductProps;
};

//
export interface MyState {
  state: State;
  dispatch: React.Dispatch<All_Actions>;
};

//
export const initialState = {
    theme: "light",
    products: [],
    product: {
    id: "",
    name: "",
    quantity: 0,
    code: "",
    price: 0,
    comapny: ""
    }
};
