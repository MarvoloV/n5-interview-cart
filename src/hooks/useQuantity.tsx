import { useState } from 'react';

interface UseQuantityProps {
  initialQuantity?: number;
  maxStock?: number;
}

export const useQuantity = ({ initialQuantity = 1, maxStock }: UseQuantityProps = {}) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);

  const increaseQuantity = () => {
    if (maxStock === undefined || quantity < maxStock) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return {
    quantity,
    increaseQuantity,
    decreaseQuantity,
    setQuantity,
  };
};


