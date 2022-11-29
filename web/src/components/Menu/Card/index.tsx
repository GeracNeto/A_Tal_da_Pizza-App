import { CardContainer } from "./styles";

interface foodProps {
  id: string;
  foodName: string;
  price: number;
  foodPicture: string;
  onAddRequestOnClick: (id: string) => void;
}

export function Card({
  id,
  foodName,
  price,
  foodPicture,
  onAddRequestOnClick,
}: foodProps) {
  return (
    <CardContainer onClick={() => onAddRequestOnClick(id)}>
      <img src={foodPicture} alt={foodName} />
      <h2>{foodName}</h2>
      <span>R$: {price}</span>
    </CardContainer>
  );
}
