var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/81109.js"));
var a = require("./754424.js");
const o = () => {};
var s = "fetch" in self ? self.fetch : function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, a.sharedFetch)(e, (0, i.default)((0, i.default)({}, t), {}, {
    onProgress: o
  }));
};
exports.default = s;