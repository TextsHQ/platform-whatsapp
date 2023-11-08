var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t,
    serverId: n,
    title: a,
    onSelect: M
  } = e;
  const [S, T] = (0, b.useState)(false);
  return b.default.createElement(d.default, {
    key: t.id,
    onClick: () => M(n),
    onMouseEnter: () => {
      if (!S) {
        T(true);
      }
    },
    onMouseOver: () => {
      if (!S) {
        T(true);
      }
    },
    onMouseLeave: () => {
      if (S) {
        T(false);
      }
    },
    hover: S
  }, b.default.createElement(s.FlexRow, {
    xstyle: [E.uiMargin.horiz7, E.uiMargin.bottom10],
    justify: "all",
    align: "center"
  }, a, b.default.createElement(s.FlexRow, {
    align: "center",
    grow: 1,
    shrink: 0,
    justify: "end"
  }, b.default.createElement(_.WDSTextSmall, null, o.Clock.relativeStr(t.t)), b.default.createElement(r.ChevronRightAltIcon, {
    directional: true,
    color: g.SvgColorProp.SECONDARY,
    xstyle: E.uiMargin.start6
  }))), b.default.createElement(y.Wrapper, {
    msg: t,
    displayType: u.DISPLAY_TYPE.CHANNEL_ALERTS_MSGS,
    position: f.MsgPosition.MID
  }), b.default.createElement(s.FlexRow, {
    xstyle: E.uiMargin.all10,
    justify: "center"
  }, b.default.createElement(v.WDSButtonSecondaryDestructive, {
    stretch: true,
    onClick: e => {
      e.preventDefault();
      e.stopPropagation();
      p.ModalManager.open(b.default.createElement(i.default, {
        chat: (0, c.getChat)(t),
        msgList: [(0, h.unproxy)(t)],
        fromChannelAlerts: true
      }));
      m.UiRevokeActionHelper.startSession();
      m.UiRevokeActionHelper.messageSelected();
    }
  }, b.default.createElement(l.DeleteIcon, {
    directional: true
  }), C.fbt._("Delete from channel", null, {
    hk: "3ySaKu"
  }))));
};
var r = require("./755782.js");
var o = require("../app/63014.js");
var l = require("./184385.js");
var i = a(require("./804418.js"));
var u = require("../app/356097.js");
var s = require("../app/690495.js");
var c = require("../app/163755.js");
var d = a(require("./296518.js"));
var f = require("./48794.js");
var p = require("../app/114850.js");
var m = require("./774401.js");
var h = require("../app/163139.js");
var g = require("../app/220584.js");
var E = require("../app/676345.js");
var v = require("../app/617425.js");
var _ = require("../app/851488.js");
var y = require("./512873.js");
var C = require("../vendor/548360.js");
var b = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = M(t);
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
function M(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (M = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}