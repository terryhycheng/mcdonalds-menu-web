import { FC, useEffect, useState } from "react";
import { foodDataType } from "../Types/types";
import { Modal } from "../components/Modal";

export const FoodCard: FC<foodDataType> = ({
  id,
  name,
  calories,
  imageUrl,
  description,
}) => {
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModal ? "hidden" : "unset";
  }, [isModal]);

  return (
    <>
      {isModal && (
        <Modal
          description={description}
          name={name}
          calories={calories}
          imageUrl={imageUrl}
          setIsModal={setIsModal}
        />
      )}
      <div
        className="text-center shadow-md p-8 rounded-md group cursor-pointer hover:border-secondary-color border border-white"
        onClick={() => setIsModal(true)}
      >
        <img
          src={imageUrl}
          alt=""
          className="object-contain w-full max-h-[100px] my-3"
        />
        <h2 className="font-bold group-hover:text-secondary-color">{name}</h2>
        <p className="text-sm font-light">
          {Math.round(calories * 4.184)} kJ | {calories} kcal
        </p>
      </div>
    </>
  );
};
