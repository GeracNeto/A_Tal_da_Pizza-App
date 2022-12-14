import axios from "axios";
import { useEffect, useState } from "react";
import { KitchenContainer } from "./styles";

interface KitchenProps {
  id: string;
  foodName: string;
  price: number;
  foodPicture: string;
  qty: number;
  order: string;
}

export function Kitchen() {
  const [kitchenOrders, setKitchenOrders] = useState<KitchenProps[]>();

  useEffect(() => {
    axios("http://localhost:3333/order")
      .then((response) => {
        setKitchenOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <KitchenContainer>
      <table>
        <tr>
          <th>Orders</th>
          <th>Plate</th>
          <th>Quantity</th>
        </tr>
        {kitchenOrders?.map((item) => (
          <>
            <tr>
              <td>{item.order}</td>
              <td>{item.foodName}</td>
              <td>{item.qty}</td>
            </tr>
          </>
        ))}
      </table>
    </KitchenContainer>
  );
}
