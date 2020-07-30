import React from './node_modules/react';
import Article from './Article';
import SampleArticle from './SampleArticle';
import {withInfo} from './node_modules/@storybook/addon-actions'


export default {
    title: 'Article',
    decorators: [withInfo],
  };

export const wholeArticle = () => <Article></Article>;

export const singleSampleArticle = () => <SampleArticle></SampleArticle>

export const 
