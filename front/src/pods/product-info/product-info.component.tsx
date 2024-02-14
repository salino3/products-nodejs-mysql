
import React from "react";
import { useParams } from "react-router-dom";
import { GlobalContext, MyState, ProductProps } from "@/core";
import { CardProduct } from "@/common-app";
import "./product-info.styles.css";

export const ProductInfo: React.FC = () => {
  const { getOneProduct, state, updateProductData, getProducts } = React.useContext<MyState>(GlobalContext);
  const { product } = state || {};

  const params = useParams();

  const initialData = {
    name: "",
    company: "",
    quantity: 0,
    code: "",
    price: 0,
  };

  const [productData, setProductData] = React.useState<ProductProps>(initialData);


const handleChange = (key: keyof ProductProps) => (event: any) => {

    const {value} = event.target;
    setProductData({...productData, [key]: value})
  };


  const handleUpdate: React.FormEventHandler<HTMLFormElement> | undefined = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
       event.preventDefault();

    console.log("Update!", productData);
    updateProductData(productData)
    
  };

  React.useEffect(() => {
    if (params && params?.id && productData == initialData) {
      getOneProduct(params?.id);
    };
    
    setProductData(product);
  }, [params?.id, product]);


  return (
    <div className="container">
      {params.id}
      <CardProduct hidden={false} item={product} />
      {productData?.price}
      <form action="/api/product" onSubmit={handleUpdate}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange("name")}
            value={productData?.name}
          />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            onChange={handleChange("company")}
            value={productData?.company}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            onChange={handleChange("quantity")}
            value={productData?.quantity}
          />
        </div>
        <div>
          <label htmlFor="code">Code</label>
          <input
            type="text"
            id="code"
            name="code"
            onChange={handleChange("code")}
            value={productData?.code}
          />
        </div>
        <div>
          <label htmlFor="price">Proce</label>
          <input
            type="number"
            id="price"
            name="price"
            onChange={handleChange("price")}
            value={productData?.price}
          />
        </div>
        <button type="submit">update Product</button>
      </form>
    </div>
  );
};