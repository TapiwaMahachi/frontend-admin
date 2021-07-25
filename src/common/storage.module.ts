// Abstraction for means of storing properties on the browser
export const StorageModule = {
  get,
  set,
  clear,
  clearAll,
};
export type StorageType = 'permanent' | 'session';

function get(key: string, type: StorageType = 'permanent') {
  // get the token
  const prefixedKey = storagePrefix + key;

  const permanentValue = window.localStorage.getItem(prefixedKey);
  const sessionValue = window.sessionStorage.getItem(prefixedKey);

  // Note, if no type is specified, this will ALWAYS prefer the session value to the permanent value.
  // This allow us to have flows where a default permanent value is set and a session override is set, but downstream
  // components don't need to be aware of whether the value is the permanent or session one
  const storedValue = (type === 'permanent')
    ? permanentValue
    : sessionValue || permanentValue;

  if (!storedValue) return null;

  // If we stored a string, return that; otherwise parse it and return that. In general it's bad to rely on try-catch
  // for expected behavior, but this is genuinely the best way to determine if the string is already a JSON string
  let parsedValue: string;
  try {
    parsedValue = JSON.parse(storedValue);
  } catch (e) {
    return storedValue;
  }
  return parsedValue;
}
function set(key: string, value:string, type: StorageType = 'permanent') {
  // set the token
  const prefixedKey = storagePrefix + key;

  const storablevalue = (typeof value === 'string') ? value : JSON.stringify(value);

  if (type === 'permanent') {
    window.localStorage.setItem(prefixedKey, storablevalue);
  } else {
    window.sessionStorage.setItem(prefixedKey, storablevalue);
  }
}

function clear(key: string, type?: StorageType) {
  // clear specific token
  const prefixedKey = storagePrefix + key;

  if (!type || type === 'permanent') {
    window.localStorage.removeItem(prefixedKey);
  }
  if (!type || type === 'session') {
    window.sessionStorage.removeItem(prefixedKey);
  }
}
function clearAll(type?: StorageType) {
  // clear all token
  if (!type || type === 'permanent') {
    window.localStorage.clear();
  }
  if (!type || type === 'session') {
    window.sessionStorage.clear();
  }
}

const storagePrefix = 'admin-site-';
