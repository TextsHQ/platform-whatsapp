var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  const e = (0, u.getPrevLogoutReasonCode)();
  if (e == null) {
    return null;
  }
  if (e === d.LOGOUT_REASON_CODE.ACCOUNT_LOCKED) {
    return g.default.createElement(y, null);
  }
  const [t, n] = function (e) {
    let t = null;
    let n = null;
    switch (e) {
      case d.LOGOUT_REASON_CODE.CLIENT_FATAL:
        t = _.fbt._("A database error occurred on your browser. Please relink your device.", null, {
          hk: "2607fW"
        }).toString();
        n = (0, s.getDBErrorFaqUrl)();
        break;
      case d.LOGOUT_REASON_CODE.SYNC_FAIL:
        t = _.fbt._("Your device could not link due to a sync issue. Please relink your device.", null, {
          hk: "2VkiMf"
        }).toString();
        n = (0, s.getLinkDeviceFaqUrl)();
        break;
      case d.LOGOUT_REASON_CODE.INITIAL_HISTORY_SYNC_TIMEOUT:
        t = _.fbt._("Couldn't link device. Keep WhatsApp open on your phone when your device is linking.", null, {
          hk: "2DAi9E"
        }).toString();
        n = (0, s.getLinkDeviceFaqUrl)();
    }
    return [t, n];
  }(e);
  if (t == null || t === "") {
    return null;
  }
  const r = e === d.LOGOUT_REASON_CODE.CLIENT_FATAL;
  const l = n != null ? g.default.createElement(i.default, {
    action: () => {
      (0, o.openExternalLink)(n);
    }
  }, " ", _.fbt._("Learn more", null, {
    hk: "2S4fxr"
  })) : null;
  return g.default.createElement("div", {
    className: (0, a.classnamesConvertMeToStylexPlease)(c.default.wrapper, r ? c.default.error : c.default.warn)
  }, r ? g.default.createElement("span", {
    className: c.default.icon
  }, g.default.createElement("svg", {
    width: "44",
    height: "44",
    viewBox: "0 0 44 44",
    xmlns: "http://www.w3.org/2000/svg"
  }, g.default.createElement("path", {
    d: "M22.0002 0.314301C10.0422 0.314301 0.314453 10.0421 0.314453 22C0.314453 33.958 10.0422 43.6857 22.0002 43.6857C33.9581 43.6857 43.6859 33.958 43.6859 22C43.6859 10.0421 33.9581 0.314301 22.0002 0.314301ZM30.1502 28.5196L28.5197 30.1501L22.0002 23.6305L15.4806 30.1501L13.8501 28.5196L20.3709 22L13.8501 15.4805L15.4806 13.85L22.0002 20.3695L28.521 13.85L30.1515 15.4805L23.6307 22L30.1502 28.5196Z",
    fill: "currentColor"
  }))) : h(), g.default.createElement("div", {
    className: c.default.textWrapper
  }, g.default.createElement("div", null, t), l));
};
var i = r(require("./3046.js"));
var a = require("./396574.js");
var o = require("./753233.js");
var s = require("./258105.js");
var l = require("./690495.js");
var u = require("./383047.js");
var c = r(require("./48987.js"));
var d = require("./332108.js");
var p = require("./180519.js");
var f = require("./676345.js");
var _ = require("../vendor/548360.js");
var g = r(require("../vendor/667294.js"));
r(require("./156720.js"));
const m = {
  paragraph: {
    lineHeight: "tkq7s68q"
  }
};
const h = () => g.default.createElement("span", {
  className: c.default.icon
}, g.default.createElement("svg", {
  width: "44",
  height: "44",
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg"
}, g.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM34.6473 31.164L25.2436 14.2344C25.1138 13.9995 24.9312 13.8053 24.7134 13.6705C24.4956 13.5357 24.2499 13.4649 24 13.4649C23.7501 13.4649 23.5044 13.5357 23.2866 13.6705C23.0687 13.8053 22.8861 13.9995 22.7564 14.2344L13.3527 31.164C13.2177 31.4068 13.144 31.6848 13.1392 31.9694C13.1344 32.254 13.1986 32.5349 13.3253 32.783C13.452 33.0312 13.6366 33.2377 13.86 33.3813C14.0834 33.5249 14.3376 33.6004 14.5964 33.6H33.4036C33.6624 33.6004 33.9166 33.5249 34.14 33.3813C34.3634 33.2377 34.548 33.0312 34.6747 32.783C34.8014 32.5349 34.8656 32.254 34.8608 31.9694C34.856 31.6848 34.7823 31.4068 34.6473 31.164ZM25.0909 19.2V26.4H22.9091V19.2H25.0909ZM22.9091 31.2V28.8H25.0909V31.2H22.9091Z",
  fill: "currentColor"
})));
const y = () => {
  let e = g.default.createElement(l.FlexColumn, {
    className: c.default.textWrapper
  }, g.default.createElement(p.TextParagraph, {
    size: "16",
    xstyle: m.paragraph
  }, _.fbt._("You have been logged out. To log back in, you will need to verify your phone number.", null, {
    hk: "3gNNlU"
  })));
  const t = (0, u.getPrevCustomLogoutMessage)();
  if (t != null) {
    const {
      logoutMessageHeader: n,
      logoutMessageSubtext: r
    } = t;
    e = g.default.createElement(l.FlexColumn, {
      className: c.default.textWrapper
    }, n != null && g.default.createElement(p.TextHeader, {
      level: "1",
      xstyle: f.uiMargin.bottom5,
      size: "18",
      testid: "custom-logout-message-header"
    }, n), r != null && g.default.createElement(p.TextParagraph, {
      testid: "custom-logout-message-subtext",
      size: "16"
    }, r));
  }
  return g.default.createElement(l.FlexRow, {
    align: "center",
    className: (0, a.classnamesConvertMeToStylexPlease)(c.default.wrapper, c.default.warn)
  }, h(), e);
};