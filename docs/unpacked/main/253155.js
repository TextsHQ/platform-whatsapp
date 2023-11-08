var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findFirstWebLink = undefined;
exports.useLinkPreview = function (e, t) {
  const [n, r] = (0, v.useState)(null);
  const s = () => {
    r(null);
  };
  (0, v.useEffect)(() => {
    s();
    if (!e) {
      return;
    }
    const n = new a();
    const c = n.signal;
    (0, l.default)(function* () {
      try {
        const n = yield (0, u.default)((0, p.getLinkPreview)(e, t), c);
        const a = n == null ? undefined : n.data;
        if (!a) {
          return;
        }
        r(a);
        if (!a.thumbnailHQ) {
          return;
        }
        const l = yield function () {
          return y.apply(this, arguments);
        }(a, c, t);
        if (!l) {
          return;
        }
        r((0, o.default)((0, o.default)({}, a), l));
      } catch (e) {
        if (e.name === i.ABORT_ERROR) {
          return;
        }
        __LOG__(2)`useLinkPreview: error`;
      }
    })();
    return () => {
      if (!n.signal.aborted) {
        n.abort();
      }
    };
  }, [e == null ? undefined : e.url, t]);
  return {
    linkPreview: n,
    clearLinkPreview: s
  };
};
var o = r(require("../vendor/81109.js"));
var l = r(require("../vendor/348926.js"));
var i = require("../app/898817.js");
var u = r(require("../app/229922.js"));
var s = require("../app/789437.js");
var c = r(require("../app/846870.js"));
var d = r(require("../app/507511.js"));
var f = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = _(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../app/446303.js"));
var p = require("./331740.js");
var m = r(require("../app/842156.js"));
var h = r(require("../app/756680.js"));
var g = r(require("../app/820275.js"));
var E = require("../app/708761.js");
var v = require("../vendor/667294.js");
function _(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (_ = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function y() {
  return (y = (0, l.default)(function* (e, t, n) {
    if (e.thumbnailDirectPath != null) {
      __LOG__(2)`link preview: use cached mms details (useLinkPreview)`;
      return {
        mediaKey: e.mediaKey,
        mediaKeyTimestamp: e.mediaKeyTimestamp,
        thumbnailDirectPath: e.thumbnailDirectPath,
        thumbnailSha256: e.thumbnailSha256,
        thumbnailEncSha256: e.thumbnailEncSha256
      };
    }
    __LOG__(2)`link preview: upload to mms`;
    try {
      if (e.thumbnailHQ == null) {
        return null;
      }
      const a = yield (0, u.default)(h.default.createFromBase64Jpeg(e.thumbnailHQ), t);
      const r = yield (0, g.default)({
        thumbnail: a,
        mediaType: E.MEDIA_TYPES.THUMBNAIL_LINK,
        mediaKeyInfo: (0, d.default)(),
        uploadOrigin: (0, m.default)(n),
        forwardedFromWeb: false,
        signal: t,
        timeout: c.default.MMS_THUMBNAIL_UPLOAD_TIMEOUT,
        isViewOnce: false
      });
      const o = r.mediaEntry;
      if (!o) {
        return;
      }
      return {
        mediaKey: o.mediaKey,
        mediaKeyTimestamp: o.mediaKeyTimestamp,
        thumbnailDirectPath: o.directPath,
        thumbnailSha256: r.filehash,
        thumbnailEncSha256: o.encFilehash
      };
    } catch (e) {
      if (e.name === i.ABORT_ERROR) {
        return;
      }
      __LOG__(2)`useLinkPreview.uploadHQPreview: error`;
    }
  })).apply(this, arguments);
}
exports.findFirstWebLink = e => {
  const t = (0, s.removeCodeBlocks)(e);
  const n = f.findLinks(t, true)[0];
  if (n) {
    return n;
  }
};