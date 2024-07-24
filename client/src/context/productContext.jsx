import { createContext, useContext, useState } from "react";
import {getProductRequest} from "../api/products.js";

const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [product, setProduct] = useState([]);

    const getProduct = async () => {
        const res = await getProductRequest();
        setProduct(res.data);
    };

    return (
        <ProductContext.Provider
        value={{
            product,
            getProduct,
        }}
        >
        {children}
        </ProductContext.Provider>
    )
}

