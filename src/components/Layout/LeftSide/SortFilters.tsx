import { useApp } from "@/context/AppContext";

const sortFilters = [
  { label: "Old to new", id: "old-to-new" },
  { label: "New to old", id: "new-to-old" },
  { label: "Price high to low", id: "high-to-low" },
  { label: "Price low to high", id: "low-to-high" },
];

function SortFilters() {
  const { productFilters, setProductFilters } = useApp();

  const sortProducts = (value: string) => {
    const oldFilters = productFilters;
    oldFilters.sortType = value;
    const newFilters = {
      ...oldFilters,
    };
    setProductFilters(newFilters);
  };

  return (
    <div className="mb-5">
      <span className="text-[12px] text-grey">Sort By</span>
      <div className="flex flex-col items-start p-[15px] gap-[15px] bg-white mt-[6px]">
        {sortFilters.map((f) => {
          return (
            <div className="flex items-center mb-4" key={f.id}>
              <input
                id={f.id}
                type="radio"
                value={f.id}
                name="filter-radio"
                className="w-4 h-4"
                onChange={(e) => sortProducts(e.target.value)}
              />
              <label htmlFor={f.id} className="ml-2 text-sm font-medium">
                {f.label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SortFilters;
