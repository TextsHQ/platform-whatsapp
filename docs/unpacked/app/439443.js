Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messagePostProcessBatcher = undefined;
var r = require("./392646.js");
var i = require("./359987.js");
var a = require("./373070.js");
var o = require("./766187.js");
const s = {
  delayMs: 1000
};
const l = new class {
  constructor() {
    this._batcher = (0, r.createSimpleBatcher)(s, e => {
      this._processOrphanReadReceipts(e);
      return Promise.resolve([]);
    });
  }
  acceptMessage(e) {
    return this._batcher.accept(e);
  }
  runActiveBatches() {
    return this._batcher.runActiveBatch().then(() => {});
  }
  _processOrphanReadReceipts(e) {
    (0, i.frontendFireAndForget)("processOrphanReadReceipts", {
      msgIds: e.map(e => e.id)
    });
    const t = e.filter(e => e.type === a.MSG_TYPE.PAYMENT && e.subtype === "send");
    if (t.length > 0) {
      (0, o.workerSafeFireAndForget)("processOrphanPaymentNotifications", {
        msgs: t
      });
    }
  }
}();
exports.messagePostProcessBatcher = l;