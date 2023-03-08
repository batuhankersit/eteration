import SortFilters from "./SortFilters";
import TypeFilters from "./TypeFilters";

const brandFilters = [
  { label: "Apple", id: "apple" },
  { label: "Samsung", id: "samsung" },
  { label: "Huawei", id: "huawei" },
];

const modelFilters = [
  { label: "11", id: "11" },
  { label: "12", id: "12 Pro" },
  { label: "13 Pro Max", id: "13 Pro Max" },
];

function LayoutLeftSide() {
  return (
    <div className="col-span-1 ">
      <SortFilters />
      <TypeFilters title={"Brands"} items={brandFilters} />
      <TypeFilters title={"Models"} items={modelFilters} />
    </div>
  );
}

export default LayoutLeftSide;
