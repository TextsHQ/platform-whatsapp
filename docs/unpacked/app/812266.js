var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postprocessRenderableMessages = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./359987.js");
var o = require("./724469.js");
var s = require("./439443.js");
var l = require("./373070.js");
var u = require("./766187.js");
function c() {
  return (c = (0, i.default)(function* (e) {
    const {
      msgInfo: t,
      messageOverwriteOption: n,
      preprocessedMessages: r,
      handlePrivacyModeChangeAfterMsgProcessing: c,
      isOffline: d
    } = e;
    yield Promise.all(r.map(function () {
      var e = (0, i.default)(function* (e) {
        yield (0, a.frontendSendAndReceive)("updateMessageUI", {
          chatId: e.id.remote,
          msg: e,
          messageOverwriteOption: n
        });
        if ((0, o.isOptimizedMessagePostProcessingEnabled)()) {
          s.messagePostProcessBatcher.acceptMessage(e);
          if (!d) {
            s.messagePostProcessBatcher.runActiveBatches();
          }
        } else {
          (0, a.frontendFireAndForget)("processOrphanReadReceipts", {
            msgIds: [e.id]
          });
          if (e.type === l.MSG_TYPE.PAYMENT && e.subtype === "send") {
            (0, u.workerSafeFireAndForget)("processOrphanPaymentNotifications", {
              msgs: [e]
            });
          }
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()));
    if (c) {
      c();
    }
    return (0, a.frontendSendAndReceive)("updateUnattributedMessages", {
      messageInfo: t,
      messages: r
    });
  })).apply(this, arguments);
}