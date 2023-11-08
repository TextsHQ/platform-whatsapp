var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDirectionUrl = function (e, t) {
  const n = l.default.getLocale();
  return `https://maps.google.com/maps/dir//${e},${t}?hl=${n}`;
};
exports.getMapImgSrcUrl = function (e) {
  let {
    height: t,
    isDarkTheme: n,
    lat: a,
    lng: s,
    showMarker: d,
    width: f
  } = e;
  const p = o.default.currentRes === o.default.RES.HIGH ? 2 : 1;
  const m = l.default.getLocale();
  const h = `${a}, ${s}`;
  const g = i.default.GSM_NAME;
  return function (e, t) {
    const n = i.default.build(u, e);
    if (t) {
      return `${n}&${c}`;
    } else {
      return n;
    }
  }((0, r.default)({
    zoom: 15 .toString(),
    size: `${f}x${t + 50}`,
    scale: p.toString(),
    language: m,
    client: g
  }, d ? {
    markers: `color:red|${h}`
  } : {
    center: h
  }), n);
};
exports.getMapUrl = function (e, t, n) {
  const a = l.default.getLocale();
  if (n) {
    return `${s}/${encodeURIComponent(n)}/@${e},${t},17z?hl=${a}`;
  }
  return i.default.build("https://maps.google.com/maps", {
    q: `${e},${t}`,
    z: 17,
    hl: a
  });
};
exports.getSearchUrl = function (e) {
  const t = l.default.getLocale();
  return `${s}/${encodeURIComponent(e)}/z?hl=${t}`;
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../app/861474.js"));
var l = a(require("../app/932325.js"));
var i = a(require("../app/79291.js"));
const u = "https://maps.googleapis.com/maps/api/staticmap";
const s = "https://maps.google.com/maps/search";
const c = "style=element:geometry%7Ccolor:0x212121&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x757575&style=element:labels.text.stroke%7Ccolor:0x212121&style=feature:administrative%7Celement:geometry%7Ccolor:0x757575&style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:poi.park%7Celement:labels.text.stroke%7Ccolor:0x1b1b1b&style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a&style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:water%7Celement:geometry%7Ccolor:0x000000&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d";