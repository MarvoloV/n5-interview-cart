import {  renderHook } from "@testing-library/react";
import { useProductForm } from "../../hooks";
import { MemoryRouter } from "react-router-dom";


describe("useForm",()=>{
  test('should initialize product state with default values', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wrapper = ({ children }:{children:any}) => <MemoryRouter>{children}</MemoryRouter>;

    const { result } = renderHook(() => useProductForm(), { wrapper });

    expect(result.current.product).toEqual({
      name: '',
      price: 0,
      amount: 0,
      id: 0,
    });
  });
})