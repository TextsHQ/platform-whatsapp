var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fireAndForgetInternalDoNotUse = o;
exports.frontendFireAndForget = function (e, t) {
  o("event", e, t);
};
exports.frontendSendAndReceive = function (e, t) {
  return s("event", e, t);
};
exports.sendAndReceiveInternalDoNotUse = s;
exports.setApi = function (e) {
  a = e;
};
var i = r(require("./556869.js"));
let a = null;
function o(e, t, n) {
  if (!a) {
    throw (0, i.default)("fireAndForget called before setApi!");
  }
  a.fireAndForget(e, t, n);
}
function s(e, t, n) {
  if (a) {
    return a.sendAndReceive(e, t, n);
  } else {
    return Promise.reject((0, i.default)("sendAndReceive called before setApi!"));
  }
}