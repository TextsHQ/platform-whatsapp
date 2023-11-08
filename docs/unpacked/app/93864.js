Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OPTIONAL = function (e, t) {
  if (t == null) {
    return r.DROP_ATTR;
  } else {
    return e(t);
  }
};
exports.OPTIONAL_LITERAL = function (e, t) {
  if (t) {
    return e;
  } else {
    return r.DROP_ATTR;
  }
};
var r = require("./716358.js");