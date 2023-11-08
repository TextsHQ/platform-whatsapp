var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeError = s;
exports.normalizeStack = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  const {
    name: n,
    message: r,
    stack: i
  } = s(e);
  const o = i.indexOf("\n");
  const l = i.slice(0, o);
  const u = l.match(new RegExp(`(${(0, a.default)(n)}|Error)(:|$)`));
  if (u != null) {
    if (!t) {
      return i;
    }
    const e = u.index + u[0].length;
    const n = r == null ? -1 : i.indexOf(r, e);
    const a = r == null || n === -1 ? -1 : n + r.length;
    const s = Math.max(0, o, e, a);
    return i.slice(s).replace(/^\n+/, "");
  }
  if (t) {
    return i;
  }
  const c = i === "" ? "" : `\n${i}`;
  if (r) {
    return `${n}: ${r}${c}`;
  } else {
    return `${n}${c}`;
  }
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/103522.js"));
var o = r(require("./817173.js"));
function s(e) {
  const t = typeof e == "object" && typeof (e == null ? undefined : e.name) == "string" ? e.name : `Thrown${(0, o.default)(typeof e)}Error`;
  let n;
  let r;
  n = e != null && typeof e.message == "string" ? e.message : e === undefined ? "" : String(e);
  if (e != null && typeof e.stack == "string") {
    r = e.stack;
  } else {
    const e = new Error();
    e.name = t;
    e.message = n;
    r = typeof e.stack == "string" ? e.stack : "";
  }
  const a = typeof e == "object" ? (0, i.default)({}, e) : null;
  return (0, i.default)((0, i.default)({}, a), {}, {
    name: t,
    message: n,
    stack: r
  });
}