var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STATIC_WHATSAPP_IMAGE_URI = exports.ProductImage = undefined;
var a = i(require("../vendor/348926.js"));
var o = i(require("../vendor/81109.js"));
var s = require("./927440.js");
var l = require("./504425.js");
var u = require("./481173.js");
var c = require("./677332.js");
var d = require("./644234.js");
var p = i(require("./116253.js"));
var f = require("./232294.js");
var _ = i(require("./756680.js"));
var g = require("./719621.js");
var m = require("./172259.js");
var h = require("./288057.js");
const y = "https://static.whatsapp.net";
exports.STATIC_WHATSAPP_IMAGE_URI = y;
const E = (0, l.createTimer)({
  algo: {
    type: "fibonacci",
    first: 0,
    second: 1
  },
  jitter: 0.25,
  max: 900000
});
function S(e) {
  return "_productimage_" + (e.includes(y) ? e : new URL(e).pathname);
}
class v extends u.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, u.prop)();
    this.type = (0, u.prop)();
    this.mediaUrl = (0, u.prop)();
    this.blobUrl = (0, u.session)();
    this.mediaData = (0, u.session)();
    this.fetchedFromServer = (0, u.prop)();
    this.old = (0, u.session)(false);
  }
  initialize() {
    super.initialize();
    this.listenTo(this, "change:mediaUrl change:fetchedFromServer", this.triggerImageUpdate);
    this.triggerImageUpdate();
  }
  _processAndUpdateMediaData(e) {
    let t = {};
    const n = _.default.createFromData(e, "image/jpeg");
    (0, d.prepRawMedia)(n, {}).waitForPrep().then(e => {
      t = (0, o.default)((0, o.default)({}, t), {}, {
        mediaBlob: e.mediaBlob,
        type: e.type,
        mimetype: e.mimetype,
        fullWidth: e.fullWidth,
        fullHeight: e.fullHeight
      });
      return Promise.all([typeof e.preview == "string" ? _.default.createFromBase64Jpeg(e.preview) : Promise.resolve(null), _.default.createFromData(e.mediaBlob), (0, c.calculateFilehashFromBlob)(e.mediaBlob)]);
    }).then(e => {
      const [n, r, i] = e;
      t = (0, o.default)((0, o.default)({}, t), {}, {
        preview: n,
        mediaBlob: r,
        renderableUrl: r.url(),
        mediaStage: m.MEDIA_DATA_STAGE.RESOLVED,
        filehash: i
      });
      if (i !== this.mediaData.filehash) {
        this.mediaData.set(t);
      }
    });
  }
  triggerImageUpdate() {
    var e = this;
    return (0, a.default)(function* () {
      if (!e.fetchedFromServer || !e.mediaUrl) {
        return;
      }
      if (!e.mediaData) {
        e.addChild("mediaData", new p.default({
          mediaStage: m.MEDIA_DATA_STAGE.PREPARING
        }));
      }
      const t = S(e.mediaUrl);
      const n = yield g.LruMediaStore.get(t);
      if (n) {
        return e._processAndUpdateMediaData(n);
      }
      const i = {
        delay: e => {
          let {
            taskDuration: t
          } = e;
          const n = E() * 1000;
          return Math.max(n - t, 0);
        },
        signal: new r().signal,
        retries: 10
      };
      try {
        const {
          result: n
        } = yield (0, s.backoff)(i, function () {
          var t = (0, a.default)(function* (t) {
            const n = yield (0, f.fetchMedia)(e.mediaUrl);
            if (n && n.status >= 200 && n.status < 300) {
              return n;
            } else {
              return t(new h.CatalogImageDownloadError());
            }
          });
          return function () {
            return t.apply(this, arguments);
          };
        }());
        g.LruMediaStore.put(t, n);
        e._processAndUpdateMediaData(n);
      } catch (t) {
        __LOG__(3)`Failed to fetch ${e.mediaUrl}`;
        e.mediaData.set({
          mediaStage: m.MEDIA_DATA_STAGE.ERROR_MISSING
        });
      }
    })();
  }
  markOld() {
    this.old = true;
  }
  evictFromCache() {
    if (this.mediaUrl) {
      const e = S(this.mediaUrl);
      g.LruMediaStore.del(e);
    }
  }
}
v.Proxy = "productImage";
const T = (0, u.defineModel)(v);
exports.ProductImage = T;