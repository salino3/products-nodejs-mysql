
interface GET_PRODUCTS {
  type: "GET_PRODUCTS";
  payload: ProductProps[];
};


interface GET_PRODUCT {
  type: "GET_PRODUCT";
  payload: ProductProps;
};



export type All_Actions = GET_PRODUCTS | GET_PRODUCT;


//
export interface ProductProps {
  id?: string;
  name: string;
  quantity: number | null;
  code: string;
  price: number | null;
  company: string;
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
  getProducts: () => Promise<void>;
  getOneProduct: (id: string) => Promise<void>;
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
    company: "",
  },
};

export const routesApp = {
  products: "http://localhost:5000/api/products",
};

