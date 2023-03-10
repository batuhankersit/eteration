import { useApp } from "@/context/AppContext";
import useOnScreen from "@/hooks/useOnScreen";
import { IProduct } from "@/models/product.model";
import { appService } from "@/service";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function ProductList() {
  const {
    products,
    setProducts,
    productFilters,
    setProductFilters,
    searchText,
    setNewItemToCart,
  } = useApp();
  const [hideMoreButton, setHideMoreButton] = useState(false);

  const $loadMoreButton = React.useRef(null);
  const isOnScreen = useOnScreen($loadMoreButton, "100px");

  useEffect(() => {
    let isSubscripted = true;
    if (isOnScreen && isSubscripted) {
      getNewProducts();
    }
    return () => {
      isSubscripted = false;
    };
  }, [isOnScreen]);

  const getNewProducts = async () => {
    if (searchText.length === 0) {
      const page = products.length === 0 ? 1 : productFilters?.page + 1;
      const newFilters = {
        ...productFilters,
        page,
      };
      await appService.getAllProducts({ page, limit: 12 }).then((res) => {
        if (res.length < 12) setHideMoreButton(true);
        setProductFilters(newFilters);
        setProducts([...products, ...res]);
      });
    } else {
      setHideMoreButton(false);
    }
  };

  const isFilterContains = (target: any, pattern: string[]) => {
    var value = 0;
    if (pattern.length === 0) return true;
    pattern.forEach(function (word: string) {
      value = value + target.includes(word || "");
    });
    return value === 1;
  };

  const sortByType = (item1: IProduct, item2: IProduct) => {
    switch (productFilters.sortType) {
      case "old-to-new":
        return (
          new Date(item1.createdAt).valueOf() -
          new Date(item2.createdAt).valueOf()
        );
      case "new-to-old":
        return (
          new Date(item2.createdAt).valueOf() -
          new Date(item1.createdAt).valueOf()
        );
      case "high-to-low":
        return Number(item2.price) - Number(item1.price);
      case "low-to-high":
        return Number(item1.price) - Number(item2.price);
      default:
        return (
          new Date(item2.createdAt).valueOf() -
          new Date(item1.createdAt).valueOf()
        );
    }
  };
  //filtreleme işlemlerini normalde servisten yapıyoruz fakat mockapi dökümantasyonlarını incelediğimde multiple filtrelemeyi desteklemediğini gördüm o yüzden burada kendim filtreleme ve sıralama işlemlerini yaptım
  return (
    <div className="gap-[30px] w-full lg:grid lg:grid-cols-4">
      {products
        .sort((item1: IProduct, item2: IProduct) => sortByType(item1, item2))
        .filter((x) => isFilterContains(x.brand, productFilters.brandFilters))
        .filter((x) => isFilterContains(x.model, productFilters.modelFilters))
        .map((x: IProduct) => (
          <div
            className="col-span-1 p-[10px] bg-white cursor-pointer"
            key={x.id}
          >
            <Link href={`/products/${x.id}`}>
              {/* Ürünü fotoğrafı */}
              <div className="w-full h-[150px] relative mb-[15px]">
                <Image
                  quality={100}
                  title={x?.name}
                  src={x?.image}
                  alt={x?.name}
                  loading="lazy"
                  fill
                />
              </div>
              {/* ürün bilgileri */}
              <p className="text-primary text-[14px] mb-[15px]">{x.price}₺</p>
              <p className="text-[14px] mb-[15px]">{x.name}</p>
            </Link>
            <button
              onClick={() => setNewItemToCart(x)}
              className="bg-primary text-white w-full rounded px-4 py-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
      {!hideMoreButton ? <div ref={$loadMoreButton}>&nbsp;</div> : null}
    </div>
  );
}

export default ProductList;
