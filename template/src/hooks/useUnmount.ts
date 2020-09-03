import { useEffect } from 'react';

/**
 * @param effect - function, which is triggered on unmount.
 */
const useUnmount = (effect: () => void): void => {
  useEffect(() => effect, []);
};

export default useUnmount;
