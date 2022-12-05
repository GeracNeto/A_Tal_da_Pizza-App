import { ResumeCard } from "./ResumeCard";

import { ButtonSubmit, OrderContainer, ResumeContainer, Total } from "./styles";

import { MenuProps } from "../../App";

interface CartProps {
  cart: MenuProps[];
  onDeleteRequestCart: (id: string) => void;
  onHandleAddQty: (id: string, query: string) => void;
}

export function Order({
  cart,
  onDeleteRequestCart,
  onHandleAddQty,
}: CartProps) {
  return (
    <OrderContainer>
      <header>
        <span>Current Orders</span>
        <h2>#907653</h2>
      </header>
      <main>
        {cart.length !== 0 ? (
          cart.map((item) => (
            <ResumeCard
              key={item.id}
              id={item.id}
              foodName={item.foodName}
              foodPicture={item.foodPicture}
              price={item.price}
              qty={item.qty}
              onDeleteRequestCart={onDeleteRequestCart}
              onHandleAddQty={onHandleAddQty}
            />
          ))
        ) : (
          <h1>No items on list</h1>
        )}
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
