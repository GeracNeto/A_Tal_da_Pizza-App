import { MoreAndMinus, ResumeCardContainer } from "./styles";

import { Plus, Minus, X } from "phosphor-react";

import { MenuProps } from "../../../App";
import { useState } from "react";

interface CartProps {
  id: string;
  foodName: string;
  price: number;
  qty: number;
  foodPicture: string;
  onDeleteRequestCart: (id: string) => void;
  onHandleAddQty: (id: string, query: string) => void;
}

export function ResumeCard({
  id,
  foodName,
  price,
  foodPicture,
  qty,
  onDeleteRequestCart,
  onHandleAddQty,
}: CartProps) {
  const [sum, setSum] = useState(0);

  return (
    <ResumeCardContainer>
      <img src={foodPicture} alt={foodName} />
      <div>
        <h3>{foodName}</h3>
        <span>{price}</span>
        <MoreAndMinus>
          <Minus weight="bold" onClick={() => onHandleAddQty(id, "sub")} />
          {qty}
          <Plus weight="bold" onClick={() => onHandleAddQty(id, "add")} />
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
