import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductsArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
  maxCount?: number;
}

export const useProducts = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductsArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) return;
    else isMounted.current = true;

    setCounter(value);
  }, [value]);

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues?.maxCount);
    }

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  return {
    // properties}
    counter,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    // methods
    increaseBy,
    reset,
  };
};
