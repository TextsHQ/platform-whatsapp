var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./614392.js");
var o = require("./122393.js");
var s = require("./454794.js");
var l = require("./388536.js");
var u = require("./362029.js");
var c = require("./851698.js");
var d = require("./622918.js");
var p = require("./336897.js");
var f = require("./304954.js");
var _ = r(require("./124928.js"));
function g() {
  return (g = (0, i.default)(function* (e) {
    const t = new Set();
    yield (0, c.getMessageTable)().bulkGet(e.map(e => {
      var t;
      const [,, n, r, i, a] = e.indexParts;
      if (n && r && i && a && _.default.isWid(n)) {
        if ((t = (0, d.syncKeyToMsgKey)(n, r, i, a)) === null || t === undefined) {
          return undefined;
        } else {
          return t.toString();
        }
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
class m extends a.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = o.LABEL_ASSOCIATION_SYNC_VERSION;
    this.action = o.Actions.LabelMessage;
  }
  applyMutations(e) {
    return (0, i.default)(function* () {
      const t = [];
      const n = [];
      const r = yield function () {
        return g.apply(this, arguments);
      }(e);
      const i = yield Promise.all(e.map(e => {
        try {
          if (e.operation === "set") {
            var i;
            const {
              indexParts: a,
              value: c
            } = e;
            const [, _, g, m, h, y] = a;
            if (!(_ && g && m && h && y)) {
              (0, d.throwInvalidActionIndex)();
            }
            const E = (i = c.labelAssociationAction) === null || i === undefined ? undefined : i.labeled;
            if (E == null) {
              __LOG__(3)`label message sync: malformed mutation`;
              return {
                actionState: o.SyncActionState.Malformed
              };
            }
            const S = (0, d.syncKeyToMsgKey)(g, m, h, y);
            if (!S) {
              (0, p.uploadCriticalEventMetric)(f.MD_SYNCD_CRITICAL_EVENT_CODE.ACTION_INVALID_INDEX_DATA);
              return {
                actionState: o.SyncActionState.Malformed
              };
            }
            if (!r.has(S.toString())) {
              return {
                actionState: o.SyncActionState.Orphan,
                orphanModel: {
                  modelId: S.toString(),
                  modelType: o.SyncModelType.Msg
                }
              };
            }
            const v = {
              labelId: _,
              associationId: S.toString(),
              type: u.LabelAssociationType.Message
            };
            if (E) {
              t.push(v);
              (0, l.addToLabelCollection)(S.toString(), [_], s.LabelItemParentType.Msg);
            } else {
              n.push(v);
              (0, l.removeLabelFromCollection)(S.toString(), _, s.LabelItemParentType.Msg);
            }
            return {
              actionState: o.SyncActionState.Success
            };
          }
          __LOG__(3)`label message sync: operation not supported`;
          return {
            actionState: o.SyncActionState.Unsupported
          };
        } catch (e) {
          return {
            actionState: o.SyncActionState.Failed
          };
        }
      }));
      yield (0, u.getLabelAssociationTable)().bulkRemove(n.map(e => [e.labelId, e.associationId, e.type]));
      yield (0, u.getLabelAssociationTable)().bulkCreateOrReplace(t);
      return i;
    })();
  }
}
const h = new m();
Object.freeze(h);
var y = h;
exports.default = y;