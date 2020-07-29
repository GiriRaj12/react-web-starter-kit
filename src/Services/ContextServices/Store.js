import React, { useState, createContext, useEffect } from 'react';


export const StoreContext = createContext();

export const dispatch = (obj) => {

}


function Store(props) {
    const [store, setStore] = useState({});

    /**
    *  
    * @param {*} obj 
    * Params in the form of {'desiredState':'reducerFunction'}
    */
    const createStore = (obj) => {
        let toStore = { ...store };
        for (let key in obj) {
            if (key)
                toStore[key] = obj[key]()
        }
        setStore(toStore);
    };

    useEffect(() => {
        createStore(props.store);
    }, [props.store])

    return (
        <StoreContext.Provider value={store}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default Store;