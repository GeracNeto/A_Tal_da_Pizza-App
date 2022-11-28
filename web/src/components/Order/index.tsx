import { ResumeCard } from "./ResumeCard";
import { ButtonSubmit, OrderContainer, ResumeContainer, Total } from "./styles";

export function Order() {
  return (
    <OrderContainer>
      <header>
        <span>Current Orders</span>
        <h2>#907653</h2>
      </header>
      <main>
        <ResumeCard />
        <ResumeCard />
      </main>
      <ResumeContainer>
        <div>
          <span>Items</span>
          <span>R$ 56.99</span>
        </div>
        <div>
          <span>Taxa de entrega</span>
          <span>R$ 2.45</span>
        </div>
        <div>
          <span>Total</span>
          <Total>R$ 56.99</Total>
        </div>
        <ButtonSubmit type="submit">Submit</ButtonSubmit>
      </ResumeContainer>
    </OrderContainer>
  );
}
