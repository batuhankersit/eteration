import SortFilters from "./SortFilters";
import TypeFilters from "./TypeFilters";

const brandFilters = [
  { label: "Tesla", id: "Tesla" },
  { label: "Polestar", id: "Polestar" },
  { label: "Rolls Royce", id: "Rolls Royce" },
  { label: "Volkswagen", id: "Volkswagen" },
  { label: "Mini", id: "Mini" },
];

const modelFilters = [
  { label: "Roadster", id: "Roadster" },
  { label: "Grand Cherokee", id: "Grand Cherokee" },
  { label: "Durango", id: "Durango" },
  { label: "Fortwo", id: "Fortwo" },
  { label: "XC90", id: "XC90" },
];

function LayoutLeftSide() {
  return (
    <div className="col-span-1 ">
      <SortFilters />
      <TypeFilters
        title={"Brands"}
        searchValue={"brandFilters"}
        items={brandFilters}
      />
      <TypeFilters
        title={"Models"}
        searchValue={"modelFilters"}
        items={modelFilters}
      />
    </div>
  );
}

export default LayoutLeftSide;
