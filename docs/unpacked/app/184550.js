var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./614392.js");
var o = require("./122393.js");
var s = require("./247531.js");
var l = require("./371629.js");
var u = require("./622918.js");
class c extends a.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 7;
    this.action = o.Actions.MarketingMessage;
  }
  applyMutations(e) {
    return (0, i.default)(function* () {
      const t = [];
      const n = e.map(e => {
        try {
          const {
            indexParts: n
          } = e;
          const [, r] = n;
          if (!r) {
            (0, u.throwInvalidActionIndex)();
          }
          if (e.operation === "set") {
            const {
              marketingMessageAction: n
            } = e.value;
            if (!n) {
              return {
                actionState: o.SyncActionState.Malformed
              };
            }
            const {
              name: i,
              type: a,
              message: s,
              isDeleted: l,
              mediaId: u
            } = n;
            if (a == null) {
              return {
                actionState: o.SyncActionState.Malformed
              };
            } else {
              t.push({
                id: r,
                name: i,
                type: a,
                isDeleted: l,
                message: s,
                mediaId: u,
                sentMessageIds: new Set()
              });
              return {
                actionState: o.SyncActionState.Success
              };
            }
          }
          return {
            actionState: o.SyncActionState.Unsupported
          };
        } catch (e) {
          return {
            actionState: o.SyncActionState.Failed
          };
        }
      });
      yield (0, l.getPremiumMessageTable)().bulkCreateOrMerge(t);
      s.PremiumMessageCollection.add(t);
      return n;
    })();
  }
}
const d = new c();
Object.freeze(d);
var p = d;
exports.default = p;