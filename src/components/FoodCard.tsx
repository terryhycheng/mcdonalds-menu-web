import photo from "../assets/double-mcplant.png";

export const FoodCard = () => {
  return (
    <div className="text-center shadow-md p-8 rounded-md">
      <img
        src={photo}
        alt=""
        className="object-contain w-full max-h-[100px] my-3"
      />
      <h2 className="font-bold">Double McPlant®</h2>
      <p className="text-sm font-light">2466 kJ | 590 kcal</p>
    </div>
  );
};
