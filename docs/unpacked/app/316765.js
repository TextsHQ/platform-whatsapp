var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./614392.js");
var o = require("./122393.js");
var s = r(require("./932325.js"));
var l = require("./256354.js");
class u extends a.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 3;
    this.action = o.Actions.LocaleSetting;
  }
  applyMutations(e) {
    return Promise.all(e.map(function () {
      var e = (0, i.default)(function* (e) {
        try {
          if (e.operation === "set") {
            const {
              value: t
            } = e;
            const n = t.localeSetting;
            if (!n) {
              __LOG__(3)`locale setting sync: malformed mutation`;
              return {
                actionState: o.SyncActionState.Malformed
              };
            }
            const r = n.locale;
            yield s.default.setLocale(r, l.L10N_PRIORITY.PHONE);
            return {
              actionState: o.SyncActionState.Success
            };
          }
          __LOG__(3)`locale setting sync: operation not supported`;
          return {
            actionState: o.SyncActionState.Unsupported
          };
        } catch (e) {
          return {
            actionState: o.SyncActionState.Failed
          };
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()));
  }
}
const c = new u();
Object.freeze(c);
var d = c;
exports.default = d;