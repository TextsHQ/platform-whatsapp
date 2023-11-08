var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  if (!e || !(0, i.isString)(e)) {
    throw (0, a.default)("MsgKey fromString error: str is null or not a string");
  }
  const t = e.split("_");
  let n;
  if (t.length < 3) {
    __LOG__(3)`MsgKey error: cannot create MsgKey from ${e}`;
  } else if (t.length === 4) {
    if (t[3] !== "out" && t[3] !== "in") {
      n = t[3];
    }
  } else if (t.length === 5) {
    n = t[4];
  }
  return {
    fromMe: t[0] === "true",
    remote: t[1],
    id: t[2],
    participant: n
  };
};
var i = require("./724976.js");
var a = r(require("./556869.js"));