var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promiseTimeout = undefined;
var i = require("./477689.js");
var a = r(require("./415227.js"));
exports.promiseTimeout = (e, t, n) => {
  let r = null;
  let o = null;
  const s = new Promise((e, a) => {
    o = a;
    r = setTimeout(() => {
      a(new i.TimeoutError(n));
      clearTimeout(r);
    }, t);
  });
  return Promise.race([e, s]).finally(() => {
    if (o) {
      o((0, a.default)());
    }
    clearTimeout(r);
  });
};