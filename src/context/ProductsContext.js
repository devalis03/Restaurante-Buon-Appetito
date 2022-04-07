import {createContext, useState} from "react"

export const ProductsContext = createContext();

const ProductsProvider = ({children}) => {

    const [products] = useState ([]);
    
    return ( 
        <ProductsContext.Provider value={{
            products,
            // addProducts,
            // deleteProducts,
        }} >
            {children}

        </ProductsContext.Provider>
     );
}
 
export default ProductsProvider;

