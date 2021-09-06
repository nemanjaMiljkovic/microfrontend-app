export class Storage {
  storageProvider: typeof window.localStorage | typeof window.sessionStorage =
    window.localStorage;

  constructor(
    private prefix = 'app',
    private type: 'local' | 'session' = 'local'
  ) {
    if (this.type === 'local' && window.localStorage) {
      this.storageProvider = window.localStorage;
    }

    if (this.type === 'session' && window.sessionStorage) {
      this.storageProvider = window.sessionStorage;
    }
  }

  setItem(key: string, value: string) {
    this.storageProvider.setItem(`${this.prefix}-${key}`, value);
  }

  getItem(key: string) {
    return this.storageProvider.getItem(`${this.prefix}-${key}`);
  }

  removeItem(key: string) {
    this.storageProvider.removeItem(`${this.prefix}-${key}`);
  }
}
