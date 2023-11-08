var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  (0, r.clearAllMemoizeCache)();
  (0, f.clearChatIdCorrectionCache)();
  (0, y.clearGetMaybeMeUserCache)();
  u.Conn.delete();
  d.default.delete();
  h.default.delete();
  m.ServerProps.delete();
  p.PrimaryFeatures.delete();
  v.Stream.delete();
  C.default.delete();
  b(l.ChatCollection);
  b(g.StatusV3Collection);
  E.StickerPackCollection.forEach(e => {
    b(e.stickers);
  });
  b(E.StickerPackCollection);
  const e = ["Chat", "StatusV3", "StickerPack", "Sticker"];
  Object.keys(i.default).forEach(t => {
    if (!e.includes(t)) {
      b(i.default[t]);
    }
  });
  (0, c.delistAndDeleteAllMedia)();
  (0, _.clearAllTemporaryStorageData)();
  s.InMemoryMediaBlobCache.clear();
  (0, o.clearLidPnMappingCache)();
  u.Conn.blockStoreAdds = true;
};
var r = require("../app/761111.js");
var o = require("../app/12643.js");
var l = require("../app/351053.js");
var i = a(require("../app/729804.js"));
var u = require("../app/445729.js");
var s = require("../app/196127.js");
var c = require("../app/231385.js");
var d = a(require("./338847.js"));
var f = require("../app/489891.js");
var p = require("../app/805617.js");
var m = require("../app/937001.js");
var h = a(require("../app/634152.js"));
var g = require("../app/657694.js");
var E = require("./276741.js");
var v = require("../app/973981.js");
var _ = require("../app/725137.js");
var y = require("../app/459857.js");
var C = a(require("../app/306002.js"));
function b(e) {
  const t = [...e.getModelsArray()];
  e.reset();
  t.forEach(e => {
    try {
      var t;
      if (!((t = e.delete) === null || t === undefined)) {
        t.call(e);
      }
    } catch (e) {
      __LOG__(3)`clearCollection: could not delete a model`;
    }
  });
  e.delete();
}