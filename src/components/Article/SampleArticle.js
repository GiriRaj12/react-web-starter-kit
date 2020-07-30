import React from 'react';
import { faFile, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SampleArticle() {
    return (<div className="article-block-element">
        <div className="article-icon">
            <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
        </div>
        <h4><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon> Article</h4>
        <div className='article-block_page'>
            <p>This is a sample content to get rendered in the app or home page</p>
            <button>Know More</button>
        </div>
    </div>);
}
export default SampleArticle;