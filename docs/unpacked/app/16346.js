var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./614392.js");
var o = require("./122393.js");
var s = require("./622918.js");
const l = "current";
const u = "session_start";
class c extends a.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 7;
    this.action = o.Actions.PrimaryVersion;
  }
  applyMutations(e) {
    return (0, i.default)(function* () {
      return e.map(e => {
        var t;
        if (e.operation !== "set") {
          __LOG__(3)`syncd: primary version sync, operation not supported`;
          return {
            actionState: o.SyncActionState.Unsupported
          };
        }
        const {
          indexParts: n,
          value: r
        } = e;
        const [, i] = n;
        if (!i || i !== l && i !== u) {
          (0, s.throwInvalidActionIndex)();
        }
        if (((t = r.primaryVersionAction) === null || t === undefined ? undefined : t.version) == null) {
          __LOG__(3)`syncd: primary version sync, malformed mutation`;
          return {
            actionState: o.SyncActionState.Malformed
          };
        } else {
          return {
            actionState: o.SyncActionState.Success
          };
        }
      });
    })();
  }
}
const d = new c();
Object.freeze(d);
var p = d;
exports.default = p;