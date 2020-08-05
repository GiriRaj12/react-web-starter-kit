import React from "react";
import renderer from "react-test-renderer";
import Home from "./Home.js";

test("Home Snapshot test", () => {
  const render = renderer.create(<Home></Home>);
  expect(render.toJSON()).toMatchSnapshot();
});
