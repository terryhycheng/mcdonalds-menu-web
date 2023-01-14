import { FC } from "react";
import { CurrentSelectionProps, IconProps } from "../../Types/types";

interface PropsType extends CurrentSelectionProps {
  name: string;
  Icon: FC<IconProps>;
}

export const FilterButton: FC<PropsType> = ({
  name,
  Icon,
  current,
  setCurrent,
}) => {
  return (
    <button
      className={`border w-full flex p-2 justify-center items-center gap-4 rounded-sm group hover:bg-primary-color ${
        current == name ? "bg-primary-color" : "bg-white"
      }`}
      onClick={() => name != current && setCurrent(name)}
    >
      <Icon
        classes={`${
          current == name ? "stroke-white" : "stroke-black"
        } group-hover:stroke-white`}
      />
      <div
        className={`hidden sm:block capitalize group-hover:text-white ${
          current == name ? "text-white" : "text-black"
        }`}
      >
        {name}
      </div>
    </button>
  );
};
