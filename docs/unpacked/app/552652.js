function n() {
  let e = {};
  let t = {};
  let n = {};
  const r = {};
  const i = Object.getOwnPropertyNames(window);
  const a = Object.getOwnPropertyNames(document);
  const o = Array.prototype.slice.call(window.document.documentElement.attributes);
  function s(e, t) {
    const n = {};
    e.map(e => {
      n[e] = !!t.includes(e);
    });
    return n;
  }
  t = s(["_phantom", "__nightmare", "_selenium", "callPhantom", "callSelenium", "_Selenium_IDE_Recorder"], i);
  e = s(["__webdriver_evaluate", "__selenium_evaluate", "__webdriver_script_function", "__webdriver_script_func", "__webdriver_script_fn", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__driver_evaluate", "__selenium_unwrapped", "__fxdriver_unwrapped"], a);
  n = s(["selenium", "webdriver", "driver"], o);
  t.wd = window.navigator.webdriver;
  r.wKeys = t;
  r.dKeys = e;
  r.dElKeys = n;
  return r;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = {
  getAutoToolsProperties: () => ({
    data: n()
  })
};
exports.default = r;