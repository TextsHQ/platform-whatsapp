var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var o = r(require("../vendor/81109.js"));
var l = r(require("../vendor/348926.js"));
var i = require("../app/898817.js");
var u = require("../app/927440.js");
var s = r(require("../app/647628.js"));
var c = require("../app/477689.js");
var d = r(require("../app/670983.js"));
var f = require("../app/986120.js");
var p = require("../app/504425.js");
var m = require("../app/481173.js");
var h = require("../app/445729.js");
var g = require("../app/791357.js");
var E = r(require("../app/932325.js"));
var v = r(require("../app/219368.js"));
var _ = require("../app/937001.js");
var y = r(require("../app/79291.js"));
var C = require("../app/717283.js");
var b = require("./617671.js");
var M = require("../app/459857.js");
var S = require("../app/740122.js");
var T = require("./452704.js");
var w = r(require("../app/556869.js"));
var A = require("../app/113189.js");
class P extends (0, c.customError)("NoticeJsonParseError") {}
const O = ["logout", "refresh"];
const k = (0, p.createTimer)({
  algo: {
    type: "constant",
    delay: 43200000
  }
});
const D = (0, p.createTimer)({
  algo: {
    type: "fibonacci",
    first: 0,
    second: 1
  },
  max: 18000000
});
class I extends m.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, m.prop)();
    this.noticeId = (0, m.prop)();
    this.blocking = (0, m.prop)();
    this.policyVersion = (0, m.prop)();
    this.banner = (0, m.prop)();
    this.blockingModal = (0, m.prop)();
    this.shouldShowButterBar = (0, m.session)(true);
    this.backgroundFetches = (0, m.session)();
  }
  initialize() {
    super.initialize();
    this.listenTo(E.default, "locale_change", () => {
      this.fetchNoticeData();
    });
  }
  dismissButterBarNotice() {
    if (_.ServerProps.greenAlertBannerDuration !== 0) {
      new b.UserNoticeWamEvent({
        userNoticeId: this.noticeId,
        userNoticeContentVersion: this.policyVersion,
        userNoticeEvent: T.USER_NOTICE_EVENT.BANNER_DISMISS
      }).commit();
      this._dismissAndStartButterBarTimer(_.ServerProps.greenAlertBannerDuration);
    }
  }
  _dismissAndStartButterBarTimer(e) {
    this.shouldShowButterBar = false;
    this._clearButterBarTimer();
    this._butterBarTimeoutHandler = self.setTimeout(() => {
      this.shouldShowButterBar = true;
    }, e);
  }
  delete() {
    this.resetNotice();
    super.delete();
  }
  sanitizeBlockingModal(e) {
    if (!e) {
      return null;
    }
    const t = e => {
      if (!e) {
        return null;
      }
      const t = e.action;
      if (t) {
        const n = O.find(e => `whatsapp:user-notice?action=${e}` === t);
        if (n) {
          e.action = n;
          return e;
        }
        __LOG__(3)`Notice: Unknown action type ${t}`;
      }
      return null;
    };
    e.primaryButton = t(e.primaryButton);
    e.secondaryButton = t(e.secondaryButton);
    return e;
  }
  _isoFromCallingCode(e) {
    const t = parseInt(e, 10);
    const n = s.default[t];
    return (0, d.default)(n, "isoFromCC");
  }
  validateResponseFields(e, t) {
    e.forEach(e => {
      if (!(e in t)) {
        throw (0, w.default)(`Missing field ${e} in notice content.`);
      }
    });
  }
  extractBlockingModal(e) {
    if (e) {
      this.validateResponseFields(["icon", "iconDescription", "title", "body", "primaryButton"], e);
      this.validateResponseFields(["light", "dark"], e.icon);
      return {
        icon: {
          light: e.icon.light,
          dark: e.icon.dark
        },
        iconSvg: {
          light: "",
          dark: ""
        },
        iconDescription: e.iconDescription,
        title: e.title,
        body: e.body,
        primaryButton: e.primaryButton,
        secondaryButton: e.secondaryButton
      };
    }
  }
  extractBanner(e) {
    if (e) {
      this.validateResponseFields(["icon", "iconDescription", "text"], e);
      this.validateResponseFields(["light", "dark"], e.icon);
      return {
        icon: {
          light: e.icon.light,
          dark: e.icon.dark
        },
        iconDescription: e.iconDescription,
        text: e.text,
        iconSvg: {
          light: "",
          dark: ""
        }
      };
    }
  }
  extractUserNoticeContent(e) {
    const {
      policyVersion: t
    } = e;
    if (!t) {
      throw (0, w.default)("Missing field policyVersion in notice content.");
    }
    __LOG__(2)`Notice:fetchNoticeData successful for policyVersion ${t}`;
    const n = e.banner && this.extractBanner(e.banner);
    const a = e["blocking-modal"] && this.extractBlockingModal(e["blocking-modal"]);
    const r = a && this.sanitizeBlockingModal(a);
    this.set({
      policyVersion: t,
      blockingModal: r,
      banner: n
    });
    this.makeIconFetch(n, r);
  }
  resetBackgroundFetches() {
    var e;
    if (!((e = this.backgroundFetches) === null || e === undefined)) {
      e.forEach(e => {
        __LOG__(2)`Notice: aborting fetches`;
        e.abort();
      });
    }
  }
  resetNotice() {
    this.resetBackgroundFetches();
    this.unset(["banner", "blocking", "blockingModal", "noticeId", "policyVersion"]);
    this._clearButterBarTimer();
    this.shouldShowButterBar = true;
  }
  _clearButterBarTimer() {
    const e = this._butterBarTimeoutHandler;
    if (e != null) {
      self.clearTimeout(e);
    }
  }
  fetchNoticeData() {
    if ((0, A.isNonZeroNumber)(this.noticeId)) {
      var e;
      var t;
      this.resetBackgroundFetches();
      this.set({
        blockingModal: undefined,
        banner: undefined
      });
      const n = (0, M.getMeUser)();
      const a = (0, f.findCC)(n.user);
      const r = this._isoFromCallingCode(a);
      const o = y.default.build("https://www.whatsapp.com/user-notice/v1/", {
        id: this.noticeId,
        lg: (e = h.Conn.lg) !== null && e !== undefined ? e : "zz",
        lc: (t = h.Conn.lc) !== null && t !== undefined ? t : "ZZ",
        cc: r,
        platform: h.Conn.isSMB ? "smbweb" : "web"
      });
      this.makeContentFetch(o);
    }
  }
  makeContentFetch(e) {
    var t = this;
    return (0, l.default)(function* () {
      try {
        const n = yield t.attemptFirstFetchAndRetriesAfter(e);
        try {
          const e = n && JSON.parse(n);
          if (e) {
            t.extractUserNoticeContent(e);
          }
        } catch (e) {
          new C.UserNoticeErrorWamEvent({
            userNoticeId: t.noticeId,
            userNoticeContentVersion: t.policyVersion,
            userNoticeErrorEvent: S.USER_NOTICE_ERROR_EVENT.JSON_PARSE
          }).commit();
          throw new P(`Received invalid User Notice content for id ${t.noticeId}`);
        }
      } catch (e) {
        if (e.name === i.ABORT_ERROR) {
          return;
        }
        if (e.name !== "NoticeJsonParseError") {
          new C.UserNoticeErrorWamEvent({
            userNoticeId: t.noticeId,
            userNoticeContentVersion: t.policyVersion,
            userNoticeErrorEvent: S.USER_NOTICE_ERROR_EVENT.JSON_FETCH
          }).commit();
        }
        t.resetNotice();
        __LOG__(4, undefined, new Error(), true)`Notice: Error Message : ${e.message}`;
        SEND_LOGS("notice-content-error");
      }
    })();
  }
  makeIconFetch(e, t) {
    var n = this;
    return (0, l.default)(function* () {
      const a = [e == null ? undefined : e.icon.light, e == null ? undefined : e.icon.dark, t == null ? undefined : t.icon.light, t == null ? undefined : t.icon.dark].map(e => e ? n.attemptFirstFetchAndRetriesAfter(e) : Promise.resolve(null));
      try {
        const [e, t, r, l] = yield Promise.all(a);
        let i = n.banner;
        let u = n.blockingModal;
        if (n.banner && e && t) {
          i = (0, o.default)((0, o.default)({}, n.banner), {}, {
            iconSvg: {
              light: e,
              dark: t
            }
          });
        }
        if (n.blockingModal && r && l) {
          u = (0, o.default)((0, o.default)({}, n.blockingModal), {}, {
            iconSvg: {
              light: r,
              dark: l
            }
          });
        }
        n.set({
          banner: i,
          blockingModal: u
        });
      } catch (e) {
        if (e.name === i.ABORT_ERROR) {
          return;
        }
        new C.UserNoticeErrorWamEvent({
          userNoticeId: n.noticeId,
          userNoticeContentVersion: n.policyVersion,
          userNoticeErrorEvent: S.USER_NOTICE_ERROR_EVENT.IMAGE_FETCH
        }).commit();
        __LOG__(4, undefined, new Error(), true)`Notice: Icon fetch error : ${e.message}`;
        SEND_LOGS("notice-icon-fetch-error");
      }
    })();
  }
  shouldRetry(e) {
    return e === 404 || e === 429 || e >= 500;
  }
  attemptFirstFetchAndRetriesAfter(e) {
    var t = this;
    return (0, l.default)(function* () {
      var n;
      const r = new a();
      const o = r.signal;
      const l = (n = t.backgroundFetches) !== null && n !== undefined ? n : [];
      t.backgroundFetches = [...l, r];
      try {
        const n = yield (0, v.default)(e, {
          signal: o
        });
        if (!n.ok) {
          const e = n.status;
          throw t.shouldRetry(e) ? new g.HttpStatusCodeError(e, "noticeFetchErr") : (0, w.default)("contentResponseUnhandledError");
        }
        return n.text();
      } catch (n) {
        if (n.name === "HttpStatusCodeError") {
          return t.retryFetch(e, n.status);
        }
        throw n;
      }
    })();
  }
  retryFetch(e, t) {
    var n;
    var r = this;
    const o = new a();
    const i = o.signal;
    const s = (n = this.backgroundFetches) !== null && n !== undefined ? n : [];
    this.backgroundFetches = [...s, o];
    const c = function () {
      var t = (0, l.default)(function* (t) {
        __LOG__(2)`Notice: Fetch Retry attempt`;
        const n = yield (0, v.default)(e, {
          signal: i
        });
        if (!n.ok) {
          __LOG__(3)`Notice: Could Not download`;
          if (r.shouldRetry(n.status)) {
            return t((0, w.default)("retryFailed"));
          }
          throw (0, w.default)("contentResponseUnhandledError");
        }
        return n.text();
      });
      return function () {
        return t.apply(this, arguments);
      };
    }();
    let d;
    let f;
    if (t === 404) {
      f = 2;
      d = e => {
        let {
          taskDuration: t
        } = e;
        const n = k();
        return Math.max(n - t, 0);
      };
    } else {
      f = 8;
      d = e => {
        let {
          taskDuration: t
        } = e;
        const n = D() * 3600000;
        return Math.max(n - t, 0);
      };
    }
    return (0, u.backoff)({
      delay: d,
      retries: f,
      signal: i
    }, c);
  }
}
I.Proxy = "notice";
var R = new ((0, m.defineModel)(I))({
  id: "default_notice_id"
});
exports.default = R;