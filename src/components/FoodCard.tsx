import { FC } from "react";
import { foodDataType } from "../Types/types";

export const FoodCard: FC<foodDataType> = ({ name, calories, imageUrl }) => {
  return (
    <div className="text-center shadow-md p-8 rounded-md">
      <img
        src={imageUrl}
        alt=""
        className="object-contain w-full max-h-[100px] my-3"
      />
      <h2 className="font-bold">{name}</h2>
      <p className="text-sm font-light">
        {Math.round(calories * 4.184)} kJ | {calories} kcal
      </p>
    </div>
  );
};
