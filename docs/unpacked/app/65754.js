var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchFirstPartyStickers = function () {
  return _.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./932325.js"));
var o = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = p(t);
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
var s = r(require("./219368.js"));
var l = r(require("./665810.js"));
var u = require("./409519.js");
var c = r(require("./79291.js"));
var d = require("./560817.js");
function p(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (p = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const f = "https://static.whatsapp.net/sticker";
function _() {
  return (_ = (0, i.default)(function* (e, t) {
    const n = {
      cat: "sticker_pack_data",
      id: e,
      lg: a.default.getLocale()
    };
    const r = c.default.build(f, n);
    const i = new u.StickerCommonQueryToStaticServerWamEvent();
    i.startQueryLatencyMs();
    const p = yield (0, s.default)(r, {
      signal: t == null ? undefined : t.signal
    });
    i.markQueryLatencyMs();
    i.set({
      httpResponseCode: p.status,
      params: new l.default(n).toString(),
      queryType: d.QUERY_TYPE.STICKER_PACK_DATA
    });
    i.commit();
    if (!p.ok) {
      throw new o.InvalidServerResponseError(r, p.status.toString(), "Invalid response from WhatsApp stickers endpoint");
    }
    const _ = yield p.json();
    if (_ == null || _.length === 0) {
      throw new o.InvalidServerResponseError(r, p.status.toString(), `Invalid response from WhatsApp stickers endpoint: ${JSON.stringify(_)}`);
    }
    return _[0].stickers.map((e, t) => ({
      mimetype: e.mimetype,
      width: e.width,
      height: e.height,
      index: t,
      filehash: e["file-hash"],
      directPath: e["direct-path"],
      mediaKey: e["media-key"],
      id: e["file-hash"],
      deprecatedMms3Url: e.url,
      encFilehash: e["enc-file-hash"],
      mediaKeyTimestamp: 0
    }));
  })).apply(this, arguments);
}