const sortFilters = [
  { label: "Old to new", id: "old-to-new" },
  { label: "New to old", id: "new-to-old" },
  { label: "Price high to low", id: "hight-to-low" },
  { label: "Price low to high", id: "low-to-high" },
];

function SortFilters() {
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
