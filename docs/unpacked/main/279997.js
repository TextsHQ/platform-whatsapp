var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderMsg = function (e) {
  var t;
  const {
    msg: n,
    displayAuthor: a
  } = e;
  const r = i(n.type, n.subtype);
  if (r == null || (t = r.renderMsg) === null || t === undefined) {
    return undefined;
  } else {
    return t.call(r, {
      chat: (0, l.unproxy)(e.chat),
      msg: (0, l.unproxy)(e.msg),
      displayAuthor: a
    });
  }
};
var r = a(require("./249533.js"));
var o = require("../app/915026.js");
var l = require("../app/163139.js");
const i = (0, o.createMsgTypeRegistryLookup)(r.default);