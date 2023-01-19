import { ReactNode } from "react";
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
};


const Icon = ({ type, classObject }: InterfaceIcon) => {
  const { url, description } = icons[type];

  return (
    <img style={ classObject } src={url} alt={description} />
  );
};

export default Icon;