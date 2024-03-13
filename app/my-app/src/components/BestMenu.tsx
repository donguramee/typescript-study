import React from "react";
import { Menu } from "../model/restaurant";

interface OwnProps extends Menu {
  showBestMenu(name: string): string;
}

const BestMenu: React.FC<OwnProps> = ({
  name,
  price,
  category,
  showBestMenu,
}) => {
  return <div>{name}</div>;
};

export default BestMenu;
