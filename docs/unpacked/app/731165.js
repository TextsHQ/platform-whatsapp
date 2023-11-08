var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePeerMessage = function (e) {
  const t = (0, o.getPeerMessageTable)();
  const n = new a.default({
    fromMe: true,
    remote: (0, s.getMeUser)(),
    id: e
  });
  return t.remove(n.toString());
};
exports.storePeerMessages = function (e) {
  const t = e.map(e => (0, i.default)((0, i.default)({}, e), {}, {
    id: String(e.id),
    to: String(e.to),
    subtype: String(e.subtype)
  }));
  (0, o.getPeerMessageTable)().bulkCreate(t);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("./565754.js"));
var o = require("./30474.js");
var s = require("./459857.js");