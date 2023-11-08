var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    onReport: t,
    isCommunityAnnouncementGroup: n = false,
    showAdditionalActionCheckbox: a = true
  } = e;
  const [f, v] = (0, c.useState)(e.isMessage !== true && e.isCommunity !== true);
  let _;
  let y;
  let C;
  let b;
  if (e.isMessage === true) {
    _ = s.fbt._("Report {message-sender}?", [s.fbt._param("message-sender", e.sender)], {
      hk: "2RpO9V"
    });
    y = e.isBizBot3p ? s.fbt._("Block AI", null, {
      hk: "3wZqw4"
    }) : s.fbt._("Block contact", null, {
      hk: "3heRxg"
    });
    C = e.isBizBot3p ? s.fbt._("This message will be forwarded to WhatsApp. This AI will not be notified.", null, {
      hk: "3Bwt7g"
    }) : s.fbt._("This message will be forwarded to WhatsApp. This contact will not be notified.", null, {
      hk: "bCsaB"
    });
  } else if (e.isCommunity) {
    _ = s.fbt._("Report this community to WhatsApp?", null, {
      hk: "1ZNMUR"
    });
    if ((0, o.reportCommunityExitUpsellEnabled)()) {
      y = s.fbt._("Exit community", null, {
        hk: "3WlNMv"
      });
    }
    C = s.fbt._("No one in this community will be notified.", null, {
      hk: "1LJRkR"
    });
  } else if (e.isGroupChat) {
    _ = s.fbt._("Report this group to WhatsApp?", null, {
      hk: "MXJ3v"
    });
    y = n ? s.fbt._("Exit community", null, {
      hk: "4jN02E"
    }) : s.fbt._("Exit group and clear chat", null, {
      hk: "2LhHeg"
    });
    b = s.fbt._("No one in this group will be notified.", null, {
      hk: "RPFkd"
    });
    C = s.fbt._("The last 5 messages in this group will be forwarded to WhatsApp.", null, {
      hk: "3K8uRF"
    });
  } else if (e.isBusiness === true) {
    _ = s.fbt._("Report this business to WhatsApp?", null, {
      hk: "3x593t"
    });
    y = s.fbt._("Block business and clear chat", null, {
      hk: "4poOty"
    });
    b = s.fbt._("This business will not be notified.", null, {
      hk: "2pSufL"
    });
    C = s.fbt._("The last 5 messages from this business will be forwarded to WhatsApp.", null, {
      hk: "351Ydz"
    });
  } else if (e.isBizBot3p === true) {
    _ = s.fbt._("Report this AI to WhatsApp?", null, {
      hk: "1uoVzO"
    });
    y = s.fbt._("Block AI and clear chat", null, {
      hk: "u0TWk"
    });
    b = s.fbt._("This AI will not be notified.", null, {
      hk: "DW7C2"
    });
    C = s.fbt._("The last 5 messages from this AI will be forwarded to WhatsApp.", null, {
      hk: "31yGOW"
    });
  } else {
    _ = s.fbt._("Report this contact to WhatsApp?", null, {
      hk: "hp09m"
    });
    y = s.fbt._("Block contact and clear chat", null, {
      hk: "2HlBBz"
    });
    b = s.fbt._("This contact will not be notified.", null, {
      hk: "TjRdG"
    });
    C = s.fbt._("The last 5 messages from this contact will be forwarded to WhatsApp.", null, {
      hk: "D5Ezs"
    });
  }
  const M = c.default.createElement("div", {
    className: (0, d.default)(h, u.uiMargin.end10)
  }, c.default.createElement(r.CheckBox, {
    onChange: () => {
      v(!f);
    },
    checked: f,
    id: "menu-icon-report-spam"
  }));
  const S = c.default.createElement("label", {
    htmlFor: "menu-icon-report-spam",
    className: (0, d.default)(g)
  }, y);
  const T = a && !(y == null);
  return c.default.createElement(l.ConfirmPopup, {
    title: _,
    onOK: () => {
      if (a && f) {
        if (e.isMessage !== true) {
          if (e.isCommunity || e.isGroupChat) {
            e.onReportExitClear();
          } else {
            e.onReportBlockClear();
          }
        } else {
          e.onReportBlock();
        }
      } else {
        t();
      }
    },
    okText: s.fbt._("Report", null, {
      hk: "18ssTb"
    }),
    onCancel: e.onCancel
  }, T && c.default.createElement("div", {
    className: (0, d.default)(p, u.uiMargin.top12, u.uiMargin.end0, m)
  }, M, S), c.default.createElement(i.TextDiv, {
    className: (0, d.default)(E),
    theme: "muted"
  }, C), c.default.createElement(i.TextDiv, {
    className: (0, d.default)(E),
    theme: "muted"
  }, b));
};
var r = require("./468926.js");
var o = require("../app/174834.js");
var l = require("../app/103440.js");
var i = require("../app/180519.js");
var u = require("../app/676345.js");
var s = require("../vendor/548360.js");
var c = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = f(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
var d = a(require("../app/156720.js"));
function f(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (f = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const p = {
  display: "p357zi0d",
  fontSize: "f8jlpxt4",
  lineHeight: "r5qsrrlp"
};
const m = {
  paddingBottom: "dledyozo",
  borderBottom: "j4zbmt6h"
};
const h = {
  display: "l7jjieqr",
  flex: "kk3akd72",
  verticalAlign: "kbne4t5p",
  transitionProperty: "cr6d9hz6",
  transitionDuration: "p4t1lx4y",
  transitionTimingFunction: "pu4k07i0"
};
const g = {
  flex: "a1m9qzja",
  transitionProperty: "cr6d9hz6",
  transitionDuration: "p4t1lx4y",
  transitionTimingFunction: "pu4k07i0"
};
const E = {
  paddingTop: "b97gdkd1"
};