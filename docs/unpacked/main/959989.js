var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrivacyTipBanner = function (e) {
  let {
    text: t,
    actionText: n,
    image: a,
    onAction: m,
    onDismiss: h,
    settingStep: g
  } = e;
  const E = p.default.createElement(l.FlexItem, {
    style: {
      width: 24,
      height: 24
    }
  }, a != null ? a : p.default.createElement(r.BotLightBulbIcon, {
    color: u.SvgColorProp.TEAL
  }));
  const v = p.default.createElement(d.WDSTextMuted, {
    textWrap: "wrap",
    weight: "medium"
  }, t, n != null && p.default.createElement(p.default.Fragment, null, " ", p.default.createElement(d.WDSClickableText, {
    color: "teal"
  }, n)));
  let _;
  if (h != null) {
    _ = p.default.createElement(s.default, {
      onClick: e => {
        e.stopPropagation();
        h();
      }
    }, p.default.createElement(f.XAltIcon, null));
  }
  return p.default.createElement(c.WDSCell, {
    size: "small",
    idle: true,
    active: true,
    material: true,
    detailLeft: p.default.createElement(l.FlexRow, {
      paddingEnd: 4
    }, E),
    primary: v,
    detailRight: _,
    onClick: () => {
      if (g != null) {
        o.DrawerManager.openDrawerLeft(p.default.createElement(i.SettingsFlowLoadable, {
          onEnd: () => o.DrawerManager.closeDrawerLeft(),
          initialStep: g
        }));
      }
      if (!(m == null)) {
        m();
      }
    }
  });
};
var r = require("../app/422723.js");
var o = require("../app/900316.js");
var l = require("../app/690495.js");
var i = require("./523233.js");
var u = require("../app/220584.js");
var s = a(require("../app/625903.js"));
var c = require("./219753.js");
var d = require("../app/851488.js");
var f = require("../app/813133.js");
var p = a(require("../vendor/667294.js"));