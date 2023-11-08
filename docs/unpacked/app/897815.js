var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./614392.js");
var o = require("./122393.js");
var s = require("./287461.js");
var l = require("./795715.js");
class u extends a.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 3;
    this.action = o.Actions.ExternalWebBeta;
  }
  applyMutations(e) {
    if ((0, s.getABPropConfigValue)("external_beta_can_join") !== true) {
      __LOG__(2)`syncd: action not enabled`;
      return Promise.resolve(e.map(() => ({
        actionState: o.SyncActionState.Unsupported
      })));
    } else {
      return Promise.all(e.map(function () {
        var e = (0, i.default)(function* (e) {
          try {
            if (e.operation === "set") {
              const {
                value: t
              } = e;
              const n = t.externalWebBetaAction;
              if (n) {
                if (n.isOptIn === undefined) {
                  __LOG__(3)`beta setting sync: malformed mutation value`;
                  return {
                    actionState: o.SyncActionState.Malformed
                  };
                } else {
                  yield (0, l.changeOptInStatusForExternalWebBeta)(n.isOptIn);
                  return {
                    actionState: o.SyncActionState.Success
                  };
                }
              } else {
                __LOG__(3)`beta setting sync: malformed mutation`;
                return {
                  actionState: o.SyncActionState.Malformed
                };
              }
            }
            __LOG__(3)`external beta opt in sync: operation not supported`;
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
}
const c = new u();
Object.freeze(c);
var d = c;
exports.default = d;