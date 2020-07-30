import React from 'react';
import renderer from 'react-test-renderer';
import About from './About.js';

test('About Snapshot test ', () => {
    const render = renderer.create(<About></About>)
    expect(render.toJSON()).toMatchSnapshot();
})