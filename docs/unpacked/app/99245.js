var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OPERATIONS = undefined;
exports.routeSelection = function (e) {
  var t;
  var n;
  let r;
  let {
    encFilehash: l,
    directPath: u,
    hosts: c,
    operation: d,
    type: p,
    maxBuckets: f
  } = e;
  if (!c.length) {
    return {
      selectedHost: null,
      fallbackHost: null
    };
  }
  if (d === s.DOWNLOAD) {
    var _;
    const e = u ? u.match(/&_nc_hot=([0-9]+)/) : null;
    const t = parseInt(e == null ? undefined : e[1], 10);
    const n = Number.isNaN(t) ? null : (0, a.unixTime)() - t;
    const {
      mmsHotContentTimespan: s,
      mmsVCacheAggregationEnabled: d
    } = o.ServerProps;
    let g;
    if (s != null && s > 0 && n != null && n <= s) {
      g = 1;
    } else if (l == null) {
      g = 0;
    } else if (d && f != null) {
      g = (0, i.default)(l, f) + 100;
    }
    const m = function (e) {
      const t = new Map();
      e.forEach(e => {
        var n;
        if (!((n = e.downloadBuckets) === null || n === undefined)) {
          n.forEach(n => {
            t.set(n, e);
          });
        }
      });
      return t;
    }(c);
    const h = g == null ? null : m.get(g);
    const y = m.get(0);
    if (h == null ? undefined : h.supportsDownloadMediaType(p)) {
      r = h;
    } else if (y == null ? undefined : y.supportsDownloadMediaType(p)) {
      r = y;
    }
    if (!((_ = r) === null || _ === undefined)) {
      _.setSelectedBucket(g);
    }
  }
  const g = c.find(e => e.isFallback());
  r = (t = r) !== null && t !== undefined ? t : c.find(e => d === s.UPLOAD ? e.supportsUploadMediaType(p) : e.supportsDownloadMediaType(p));
  return {
    selectedHost: (n = r) !== null && n !== undefined ? n : null,
    fallbackHost: g != null ? g : null
  };
};
var i = r(require("./670309.js"));
var a = require("./632157.js");
var o = require("./937001.js");
const s = {
  DOWNLOAD: "DOWNLOAD",
  UPLOAD: "UPLOAD"
};
exports.OPERATIONS = s;