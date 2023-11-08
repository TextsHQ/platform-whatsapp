Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, l.useModelValues)(e.mediaData, ["filehash", "mediaStage"]);
  const [n, i] = (0, o.useState)(() => {
    a.InMemoryMediaBlobCache.get(t.filehash);
  });
  (0, o.useEffect)(() => {
    if (!(n || t.mediaStage !== r.MEDIA_DATA_STAGE.RESOLVED)) {
      e.downloadMedia();
    }
  }, []);
  (0, o.useEffect)(() => {
    if (n) {
      return;
    }
    const {
      filehash: e
    } = t;
    if (a.InMemoryMediaBlobCache.has(e)) {
      i(a.InMemoryMediaBlobCache.get(e));
    }
  }, [n, t]);
  if (n) {
    return e.render(n);
  } else {
    return e.renderPlaceholder();
  }
};
var a = require("../app/196127.js");
var r = require("../app/172259.js");
var o = require("../vendor/667294.js");
var l = require("../app/655241.js");