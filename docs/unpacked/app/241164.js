var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgInfoCollectionImpl = exports.MsgInfoCollection = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/81109.js"));
var o = require("./558763.js");
var s = require("./392125.js");
var l = require("./257845.js");
var u = require("./787742.js");
var c = require("./993859.js");
var d = require("./450784.js");
var p = r(require("./565754.js"));
var f = require("./373070.js");
var _ = r(require("./556869.js"));
function g(e, t) {
  const {
    read: n,
    played: r,
    delivery: i,
    readRemaining: o,
    playedRemaining: s,
    deliveryRemaining: u,
    deliveryPrivacyMode: c
  } = t;
  const d = {
    id: e,
    read: n.map(e => (0, a.default)({}, e)),
    readRemaining: o,
    played: r.map(e => (0, a.default)({}, e)),
    playedRemaining: s,
    delivery: i.map(e => (0, a.default)({}, e)),
    deliveryRemaining: u
  };
  if (c != null) {
    const e = l.HostStorageEnumType.cast(c.hostStorage);
    const t = l.ActualActorsEnumType.cast(c.actualActors);
    if (t == null || e == null) {
      __LOG__(4, undefined, new Error(), true)`queryMsgInfo: got unsupported host storage or actual actors`;
      SEND_LOGS("queryMsgInfo-incorrect-enums");
      throw (0, _.default)("queryMsgInfo: got unsupported host storage or actual actors");
    }
    const n = {
      hostStorage: e,
      privacyModeTs: c.privacyModeTs,
      actualActors: t
    };
    d.deliveryPrivacyMode = n;
  }
  return d;
}
class m extends s.BaseCollection {
  constructor() {
    super(...arguments);
    this.findImpl = function () {
      var e = (0, i.default)(function* (e) {
        const t = require("./61113.js").MsgCollection.get(e);
        if (!t) {
          return Promise.reject(new s.CollectionSilentQueryError(`No message found for id: ${e.toString()}`));
        }
        if (!(0, u.getIsSentByMe)(t)) {
          return Promise.reject(new s.CollectionSilentQueryError("message not sent by me"));
        }
        let r;
        try {
          r = yield (0, o.queryMsgInfo)(e);
        } catch (e) {
          __LOG__(4, true, new Error(), true)`queryMsgInfo: failed to find msg info in storage`;
          SEND_LOGS("queryMsgInfo failed");
          throw e;
        }
        const i = g(e, r);
        return (0, a.default)((0, a.default)({}, i), {}, {
          usePlayReceipt: t.type === f.MSG_TYPE.PTT || t.isViewOnce
        });
      });
      return function () {
        return e.apply(this, arguments);
      };
    }();
    this.findManyAndUpdate = function () {
      var e = (0, i.default)(function* (e) {
        const t = new Map();
        const r = [];
        let i;
        e.forEach(e => {
          const t = require("./61113.js").MsgCollection.get(e);
          if (t && (0, u.getIsSentByMe)(t)) {
            r.push(t);
          }
        });
        try {
          i = yield (0, o.queryMsgInfos)(e);
        } catch (e) {
          __LOG__(4, true, new Error(), true)`queryMsgInfos: failed to find msg info in storage`;
          SEND_LOGS("queryMsgInfos failed");
          throw e;
        }
        r.forEach(e => {
          const {
            id: n
          } = e;
          const r = i.get(n.toString());
          if (!r) {
            return Promise.reject(new s.CollectionSilentQueryError(`query returned no msg info for msg ${n.toString()}`));
          }
          const o = (0, a.default)((0, a.default)({}, g(n, r)), {}, {
            usePlayReceipt: e.type === f.MSG_TYPE.PTT || e.isViewOnce
          });
          t.set(n.toString(), o);
          h.gaddUp(o);
        });
        return t;
      });
      return function () {
        return e.apply(this, arguments);
      };
    }();
  }
  updateInfo(e, t, n, r, i, a) {
    const o = new p.default({
      from: t,
      to: n,
      id: e,
      participant: i
    });
    const s = new p.default({
      from: t,
      to: n,
      id: e
    });
    const l = this.get(o) || this.get(s);
    if (l) {
      return (0, c.updateMsgInfo)(l, r, i, a);
    }
  }
}
exports.MsgInfoCollectionImpl = m;
m.model = d.MsgInfo;
m.staleCollection = true;
const h = new m();
exports.MsgInfoCollection = h;