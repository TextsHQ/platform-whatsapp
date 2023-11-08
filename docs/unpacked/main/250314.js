var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityAddParticipantModal = undefined;
var r = require("./524592.js");
var o = require("../app/103440.js");
var l = require("../app/690495.js");
var i = require("./276012.js");
var u = require("../app/220584.js");
var s = require("../app/676345.js");
var c = require("../vendor/548360.js");
var d = function (e, t) {
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
a(require("../app/156720.js"));
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
  border: {
    borderBottomWidth: "oteuebma",
    borderBottomStyle: "cmcp1to6",
    borderBottomColor: "nc5t0wl8"
  },
  iconContainer: {
    width: "mh8l8k0y"
  }
};
function m(e, t) {
  const {
    contacts: n,
    onOK: a,
    onCancel: f
  } = e;
  const m = c.fbt._({
    "*": "Add {number} people to community?",
    _1: "Add 1 person to community?"
  }, [c.fbt._plural(n.length, "number")], {
    hk: "17qYIl"
  });
  const h = c.fbt._("They will be added to the community, its announcement group, and its general member chat.", null, {
    hk: "43dlta"
  });
  const g = c.fbt._("They can join or request to join other groups in the community.", null, {
    hk: "4Dhde6"
  });
  return d.default.createElement(o.ConfirmPopup, {
    ref: t,
    title: m,
    okText: c.fbt._("Add", null, {
      hk: "4tt1ak"
    }),
    onOK: a,
    onCancel: f,
    cancelText: c.fbt._("Cancel", null, {
      hk: "H0gNq"
    })
  }, d.default.createElement(l.FlexRow, {
    xstyle: [p.border, s.uiPadding.bottom15],
    align: "center"
  }, d.default.createElement(l.FlexContainer, {
    shrink: 0,
    grow: 0,
    xstyle: p.iconContainer,
    align: "center",
    justify: "center",
    direction: "horizontal"
  }, d.default.createElement(r.AlertBellIcon, {
    color: u.SvgColorProp.TEAL_LIGHTER
  })), d.default.createElement(l.FlexItem, {
    grow: 1
  }, h)), d.default.createElement(l.FlexRow, {
    xstyle: s.uiPadding.top15,
    align: "center"
  }, d.default.createElement(l.FlexContainer, {
    shrink: 0,
    grow: 0,
    xstyle: p.iconContainer,
    align: "center",
    justify: "center",
    direction: "horizontal"
  }, d.default.createElement(i.PeopleIcon, {
    color: u.SvgColorProp.TEAL_LIGHTER
  })), d.default.createElement(l.FlexItem, null, g)));
}
const h = (0, d.forwardRef)(m);
exports.CommunityAddParticipantModal = h;
h.displayName = "CommunityAddParticipantModal";