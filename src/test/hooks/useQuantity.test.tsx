import { act, renderHook } from "@testing-library/react";
import { useQuantity } from "../../hooks";

describe("useQuantity",()=>{
    it('should initialize quantity with initialQuantity when provided', () => {
        const { result } = renderHook(() => useQuantity({ initialQuantity: 5 }));
        expect(result.current.quantity).toBe(5);
      });
      it('should not decrease quantity below 2', () => {
        const { result } = renderHook(() => useQuantity({ initialQuantity: 2 }));
        act(() => {
          result.current.decreaseQuantity();
        });
        expect(result.current.quantity).toBe(1);
      });
      it('should not increase quantity below 2', () => {
        const { result } = renderHook(() => useQuantity());
        act(() => {
          result.current.increaseQuantity();
        });
        expect(result.current.quantity).toBe(2);
      });
})