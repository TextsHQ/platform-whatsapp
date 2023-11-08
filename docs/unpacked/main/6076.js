Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusV3BridgeApi = undefined;
var a = require("../app/657694.js");
const r = {
  handleStatusV3Update(e) {
    let {
      rawMsg: t,
      checksum: n,
      isMsgUpdate: r
    } = e;
    return a.StatusV3Collection.handleUpdate(t, n, r);
  },
  handleReadStatus(e) {
    let {
      msgKeys: t
    } = e;
    for (const e of t) {
      const t = a.StatusV3Collection.get(e.participant);
      if (t) {
        t.handleReadStatus(e);
      }
    }
  }
};
exports.StatusV3BridgeApi = r;