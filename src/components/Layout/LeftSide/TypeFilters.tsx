import { useState } from "react";

interface Props {
  title: string;
  items: any[];
}

function decodeTurkishCharacters(text: string) {
  return text
    .replace(/Ğ/gim, "G")
    .replace(/Ü/gim, "U")
    .replace(/Ş/gim, "S")
    .replace(/İ/gim, "I")
    .replace(/Ö/gim, "O")
    .replace(/Ç/gim, "C")
    .replace(/ğ/gim, "g")
    .replace(/ü/gim, "u")
    .replace(/ş/gim, "s")
    .replace(/ı/gim, "i")
    .replace(/ö/gim, "o")
    .replace(/ç/gim, "c");
}

function TypeFilters({ title, items }: Props) {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="mb-5">
      <span className="text-[12px] text-grey">{title}</span>
      <div className="flex flex-col items-start p-[15px] gap-[15px] bg-white mt-[6px]">
        <input
          type={"text"}
          className="bg-black-light border-0 focus:outline-none py-3 px-2 w-full"
          placeholder="Search"
          value={searchText}
          onChange={(e) =>
            setSearchText(decodeTurkishCharacters(e.target.value))
          }
        />
        {items
          .filter((it) =>
            it.label.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((item) => {
            return (
              <div className="flex items-center mb-4" key={item.id}>
                <input
                  id={item.id}
                  type="checkbox"
                  value={item.id}
                  className="w-4 h-4"
                />
                <label htmlFor={item.id} className="ml-2 text-sm font-medium">
                  {item.label}
                </label>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TypeFilters;
