var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maybeExecuteQuickPromotionCustomHandlingSpec = function (e, t) {
  (function (e) {
    const t = [];
    const n = function (e) {
      var t;
      var n;
      if (((t = e.data.primaryAction) === null || t === undefined ? undefined : t.deepLink) != null) {
        return;
      }
      const a = (n = e.data.primaryAction) === null || n === undefined ? undefined : n.universalLink;
      if (a == null) {
        return;
      }
      return {
        type: "universalLink",
        onPrimaryClick: () => {
          (0, c.openExternalLink)(a);
        }
      };
    }(e);
    if (n) {
      t.push(n);
    }
    const a = function (e) {
      var t;
      const {
        surfaceId: n
      } = e;
      if (n !== u.QP_SURFACE_ID_CHAT_LIST_TOP) {
        return;
      }
      const a = (t = e.data.primaryAction) === null || t === undefined ? undefined : t.deepLink;
      if (a == null) {
        return;
      }
      const c = (0, l.parseAPICmd)(a);
      if (c.resultType !== "ADVERTISE") {
        c.resultType;
        return void __LOG__(3)`QuickPromotionChatListBanner: invalid or unsupported deep link command`;
      }
      const m = e => {
        new i.BannerEventWamEvent({
          bannerType: f.BANNER_TYPES.SMB_CHAT_LIST_QP_BANNER,
          bannerOperation: e,
          bannerId: c.data.campaignId
        }).commit();
      };
      return {
        type: "adCreateBanner",
        onPrimaryClick: () => {
          c.resultType;
          (0, s.default)({
            cmdData: c,
            isExternal: false
          });
          m(d.BANNER_OPERATIONS.CLICK);
        },
        onImpression: () => {
          const e = (0, r.getActiveAccountInfo)();
          if (e != null) {
            (0, o.logAdCreationImpression)(p.LWI_ENTRY_POINT.SMB_HOME_BANNER, e.hasFacebookPage);
          }
          m(d.BANNER_OPERATIONS.SHOWN);
        },
        onDismiss: () => {
          m(d.BANNER_OPERATIONS.DISMISS);
        }
      };
    }(e);
    if (a) {
      t.push(a);
    }
    const m = function (e) {
      var t;
      const {
        surfaceId: n
      } = e;
      if (n !== u.QP_SURFACE_ID_CHAT_LIST_TOP) {
        return;
      }
      const a = (t = e.data.primaryAction) === null || t === undefined ? undefined : t.deepLink;
      if (a == null) {
        return;
      }
      const r = (0, l.parseAPICmd)(a);
      if (r.resultType !== "MANAGE_ADS") {
        r.resultType;
        return void __LOG__(3)`QuickPromotionChatListBanner: invalid or unsupported deep link command`;
      }
      return {
        type: "manageAdsBanner",
        onPrimaryClick: () => {
          (0, s.default)({
            cmdData: r,
            isExternal: false
          });
        }
      };
    }(e);
    if (m) {
      t.push(m);
    }
    return t;
  })(e).forEach(e => {
    switch (t) {
      case "primaryActionClick":
        if (e.onPrimaryClick != null) {
          e.onPrimaryClick();
        }
        break;
      case "dismiss":
        if (e.onDismiss != null) {
          e.onDismiss();
        }
        break;
      default:
        if (e.onImpression != null) {
          e.onImpression();
        }
    }
  });
};
var r = require("./113428.js");
var o = require("./445693.js");
var l = require("../app/127714.js");
var i = require("./240045.js");
var u = require("../app/312158.js");
var s = a(require("./200715.js"));
var c = require("../app/753233.js");
var d = require("./493885.js");
var f = require("./403602.js");
var p = require("./846377.js");