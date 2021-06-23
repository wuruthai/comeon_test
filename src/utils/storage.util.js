class Storage {
  static storeData(key, value) {
    if (!key) throw new Error("Can not write to storage");
    const stringValue = JSON.stringify(value);
    localStorage.setItem(key, stringValue);
  }

  static retrieveData(key) {
    const value = localStorage.getItem(key);
    const parsedValue = JSON.parse(value);
    return parsedValue;
  }
}

export default Storage;
