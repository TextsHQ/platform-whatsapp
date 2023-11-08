var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./614392.js");
var o = require("./122393.js");
var s = require("./287461.js");
var l = require("./63014.js");
class u extends a.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 7;
    this.action = o.Actions.TimeFormat;
  }
  applyMutations(e) {
    return (0, i.default)(function* () {
      if ((0, s.getABPropConfigValue)("md_syncd_24_hour_time_format_sync_enabled") !== true) {
        __LOG__(3)`time format sync: operation not supported`;
        return e.map(() => ({
          actionState: o.SyncActionState.Unsupported
        }));
      } else {
        return e.map(e => {
          var t;
          if (e.operation !== "set") {
            __LOG__(3)`time format sync: operation not supported`;
            return {
              actionState: o.SyncActionState.Unsupported
            };
          }
          const n = (t = e.value.timeFormatAction) === null || t === undefined ? undefined : t.isTwentyFourHourFormatEnabled;
          if (n == null) {
            __LOG__(3)`time format sync: malformed mutation`;
            return {
              actionState: o.SyncActionState.Malformed
            };
          } else {
            l.Clock.setIs24Hour(n);
            return {
              actionState: o.SyncActionState.Success
            };
          }
        });
      }
    })();
  }
}
const c = new u();
Object.freeze(c);
var d = c;
exports.default = d;