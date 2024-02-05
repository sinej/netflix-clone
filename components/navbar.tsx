import NavbarItem from "@/components/navbarItem";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import MobileMenu from "@/components/mobileMenu";
import { useCallback, useState } from "react";
import AccountMenu from "@/components/accountMenu";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [accountMenu, setAccountMenu] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenu((current) => !current);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setAccountMenu((current) => !current);
  }, []);

  return (
    <div className="w-full fixed z-40">
      <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90">
        <img className="h-4 lg:h-7" src="/images/logo.png" alt="netflix logo" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by Languages" />
        </div>
        <div
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
          onClick={toggleMobileMenu}
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown className="text-white transition" />
          <MobileMenu visible={mobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>
          <div
            className="flex flex-row items-center gap-2 cursor-pointer relative"
            onClick={toggleAccountMenu}
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-blue.png" alt="profile" />
            </div>
            <BsChevronDown className="text-white transition" />
            <AccountMenu visible={accountMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
