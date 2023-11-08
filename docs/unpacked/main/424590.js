var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    showQuickEphemeralInfoAction: t,
    onOpenEphemeralInfoPopup: n,
    showQuickBizPrivacyInfoAction: a,
    onOpenBizPrivacyInfoPopup: p,
    showQuickForwardAction: m,
    onOpenForwardFlow: h,
    showQuickSearchAction: g,
    onOpenWebSearchFlow: E,
    showQuickEphemeralExemptionInfoAction: v,
    onOpenEphemeralExemptionInfoPopup: _
  } = e;
  let y = null;
  if (t) {
    y = d.default.createElement("div", {
      title: (0, r.messageQuickReplyEnabled)() && c.fbt._("Info", null, {
        hk: "yf7J1"
      }),
      className: s.default.quickActionButton,
      onClick: n,
      role: "button"
    }, d.default.createElement(l.InfoAltIcon, {
      xstyle: f.svgColor
    }));
  } else if (a) {
    y = d.default.createElement("div", {
      title: (0, r.messageQuickReplyEnabled)() && c.fbt._("Info", null, {
        hk: "21wSIT"
      }),
      className: s.default.quickActionButton,
      onClick: p,
      role: "button"
    }, d.default.createElement(l.InfoAltIcon, {
      xstyle: f.svgColor
    }));
  } else if (m) {
    y = d.default.createElement(i.Round, {
      label: c.fbt._("Forward media", null, {
        hk: "4DjgJi"
      }),
      title: (0, r.messageQuickReplyEnabled)() ? c.fbt._("Forward", null, {
        hk: "AxUeS"
      }) : undefined,
      theme: i.RoundTheme.QuickAction,
      className: s.default.quickActionButton,
      onClick: () => h(false)
    }, d.default.createElement(o.ForwardChatIcon, {
      xstyle: f.svgColor
    }));
  } else if (g) {
    y = d.default.createElement("div", {
      title: (0, r.messageQuickReplyEnabled)() && c.fbt._("Search Web", null, {
        hk: "1BRalt"
      }),
      className: s.default.quickActionButton,
      onClick: E,
      role: "button"
    }, d.default.createElement(u.SearchIcon, {
      xstyle: f.svgColor
    }));
  } else if (v) {
    y = d.default.createElement("div", {
      title: (0, r.messageQuickReplyEnabled)() && c.fbt._("Info", null, {
        hk: "1wWgpt"
      }),
      className: s.default.quickActionButton,
      onClick: _,
      role: "button"
    }, d.default.createElement(l.InfoAltIcon, {
      xstyle: f.svgColor
    }));
  }
  return y;
};
var r = require("../app/72696.js");
var o = require("./930302.js");
var l = require("./756728.js");
var i = require("./435595.js");
var u = require("../main-chunk/447514.js");
var s = a(require("./409468.js"));
var c = require("../vendor/548360.js");
var d = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
const f = {
  svgColor: {
    color: "r83rrh3w"
  }
};