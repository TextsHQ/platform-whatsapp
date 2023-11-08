var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zipFiles = function () {
  return i.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/904704.js");
var l = a(require("./930722.js"));
function i() {
  return (i = (0, r.default)(function* (e) {
    const t = yield Promise.all(e.map(e => {
      let {
        blob: t
      } = e;
      return s(t);
    }));
    const n = new l.default();
    t.forEach((t, a) => n.add(t, e[a].name));
    return u(n.create());
  })).apply(this, arguments);
}
function u(e) {
  return new Blob([e.readByteArray()], {
    type: "application/zip"
  });
}
function s(e) {
  let t;
  return new Promise((n, a) => {
    t = new FileReader();
    t.addEventListener("loadend", () => {
      n(o.Binary.build(t.result));
    });
    t.addEventListener("error", () => {
      const e = t.error;
      a(e);
    });
    t.readAsArrayBuffer(e);
  });
}