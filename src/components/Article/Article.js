import React from 'react';
import './Article.scss';
import SampleArticle from './SampleArticle';

function Article(props) {
    return (<div className="article-block">
        <SampleArticle theme={props.theme}></SampleArticle>
        <SampleArticle theme={props.theme}></SampleArticle>
    </div>)
}

export default Article;