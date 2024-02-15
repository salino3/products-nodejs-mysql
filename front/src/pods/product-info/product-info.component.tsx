
import React from "react";
import { useParams } from "react-router-dom";
import { GlobalContext, MyState, ProductProps } from "@/core";
import { useProducts } from "@/hooks";
import { CardProduct } from "@/common-app";
import "./product-info.styles.css";

export const ProductInfo: React.FC = () => {
  const { getOneProduct, state } = React.useContext<MyState>(GlobalContext);
  const { product } = state || {};
  const {updateProductData} = useProducts();

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
  let { value } = event.target;

  if (
    (key === "quantity" && parseInt(value) < 0) ||
    (key === "price" && parseInt(value) < 0)
  ) {
    value = 0;
  };
  setProductData({ ...productData, [key]: value });
};


  const handleUpdate: React.FormEventHandler<HTMLFormElement> | undefined = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
       event.preventDefault();

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
      <h1>Update Task</h1>
      {params.id}
      <CardProduct hidden={false} item={product} />
      <form action="/api/products" onSubmit={handleUpdate}>
        <div>
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange("name")}
            value={productData?.name}
          />
        </div>
        <div>
          <label htmlFor="company">Company</label> <br />
          <input
            type="text"
            id="company"
            name="company"
            onChange={handleChange("company")}
            value={productData?.company}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity</label> <br />
          <input
            type="number"
            id="quantity"
            min={0}
            name="quantity"
            onChange={handleChange("quantity")}
            value={productData?.quantity || ""}
          />
        </div>
        <div>
          <label htmlFor="code">Code</label> <br />
          <input
            type="text"
            id="code"
            name="code"
            onChange={handleChange("code")}
            value={productData?.code}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label> <br />
          <input
            type="number"
            id="price"
            name="price"
            min={0}
            onChange={handleChange("price")}
            value={productData?.price || ""}
          />
        </div>
        <br />
        <button type="submit">update Product</button>
      </form>
    </div>
  );
};