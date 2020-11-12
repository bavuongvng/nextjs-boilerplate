import { useMemo } from "react";
import {
  applySnapshot,
  Instance,
  SnapshotIn,
  SnapshotOut,
  types,
} from "mobx-state-tree";
import { type } from "os";

const Store = types
  .model({
    lastUpdate: types.Date,
    light: false,
  })
  .actions((self) => {
    let timer: any;

    const start = () => {
      timer = setInterval(() => {
        (self as any).update();
      }, 1000);
    };

    const stop = () => {
      clearInterval(timer);
    };

    const update = () => {
      self.lastUpdate = new Date(Date.now());
      self.light = true;
    };

    return { start, stop, update };
  });

export type TStore = Instance<typeof Store>;
export type TStoreSnapshotIn = SnapshotIn<typeof Store>;
export type TStoreSnapshotOut = SnapshotOut<typeof Store>;

let store: TStore | undefined;

export function initializeStore(snapshot = null) {
  const _store = store ?? Store.create({ lastUpdate: 0 });

  if (snapshot) {
    applySnapshot(_store, snapshot);
  }

  if (typeof window !== "undefined") return _store;

  if (!store) store = _store;
  return store;
}

export function useStore(initialState: any) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
