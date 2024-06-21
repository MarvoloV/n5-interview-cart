import { FC } from "react";
import { CartItemProps } from "../../interfaces";
import "./cartItem.scss"; // Importa el archivo Sass

interface Props {
  item: CartItemProps;
}

export const CartItem: FC<Props> = ({ item }) => {
  const { price, quantity } = item;
  const subtotal: number = price * quantity;
  return (
    <div className="cart-item">
      <img src="assets/products/leche.jpeg" className="cart-item__image" />
      <div className="cart-item__details">
        <h4 className="cart-item__name">{item.name}</h4>
        <p className="cart-item__quantity">Cantidad: {item.quantity}</p>
        <p className="cart-item__subtotal">Subtotal: ${subtotal}</p>
      </div>
    </div>
  );
};

