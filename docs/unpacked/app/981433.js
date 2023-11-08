var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initModules = function () {
  u();
};
var a = i(require("../vendor/751463.js"));
var o = require("./672076.js");
var s = require("./65889.js");
const l = {
  minTimeout: 1000,
  maxTimeout: 120000,
  retries: 1 / 0,
  signal: new r().signal
};
const u = (0, a.default)(function () {
  return (0, o.exponentialBackoff)(l, (e, t) => Promise.all([require.e(4700), require.e(9821), require.e(1280), require.e(179)]).then(require.bind(require, 570477)).catch(n => {
    __LOG__(3)`failed to load main bundle`;
    if (t === 10) {
      __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
      SEND_LOGS("failed to load main bundle");
    }
    return e(n);
  })).then(e => (0, s.setMainBundleModules)(e));
});