export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}

export const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key))
