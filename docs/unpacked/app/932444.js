var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = require("./819416.js");
var s = require("./418987.js");
var l = require("./679905.js");
var u = require("./614392.js");
var c = require("./24756.js");
var d = require("./122393.js");
var p = require("./788788.js");
var f = require("./97858.js");
var _ = require("./164832.js");
class g extends u.SyncActionBase {
  constructor() {
    super(...arguments);
    this.version = 7;
    this.action = d.Actions.FavoriteSticker;
  }
  applyMutations(e) {
    return (0, i.default)(function* () {
      if (!(0, f.isFavoriteStickersEnabled)()) {
        __LOG__(3)`syncd: favorite sticker sync operation not supported`;
        return e.map(() => ({
          actionState: d.SyncActionState.Unsupported
        }));
      }
      return e.map(e => {
        try {
          if (e.operation !== "set") {
            __LOG__(3)`syncd: favorite sticker sync: operation not supported`;
            return {
              actionState: d.SyncActionState.Unsupported
            };
          }
          const {
            indexParts: t,
            value: n,
            timestamp: r
          } = e;
          const [, i] = t;
          if (!i) {
            return {
              actionState: d.SyncActionState.Malformed
            };
          }
          const o = n.stickerAction;
          if (o == null) {
            __LOG__(3)`syncd: favorite sticker sync: malformed mutation`;
            return {
              actionState: d.SyncActionState.Malformed
            };
          }
          const {
            fileEncSha256: s,
            mediaKey: l,
            mimetype: u,
            height: c,
            width: f,
            directPath: g,
            isFavorite: m,
            deviceIdHint: h
          } = o;
          if (m == null) {
            __LOG__(3)`syncd: favorite sticker sync: malformed mutation`;
            return {
              actionState: d.SyncActionState.Malformed
            };
          }
          if (m) {
            if (p.FavoriteStickerCollection.get(i)) {
              __LOG__(2)`syncd: favorite sticker sync: skipping adding favorite sticker since it has been added`;
              return {
                actionState: d.SyncActionState.Success
              };
            }
            const e = new _.StickerModel({
              id: i,
              directPath: g,
              filehash: i,
              encFilehash: s ? (0, a.encodeB64)(s) : "",
              mediaKey: l != null ? (0, a.encodeB64)(l) : "",
              mediaKeyTimestamp: r,
              width: f,
              height: c,
              mimetype: u
            });
            p.FavoriteStickerCollection.addOrUpdateStickers([e], r, h);
          } else {
            if (!p.FavoriteStickerCollection.get(i)) {
              return {
                actionState: d.SyncActionState.Success
              };
            }
            p.FavoriteStickerCollection.removeAndSave(i);
          }
          return {
            actionState: d.SyncActionState.Success
          };
        } catch (e) {
          return {
            actionState: d.SyncActionState.Failed
          };
        }
      });
    })();
  }
  generateFavoriteSyncMutation(e, t, n) {
    var r;
    var i;
    const u = {
      stickerAction: {
        fileEncSha256: (0, a.decodeB64)((r = e.encFilehash) !== null && r !== undefined ? r : ""),
        mediaKey: (0, a.decodeB64)((i = e.mediaKey) !== null && i !== undefined ? i : ""),
        mimetype: e.mimetype,
        height: e.height,
        width: e.width,
        directPath: e.directPath != null ? e.directPath : undefined,
        isFavorite: t,
        deviceIdHint: (0, s.interpretAsNumber)((0, s.extractDeviceId)((0, o.getMyDeviceJid)()))
      }
    };
    return (0, c.buildPendingMutation)({
      collection: d.CollectionName.RegularLow,
      indexArgs: [e.filehash],
      operation: l.SyncdMutation$SyncdOperation.SET,
      version: this.version,
      value: u,
      timestamp: n,
      action: this.action
    });
  }
}
const m = new g();
Object.freeze(m);
var h = m;
exports.default = h;