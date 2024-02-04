import React from "react";

type Props = {
  visible?: boolean;
};

const MobileMenu: React.FC<Props> = (props: Props) => {
  const { visible } = props;
  if (!visible) {
    return null;
  }
  return <>MobileMenu</>;
};

export default MobileMenu;
