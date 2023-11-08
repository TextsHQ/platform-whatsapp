var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchFirstPartyStickers = function () {
  return y.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./486392.js");
var s = require("./317166.js");
var l = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = m(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./288057.js"));
var u = r(require("./219368.js"));
var c = r(require("./665810.js"));
var d = require("./409519.js");
var p = require("./164832.js");
var f = r(require("./79291.js"));
var _ = require("./459857.js");
var g = require("./560817.js");
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const h = "https://static.whatsapp.net";
function y() {
  return (y = (0, a.default)(function* (e, t) {
    var n;
    const r = (0, o.getCountryShortcodeByPhone)((n = (0, _.getMaybeMeUser)()) === null || n === undefined ? undefined : n.user) || "default";
    let a = 0;
    let m = 0;
    for (; a <= 250;) {
      a += 3 + encodeURIComponent(e[m++]).length;
    }
    const y = e.slice(0, m - 1).join(",");
    const E = {
      country: r
    };
    const S = yield (0, s.getStaticMediaHostName)();
    const v = S === h ? `${S}/sticker` : `${S}/wa/static/sticker`;
    const T = f.default.build(v, (0, i.default)({
      cat: "sticker_search",
      terms: y,
      _nc_cat: 1
    }, E));
    const M = new d.StickerCommonQueryToStaticServerWamEvent();
    M.startQueryLatencyMs();
    const A = yield (0, u.default)(T, {
      signal: t == null ? undefined : t.signal
    });
    M.markQueryLatencyMs();
    M.set({
      httpResponseCode: A.status,
      params: new c.default(E).toString(),
      queryType: g.QUERY_TYPE.STICKER_SEARCH
    });
    M.commit();
    if (!A.ok) {
      throw new l.InvalidServerResponseError(T, A.status.toString(), "Invalid response from WhatsApp stickers endpoint");
    }
    const b = yield A.json();
    if (b == null) {
      throw new l.InvalidServerResponseError(T, A.status.toString(), `Invalid response from WhatsApp stickers endpoint: ${JSON.stringify(b)}`);
    }
    return b.map((e, t) => new p.StickerModel({
      mimetype: e.mimetype,
      width: e.width,
      height: e.height,
      filehash: e["file-hash"],
      directPath: e["direct-path"],
      mediaKey: e["media-key"],
      id: e["file-hash"],
      encFilehash: e["enc-file-hash"],
      mediaKeyTimestamp: 0,
      index: t
    }));
  })).apply(this, arguments);
}