var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterIdentifierType = undefined;
exports.isNewsletterInviteCode = function (e) {
  if (e == null) {
    return false;
  }
  if (e.startsWith("http://") || e.startsWith("https://")) {
    return _(e) != null;
  }
  return _(`https://${e}`) != null;
};
exports.parseNewsletter = _;
exports.removeTrailingSlash = undefined;
var i = r(require("../vendor/81109.js"));
var a = require("./611211.js");
var o = require("./338042.js");
var s = require("./73225.js");
const l = require("../vendor/76672.js")({
  Handle: "Handle",
  InviteCode: "InviteCode",
  Id: "Id"
});
exports.NewsletterIdentifierType = l;
const u = "channel";
const c = "create";
const d = "directory";
exports.removeTrailingSlash = e => e.replace(/\/+$/, "");
const p = new RegExp(`^${a.ORIGIN}${a.OPTIONAL_PATH_PART}/accept/?\\?channel_invite_code=(\\w+)$`, "i");
const f = new RegExp("^whatsapp://(channel)/(\\w+)/?$", "i");
function _(e) {
  try {
    const t = new URL(e);
    const {
      pathname: n
    } = t;
    const [r, a, _, ...m] = n.split("/");
    if (a === u && function (e) {
      const {
        hostname: t
      } = e;
      return t === "whatsapp.com" || t === "www.whatsapp.com";
    }(t)) {
      if (function (e) {
        return e.length === 0 || e.length === 1 && e[0] === "";
      }(m)) {
        switch (_) {
          case c:
            return {
              type: "create",
              url: t.href
            };
          case d:
            return {
              type: "directory",
              url: t.href
            };
          default:
            if (_ != null && _ !== "") {
              return {
                identifier: _,
                url: t.href,
                identifierType: l.InviteCode,
                type: "view",
                chatEntryPoint: o.ChatEntryPoint.Link
              };
            }
        }
      }
      if ((0, s.isNewsletterMessageLinkEnabled)() && _ !== c && _ !== d && (m.length === 1 || m.length === 2 && m[1] === "")) {
        const e = parseInt(m[0], 10);
        return (0, i.default)({
          identifier: _,
          url: t.href,
          identifierType: l.InviteCode,
          type: "view",
          chatEntryPoint: o.ChatEntryPoint.Link
        }, !Number.isNaN(e) && {
          serverId: e
        });
      }
    }
    const h = g(p, e);
    if (h != null) {
      return h;
    }
    const y = g(f, e);
    if (y != null) {
      return y;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
}
function g(e, t) {
  const n = t.match(e);
  if (n) {
    const e = n[2];
    if (e === c) {
      return {
        type: "create",
        url: t
      };
    } else if (e === d) {
      return {
        type: "directory",
        url: t
      };
    } else {
      return {
        identifier: n[2],
        url: n[1] || "/",
        identifierType: l.InviteCode,
        type: "view",
        chatEntryPoint: o.ChatEntryPoint.Deeplink
      };
    }
  }
  return null;
}