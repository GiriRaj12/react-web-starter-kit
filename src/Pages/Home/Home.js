import React, { useContext } from 'react';
import './home.scss';
import { StoreContext } from '../../Services/ContextServices/Store';
import useAction from '../../Services/ContextServices/SampleAction/action.js'
import { Log } from '../../Services/LoggingService/Log';

function Home() {
    const [store] = useContext(StoreContext);
    const [name] = useAction();

    let getNames = (obj) => {
        Log.info(obj);
        Log.info(process.env.NODE_ENV);
        if (obj) {
            return obj.name;
        }
        else
            return '';
    }

    let handleClick = () => {
        name("Raj");
    }

    return (<div className="basic-view">
        React starter kit
        <p>
            Dependencies added React DOM, React Router, SCSS.
        </p>
        <p>{getNames(store)}</p>
        <button onClick={() => handleClick()}>Change name</button>
    </div>)
}

export default Home;