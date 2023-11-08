var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  const e = (0, l.getUserDesktopOs)();
  const t = function (e) {
    const t = (0, v.useQRScreenKillswitchValue)(e === l.UserDesktopOs.WINDOWS ? c.Killswitch.DESKTOP_UPSELL_WINDOWS_QR_BANNER : c.Killswitch.DESKTOP_UPSELL_MAC_QR_BANNER);
    if (e == null) {
      return false;
    }
    return t;
  }(e);
  const n = (0, o.useWAWebDesktopUpsellPlatformAwareOsVersionCheck)(e);
  const r = function (e) {
    const t = (0, v.useQRScreenKillswitchValue)(c.Killswitch.DESKTOP_UPSELL_WINDOWS_QR_BANNER_VARIATION_2);
    if (e === l.UserDesktopOs.WINDOWS) {
      return t === true;
    }
    return false;
  }(e);
  const i = r ? f.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_BANNER_2 : f.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_BANNER;
  const s = t === true && n === true;
  (0, S.useWAWebDesktopUpsellWamImpression)({
    source: i,
    isCtaVisible: s
  });
  (0, E.useWAWebDesktopUpsellQplImpression)(s, r);
  if (!s) {
    return null;
  }
  return h.default.createElement(u.FlexRow, {
    as: "aside",
    align: "center",
    justify: "center",
    xstyle: [d.uiMargin.bottom30, T.bannerWrapper],
    className: "light"
  }, h.default.createElement(u.FlexRow, {
    align: "center",
    className: (0, y.default)([d.uiPadding.vert24, d.uiPadding.horiz40, T.bannerContainer])
  }, h.default.createElement(u.FlexItem, {
    xstyle: d.uiMargin.top6
  }, h.default.createElement(p.WaDesktopIcon, {
    height: 55
  })), h.default.createElement(u.FlexColumn, {
    className: (0, y.default)([d.uiPadding.horiz24, T.bannerTextContainer])
  }, h.default.createElement(u.FlexItem, null, h.default.createElement(g.WDSTextTitle, {
    color: "primary",
    xstyle: d.uiMargin.bottom2
  }, (0, a.getDesktopUpsellDownloadWhatsAppTitle)())), h.default.createElement(u.FlexItem, {
    className: (0, y.default)([T.bannerSubtext])
  }, h.default.createElement(g.WDSTextMuted, null, function (e, t) {
    if (t) {
      if (e === l.UserDesktopOs.WINDOWS) {
        return m.fbt._("Start making calls when you download the new Windows app.", null, {
          hk: "2CaOYn"
        });
      } else {
        return m.fbt._("Start making calls when you download the new Mac app.", null, {
          hk: "3jfWJq"
        });
      }
    }
    if (e === l.UserDesktopOs.WINDOWS) {
      return m.fbt._("Get calling, screen sharing and a faster experience with the new Windows app.", null, {
        hk: "uJ3Pm"
      });
    } else {
      return m.fbt._("Get calling, screen sharing and a faster experience with the new Mac app.", null, {
        hk: "NBaaE"
      });
    }
  }(e, r))), h.default.createElement(u.FlexRow, {
    className: (0, y.default)([T.bannerAltBtn]),
    align: "center",
    justify: "center"
  }, h.default.createElement(M, {
    isShowingContentVariation: r
  }))), h.default.createElement(u.FlexItem, {
    className: (0, y.default)([T.bannerBtn])
  }, h.default.createElement(M, {
    isShowingContentVariation: r
  }))));
};
var i = r(require("../vendor/348926.js"));
var a = require("./215267.js");
var o = require("./792522.js");
var s = require("./29054.js");
var l = require("./787827.js");
var u = require("./690495.js");
var c = require("./430252.js");
var d = require("./676345.js");
var p = require("./846071.js");
var f = require("./239097.js");
var _ = require("./617425.js");
var g = require("./851488.js");
var m = require("../vendor/548360.js");
var h = r(require("../vendor/667294.js"));
var y = r(require("./156720.js"));
var E = require("./264211.js");
var S = require("./505046.js");
var v = require("./822301.js");
const T = {
  bannerWrapper: {
    marginTop: "obt84bhp"
  },
  bannerContainer: {
    borderTopWidth: "gofg5ll1",
    borderEndWidth: "p7waza29",
    borderBottomWidth: "oteuebma",
    borderStartWidth: "mzoqfcbu",
    borderTopStyle: "d1poss59",
    borderEndStyle: "gyj32ejw",
    borderBottomStyle: "cmcp1to6",
    borderStartStyle: "eg0col54",
    borderTopColor: "dja63ajc",
    borderEndColor: "o8eg79cj",
    borderBottomColor: "rfontgos",
    borderStartColor: "p1bb0de3",
    borderTopStartRadius: "l147y7tb",
    borderTopEndRadius: "mjscftrx",
    borderBottomEndRadius: "fqwk616h",
    borderBottomStartRadius: "pkud3j3x",
    "@media screen and (max-width: 840px)": {
      paddingStart: "a1ievt4b",
      paddingEnd: "rzqv8r4q"
    }
  },
  bannerTextContainer: {
    "@media screen and (max-width: 840px)": {
      paddingStart: "sm0fnn2g",
      paddingEnd: "i04p5lfz"
    }
  },
  bannerSubtext: {
    "@media screen and (max-width: 760px)": {
      display: "l6tqpi8y"
    }
  },
  bannerAltBtn: {
    display: "qibyn6m3",
    "@media screen and (max-width: 760px)": {
      display: "jel816r4",
      marginTop: "h0cx3g7v",
      width: "p1kooo09"
    }
  },
  bannerBtn: {
    "@media screen and (max-width: 760px)": {
      display: "l6tqpi8y"
    }
  }
};
function M(e) {
  const t = e.isShowingContentVariation ? f.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_BANNER_2 : f.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_BANNER;
  const n = function () {
    var n = (0, i.default)(function* () {
      yield (0, E.logDesktopUpsellQplEvent)("click", e.isShowingContentVariation);
      (0, s.openExternalWhatsAppDesktopDownloadUrl)(t);
    });
    return function () {
      return n.apply(this, arguments);
    };
  }();
  return h.default.createElement(_.WDSButtonPrimary, {
    onClick: n
  }, (0, a.getDesktopAppDownloadBtnLabel)());
}