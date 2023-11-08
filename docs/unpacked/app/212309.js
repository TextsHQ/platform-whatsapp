Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncActionsToPendingMutations = function (e, t) {
  return e.map(e => {
    const n = (0, i.decodeProtobuf)(r.SyncActionDataSpec, e.binarySyncData).value;
    const o = (0, a.encodeProtobuf)(r.SyncActionValueSpec, n).readBuffer();
    return {
      collection: e.collection,
      index: e.index,
      binarySyncAction: o,
      operation: t,
      version: e.version,
      timestamp: e.timestamp,
      action: e.action
    };
  });
};
var r = require("./527796.js");
var i = require("./394629.js");
var a = require("./385914.js");