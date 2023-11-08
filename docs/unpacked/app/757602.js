var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleWorkerCompatibleStanza = function (e) {
  const {
    attrs: t
  } = e;
  switch (e.tag) {
    case "notification":
      switch (t.type) {
        case "w:gp2":
          return y((0, l.handleGroupNotification)(e)).catch(t => S(e, t));
        case "encrypt":
          {
            const t = e.content;
            if (!Array.isArray(t) || !t.length) {
              break;
            }
            switch (t[0].tag) {
              case "identity":
                return y((0, u.handleE2eIdentityChange)(e)).catch(t => S(e, t));
            }
            break;
          }
      }
      break;
    case "message":
      {
        const {
          from: t
        } = e.attrs;
        if (h.default.isNewsletter(t == null ? undefined : t.toString())) {
          return (0, p.default)(e).catch(t => v(e, t));
        } else {
          return (0, c.default)(e).catch(t => v(e, t));
        }
      }
    case "receipt":
      try {
        if (function (e) {
          if (Array.isArray(e.content) && e.content.length > 0) {
            const t = e.content[0].tag;
            return t === "offer" || t === "accept" || t === "reject";
          }
          return false;
        }(e)) {
          return (0, f.handleCallReceipt)(e);
        }
        if (t.type !== "retry" && t.type !== "enc_rekey_retry") {
          return (0, d.default)(e);
        }
      } catch (t) {
        if (t instanceof a.XmppParsingFailure) {
          (0, g.postUnknownStanzaMetric)(e);
          return (0, s.createNackFromStanza)(e, s.NackReason.ParsingError);
        } else {
          return (0, s.createNackFromStanza)(e, s.NackReason.UnhandledError);
        }
      }
  }
};
var i = r(require("../vendor/348926.js"));
var a = require("./466202.js");
var o = r(require("./721698.js"));
var s = require("./400627.js");
var l = require("./200279.js");
var u = require("./246226.js");
var c = r(require("./299689.js"));
var d = r(require("./310393.js"));
var p = r(require("./856593.js"));
var f = require("./295595.js");
var _ = require("./126249.js");
var g = require("./311660.js");
var m = require("./755985.js");
var h = r(require("./124928.js"));
function y() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e) {
    if (!(0, m.isWorker)()) {
      return e;
    }
    const t = yield e;
    require("./536873.js").WorkerOfflineResumeReporter.updateProcessedNotificationCount();
    return t;
  })).apply(this, arguments);
}
function S(e, t) {
  if (t instanceof a.XmppParsingFailure) {
    (0, g.postUnknownStanzaMetric)(e);
    return (0, s.createNackFromStanza)(e, s.NackReason.ParsingError);
  } else {
    return (0, s.createNackFromStanza)(e, s.NackReason.UnhandledError);
  }
}
function v(e, t) {
  if (t instanceof a.XmppParsingFailure) {
    (0, g.postUnknownStanzaMetric)(e);
    (0, _.postIncomingMessageDropInvalidStanza)(e);
    return (0, s.createNackFromStanza)(e, s.NackReason.ParsingError);
  } else if (t instanceof o.default.DexieError) {
    (0, _.postIncomingMessageDropDBOperationFailed)(e);
    __LOG__(4, undefined, new Error(), true)`handleMsg: drop incoming message due to an internal error: ${t.name}, message: ${t.message}, stack: ${t.stack}`;
    return void SEND_LOGS("incoming-message-drop-db-operation-failed", 0.1);
  } else {
    __LOG__(4, undefined, new Error(), true)`handleMsg: drop incoming message due to an internal error: ${t.name}, message: ${t.message}, stack: ${t.stack}`;
    SEND_LOGS("incoming-message-drop-internal-error", 0.1);
    (0, _.postIncomingMessageDropInternalError)(e);
    return (0, s.createNackFromStanza)(e, s.NackReason.UnhandledError);
  }
}