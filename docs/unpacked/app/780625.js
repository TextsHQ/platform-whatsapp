var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    error: t
  } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, i.default)({}, null);
  if (t != null) {
    return t;
  }
  return new Error(e);
};
var i = r(require("../vendor/73982.js"));