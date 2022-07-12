//#region STORING
function addToStorage(id, object) {
  localStorage.setItem(id, JSON.stringify(object));
}
//#endregion

//#region RETRIEVING
function retrieveFromStorage(id) {
  let objectData = localStorage.getItem(id);
  return JSON.parse(objectData);
}

function retrieveAllFromStorage() {
  if (!storageWasPopulated) return;

  var objects = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    objects.push(retrieveFromStorage(keys[i]));
  }

  return objects;
}

//#endregion

//#region REMOVING/CLEARING
function removeFromStorage(id) {
  localStorage.removeItem(id);
}

function clearStorage() {
  localStorage.clear();
}
//#endregion

//#region UTILS
function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function storageWasPopulated() {
  return localStorage.length > 0;
}
//#endregion

//#region EXPORTS
export {
  addToStorage,
  retrieveFromStorage,
  removeFromStorage,
  clearStorage,
  retrieveAllFromStorage,
  storageAvailable,
};
//#endregion
