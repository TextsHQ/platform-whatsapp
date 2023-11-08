var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, a.normalizeError)(e);
  const {
    name: n,
    message: r,
    stack: s
  } = t;
  const l = (0, i.default)(t, o);
  const u = (0, a.normalizeStack)(e, true);
  const c = Object.keys(l).length === 0 ? "" : " " + JSON.stringify(l, (e, t) => e && typeof t == "object" ? String(t) : t);
  return `${n} - ${r || ""}${c}\n${u}`;
};
var i = r(require("../vendor/506479.js"));
var a = require("./191873.js");
const o = ["name", "message", "stack"];