var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAWebDesktopUpsellCallingPopover = function (e) {
  return s.default.createElement(o.FlexRow, {
    xstyle: [c.container, l.uiPadding.horiz20, l.uiPadding.bottom14, l.uiPadding.top12],
    align: "center",
    justify: "all"
  }, s.default.createElement(o.FlexColumn, {
    xstyle: c.textContainer
  }, s.default.createElement(o.FlexItem, null, s.default.createElement(u.WDSTextTitle, null, e.title)), s.default.createElement(o.FlexItem, {
    xstyle: l.uiMargin.top2
  }, s.default.createElement(u.WDSTextMuted, null, e.body))), s.default.createElement(o.FlexColumn, {
    xstyle: c.buttonContainer,
    align: "center",
    justify: "center"
  }, s.default.createElement(o.FlexItem, {
    xstyle: l.uiMargin.start16
  }, s.default.createElement(i.WDSButtonPrimary, {
    onClick: e.onClick
  }, (0, r.getDesktopAppDownloadBtnLabel)()))));
};
var r = require("../app/215267.js");
var o = require("../app/690495.js");
var l = require("../app/676345.js");
var i = require("../app/617425.js");
var u = require("../app/851488.js");
var s = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
const c = {
  container: {
    minWidth: "fstbce29"
  },
  textContainer: {
    maxWidth: "apmzceia"
  },
  buttonContainer: {
    height: "ppled2lx"
  }
};