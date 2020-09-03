import { EffectCallback, useEffect } from 'react';

/**
 * @param effect - function, which is triggered on mount. If the function returns a callback, it will be called on unmount.
 */
const useMount = (effect: EffectCallback): void => {
  useEffect(effect, []);
};

export default useMount;
