var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./614392.js");
var o = require("./122393.js");
var s = r(require("./513809.js"));
var l = require("./247531.js");
var u = require("./622918.js");
class c extends a.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 7;
    this.action = o.Actions.MarketingMessageBroadcast;
  }
  applyMutations(e) {
    return (0, i.default)(function* () {
      const t = [];
      const n = e.map(e => {
        try {
          const {
            indexParts: n
          } = e;
          const [, r, i] = n;
          if (!(r && i)) {
            (0, u.throwInvalidActionIndex)();
          }
          if (e.operation === "set") {
            if (l.PremiumMessageCollection.find(r) == null) {
              return {
                actionState: o.SyncActionState.Orphan
              };
            } else {
              t.push({
                messageId: i,
                premiumMessageId: r
              });
              return {
                actionState: o.SyncActionState.Success
              };
            }
          } else {
            return {
              actionState: o.SyncActionState.Unsupported
            };
          }
        } catch (e) {
          return {
            actionState: o.SyncActionState.Failed
          };
        }
      });
      yield (0, s.default)(t);
      return n;
    })();
  }
}
const d = new c();
Object.freeze(d);
var p = d;
exports.default = p;