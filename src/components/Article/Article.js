import React from 'react';
import './Article.scss';
import SampleArticle from './SampleArticle';

function Article() {
    return (<div className="article-block">
        <SampleArticle></SampleArticle>
        <SampleArticle></SampleArticle>
    </div>)
}

export default Article;