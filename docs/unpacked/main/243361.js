var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.futureproofMsgText = function (e) {
  var t;
  var n;
  const {
    msg: a
  } = e;
  if ((t = o(a.futureproofType, a.futureproofSubtype)) === null || t === undefined || (n = t.futureproofMsgText) === null || n === undefined) {
    return undefined;
  } else {
    return n.call(t, e);
  }
};
var r = a(require("./129416.js"));
const o = (0, require("../app/915026.js").createMsgTypeRegistryLookup)(r.default);