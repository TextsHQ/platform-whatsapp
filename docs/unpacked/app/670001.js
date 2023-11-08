var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./614392.js");
var s = require("./122393.js");
var l = require("./454794.js");
var u = require("./388536.js");
var c = require("./61229.js");
var d = require("./362029.js");
var p = require("./622918.js");
var f = require("./336897.js");
var _ = require("./304954.js");
var g = r(require("./124928.js"));
var m = require("./669050.js");
class h extends o.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = s.LABEL_ASSOCIATION_SYNC_VERSION;
    this.action = s.Actions.LabelJid;
  }
  applyMutations(e) {
    return (0, a.default)(function* () {
      const t = new Set();
      const r = [];
      const o = [];
      const h = yield Promise.all(e.map(function () {
        var e = (0, a.default)(function* (e) {
          try {
            if (e.operation === "set") {
              var a;
              const {
                indexParts: h,
                value: y
              } = e;
              const [, E, S] = h;
              if (!(E && S)) {
                (0, p.throwInvalidActionIndex)();
              }
              const v = (a = y.labelAssociationAction) === null || a === undefined ? undefined : a.labeled;
              if (v == null) {
                __LOG__(3)`label jid sync: malformed mutation`;
                return {
                  actionState: s.SyncActionState.Malformed
                };
              }
              if (!g.default.isWid(S)) {
                (0, f.uploadCriticalEventMetric)(_.MD_SYNCD_CRITICAL_EVENT_CODE.ACTION_INVALID_INDEX_DATA);
                return {
                  actionState: s.SyncActionState.Malformed
                };
              }
              const T = (0, m.createWid)(S);
              const M = T.toString();
              const A = {
                labelId: E,
                associationId: M,
                type: d.LabelAssociationType.Jid
              };
              if (v) {
                let e = t.has(M);
                if (!e) {
                  if (yield (0, c.getChatTable)().get(M, false)) {
                    t.add(M);
                    e = true;
                  }
                }
                const a = require("./79672.js").Chat;
                const o = e ? null : new a({
                  id: T
                });
                r.push(A);
                if (o) {
                  (0, c.getChatTable)().create((0, i.default)((0, i.default)({}, o.toJSON()), {}, {
                    id: M
                  }));
                  t.add(M);
                  require("./351053.js").ChatCollection.add(o);
                }
                (0, u.addToLabelCollection)(M, [E], l.LabelItemParentType.Chat);
              } else {
                o.push(A);
                (0, u.removeLabelFromCollection)(M, E, l.LabelItemParentType.Chat);
              }
              return {
                actionState: s.SyncActionState.Success
              };
            }
            __LOG__(3)`label jid sync: unsupported operation`;
            return {
              actionState: s.SyncActionState.Unsupported
            };
          } catch (e) {
            return {
              actionState: s.SyncActionState.Failed
            };
          }
        });
        return function () {
          return e.apply(this, arguments);
        };
      }()));
      yield (0, d.getLabelAssociationTable)().bulkRemove(o.map(e => [e.labelId, e.associationId, e.type]));
      yield (0, d.getLabelAssociationTable)().bulkCreateOrReplace(r);
      return h;
    })();
  }
}
const y = new h();
Object.freeze(y);
var E = y;
exports.default = E;