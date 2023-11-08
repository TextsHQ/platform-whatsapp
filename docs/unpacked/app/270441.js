var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  if (e === null) {
    return "null";
  }
  switch (typeof e) {
    case "undefined":
      return "undefined";
    case "number":
      return `n:${e}`;
    case "string":
      return `s:${e}`;
    case "boolean":
      return `b:${e.toString()}`;
    case "object":
      {
        let t = a.get(e);
        if (t == null) {
          t = o++;
          a.set(e, t);
        }
        return `o:${t}`;
      }
    default:
      throw (0, i.default)("Unsupported type");
  }
};
var i = r(require("./415227.js"));
const a = new WeakMap();
let o = 0;