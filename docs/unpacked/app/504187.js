var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = r(require("./861309.js"));
var s = require("./791357.js");
var l = r(require("./955233.js"));
var u = require("./708761.js");
var c = r(require("./219368.js"));
function d() {
  return (d = (0, i.default)(function* (e) {
    const {
      directPath: t,
      encFilehash: n,
      hostname: r,
      auth: i
    } = e;
    const d = t.split("?")[0];
    const p = new TextEncoder().encode(d);
    const f = (0, a.encodeB64UrlSafe)(p);
    const _ = (0, l.default)({
      encFilehash: n,
      hostname: r,
      type: u.MEDIA_TYPES.IMAGE,
      query: {
        token: (0, o.default)(n),
        d_md: f,
        auth: i
      }
    });
    const g = yield (0, c.default)(_, {
      method: "DELETE"
    });
    if (!g.ok) {
      throw new s.HttpStatusCodeError(g.status, "MMS Delete error");
    }
  })).apply(this, arguments);
}