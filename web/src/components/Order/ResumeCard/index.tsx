import { MoreAndMinus, ResumeCardContainer } from "./styles";

import { Plus, Minus, X } from "phosphor-react";

import { MenuProps } from "../../../App";

interface CartProps {
  id: string;
  foodName: string;
  price: number;
  foodPicture: string;
  onDeleteRequestCart: (id: string) => void;
}

export function ResumeCard({
  id,
  foodName,
  price,
  foodPicture,
  onDeleteRequestCart,
}: CartProps) {
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
      <X
        size={16}
        color="#FB3105"
        weight="duotone"
        onClick={() => onDeleteRequestCart(id)}
      />
    </ResumeCardContainer>
  );
}
