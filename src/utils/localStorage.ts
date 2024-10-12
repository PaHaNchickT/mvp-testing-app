export function localStorageUtil(): {
  saveData: (saveFieldName: string, data: string) => void;
  getData: (saveFieldName: string) => string | null;
  clearStorage: () => void;
} {
  const saveData = (saveFieldName: string, data: string): void => {
    localStorage.setItem(saveFieldName, data);
  };

  const getData = (saveFieldName: string): string | null => {
    return localStorage.getItem(saveFieldName);
  };

  const clearStorage = (): void => {
    localStorage.removeItem('currentQuestion');
    localStorage.removeItem('answers');
    localStorage.removeItem('seconds');
    localStorage.removeItem('isTestStarted');
  };

  return Object.freeze({
    saveData,
    getData,
    clearStorage,
  });
}
