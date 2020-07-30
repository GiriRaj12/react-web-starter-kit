import React from 'react';
import renderer from 'react-test-renderer';
import GitView from './GitView.js';

test('GitView Snapshot test', () => {
    const render = renderer.create(<GitView></GitView>)
    expect(render.toJSON()).toMatchSnapshot();
})