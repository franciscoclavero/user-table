import { MouseEventHandler, ReactNode } from "react";
import { icons } from "src/constants/icons";

type TypeClass = {
  height?: string;
  width?: string;
  opacity?: number;
  margin?: string;
  cursor?: string;
}

interface InterfaceIcon {
  type: string;
  classObject: TypeClass;
  onClick?: MouseEventHandler<HTMLImageElement>;
};


const Icon = ({ type, classObject, onClick }: InterfaceIcon) => {
  const { url, description } = icons[type];

  return (
    <img onClick={onClick} style={ classObject } src={url} alt={description} />
  );
};

export default Icon;