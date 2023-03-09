import { initialProductFilters, useApp } from "@/context/AppContext";
import { appService } from "@/service";

function HeaderSearch() {
  const { setProducts, setSearchText, setProductFilters } = useApp();

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
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default HeaderSearch;
