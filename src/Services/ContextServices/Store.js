import React, { useState, createContext, useEffect } from 'react';


const StoreContext = createContext();


function Store(props) {
    const [store, setStore] = useState({});

    useEffect(() => {
        createStore(props.store)
    }, [])

    /**
     * 
     * @param {*} obj 
     * Params in the form of {'desiredState':'reducerFunction'}
     */

    let createStore = (obj) => {
        let toStore = { ...store };

        for (let key in obj) {
            toStore.key = obj.key()
        }
        console.log(toStore);
        setStore(toStore);
    }

    return (
        <StoreContext.Provider value={store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default Store;