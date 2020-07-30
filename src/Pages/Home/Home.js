import React, { useContext } from 'react';
import './home.scss';
import { StoreContext } from '../../Services/ContextServices/Store';
import { useDispatcher } from '../../Services/ContextServices/StoreDispatch.js'
import { name as Name } from '../../Services/ContextServices/SampleAction/action.js'
import { Log } from '../../Services/LoggingService/Log';

function Home() {
    const [store] = useContext(StoreContext);
    const [disPatch] = useDispatcher();

    let getNames = (name) => {
        Log.info(name);
        Log.info(process.env.NODE_ENV);
        if (name) {
            return name.name;
        }
        else
            return '';
    }

    let handleClick = (action) => {
        disPatch(action('Raj'));
    }

    return (<div className="basic-view">
        React starter kit
        <p>
            Dependencies added React DOM, React Router, SCSS.
        </p>
        <p>{getNames(store)}</p>
        <button onClick={() => handleClick(Name)}>Change name</button>
    </div>)
}

export default Home;