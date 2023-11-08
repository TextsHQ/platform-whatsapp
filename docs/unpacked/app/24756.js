var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildIndex = s;
exports.buildMessageKey = function (e) {
  let {
    remoteJid: t,
    id: n,
    fromMe: r,
    participant: i
  } = e;
  return [t, n, r ? "1" : "0", i == null || r ? "0" : i];
};
exports.buildPendingMutation = function (e) {
  let {
    action: t,
    indexArgs: n,
    collection: r,
    value: l,
    version: u,
    operation: c,
    timestamp: d
  } = e;
  return {
    collection: r,
    index: s(t, n),
    binarySyncAction: (0, o.encodeProtobuf)(a.SyncActionValueSpec, (0, i.default)((0, i.default)({}, l), {}, {
      timestamp: d
    })).readBuffer(),
    version: u,
    operation: c,
    timestamp: d,
    action: t
  };
};
var i = r(require("../vendor/73982.js"));
var a = require("./527796.js");
var o = require("./385914.js");
function s(e, t) {
  return JSON.stringify([e, ...t]);
}