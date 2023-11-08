var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  let {
    messageProtobuf: n,
    baseMessage: r,
    msgContext: l
  } = e;
  const {
    protocolMessage: u
  } = n;
  if (u == null) {
    return;
  }
  if (l !== "relay") {
    return;
  }
  if (u.type !== s.Message$ProtocolMessage$Type.HISTORY_SYNC_NOTIFICATION) {
    return;
  }
  const {
    historySyncNotification: c
  } = u;
  if (c == null) {
    return;
  }
  const d = {
    directPath: c.directPath,
    encFilehash: (0, a.decodeBytes)(c.fileEncSha256),
    filehash: (0, a.decodeBytes)(c.fileSha256),
    mediaKey: (0, a.decodeBytes)(c.mediaKey),
    type: "md-msg-hist"
  };
  return {
    msgData: (0, i.default)((0, i.default)({}, r), {}, {
      type: o.MSG_TYPE.PROTOCOL,
      subtype: "history_sync_notification",
      historySyncMetaData: {
        historySyncNotification: c,
        downloadOptions: d,
        progress: (u == null || (t = u.historySyncNotification) === null || t === undefined ? undefined : t.progress) || 0
      }
    }),
    contextInfo: undefined
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./21094.js");
var o = require("./373070.js");
var s = require("./533494.js");