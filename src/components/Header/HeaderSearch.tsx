import { initialProductFilters, useApp } from "@/context/AppContext";
import { appService } from "@/service";
import { useEffect, useState } from "react";

function HeaderSearch() {
  const { setProducts, setSearchText, setProductFilters, searchText } =
    useApp();
  const [isUserTyped, setIsUserTyped] = useState<boolean>(false);

  useEffect(() => {
    //render edilir edilmez istek atmaması için bunu ekledim
    if (isUserTyped) {
      const timeout = setTimeout(() => {
        onSearchChange(searchText);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [searchText]);

  const onSearchChange = async (val: string) => {
    setSearchText(val);
    if (val.length > 0) {
      await appService.filterProducts("name", val).then((response) => {
        setProducts(response);
      });
    } else {
      await appService
        .getAllProducts({ page: 1, limit: 12 })
        .then((response) => {
          setProductFilters(initialProductFilters);
          setProducts(response);
        });
    }
  };

  return (
    <input
      type={"text"}
      placeholder="Search"
      className="lg:w-[408px] w-full p-[8px]"
      onChange={(e) => {
        setSearchText(e.target.value);
        setIsUserTyped(true);
      }}
    />
  );
}

export default HeaderSearch;
