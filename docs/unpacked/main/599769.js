var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatMsgText = function (e) {
  var t;
  var n;
  const {
    msg: a
  } = e;
  if ((t = o(a.type, a.subtype)) === null || t === undefined || (n = t.formatMsgText) === null || n === undefined) {
    return undefined;
  } else {
    return n.call(t, e);
  }
};
var r = a(require("./701394.js"));
const o = (0, require("../app/915026.js").createMsgTypeRegistryLookup)(r.default);