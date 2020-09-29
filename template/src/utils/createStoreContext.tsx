import React, {
  createContext,
  PropsWithChildren,
  FunctionComponent,
  Context,
  useContext,
} from 'react';
import useStoreFactory, { Store } from '../hooks/useStoreFactory';

/**
 * Creates a context for the store created by the passed `storeFactory`.
 * Additionally returns the `Provider` component and the hook for the created store's context.
 *
 * @param name - name of the store
 * @param storeFactory - a function that returns an object representing the store
 */
const createStoreContext = <T extends Store>(
  name: string,
  storeFactory: () => T,
): [FunctionComponent<unknown>, () => T, Context<T>] => {
  const context = createContext<T>({} as T); // the initial value is only to satisfy TS and won't be used

  /**
   * Initializes and contains the context for the `TStore`.
   */
  function StoreProvider({ children }: PropsWithChildren<unknown>): JSX.Element {
    const store = useStoreFactory(storeFactory);
    return <context.Provider value={store}>{children}</context.Provider>;
  }

  const useStore = () => {
    const store = useContext(context);
    if (store) {
      return store;
    }
    throw new ReferenceError(
      `${name} is not initialized, make sure that your component is wrapped in the 'Provider' of the store.`,
    );
  };

  return [StoreProvider, useStore, context];
};

export default createStoreContext;
