import { DependencyList, EffectCallback, useEffect } from "react";

const useDebounce = (
  effect: EffectCallback,
  delay: number,
  deeps?: DependencyList
) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay);

    return () => clearTimeout(handler);
  }, [...(deeps || []), delay]);
};

export default useDebounce;
