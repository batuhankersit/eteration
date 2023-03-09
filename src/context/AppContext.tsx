import { IProduct } from "@/models/product.model";
import React, { ReactNode, useContext, useEffect, useState } from "react";

export interface IProductFilter {
  page: number;
  limit: number;
  brandFilters: string[];
  modelFilters: string[];
  sortType: string;
}

export const initialProductFilters = {
  page: 1,
  limit: 12,
  brandFilters: [],
  modelFilters: [],
  sortType: "old-to-new",
};

export type AppContextProps = {
  cart: [];
  updateCartList: (val: []) => void;
  products: IProduct[];
  setProducts: (val: IProduct[]) => void;
  productFilters: IProductFilter;
  setProductFilters: (val: IProductFilter) => void;
  searchText: string;
  setSearchText: (val: string) => void;
};

const defaultValue: AppContextProps = {
  cart: [],
  updateCartList: () => {},
  products: [],
  setProducts: () => {},
  productFilters: initialProductFilters as IProductFilter,
  setProductFilters: () => {},
  searchText: "",
  setSearchText: () => {},
};

interface IProps {
  children: ReactNode;
}

const AppContext = React.createContext<AppContextProps>(defaultValue);
export const AppProvider = ({ children }: IProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productFilters, setProductFilters] = useState<IProductFilter>(
    defaultValue.productFilters
  );
  const [cart, setCart] = useState<[]>([]);
  const [searchText, setSearchText] = useState<string>(defaultValue.searchText);

  useEffect(() => {
    if (window.localStorage.getItem("cart")) {
      const storedCart =
        JSON.stringify(window.localStorage.getItem("cart")) || [];
      setCart(storedCart as []);
    }
  }, []);

  const updateCartList = (value: []) => {
    window.localStorage.setItem("cart", JSON.stringify(value));
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        updateCartList,
        products,
        setProducts,
        productFilters,
        setProductFilters,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

export function useApp() {
  return useContext(AppContext);
}
