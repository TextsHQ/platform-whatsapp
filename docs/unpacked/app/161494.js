var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._parse = u;
exports.parse = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1 / 0;
  return u(e, (0, o.default)(t), n);
};
var i = require("./370257.js");
var a = r(require("./536150.js"));
var o = r(require("./486638.js"));
var s = r(require("./592583.js"));
var l = r(require("./356900.js"));
function u(e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1 / 0;
  const r = (0, s.default)(e, t, n);
  const o = r.length ? (0, l.default)(e, (0, a.default)(r, t), t) : {
    children: [{
      type: "text",
      value: e
    }]
  };
  const u = (0, i.numCodepoints)(e);
  if (n < u) {
    c(o, {
      limit: n
    });
  }
  return o;
}
function c(e, t) {
  if (t.limit <= 0) {
    return;
  }
  if (e.type && e.type === "text") {
    if (e.value.length >= t.limit) {
      let n = (0, i.toArray)(e.value);
      if (n.length >= t.limit) {
        n = n.slice(0, t.limit);
      }
      e.value = n.join("");
      t.limit -= n.length;
    } else {
      t.limit -= e.value.length;
    }
    return;
  }
  if (e.type && e.type === "delimiter") {
    return;
  }
  let n = 0;
  for (; n < e.children.length && (c(e.children[n], t), !(t.limit <= 0));) {
    n++;
  }
  e.children = e.children.slice(0, n + 1);
}