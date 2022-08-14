export interface LocalStorageItem<T> {
  data: T;
}
export const setItem = <T>(key: string, value: T) => {
  if (typeof window !== "undefined") {
    const item: LocalStorageItem<T> = {
      data: value,
    };

    localStorage.setItem(key, JSON.stringify(item));
  }
};

export const getItem = <T>(key: string) => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem(key)) {
      const item: LocalStorageItem<T> = JSON.parse(
        localStorage.getItem(key) as string
      );

      return item.data;
    }
  }
};
