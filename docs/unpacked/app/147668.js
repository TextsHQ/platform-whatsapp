var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./679905.js");
var o = require("./614392.js");
var s = require("./24756.js");
var l = require("./122393.js");
var u = require("./632157.js");
var c = require("./420213.js");
var d = require("./61113.js");
var p = require("./851698.js");
var f = require("./802703.js");
var _ = require("./622918.js");
var g = require("./336897.js");
var m = require("./304954.js");
var h = r(require("./124928.js"));
class y extends o.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 2;
    this.action = l.Actions.Star;
  }
  getChatJidAndMessageKey(e) {
    const [, t, n, r, i] = e.indexArr;
    if (!(t && n && r && i)) {
      (0, _.throwInvalidActionIndex)();
    }
    const a = (0, _.syncKeyToMsgKey)(t, n, r, i);
    return {
      chatJid: t,
      messageKey: a == null ? undefined : a.toString()
    };
  }
  applyMutations(e) {
    return (0, i.default)(function* () {
      const t = [];
      const n = [];
      const r = new Set();
      yield (0, p.getMessageTable)().bulkGet(e.map(e => {
        var t;
        const [, n, r, i, a] = e.indexParts;
        if (n && r && i && a && h.default.isWid(n)) {
          if ((t = (0, _.syncKeyToMsgKey)(n, r, i, a)) === null || t === undefined) {
            return undefined;
          } else {
            return t.toString();
          }
        } else {
          return null;
        }
      }).filter(Boolean)).then(e => e.forEach(e => {
        if (e) {
          r.add(e.id);
        }
      }));
      const i = yield Promise.all(e.map(e => {
        try {
          if (e.operation === "set") {
            var i;
            const {
              indexParts: a,
              value: o
            } = e;
            const [, s, u, c, p] = a;
            if (!(s && u && c && p)) {
              (0, _.throwInvalidActionIndex)();
            }
            const h = (i = o.starAction) === null || i === undefined ? undefined : i.starred;
            if (h == null) {
              __LOG__(3)`star message sync: malformed mutation`;
              return {
                actionState: l.SyncActionState.Malformed
              };
            }
            const y = (0, _.syncKeyToMsgKey)(s, u, c, p);
            if (!y) {
              (0, g.uploadCriticalEventMetric)(m.MD_SYNCD_CRITICAL_EVENT_CODE.ACTION_INVALID_INDEX_DATA);
              return {
                actionState: l.SyncActionState.Malformed
              };
            }
            if (!r.has(y.toString())) {
              return {
                actionState: l.SyncActionState.Orphan,
                orphanModel: {
                  modelId: y.toString(),
                  modelType: l.SyncModelType.Msg
                }
              };
            }
            if (h) {
              t.push(y.toString());
            } else {
              n.push(y.toString());
            }
            const E = d.MsgCollection.get(y);
            if (E) {
              E.star = h;
              if (E.star) {
                (0, f.addStarredMsgs)([E]);
              } else {
                (0, f.removeStarredMsgs)([E]);
              }
            } else {
              __LOG__(3)`star_message_sync: msg ${y} found in storage but not in collection`;
            }
            return {
              actionState: l.SyncActionState.Success
            };
          }
          __LOG__(3)`star message sync: operation not supported`;
          return {
            actionState: l.SyncActionState.Unsupported
          };
        } catch (e) {
          return {
            actionState: l.SyncActionState.Failed
          };
        }
      }));
      yield Promise.all([(0, c.starMessages)(t), (0, c.unstarMessages)(n)]);
      return i;
    })();
  }
  getStarMessageMutations(e, t) {
    const n = (0, u.unixTimeMs)();
    return e.map(e => (0, s.buildPendingMutation)({
      collection: l.CollectionName.RegularHigh,
      indexArgs: (0, g.constructMsgKeySegments)(e),
      operation: a.SyncdMutation$SyncdOperation.SET,
      version: this.version,
      value: {
        starAction: {
          starred: t
        }
      },
      timestamp: n,
      action: this.action
    }));
  }
}
const E = new y();
Object.freeze(E);
var S = E;
exports.default = S;