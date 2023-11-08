var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserDisclosureContentsQueryJob = function () {
  return M.apply(this, arguments);
};
var a = i(require("../vendor/81109.js"));
var o = i(require("../vendor/348926.js"));
var s = require("./898817.js");
var l = i(require("./647628.js"));
var u = i(require("./670983.js"));
var c = require("./986120.js");
var d = require("./445729.js");
var p = require("./791357.js");
var f = i(require("./219368.js"));
var _ = i(require("./79291.js"));
var g = require("./717283.js");
var m = require("./65410.js");
var h = require("./459857.js");
var y = require("./740122.js");
var E = i(require("./556869.js"));
var S = require("./113189.js");
const v = "https://www.whatsapp.com/user-notice/v1/";
const T = new Set(["ACCEPT", "OK"]);
function M() {
  return (M = (0, o.default)(function* (e) {
    if ((0, S.isNonZeroNumber)(e)) {
      var t;
      var n;
      const r = (0, h.getMeUser)();
      const i = A((0, c.findCC)(r.user));
      const a = yield m.deviceInfo.get();
      return b(_.default.build(v, {
        id: e,
        lg: (t = a.lg) !== null && t !== undefined ? t : "zz",
        lc: (n = a.lc) !== null && n !== undefined ? n : "ZZ",
        cc: i,
        platform: d.Conn.isSMB ? "smbweb" : "web"
      }), e);
    }
    return Promise.resolve({
      disclosureId: e
    });
  })).apply(this, arguments);
}
function A(e) {
  const t = parseInt(e, 10);
  const n = l.default[t];
  return (0, u.default)(n, "isoFromCC");
}
function b() {
  return C.apply(this, arguments);
}
function C() {
  return (C = (0, o.default)(function* (e, t) {
    try {
      const n = yield P(e);
      try {
        if (n != null) {
          const e = JSON.parse(n);
          if (e != null) {
            return I(e, t);
          }
        }
      } catch (e) {
        new g.UserNoticeErrorWamEvent({
          userNoticeId: t,
          userNoticeContentVersion: 1,
          userNoticeErrorEvent: y.USER_NOTICE_ERROR_EVENT.JSON_PARSE
        }).commit();
      }
    } catch (e) {
      if (e.name === s.ABORT_ERROR) {
        return;
      }
      __LOG__(4, undefined, new Error(), true)`Notice: Error Message : ${e.message}`;
      SEND_LOGS("pdfn-notice-content-error");
      throw new p.HttpNetworkError();
    }
  })).apply(this, arguments);
}
function P() {
  return O.apply(this, arguments);
}
function O() {
  return (O = (0, o.default)(function* (e) {
    const t = new r().signal;
    return (yield (0, f.default)(e, {
      signal: t
    })).text();
  })).apply(this, arguments);
}
function I() {
  return R.apply(this, arguments);
}
function R() {
  return (R = (0, o.default)(function* (e, t) {
    var n;
    const {
      policyVersion: r
    } = e;
    if (r == null) {
      throw (0, E.default)("Missing field policyVersion in notice content.");
    }
    __LOG__(2)`Notice:fetchNoticeData successful for policyVersion ${r}`;
    const i = D(e);
    const a = N(e);
    const o = parseInt(r, 10);
    let s;
    try {
      s = yield L(i);
    } catch (e) {
      new g.UserNoticeErrorWamEvent({
        userNoticeId: t,
        userNoticeContentVersion: o,
        userNoticeErrorEvent: y.USER_NOTICE_ERROR_EVENT.IMAGE_FETCH
      }).commit();
      __LOG__(4, undefined, new Error(), true)`Notice: Icon fetch error : ${e.message}`;
      SEND_LOGS("notice-icon-fetch-error");
    }
    return Promise.resolve({
      disclosureId: t,
      policyVersion: o,
      privacyDisclosureModal: (n = s) !== null && n !== undefined ? n : i,
      endDate: a
    });
  })).apply(this, arguments);
}
function N(e) {
  const t = e["privacy-disclosure"] && e["privacy-disclosure"].timing.end.time;
  if (t == null) {
    return null;
  } else {
    return new Date(t);
  }
}
function D(e) {
  const t = e["privacy-disclosure"] && function (e) {
    if (!e) {
      return;
    }
    w(["icon", "iconDescription", "title", "bullets", "primaryButton", "nav"], e);
    w(["light", "dark", "type"], e.icon);
    w(["dismissButton", "backButton"], e.nav);
    for (let t = 0; t < e.bullets.length; t++) {
      w(["icon", "text"], e.bullets[t]);
    }
    const t = e.footer != null ? {
      footer: e.footer
    } : {};
    return (0, a.default)({
      icon: {
        light: e.icon.light,
        dark: e.icon.dark,
        type: e.icon.type
      },
      iconSvg: {
        light: "",
        dark: ""
      },
      iconDescription: e.iconDescription,
      title: e.title,
      bullets: e.bullets,
      primaryButton: e.primaryButton,
      nav: {
        dismissButton: e.nav.dismissButton,
        backButton: e.nav.backButton
      }
    }, t);
  }(e["privacy-disclosure"].prompts[0]);
  if (t == null) {
    return null;
  } else {
    return function (e) {
      if (!e) {
        return null;
      }
      e.primaryButton = (e => {
        if (!e) {
          return null;
        }
        const t = e.action;
        if (t) {
          if (T.has(t)) {
            return e;
          }
          __LOG__(3)`Notice: Unknown action type ${t}`;
        }
        return null;
      })(e.primaryButton);
      return e;
    }(t);
  }
}
function w(e, t) {
  e.forEach(e => {
    if (!(e in t)) {
      throw (0, E.default)(`Missing field ${e} in notice content.`);
    }
  });
}
function L() {
  return k.apply(this, arguments);
}
function k() {
  return (k = (0, o.default)(function* (e) {
    const t = [e == null ? undefined : e.icon.light, e == null ? undefined : e.icon.dark];
    for (let r = 0; r < ((n = e == null ? undefined : e.bullets.length) !== null && n !== undefined ? n : 0); r++) {
      var n;
      const i = e == null ? undefined : e.bullets[r];
      if (i != null) {
        t.push(i.icon.light);
        t.push(i.icon.dark);
      }
    }
    const r = t.map(e => e != null ? P(e) : Promise.resolve(null));
    let i = e;
    const [o, s, ...l] = yield Promise.all(r);
    const u = [];
    for (let t = 0; t < ((c = e == null ? undefined : e.bullets.length) !== null && c !== undefined ? c : 0); t++) {
      var c;
      const n = e == null ? undefined : e.bullets[t];
      if (n != null) {
        const e = l[t * 2];
        const r = l[t * 2 + 1];
        if (e != null && r != null) {
          u.push((0, a.default)((0, a.default)({}, n), {}, {
            iconSvg: {
              light: e,
              dark: r
            }
          }));
        } else {
          u.push(n);
        }
      }
    }
    if (e && o != null && s != null) {
      i = (0, a.default)((0, a.default)({}, e), {}, {
        bullets: u,
        iconSvg: {
          light: o,
          dark: s
        }
      });
    }
    return i;
  })).apply(this, arguments);
}