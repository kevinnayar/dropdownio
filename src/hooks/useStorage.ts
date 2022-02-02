type StorageOpts = {
  storage: Storage,
  storageKey: string,
};

export function useStorage<T>({ storage, storageKey }: StorageOpts) {
  function get(): T | null {
    if (!storage) return null;

    const valueStr = storage.getItem(storageKey);
    if (!valueStr) return null;

    try {
      const value: T = JSON.parse(valueStr);
      return value;
    } catch (_e) {
      return null;
    }
  }

  function set(value: T) {
    if (!storage) return;

    const valueStr = JSON.stringify(value);
    storage.setItem(storageKey, valueStr);
  }

  return {
    get,
    set,
  };
}
