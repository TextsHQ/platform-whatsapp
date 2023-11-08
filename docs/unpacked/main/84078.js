var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    reactionsModels: t
  } = (0, r.default)([e], o);
  var n;
  if (t[0]) {
    if ((n = t[0].reactionByMe) === null || n === undefined) {
      return undefined;
    } else {
      return n.reactionText;
    }
  } else {
    return null;
  }
};
var r = a(require("./154731.js"));
const o = () => {};