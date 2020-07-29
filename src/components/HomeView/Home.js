import React, { useContext } from 'react';
import './home.scss';
import { StoreContext } from '../../services/ContextServices/Store';

function Home() {
    const store = useContext(StoreContext);

    console.log(store);

    return (<div className="basic-view">
        React starter kit
        <p>
            Dependencies added React DOM, React Router, SCSS.
        </p>
    </div>)
}

export default Home;