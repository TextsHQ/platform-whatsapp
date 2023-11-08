var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseKeepInChatHistorySyncMessage = function (e) {
  const t = e.keepInChat;
  if (t != null && t.key != null) {
    const {
      id: e,
      remoteJid: n,
      participant: r,
      fromMe: u
    } = t.key;
    const {
      keepType: c,
      serverTimestampMs: d
    } = t;
    if (e == null || c == null || d == null || n == null) {
      throw (0, l.default)("parseKeepInChatHistorySyncMessage: malformed KIC WebMessageInfo");
    }
    const p = (0, a.parseKeepTypeToKicState)(c);
    if (p == null) {
      throw (0, l.default)("parseKeepInChatHistorySyncMessage: KeepType has unsupported value");
    }
    return {
      kicKey: new o.default({
        fromMe: (0, i.default)(u, "fromMe"),
        id: (0, i.default)(e, "id"),
        remote: (0, i.default)((0, s.createWidFromWidLike)(n), "createWidFromWidLike(remoteJid)"),
        participant: r != null ? (0, s.createWidFromWidLike)(r) : undefined
      }),
      kicState: p,
      kicTimestampMs: parseInt(d, 10)
    };
  }
};
var i = r(require("./670983.js"));
var a = require("./808716.js");
var o = r(require("./565754.js"));
var s = require("./669050.js");
var l = r(require("./556869.js"));