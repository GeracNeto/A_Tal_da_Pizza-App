import { CardContainer } from "./styles";

interface foodProps {
  foodName: string;
  price: number;
  foodPicture: string;
}

export function Card({ foodName, price, foodPicture }: foodProps) {
  return (
    <CardContainer>
      <img src={foodPicture} alt={foodName} />
      <h2>{foodName}</h2>
      <span>R$: {price}</span>
    </CardContainer>
  );
}
