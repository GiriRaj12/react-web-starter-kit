import React from 'react';
import { faFile, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

function SampleArticle(props) {
    return (<div className="article-block-element">
        <div className="article-icon">
            <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
        </div>
        <h4><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon> Article</h4>
        <div className='article-block_page'>
            <p>This is a sample content to get rendered in the app or home page</p>
            <Theme theme={props.theme}>
                Know More
            </Theme>
        </div>
    </div>);
}

const Theme = styled.button`
    background-color: ${props => props.theme === 'light' ? "rgba(18, 76, 124, 0.87)" : "black"};
    color: white;
    border-radius: 5px;
    padding:5px;
    border: none;
    cursor: pointer;
    transition-duration:1s;
`
export default SampleArticle;