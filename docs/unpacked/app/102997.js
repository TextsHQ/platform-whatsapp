var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./229079.js");
var o = require("./679905.js");
var s = require("./614392.js");
var l = require("./24756.js");
var u = require("./122393.js");
var c = require("./632157.js");
var d = require("./97858.js");
class p extends s.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 7;
    this.action = u.Actions.RemoveRecentSticker;
  }
  applyMutations(e) {
    return (0, i.default)(function* () {
      if ((0, d.isRecentStickersMDEnabled)()) {
        return e.map(e => {
          var t;
          if (e.operation !== "set") {
            __LOG__(3)`syncd: remove recent sticker sync: operation not supported`;
            return {
              actionState: u.SyncActionState.Unsupported
            };
          }
          const [, r] = e.indexParts;
          if (r == null) {
            __LOG__(3)`syncd: no sticker hash provided`;
            return {
              actionState: u.SyncActionState.Malformed
            };
          }
          const i = (t = e.value.removeRecentStickerAction) === null || t === undefined ? undefined : t.lastStickerSentTs;
          const o = require("./951220.js").RecentStickerCollectionMd;
          const s = o.get(r);
          if (!s) {
            return {
              actionState: u.SyncActionState.Orphan
            };
          }
          const l = (0, a.maybeNumberOrThrowIfTooLarge)(i);
          if (l == null || (0, a.numberOrThrowIfTooLarge)(s.timestamp) <= l) {
            o.removeAndSave(s);
          }
          return {
            actionState: u.SyncActionState.Success
          };
        });
      } else {
        __LOG__(3)`syncd: remove recent sticker operation not supported`;
        return e.map(() => ({
          actionState: u.SyncActionState.Unsupported
        }));
      }
    })();
  }
  generateRemoveStickerMutation(e) {
    const t = (0, c.unixTimeMs)();
    const n = {
      removeRecentStickerAction: {
        lastStickerSentTs: e.timestamp
      }
    };
    return (0, l.buildPendingMutation)({
      collection: u.CollectionName.RegularLow,
      indexArgs: [e.sticker.filehash],
      operation: o.SyncdMutation$SyncdOperation.SET,
      version: this.version,
      value: n,
      timestamp: t,
      action: this.action
    });
  }
}
const f = new p();
Object.freeze(f);
var _ = f;
exports.default = _;