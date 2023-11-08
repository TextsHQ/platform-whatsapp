Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgInfoBridgeApi = undefined;
var a = require("../app/61113.js");
var r = require("../app/993859.js");
var o = require("../app/241164.js");
const l = {
  updateMsgInfo(e) {
    let {
      updates: t
    } = e;
    for (const {
      msgKey: e,
      ack: l,
      participant: i,
      ts: u
    } of t) {
      var n;
      const t = (n = a.MsgCollection.get(e)) !== null && n !== undefined ? n : a.MsgCollection.getByEditMsgKey(e);
      if (t == null) {
        continue;
      }
      const s = o.MsgInfoCollection.get(t.id);
      if (s != null) {
        (0, r.updateMsgInfo)(s, l, i, u);
      }
    }
  }
};
exports.MsgInfoBridgeApi = l;