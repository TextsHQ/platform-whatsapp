Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processRecentStickers = function (e, t) {
  if (e.recentStickers == null) {
    return void __LOG__(3)`Recent Stickers: received empty recentStickers protobuf`;
  }
  if ((0, o.getABPropConfigValue)("recent_sticker_rollout_phase") < 3) {
    return void (0, u.setNonCriticalDataSyncStatus)({
      [c.NON_CRITICAL_DATA_SYNC_STATUS_TYPE.RECENT_STICKER_INITIALIZED]: c.RECENT_STICKER_INITIALIZED_STATUS_TYPE.NEED_REQUEST_BOOTSTRAP
    });
  }
  __LOG__(2)`Recent Stickers: processing recent stickers from history. total of ${e.recentStickers.length} stickers received.`;
  const d = e.recentStickers.map(e => {
    var t;
    const n = e.fileSha256;
    if (n == null) {
      __LOG__(3)`Recent Stickers: Got an empty filehash from initial sticker history`;
      return null;
    }
    const o = e.fileEncSha256;
    const s = e.mediaKey;
    if (!(o != null && s != null)) {
      __LOG__(2)`Recent Stickers: Got an empty fileEncSha256 or mediaKey from initial sticker history`;
    }
    return [{
      id: (0, r.encodeB64)(n),
      directPath: e.directPath,
      filehash: (0, r.encodeB64)(n),
      encFilehash: o != null ? (0, r.encodeB64)(o) : null,
      mediaKey: s != null ? (0, r.encodeB64)(s) : "",
      mediaKeyTimestamp: (0, a.unixTime)(),
      width: e.width,
      height: e.height,
      mimetype: e.mimetype,
      type: l.OUTWARD_TYPES.STICKER,
      index: 0,
      weight: e.weight
    }, (t = (0, i.maybeNumberOrThrowIfTooLarge)(e.lastStickerSentTs)) !== null && t !== undefined ? t : 0, null];
  }).filter(Boolean);
  __LOG__(2)`Recent Stickers: ${d.length} stickers need to be added after sticker construction.`;
  require("./951220.js").RecentStickerCollectionMd.replaceAndEnqueue(d, true);
  (0, u.setNonCriticalDataSyncStatus)({
    [c.NON_CRITICAL_DATA_SYNC_STATUS_TYPE.RECENT_STICKER_INITIALIZED]: c.RECENT_STICKER_INITIALIZED_STATUS_TYPE.SUCCESS
  });
  __LOG__(2)`[history sync] Recent Stickers completed, ${(0, s.getHistorySyncLogDetailsString)(t)}`;
};
var r = require("./417405.js");
var i = require("./229079.js");
var a = require("./632157.js");
var o = require("./287461.js");
var s = require("./615263.js");
var l = require("./172259.js");
var u = require("./960523.js");
var c = require("./128378.js");