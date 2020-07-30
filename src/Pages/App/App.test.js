import React from './node_modules/react';
import renderer from './node_modules/react-test-renderer';
import App from './App.js';

test('App Snapshot test', () => {
    const render = renderer.create(<App></App>)
    expect(render.toJSON()).toMatchSnapshot();
})