var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupListChildren = function (e) {
  const t = Array.isArray(e) ? e : [e];
  const n = [];
  let r = [];
  for (const e of t) {
    if (typeof e == "string" && e.match(/^\r?\n$/) && r.length) {
      r.push(e);
    } else if (e == null || typeof e != "object" || e.type !== i.default && e.type !== a.default) {
      let t = e;
      if (r.length) {
        n.push({
          isList: true,
          children: r
        });
        r = [];
        if (typeof t == "string") {
          t = t.replace(/^\r?\n/g, "");
        }
      }
      n.push({
        isList: false,
        children: t
      });
    } else {
      r.push(e);
    }
  }
  if (r.length) {
    n.push({
      isList: true,
      children: r
    });
  }
  return n;
};
var i = r(require("./668513.js"));
var a = r(require("./860690.js"));