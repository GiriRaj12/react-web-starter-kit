import { useContext } from "react";
import { StoreContext } from "./Store";

export function useDispatcher() {
  const [store, setStore] = useContext(StoreContext);

  function disPatch(action) {
    let obj = {};
    try {
      for (let key in store) {
        if (key && key !== "reducers")
          obj[key] = store.reducers[key](store[key], action);
      }
      obj["reducers"] = store.reducers;
      setStore(obj);
    } catch (err) {
      console.log(err);
    }
  }
  return [disPatch];
}
