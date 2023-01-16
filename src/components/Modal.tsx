import { FC } from "react";

type PropsType = {
  description: string;
  name: string;
  imageUrl: string;
  calories: number;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Modal: FC<PropsType> = ({
  name,
  description,
  imageUrl,
  calories,
  setIsModal,
}) => {
  return (
    <div className="fixed flex top-0 left-0 bg-black w-full h-[100vh] bg-opacity-50 justify-center">
      <div className="grid md:grid-cols-2 p-10 gap-4 justify-center items-center bg-white max-w-[800px] m-auto mx-2 shadow-sm rounded-md">
        <img src={imageUrl} alt="food-image" />
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="font-bold text-2xl">{name}</h1>
            <p className="text-sm font-light">
              {Math.round(calories * 4.184)} kJ | {calories} kcal
            </p>
          </div>
          <p>{description}</p>
          <button
            className="bg-secondary-color p-3 w-full md:max-w-[350px] max-h-[50px] mx-auto font-light mt-4 rounded-md"
            onClick={() => setIsModal(false)}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};
