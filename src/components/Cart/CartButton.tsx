import { ReactNode } from 'react';
import "./cartButton.scss";
interface CartButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

export const CartButton = ({ onClick, className = '', children }: CartButtonProps) => {
  return <button onClick={onClick} className={className}>{children}</button>;
};


