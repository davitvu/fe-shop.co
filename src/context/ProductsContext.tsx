import { createContext, useEffect, useState, type ReactNode } from "react"

type ProductsContextType = {

}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [listProducts, setListProduct] = useState();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [page, setPage] = useState(1);


    const value = {

    }

    useEffect(() => {
        setIsLoading(true);
        try {

        } catch (error) {

        } finally {
            setIsLoading(false);
        }
    }, []);

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}