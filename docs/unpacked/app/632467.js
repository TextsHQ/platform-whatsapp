var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./614392.js");
var o = require("./122393.js");
var s = require("./177938.js");
var l = require("./691195.js");
var u = require("./622918.js");
var c = require("./336897.js");
var d = require("./304954.js");
var p = r(require("./124928.js"));
var f = require("./669050.js");
function _() {
  return (_ = (0, i.default)(function* (e) {
    const t = new Set();
    yield (0, l.getContactTable)().bulkGet(e.map(e => {
      const [, t] = e.indexParts;
      if (t && p.default.isWid(t)) {
        return t;
      } else {
        return null;
      }
    }).filter(Boolean)).then(e => e.forEach(e => {
      if (e) {
        t.add(e.id);
      }
    }));
    return t;
  })).apply(this, arguments);
}
class g extends a.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 7;
    this.action = o.Actions.UserStatusMute;
  }
  applyMutations(e) {
    return (0, i.default)(function* () {
      const t = yield function () {
        return _.apply(this, arguments);
      }(e);
      const n = [];
      const r = yield Promise.all(e.map(e => {
        try {
          if (e.operation === "set") {
            var r;
            const {
              indexParts: i,
              value: a
            } = e;
            const [, s] = i;
            if (!s) {
              (0, u.throwInvalidActionIndex)();
            }
            if (!p.default.isWid(s)) {
              (0, c.uploadCriticalEventMetric)(d.MD_SYNCD_CRITICAL_EVENT_CODE.ACTION_INVALID_INDEX_DATA);
              return {
                actionState: o.SyncActionState.Malformed
              };
            }
            const l = (r = a.userStatusMuteAction) === null || r === undefined ? undefined : r.muted;
            if (l === undefined) {
              __LOG__(3)`UserStatusMuteSyncd: malformed mutation ${e}`;
              return {
                actionState: o.SyncActionState.Malformed
              };
            } else if (t.has(s)) {
              n.push({
                id: s,
                statusMute: l
              });
              return {
                actionState: o.SyncActionState.Success
              };
            } else {
              return {
                actionState: o.SyncActionState.Orphan,
                orphanModel: {
                  modelId: s,
                  modelType: o.SyncModelType.UserStatusMute
                }
              };
            }
          }
          __LOG__(3)`status user mute chat sync: operation not supported`;
          return {
            actionState: o.SyncActionState.Unsupported
          };
        } catch (e) {
          return {
            actionState: o.SyncActionState.Failed
          };
        }
      }));
      yield (0, l.getContactTable)().bulkCreateOrMerge(n);
      const i = n.map(e => {
        const t = (0, f.createUserWid)(e.id);
        const n = s.ContactCollection.get(t);
        return {
          id: t,
          pushname: (n == null ? undefined : n.pushname) || "",
          type: (n == null ? undefined : n.type) || "out",
          name: n == null ? undefined : n.name,
          statusMute: e.statusMute
        };
      });
      s.ContactCollection.add(i, {
        merge: true
      });
      return r;
    })();
  }
}
const m = new g();
Object.freeze(m);
var h = m;
exports.default = h;