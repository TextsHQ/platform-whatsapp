var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrUpdateReactions = function (e) {
  const t = new Map();
  e.forEach(e => {
    const {
      parentMsgKey: n,
      senderUserJid: r
    } = e;
    if ((0, o.isSerializedWidMe)(r)) {
      e.read = true;
    }
    const i = `${n},${r}`;
    const a = t.get(i);
    if (a) {
      if (a.timestamp <= e.timestamp) {
        t.set(i, e);
      }
    } else {
      t.set(i, e);
    }
  });
  return (0, a.getStorage)().lock(["reactions"], function () {
    var e = (0, i.default)(function* (e) {
      let [n] = e;
      const r = Array.from(t.values()).map(e => [e.parentMsgKey, e.senderUserJid]);
      (yield n.anyOf(["parentMsgKey", "senderUserJid"], r)).forEach(e => {
        const n = `${e.parentMsgKey},${e.senderUserJid}`;
        const r = t.get(n);
        if (r && r.timestamp <= e.timestamp) {
          t.delete(n);
        }
      });
      yield n.bulkCreateOrReplace(Array.from(t.values()));
      return Array.from(t.values());
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
};
var i = r(require("../vendor/348926.js"));
var a = require("./732011.js");
var o = require("./459857.js");