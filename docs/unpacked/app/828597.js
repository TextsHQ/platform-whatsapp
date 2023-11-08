var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findGroupMetadata = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./209639.js");
var s = r(require("./97359.js"));
var l = require("./297031.js");
var u = require("./853441.js");
var c = r(require("./342310.js"));
function d() {
  return (d = (0, a.default)(function* (e) {
    let t = null;
    let r = null;
    let a = () => {};
    const d = (0, s.default)(require("./667845.js")).get(e);
    if (d) {
      if (d.participantQueryPromise) {
        __LOG__(2)`findGroupMetadata: ${e} - pending participant query`;
        return d.participantQueryPromise.then(() => ({
          id: e
        }));
      }
      d.participantQueryPromise = new Promise(e => {
        a = e;
      });
    } else {
      t = yield (0, l.getGroupMetadataJob)(e);
      if (!t) {
        __LOG__(2)`findGroupMetadata: ${e} - query missing group participant`;
        return (0, u.sendQueryGroup)(e);
      }
      if (t.subject != null) {
        (0, u.updateSubject)(e, t.subject);
      }
    }
    try {
      var p;
      var f;
      var _;
      var g;
      var m;
      if ((!d || d.stale) && (r = yield (0, l.getGroupParticipantJob)(e), !r)) {
        __LOG__(2)`findGroupMetadata: ${e} - query missing group participant`;
        return (0, u.sendQueryGroup)(e);
      }
      const n = (0, i.default)((0, i.default)({
        id: e
      }, t), {}, {
        participants: (p = r) === null || p === undefined ? undefined : p.participants,
        pastParticipants: (f = r) === null || f === undefined ? undefined : f.pastParticipants,
        deviceStale: r ? r.staleType === o.STALE_TYPES.DEVICE : undefined,
        cachedDeviceCount: (_ = r) === null || _ === undefined ? undefined : _.deviceCount,
        cachedDeviceSizeBucket: ((g = r) === null || g === undefined ? undefined : g.deviceCount) ? (0, c.default)(r.deviceCount) : null
      });
      if (((m = r) === null || m === undefined ? undefined : m.staleType) === o.STALE_TYPES.PARTICIPANT) {
        __LOG__(2)`findGroupMetadata: ${e} - query stale group participant`;
        const t = yield (0, u.sendQueryGroup)(e);
        if ((t == null ? undefined : t.participants) != null) {
          n.participants = t.participants;
        }
      }
      return n;
    } finally {
      a();
      if (d) {
        d.participantQueryPromise = null;
      }
    }
  })).apply(this, arguments);
}