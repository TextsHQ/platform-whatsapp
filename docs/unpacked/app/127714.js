var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchProductUrl = exports.matchCatalogUrl = undefined;
exports.parseAPICmd = function (e) {
  if (typeof e != "string") {
    return {
      resultType: s.APICmd.INVALID
    };
  }
  const t = (e => {
    let t = e.match(f);
    if (t) {
      return {
        code: t[2],
        url: t[1] || "/"
      };
    }
    t = e.match(_);
    if (t) {
      return {
        code: t[1]
      };
    }
    t = e.match(g);
    if (t) {
      return {
        code: t[1]
      };
    }
    t = e.match(m);
    if (t) {
      return {
        code: t[1]
      };
    }
  })(e);
  if (t) {
    return {
      resultType: s.APICmd.GROUP_INVITE,
      data: t
    };
  }
  const n = function (e) {
    let t = e.match(U) || e.match(x);
    if (t) {
      return Y(t);
    }
    t = e.match(B);
    if (t) {
      return (0, i.default)((0, i.default)({}, Y(t)), {}, {
        url: "/"
      });
    }
    t = e.match(F);
    if (t) {
      const e = K(t[2]);
      return (0, i.default)((0, i.default)((0, i.default)({}, Y(t)), e != null && {
        utm: e
      }), {}, {
        url: "/"
      });
    }
  }(e);
  if (n) {
    return {
      resultType: s.APICmd.CATALOG,
      data: n
    };
  }
  const r = function (e) {
    let t = k(e, N);
    if (t) {
      return W(t);
    }
    t = k(e, D);
    if (t) {
      return (0, i.default)((0, i.default)({}, W(t)), {}, {
        url: "/"
      });
    }
    t = k(e, w);
    if (t) {
      const e = K(t[3]);
      return (0, i.default)((0, i.default)((0, i.default)({}, W(t)), e != null && {
        utm: e
      }), {}, {
        url: "/"
      });
    }
  }(e);
  if (r) {
    return {
      resultType: s.APICmd.PRODUCT,
      data: r
    };
  }
  const a = function (e) {
    const t = e.match(j);
    if (t) {
      return {
        url: "/",
        entrypointType: new p.default(t[1]).get("entrypoint")
      };
    }
  }(e);
  if (a) {
    return {
      resultType: s.APICmd.CREATE_COMMUNITY,
      data: a
    };
  }
  const o = function (e) {
    if (e.match(V)) {
      return {
        url: (0, u.getAvatarFaqUrl)()
      };
    }
  }(e);
  if (o) {
    return {
      resultType: s.APICmd.AVATAR_STICKERPACK,
      data: o
    };
  }
  if ([I, R].some(t => e.match(t))) {
    return {
      resultType: s.APICmd.MESSAGE_YOURSELF
    };
  }
  const l = function (e) {
    let t = e.match(S);
    if (t) {
      const e = E(t[2]);
      if (e) {
        e.url = t[1] || "/";
        return e;
      }
    }
    t = e.match(v);
    if (t) {
      return E(t[1]);
    }
    t = e.match(T);
    if (t) {
      return E(t[1]);
    }
    t = e.match(M);
    if (t) {
      let n;
      if (t[1]) {
        n = {
          phone: `${t[1]}@c.us`
        };
      } else if (t[2]) {
        n = {
          url: e,
          customURL: t[2]
        };
      }
      if (t[3]) {
        const e = E(t[3]);
        if (e) {
          n = (0, i.default)((0, i.default)({}, n), e);
        }
      }
      return n;
    }
  }(e);
  if (l) {
    return {
      resultType: s.APICmd.MSG_SEND,
      data: l
    };
  }
  const d = function (e) {
    if (e.match(G)) {
      return {
        url: "/"
      };
    }
  }(e);
  if (d) {
    return {
      resultType: s.APICmd.PUSH_NOTIFICATION,
      data: d
    };
  }
  const h = (0, c.parseNewsletter)(e);
  if (h) {
    return {
      resultType: s.APICmd.NEWSLETTER,
      data: h
    };
  }
  const y = function (e) {
    const t = e.match(P);
    if (t) {
      return function (e) {
        const t = new p.default(e);
        const n = t.get("wa_campaign_id");
        if (n == null || n === "") {
          return;
        }
        const r = t.get("wa_campaign_type");
        if (r == null || r === "") {
          return null;
        }
        return {
          campaignId: n,
          campaignType: r
        };
      }(t[1]);
    }
  }(e);
  if (y != null) {
    return {
      resultType: s.APICmd.ADVERTISE,
      data: y
    };
  }
  if (e.match(O)) {
    return {
      resultType: s.APICmd.MANAGE_ADS,
      trigger: "chatListBanner"
    };
  }
  return {
    resultType: s.APICmd.INVALID
  };
};
exports.parseConversionData = y;
var i = r(require("../vendor/81109.js"));
var a = require("./904704.js");
var o = require("./287461.js");
var s = require("./251780.js");
var l = require("./611211.js");
var u = require("./258105.js");
var c = require("./783020.js");
var d = require("./190274.js");
var p = r(require("./665810.js"));
const f = new RegExp(`^${l.ORIGIN}${l.OPTIONAL_PATH_PART}/accept/?\\?code=(\\w+)$`, "i");
const _ = /^https?:\/\/chat\.whatsapp\.com\/invite\/(\w+)$/i;
const g = /^https?:\/\/chat\.whatsapp\.com\/(\w+)$/i;
const m = /^whatsapp:\/\/chat\/?\?code=(\w+)$/i;
const h = ["utm_source", "utm_campaign", "text", "phone", "data", "source", "context", "icebreaker", "source_url", "type", "lid"];
function y(e) {
  if (!e || typeof e != "string") {
    return;
  }
  const t = a.Binary.build(e);
  if (t.size() > (0, o.getABPropConfigValue)("ctwa_data_max_length")) {
    return undefined;
  } else {
    return t.readBuffer();
  }
}
function E(e) {
  const t = {};
  new p.default(e).forEach((e, n) => {
    const r = function (e) {
      return h.find(t => t === e);
    }(n.toLowerCase());
    if (r != null) {
      switch (r) {
        case "data":
          {
            const n = y(e);
            if (!n) {
              return;
            }
            if (t.conversionTuple == null) {
              t.conversionTuple = {
                conversionData: n
              };
            } else {
              t.conversionTuple.conversionData = n;
            }
            break;
          }
        case "source":
          {
            const n = e;
            if ((0, a.numUtf8Bytes)(n) > 32) {
              return;
            }
            if (t.conversionTuple == null) {
              t.conversionTuple = {
                conversionSource: n
              };
            } else {
              t.conversionTuple.conversionSource = n;
            }
            break;
          }
        case "source_url":
          if (t.ctwaContextLinkData != null) {
            t.ctwaContextLinkData.sourceUrl = e;
          } else {
            t.ctwaContextLinkData = {
              sourceUrl: e
            };
          }
          break;
        case "context":
          if (t.ctwaContextLinkData != null) {
            t.ctwaContextLinkData.context = e;
          } else {
            t.ctwaContextLinkData = {
              context: e
            };
          }
          break;
        case "icebreaker":
          if (t.ctwaContextLinkData != null) {
            t.ctwaContextLinkData.icebreaker = e;
          } else {
            t.ctwaContextLinkData = {
              icebreaker: e
            };
          }
          break;
        case "utm_campaign":
          if (t.utm != null) {
            t.utm.campaign = e;
          } else {
            t.utm = {
              campaign: e
            };
          }
          break;
        case "utm_source":
          if (t.utm != null) {
            t.utm.source = e;
          } else {
            t.utm = {
              source: e
            };
          }
          break;
        default:
          t[r] = e;
      }
    }
  });
  if (t.phone != null && t.phone !== "") {
    t.phone = t.phone.replace(/\D/g, "") + "@c.us";
    if (t.ctwaContextLinkData) {
      t.ctwaContextLinkData.phone = t.phone;
    }
  }
  if (t.lid != null && (0, d.testLidWaMeLinkEnabled)() || t.phone != null && t.phone !== "" || t.text != null && t.text !== "") {
    return t;
  } else {
    return undefined;
  }
}
const S = new RegExp(`^${l.ORIGIN}${l.OPTIONAL_PATH_PART}/send/?\\?(.+)$`, "i");
const v = /^https?:\/\/api\.whatsapp\.com\/send\/?\?(.+)$/i;
const T = /^whatsapp:\/\/send\/?\?(.*)$/i;
const M = /^https?:\/\/wa\.me\/?(?:([0-9.]{0,20})|([0-9a-z.]{5,35}))?\/?\??(.+)?$/i;
const A = new RegExp(`^${l.ORIGIN}${l.OPTIONAL_NON_CAPTURING_PATH_PART}/product/([0-9]{0,20})/([0-9]{0,20})$`, "i");
const b = new RegExp(`^${l.ORIGIN}${l.OPTIONAL_NON_CAPTURING_PATH_PART}/product/([0-9]{0,20})/([0-9]{0,20})(/?.*)$`, "i");
const C = new RegExp(`^${l.ORIGIN}${l.OPTIONAL_NON_CAPTURING_PATH_PART}/product/([^/]{0,200})/([0-9]{0,20})$`, "i");
const P = /^whatsapp-smb:\/\/advertise\/?(.+)$/i;
const O = /^whatsapp-smb:\/\/manage-ads\/?$/;
const I = /^whatsapp:\/\/message_yourself\/?$/i;
const R = /^https?:\/\/wa\.me\/message_yourself\/?$/i;
const N = [/^https?:\/\/wa\.me\/p\/([0-9]{0,20})\/([0-9]{0,20})$/i, /^whatsapp:\/\/product\/([0-9]{0,20})\/([0-9]{0,20})$/i, /^https?:\/\/wa\.me\/p\/([^\/]{0,200})\/([0-9]{0,20})$/i, /^whatsapp:\/\/product\/([^\/]{0,200})\/([0-9]{0,20})$/i];
const D = [A, C];
const w = [b];
const L = [...N, ...D, ...w];
function k(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = e.match(t[n]);
    if (r) {
      return r;
    }
  }
}
exports.matchProductUrl = e => k(e, L) != null;
const G = new RegExp(`^${l.ORIGIN}${l.OPTIONAL_NON_CAPTURING_PATH_PART}/push/`, "i");
const U = /^https?:\/\/wa\.me\/c\/([0-9]{0,20})$/i;
const x = /^whatsapp:\/\/catalog\/([0-9]{0,20})$/i;
const B = new RegExp(`^${l.ORIGIN}${l.OPTIONAL_NON_CAPTURING_PATH_PART}/catalog/([0-9]{0,20})?$`, "i");
const F = new RegExp(`^${l.ORIGIN}${l.OPTIONAL_NON_CAPTURING_PATH_PART}/catalog/([0-9]{0,20})(/?.*)?$`, "i");
exports.matchCatalogUrl = e => [U, x, B, F].some(t => e.match(t));
const j = /^https?:\/\/wa\.me\/community\/create\/?(\?(.*))?$/i;
function Y(e) {
  return {
    catalogOwnerJid: `${e[1]}@s.whatsapp.net`
  };
}
function K(e) {
  const t = new p.default(e);
  const n = t.get("utm_source");
  const r = t.get("utm_campaign");
  if (r == null && n == null) {
    return null;
  }
  const i = {};
  if (n != null) {
    i.source = n;
  }
  if (r != null) {
    i.campaign = r;
  }
  return i;
}
function W(e) {
  return {
    productId: e[1],
    businessOwnerJid: `${e[2]}@s.whatsapp.net`
  };
}
const V = /^https?:\/\/wa\.me\/stickerpack\/meta-avatar$/i;