import React from 'react';
import { observer } from 'mobx-react-lite';
import { useGlobalStore } from '../GlobalStore';

export default observer(function About() {
  const store = useGlobalStore();

  return (
    <div>
      <button type="button" onClick={store.increment}>
        Increment
      </button>
      <span>{store.count}</span>
      <button type="button" onClick={store.decrement}>
        Decrement
      </button>
    </div>
  );
});
