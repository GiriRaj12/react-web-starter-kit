import React, { useContext } from 'react';
import './git.scss';
import { StoreContext } from '../../Services/ContextServices/Store.js';
import useAction from '../../Services/ContextServices/SampleAction/action.js'
import { INCREMENT, DECREMENT } from '../../Services/ContextServices//SampleReducer/couterReducer.js';


function GitView() {
    const [store] = useContext(StoreContext);
    const [, count] = useAction();

    let getCount = (obj) => {
        if (obj) {
            return obj.count;
        }
        else
            return 0;
    }


    return (<div className='basic-view'>
        <p>Git link provided</p>
        <a target="_blank" rel="noopener noreferrer" href='https://github.com/GiriRaj12/react-web-starter-kit'>Click Here</a>
        <p>Count = {getCount(store)}</p>
        <button onClick={() => count(INCREMENT)}>+</button>
        <button onClick={() => count(DECREMENT)}>-</button>
    </div>)
}

export default GitView;