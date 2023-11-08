var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateProtobuf = function (e) {
  var t;
  var n;
  const {
    json: r
  } = e;
  if ((t = a(r.type, r.subtype)) === null || t === undefined || (n = t.generateProtobuf) === null || n === undefined) {
    return undefined;
  } else {
    return n.call(t, e);
  }
};
var i = r(require("./825597.js"));
const a = (0, require("./915026.js").createMsgTypeRegistryLookup)(i.default);