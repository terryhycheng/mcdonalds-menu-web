import { FC } from "react";
import { IconProps } from "../../../Types/types";

export const FriesIcon: FC<IconProps> = ({ classes }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M14 21V12C14 11.4696 14.2107 10.9609 14.5858 10.5858C14.9609 10.2107 15.4696 10 16 10H19C19.5304 10 20.0391 10.2107 20.4142 10.5858C20.7893 10.9609 21 11.4696 21 12V22V6C21 5.46957 21.2107 4.96086 21.5858 4.58579C21.9609 4.21071 22.4696 4 23 4H26C26.5304 4 27.0391 4.21071 27.4142 4.58579C27.7893 4.96086 28 5.46957 28 6V22V14C28 13.4696 28.2107 12.9609 28.5858 12.5858C28.9609 12.2107 29.4696 12 30 12H33C33.5304 12 34.0391 12.2107 34.4142 12.5858C34.7893 12.9609 35 13.4696 35 14V21"
        stroke="current"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7 18C7 18 14 23 24 23C34 23 41 18 41 18L36.182 44H11.818L7 18Z"
        stroke="current"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
