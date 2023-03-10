import Link from "next/link";
import HeaderSearch from "./HeaderSearch";
import HeaderUserInformations from "./HeaderUserInformations";

function Header() {
  return (
    <div className="w-full bg-primary lg:h-[50px] flex items-center justify-center">
      <div className="max-w-[1340px] flex items-center py-[5px] w-full justify-between lg:flex-row flex-col lg:gap-0 gap-2">
        <Link href="/" className="text-white font-bold">
          Eteration
        </Link>
        <HeaderSearch />
        <HeaderUserInformations />
      </div>
    </div>
  );
}

export default Header;
