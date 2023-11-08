var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./614392.js");
var s = require("./122393.js");
var l = require("./856311.js");
var u = require("./512549.js");
var c = require("./622918.js");
class d extends o.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 3;
    this.action = s.Actions.LabelEdit;
  }
  applyMutations(e) {
    return Promise.all(e.map(function () {
      var e = (0, a.default)(function* (e) {
        try {
          if (e.operation === "set") {
            var t;
            const {
              indexParts: n,
              value: r
            } = e;
            const [, a] = n;
            if (!a) {
              (0, c.throwInvalidActionIndex)();
            }
            const o = r.labelEditAction;
            if (!o) {
              __LOG__(3)`label sync: malformed mutation`;
              return {
                actionState: s.SyncActionState.Malformed
              };
            }
            if (o.deleted) {
              yield (0, u.getLabelTable)().remove(a);
              l.LabelCollection.remove(a);
              return {
                actionState: s.SyncActionState.Success
              };
            }
            const {
              color: d,
              predefinedId: p
            } = o;
            const f = (t = o.name) !== null && t !== undefined ? t : "";
            if (f === "") {
              __LOG__(3)`labelEditAction.name is empty`;
            }
            if (d == null) {
              __LOG__(3)`labelEditAction.color is empty`;
            }
            const _ = {
              id: a,
              name: f,
              colorIndex: d,
              predefinedId: p
            };
            yield (0, u.getLabelTable)().createOrReplace(_);
            l.LabelCollection.add((0, i.default)({}, _), {
              merge: true
            });
            return {
              actionState: s.SyncActionState.Success
            };
          }
          __LOG__(3)`label sync: operation not supported`;
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
  }
}
const p = new d();
Object.freeze(p);
var f = p;
exports.default = f;