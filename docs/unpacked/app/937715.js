var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchFirstPartyStickerPack = function () {
  return S.apply(this, arguments);
};
exports.fetchFirstPartyStickerPacks = function () {
  return E.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./932325.js"));
var o = require("./486392.js");
var s = function (e, t) {
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
var l = r(require("./219368.js"));
var u = r(require("./665810.js"));
var c = require("./409519.js");
var d = r(require("./79291.js"));
var p = require("./459857.js");
var f = require("./560817.js");
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
const g = "https://static.whatsapp.net/sticker";
function m() {
  return h.apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* (e, t) {
    const n = d.default.build(g, e);
    const r = new c.StickerCommonQueryToStaticServerWamEvent();
    r.startQueryLatencyMs();
    const i = yield (0, l.default)(n, {
      signal: t.signal
    });
    r.markQueryLatencyMs();
    r.set({
      httpResponseCode: i.status,
      params: new u.default(e).toString(),
      queryType: f.QUERY_TYPE.STICKER_PACK_DATA
    });
    r.commit();
    if (!i.ok) {
      throw new s.InvalidServerResponseError(n, i.status.toString(), "Invalid response from WhatsApp stickers endpoint");
    }
    const a = yield i.json();
    if (a == null || a.length === 0) {
      throw new s.InvalidServerResponseError(n, i.status.toString(), `Invalid response from WhatsApp stickers endpoint: ${JSON.stringify(a)}`);
    }
    return a;
  })).apply(this, arguments);
}
function y(e, t) {
  const n = {
    id: e["sticker-pack-id"],
    name: e.name,
    publisher: e.publisher,
    description: e.description,
    fileSize: Number(e["file-size"]),
    imageDataHash: e["image-data-hash"],
    animated: e.animated === 1,
    previewImageIds: e["preview-image-ids"],
    trayImageId: e["tray-image-id"],
    trayImagePreview: e["tray-image-preview"]
  };
  if (t != null) {
    n.index = t;
  }
  return n;
}
function E() {
  return (E = (0, i.default)(function* (e) {
    var t;
    const n = a.default.getLocale();
    const r = (0, o.getCountryShortcodeByPhone)((t = (0, p.getMaybeMeUser)()) === null || t === undefined ? undefined : t.user) || "default";
    return (yield m({
      cat: "sticker_store_data",
      id: "all",
      lg: n,
      country: r
    }, {
      signal: e.signal
    })).map((e, t) => y(e, t));
  })).apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e) {
    const t = a.default.getLocale();
    const n = {
      cat: "sticker_pack_data",
      id: e.id,
      lg: t
    };
    return y((yield m(n, {
      signal: e.signal
    }))[0]);
  })).apply(this, arguments);
}