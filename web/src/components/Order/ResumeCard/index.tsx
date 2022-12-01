import { MoreAndMinus, ResumeCardContainer } from "./styles";

import { Plus, Minus, X } from "phosphor-react";

import { MenuProps } from "../../../App";
import { useState } from "react";

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
  const [sum, setSum] = useState(0);
  return (
    <ResumeCardContainer>
      <img src={foodPicture} alt={foodName} />
      <div>
        <h3>{foodName}</h3>
        <span>{price}</span>
        <MoreAndMinus>
          <Minus weight="bold" onClick={() => setSum(sum - 1)} />
          {sum}
          <Plus weight="bold" onClick={() => setSum(sum + 1)} />
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
