var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  var n;
  let {
    auth: r,
    encFilehash: o,
    hostname: s,
    query: l,
    type: u,
    byteRange: c,
    mediaId: d,
    token: p
  } = e;
  const f = l == null ? undefined : l.final_hash;
  return (0, a.default)({
    encFilehash: o,
    hostname: s,
    type: u,
    query: {
      auth: r,
      token: (0, i.default)(p),
      resume: l == null || (t = l.resume) === null || t === undefined ? undefined : t.toString(10),
      stream: l == null || (n = l.stream) === null || n === undefined ? undefined : n.toString(10),
      final_hash: f != null ? (0, i.default)(f) : undefined,
      bytestart: c == null ? undefined : c.start.toString(10),
      byteend: c == null ? undefined : c.end.toString(10),
      media_id: d.toString(10)
    }
  });
};
var i = r(require("./861309.js"));
var a = r(require("./955233.js"));