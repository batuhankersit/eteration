import { ICart } from "@/models/cart.model";
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
  cart: ICart[];
  products: IProduct[];
  setProducts: (val: IProduct[]) => void;
  productFilters: IProductFilter;
  setProductFilters: (val: IProductFilter) => void;
  searchText: string;
  setSearchText: (val: string) => void;
  setNewItemToCart: (val: IProduct) => void;
  updateItemOnCart: (val: ICart, type: string) => void;
};

const defaultValue: AppContextProps = {
  cart: [],
  products: [],
  setProducts: () => {},
  productFilters: initialProductFilters as IProductFilter,
  setProductFilters: () => {},
  searchText: "",
  setSearchText: () => {},
  setNewItemToCart: () => {},
  updateItemOnCart: () => {},
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
  const [cart, setCart] = useState<ICart[]>([]);
  const [searchText, setSearchText] = useState<string>(defaultValue.searchText);

  useEffect(() => {
    if (window.localStorage.getItem("cart")) {
      const storedCart =
        JSON.parse(window.localStorage.getItem("cart") || "") || [];
      setCart(storedCart);
    }
  }, []);

  const setNewItemToCart = (item: IProduct) => {
    const cartList = cart;
    const newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      count: 1,
    };
    const itemIndex = cartList.findIndex((c) => c.id === item.id);
    if (itemIndex < 0) {
      updateStates([...cartList, newItem]);
    } else {
      updateItemOnCart(newItem, "positive");
    }
  };

  const updateItemOnCart = (item: ICart, type: string) => {
    const cartList = cart;
    const itemIndex = cartList.findIndex((c) => c.id === item.id);
    const isCountNegative = cartList[itemIndex].count <= 1;
    if (isCountNegative && type === "negative") {
      cartList.splice(itemIndex, 1);
    } else {
      cartList[itemIndex] = {
        ...item,
        count:
          type === "positive"
            ? cartList[itemIndex].count + 1
            : cartList[itemIndex].count - 1,
      };
    }
    updateStates(cartList);
  };

  const updateStates = (value: ICart[]) => {
    setCart([...value]);
    updateCartListOnStorage([...value]);
  };

  const updateCartListOnStorage = (value: ICart[]) => {
    window.localStorage.setItem("cart", JSON.stringify(value));
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        products,
        setProducts,
        productFilters,
        setProductFilters,
        searchText,
        setSearchText,
        setNewItemToCart,
        updateItemOnCart,
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
