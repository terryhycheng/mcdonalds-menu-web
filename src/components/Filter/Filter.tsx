import { FC } from "react";
import { CurrentSelectionProps } from "../../Types/types";
import { FilterButton } from "./FilterButton";
import { AllIcon } from "./icons/AllIcon";
import { BurgerIcon } from "./icons/BurgerIcon";
import { DrinkIcon } from "./icons/DrinkIcon";
import { FriesIcon } from "./icons/FriesIcon";

export const Filter: FC<CurrentSelectionProps> = ({ current, setCurrent }) => {
  return (
    <div className="flex gap-4 justify-between">
      <FilterButton
        name="all"
        Icon={AllIcon}
        current={current}
        setCurrent={setCurrent}
      />
      <FilterButton
        name="burgers"
        Icon={BurgerIcon}
        current={current}
        setCurrent={setCurrent}
      />
      <FilterButton
        name="fries & sides"
        Icon={FriesIcon}
        current={current}
        setCurrent={setCurrent}
      />
      <FilterButton
        name="drinks"
        Icon={DrinkIcon}
        current={current}
        setCurrent={setCurrent}
      />
    </div>
  );
};
