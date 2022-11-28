import { MoreAndMinus, ResumeCardContainer } from "./styles";

import { Plus, Minus } from "phosphor-react";

export function ResumeCard() {
  return (
    <ResumeCardContainer>
      <img
        src="https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg"
        alt="img-resume"
      />
      <div>
        <h3>Pizza de 4 queijos</h3>
        <span>R$ 34.99</span>
        <MoreAndMinus>
          <Minus weight="bold" />
          5
          <Plus weight="bold" />
        </MoreAndMinus>
      </div>
    </ResumeCardContainer>
  );
}
