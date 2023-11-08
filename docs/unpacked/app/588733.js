var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unwrapDeviceSentMessage = function (e) {
  var t;
  var n;
  var r;
  const a = e == null || (t = e.deviceSentMessage) === null || t === undefined ? undefined : t.message;
  const o = e == null || (n = e.messageContextInfo) === null || n === undefined ? undefined : n.messageSecret;
  if (a == null || o == null || ((r = a.messageContextInfo) === null || r === undefined ? undefined : r.messageSecret) != null) {
    return a;
  }
  return (0, i.default)((0, i.default)({}, a), {}, {
    messageContextInfo: (0, i.default)((0, i.default)({}, a.messageContextInfo), {}, {
      messageSecret: o
    })
  });
};
exports.wrapDeviceSentMessage = function (e, t) {
  var n;
  const r = {
    deviceSentMessage: {
      destinationJid: t.toString({
        legacy: true
      }),
      message: e
    }
  };
  const i = e == null || (n = e.messageContextInfo) === null || n === undefined ? undefined : n.messageSecret;
  if (i != null) {
    r.messageContextInfo = {
      messageSecret: i
    };
  }
  return r;
};
var i = r(require("../vendor/81109.js"));