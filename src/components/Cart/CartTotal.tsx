import { FC } from "react";

interface Props {
  total: number;
}

export const CartTotal: FC<Props> = ({ total }) => {
  return <p>Total: ${total}</p>;
};


