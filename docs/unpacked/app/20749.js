var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMsgModelMetricReporter = exports.createAddonMetricReporter = undefined;
var i = r(require("./670983.js"));
var a = require("./566509.js");
var o = require("./141797.js");
var s = require("./816793.js");
exports.createMsgModelMetricReporter = e => {
  const t = {
    createSendReporter: t => new o.MessageSendReporter(e, t),
    sendReporter: null,
    sendPerfReporter: null
  };
  Object.defineProperty(t, "sendReporter", {
    get: () => e.wamMessageSendReporter,
    set: t => {
      e.wamMessageSendReporter = t;
    },
    enumerable: true
  });
  Object.defineProperty(t, "sendPerfReporter", {
    get: () => {
      var t;
      if ((t = e.wamMessageSendPerfReporter) !== null && t !== undefined) {
        return t;
      } else {
        return null;
      }
    },
    set: t => {
      e.wamMessageSendPerfReporter = t;
    },
    enumerable: true
  });
  return t;
};
exports.createAddonMetricReporter = e => {
  let t = new o.MessageSendReporter(e);
  let n = new a.MessageSendPerfReporter({
    chatWid: (0, i.default)(e.to, "msgData.to"),
    mediaType: (0, s.getWamMediaType)(e),
    messageType: (0, s.getWamMessageType)(e)
  });
  const r = {
    createSendReporter: t => new o.MessageSendReporter(e, t),
    sendReporter: null,
    sendPerfReporter: null
  };
  Object.defineProperty(r, "sendReporter", {
    get: () => t,
    set: e => {
      t = e;
    },
    enumerable: true
  });
  Object.defineProperty(r, "sendPerfReporter", {
    get: () => n,
    set: e => {
      n = e;
    },
    enumerable: true
  });
  return r;
};