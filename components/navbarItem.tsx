import React from "react";
import { BsChevronDown } from "react-icons/bs";

type NavbarItemProps = {
  label: string;
};

const NavbarItem: React.FC<NavbarItemProps> = (props: NavbarItemProps) => {
  const { label } = props;
  return (
    <div className="text-white cursor-pointer hover:text-gray300 transition">
      {label}
    </div>
  );
};

export default NavbarItem;
