export function localStorageUtil(): { saveData: (saveFieldName: string, data: string) => void } {
  const saveData = (saveFieldName: string, data: string): void => {
    localStorage.setItem(saveFieldName, data);
  };

  return Object.freeze({
    saveData,
  });
}
