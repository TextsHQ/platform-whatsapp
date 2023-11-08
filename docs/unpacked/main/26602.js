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
  if ((t = l(a.type, a.subtype)) === null || t === undefined || (n = t.formatMsgText) === null || n === undefined) {
    return undefined;
  } else {
    return n.call(t, e);
  }
};
var r = require("../app/915026.js");
var o = a(require("./898599.js"));
const l = (0, r.createMsgTypeRegistryLookup)(o.default);