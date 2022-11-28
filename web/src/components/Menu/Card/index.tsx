import { CardContainer } from "./styles";

export function Card() {
  return (
    <CardContainer>
      <img
        src="https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg"
        alt="pizza"
      />
      <h2>Pizza de 4 Queijos</h2>
      <span>R$: 49.99</span>
    </CardContainer>
  );
}
