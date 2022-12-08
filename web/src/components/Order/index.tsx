import { ResumeCard } from "./ResumeCard";

import { ButtonSubmit, OrderContainer, ResumeContainer, Total } from "./styles";

import { MenuProps, OrderProps } from "../../App";
import { FormEvent } from "react";

interface CartProps {
  cart: MenuProps[];
  onDeleteRequestCart: (id: string) => void;
  onHandleAddQty: (id: string, query: string) => void;
  onHandleSubmitOrder: (event: FormEvent) => void;
  order?: OrderProps;
}

export function Order({
  cart,
  onDeleteRequestCart,
  onHandleAddQty,
  onHandleSubmitOrder,
  order,
}: CartProps) {
  const sum = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.qty * currentValue.price,
    0
  );

  const tax = 5;

  const total = tax + sum;

  return (
    <OrderContainer>
      <header>
        <span>Current Orders</span>
        {<h2># {order?.code}</h2>}
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
      <ResumeContainer onSubmit={onHandleSubmitOrder}>
        <div>
          <span>Items</span>
          <span>R$ {sum.toFixed(2)}</span>
        </div>
        <div>
          <span>Taxa de entrega</span>
          <span>R$ {tax.toFixed(2)}</span>
        </div>
        <div>
          <span>Total</span>
          <Total>R$ {total.toFixed(2)}</Total>
        </div>
        <ButtonSubmit type="submit">Submit</ButtonSubmit>
      </ResumeContainer>
    </OrderContainer>
  );
}
