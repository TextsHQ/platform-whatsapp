var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAWebDesktopUpsellSearchToastbar = function () {
  const e = (0, u.getUserDesktopOs)();
  const t = (0, l.useWAWebDesktopUpsellAbPropCheck)("search_results");
  const n = (0, l.useWAWebDesktopUpsellPlatformCheck)();
  const a = t && n;
  (0, v.useWAWebDesktopUpsellWamImpression)({
    isCtaVisible: a === true,
    source: p.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.SEARCH_RESULTS
  });
  if (a !== true || e == null) {
    return null;
  }
  return E.default.createElement(d.WAWebToastbar, {
    onClick: () => {
      (0, i.openExternalWhatsAppDesktopDownloadUrl)(p.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.SEARCH_RESULTS);
    }
  }, E.default.createElement(m.WaSquareIconIcon, {
    height: 42,
    xstyle: f.uiMargin.end20
  }), E.default.createElement(s.FlexColumn, null, E.default.createElement(s.FlexItem, null, E.default.createElement(h.WDSTextTitle, {
    as: "span"
  }, g.fbt._("See more chat history on the app", null, {
    hk: "3VYpxb"
  }))), E.default.createElement(s.FlexItem, {
    inline: true
  }, E.default.createElement(h.WDSTextMuted, {
    as: "span",
    xstyle: _.textWrapper
  }, (0, o.getDesktopUpsellToastbarLabel)(), E.default.createElement(r.ChevronRightIcon, {
    displayInline: true,
    height: 22,
    color: c.SvgColorProp.GRAY,
    xstyle: [_.chevron, f.uiMargin.bottom1]
  })))));
};
var r = require("./397454.js");
var o = require("../app/215267.js");
var l = require("../app/792522.js");
var i = require("../app/29054.js");
var u = require("../app/787827.js");
var s = require("../app/690495.js");
var c = require("../app/220584.js");
var d = require("./585589.js");
var f = require("../app/676345.js");
var p = require("../app/239097.js");
var m = require("./22682.js");
var h = require("../app/851488.js");
var g = require("../vendor/548360.js");
var E = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
var v = require("../app/505046.js");
const _ = {
  textWrapper: {
    lineHeight: "gz7w46tb"
  },
  chevron: {
    verticalAlign: "neme6l2y"
  }
};