import { useStore } from '../../store';
import { CartItem } from './CartItem';
import { CartTotal } from './CartTotal';
import { CartButton } from './CartButton';
import { RiCloseLargeLine } from "react-icons/ri";
import { FC } from 'react';
import "./cartButton.scss";

interface Props {
  onClose: () => void;
}

export const Cart: FC<Props> = ({ onClose }) => {
  const { cart, clearCart, checkout, fetchProducts } = useStore();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const buyProducts = async () => {
    await checkout();
    await fetchProducts();
  }
  return (
    <>
      <RiCloseLargeLine onClick={onClose} className='' size={30} />
      {cart.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
      <CartTotal total={total} />
      <div className='cart-buttons'>
        <CartButton onClick={clearCart} className="button-primary">Limpiar Carrito</CartButton>
        <CartButton onClick={buyProducts} className="button-secondary"
        >Comprar</CartButton>
      </div>
    </>
  )
}

