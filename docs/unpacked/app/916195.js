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
    this.action = o.Actions.PnForLidChat;
  }
  applyMutations(e) {
    return (0, i.default)(function* () {
      if ((0, s.getABPropConfigValue)("pnh_pn_for_lid_chat_sync") !== true) {
        __LOG__(3)`pn_for_lid_chat sync: operation not supported`;
        return e.map(() => ({
          actionState: o.SyncActionState.Unsupported
        }));
      }
      const t = [];
      const n = e.map(e => {
        var n;
        if (e.operation !== "set") {
          __LOG__(3)`pn_for_lid_chat sync: operation not supported`;
          return {
            actionState: o.SyncActionState.Malformed
          };
        }
        const r = e.indexParts[1];
        if (!(0, u.isWidlike)(r)) {
          __LOG__(3)`pn_for_lid_chat sync: malformed mutation - invalid key`;
          return {
            actionState: o.SyncActionState.Malformed
          };
        }
        const i = (n = e.value.pnForLidChatAction) === null || n === undefined ? undefined : n.pnJid;
        if (i == null || !(0, u.isWidlike)(i)) {
          __LOG__(3)`pn_for_lid_chat sync: malformed mutation - invalid pnJid`;
          return {
            actionState: o.SyncActionState.Malformed
          };
        }
        const a = (0, u.createUserWid)(i);
        const s = (0, u.createUserWid)(r);
        t.push({
          lid: s,
          pn: a
        });
        return {
          actionState: o.SyncActionState.Success
        };
      });
      yield (0, l.createLidPnMappingsJob)(t, true);
      return n;
    })();
  }
}
const d = new c();
Object.freeze(d);
var p = d;
exports.default = p;