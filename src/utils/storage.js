// save to local storage
export const saveToLocalStorage = (state, name) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(name, serializedState);
  } catch (e) {
    console.log(e);
  }
};

//  get from local storage
export const loadFromLocalStorage = (name) => {
  try {
    const serializedState = localStorage.getItem(name);
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
