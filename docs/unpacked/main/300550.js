var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendViewReceipt = undefined;
var r = a(require("../vendor/348926.js"));
var o = a(require("../app/66836.js"));
var l = require("../app/163755.js");
var i = require("../app/61113.js");
var u = require("../app/787742.js");
var s = require("../app/549142.js");
var c = require("../app/73225.js");
var d = require("./968857.js");
var f = require("../app/263318.js");
const p = (0, o.default)(e => {
  let {
    id: t
  } = e;
  return t.toString();
}, e => function () {
  return m.apply(this, arguments);
}(e.id));
function m() {
  return (m = (0, r.default)(function* (e) {
    if (!(0, c.isNewsletterViewCountSendEnabled)()) {
      return;
    }
    const t = i.MsgCollection.get(e);
    if (t == null) {
      return;
    }
    if (!(0, u.getIsNewsletterMsg)(t)) {
      return;
    }
    if (t.viewed) {
      return;
    }
    const {
      serverId: n
    } = t;
    if (n == null) {
      return;
    }
    const a = (0, l.getChat)(t);
    try {
      const t = (0, f.toNewsletterJidOrThrow)(a.id.toString());
      yield (0, d.sendViewReceiptJob)(t, {
        itemServerId: n,
        itemId: e.toString()
      });
      yield s.NewsletterBridgeApi.updateMsgsViewed({
        ids: [e]
      });
    } catch (e) {
      __LOG__(4, undefined, new Error(), undefined, ["newsletter"])`[sendViewReceipt] Error sending view receipt`;
    }
  })).apply(this, arguments);
}
exports.sendViewReceipt = p;