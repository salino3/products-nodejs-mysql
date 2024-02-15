import React from "react";
import { ProductProps, useProducts } from "@/core";
import './new-product-form.style.css';


export const NewProductForm: React.FC = () => {

    const {createProduct} = useProducts();


    const initialData = {
      name: "",
      company: "",
      quantity: null,
      code: "",
      price: null,
    };

    const [productData, setProductData] =
      React.useState<ProductProps>(initialData);


      
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


 const handleUpdate: React.FormEventHandler<HTMLFormElement> | undefined = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
       event.preventDefault();

       const newProduct = await createProduct(productData);
       console.log(newProduct)
  };


  //
  const handleReset = () => {
    setProductData(initialData); 
  };


  return (
    <div>
      <h2>Create new Product form</h2>
      <form
        onReset={handleReset}
        action="/api/products"
        className="createForm"
        onSubmit={handleUpdate}
      >
        <div>
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            id="name"
            name="name"
            required
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
            required
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
            required
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
            required
            onChange={handleChange("code")}
            value={productData?.code}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label> <br />
          <input
            type="number"
            id="price"
            min={0}
            name="price"
            required
            onChange={handleChange("price")}
            value={productData?.price || ""}
          />
        </div>
        <div className="boxBtnSubmit">
          <div className="boxBtnCreate">
            <button type="submit">Create Product</button>
          </div>
          <div className="boxBtnReset">
            <button type="reset">Reset Form</button>
          </div>
        </div>
      </form>
    </div>
  );
};
