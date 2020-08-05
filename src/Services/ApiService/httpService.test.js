import {
  getParams,
  getFormattedURL,
  get,
  post,
  put,
  patch,
} from "./FetchService.js";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ done: "done" }),
  })
);

test("Params test", () => {
  expect(getParams({ something: "something" })).toEqual("?something=something");
});

test("Formatted url test", () => {
  expect(getFormattedURL({ something: "something" }, "asd")).toEqual(
    "www.baseurl.com/asd?something=something"
  );
});

test("Get test", () => {
  get({ something: "something" }, "asd").then((res) => {
    expect(res.done).toEqual("done");
  });
});

test("Post test", () => {
  post({ something: "something" }, "asd").then((res) => {
    expect(res.done).toEqual("done");
  });
});

test("Put test", () => {
  put({ something: "something" }, { payload: "payload" }, "asd").then((res) => {
    expect(res.done).toEqual("done");
  });
});

test("Patch test", () => {
  patch({ something: "something" }, "asd").then((res) => {
    expect(res.done).toEqual("done");
  });
});
