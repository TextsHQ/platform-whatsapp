var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./396574.js");
var a = r(require("./388986.js"));
var o = r(require("../vendor/667294.js"));
exports.default = e => {
  let {
    max: t = 100,
    value: n,
    className: r
  } = e;
  return o.default.createElement("progress", {
    value: n,
    max: t,
    className: (0, i.classnamesConvertMeToStylexPlease)(a.default.progress, r)
  });
};