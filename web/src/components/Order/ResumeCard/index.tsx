import { MoreAndMinus, ResumeCardContainer } from "./styles";

import { Plus, Minus } from "phosphor-react";

import { MenuProps } from "../../../App";

interface CartProps {
  id: string;
  foodName: string;
  price: number;
  foodPicture: string;
}

export function ResumeCard({ id, foodName, price, foodPicture }: CartProps) {
  return (
    <ResumeCardContainer>
      <img src={foodPicture} alt={foodName} />
      <div>
        <h3>{foodName}</h3>
        <span>{price}</span>
        <MoreAndMinus>
          <Minus weight="bold" />
          5
          <Plus weight="bold" />
        </MoreAndMinus>
      </div>
    </ResumeCardContainer>
  );
}
