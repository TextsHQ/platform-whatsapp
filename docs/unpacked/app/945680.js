var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./614392.js");
var o = require("./122393.js");
var s = require("./287461.js");
var l = require("./487837.js");
var u = require("./669050.js");
class c extends a.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 8;
    this.action = o.Actions.ShareOwnPn;
  }
  applyMutations(e) {
    return (0, i.default)(function* () {
      if ((0, s.getABPropConfigValue)("share_own_pn_sync") !== true) {
        __LOG__(3)`share_own_pn sync: operation not supported`;
        return e.map(() => ({
          actionState: o.SyncActionState.Unsupported
        }));
      }
      const t = [];
      const n = e.map(e => {
        if (e.operation !== "set") {
          __LOG__(3)`share_own_pn sync: operation not supported`;
          return {
            actionState: o.SyncActionState.Malformed
          };
        }
        const n = e.indexParts[1];
        if (!(0, u.isWidlike)(n)) {
          __LOG__(3)`share_own_pn sync: malformed mutation - invalid key`;
          return {
            actionState: o.SyncActionState.Malformed
          };
        }
        const r = (0, u.createUserWid)(n);
        t.push({
          lid: r,
          data: {
            shareOwnPn: true
          }
        });
        return {
          actionState: o.SyncActionState.Success
        };
      });
      yield (0, l.updateLidMetadataJob)(t);
      return n;
    })();
  }
}
const d = new c();
Object.freeze(d);
var p = d;
exports.default = p;