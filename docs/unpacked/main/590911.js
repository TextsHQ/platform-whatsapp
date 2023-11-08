var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/351053.js");
var o = require("./811462.js");
var l = require("../app/174834.js");
var i = require("./552093.js");
var u = require("../app/192562.js");
var s = a(require("./908081.js"));
var c = a(require("./324093.js"));
var d = require("./626194.js");
var f = a(require("./969358.js"));
var p = require("../app/753233.js");
var m = require("../app/258105.js");
var h = require("../app/690495.js");
var g = require("../app/118914.js");
var E = require("./202391.js");
var v = require("./435595.js");
var _ = require("../app/937001.js");
var y = require("../app/956113.js");
var C = require("../app/454905.js");
var b = require("../app/676345.js");
var M = a(require("../app/844453.js"));
var S = require("../app/851488.js");
var T = require("../vendor/548360.js");
var w = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = O(t);
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
var A = a(require("../app/156720.js"));
var P = a(require("../app/829686.js"));
function O(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (O = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const k = {
  zIndex: "b9fczbqn",
  display: "p357zi0d",
  justifyContent: "j1p1mz06",
  paddingBottom: "gpgqxepn",
  marginTop: "th20vg8r",
  textAlign: "qfejxiq4"
};
const D = {
  marginTop: "th20vg8r",
  marginEnd: "ramqyho6",
  marginBottom: "nym7wvdi",
  marginStart: "m51t5hoj"
};
function I(e, t) {
  const {
    parentGroup: n,
    onBack: a,
    onEnd: O
  } = e;
  const [I, R] = (0, w.useState)("");
  const [N, x] = (0, w.useState)();
  const [L, j] = (0, w.useState)(false);
  const B = (0, P.default)(() => {
    j(true);
    const e = r.ChatCollection.assertGet(n);
    (0, i.createNewGroupSubgroupSuggestionAction)(e, {
      subject: I,
      description: N
    }, a, O).then(() => {
      j(false);
      a();
    }).catch(() => {
      j(false);
    });
  });
  const F = () => I.trim().length > 0;
  const G = w.default.createElement(h.FlexRow, {
    justify: "center"
  }, w.default.createElement(g.ImgWithFallback, {
    fallbackSVG: w.default.createElement(u.DefaultGroupIcon, null),
    size: 200,
    imgProps: {
      src: ""
    }
  }));
  const U = T.fbt._("What's this group's name?", null, {
    hk: "3GSstc"
  });
  const W = T.fbt._("Group description (optional)", null, {
    hk: "iMdOS"
  });
  return w.default.createElement(s.default, {
    ref: t,
    testid: "new-group-drawer-submit"
  }, w.default.createElement(d.DrawerHeader, {
    title: T.fbt._("New group", null, {
      hk: "m8Oyw"
    }),
    type: (0, C.topMenuRedesignEnabled)() ? d.DRAWER_HEADER_TYPE.SMALL : d.DRAWER_HEADER_TYPE.LARGE,
    onBack: a
  }), w.default.createElement(c.default, null, w.default.createElement(f.default, {
    theme: "full-height"
  }, w.default.createElement("div", {
    className: (0, A.default)(D)
  }, G), w.default.createElement("div", {
    className: (0, A.default)(D)
  }, w.default.createElement(E.RichTextField, {
    value: I,
    maxLength: _.ServerProps.maxSubject,
    showRemaining: true,
    onChange: e => {
      var t;
      t = e.text;
      R(t);
    },
    title: U,
    placeholder: U,
    onEnter: F() ? B : () => {},
    supportsEmoji: true,
    focusOnMount: true
  })), w.default.createElement("div", {
    className: (0, A.default)(D)
  }, w.default.createElement(E.RichTextField, {
    testid: "group-suggestion-description",
    title: W,
    value: N,
    maxLength: _.ServerProps.groupDescLength,
    showRemaining: true,
    onChange: e => {
      t = e.text;
      return void x(t);
      var t;
    },
    inputPlaceholder: W,
    onEnter: F() ? B : () => {},
    supportsEmoji: true,
    multiline: true,
    maxVisibleLines: 5,
    minVisibleLines: 5,
    textFormatEnabled: true,
    bulletPointsEnabled: (0, l.richCommunityDescriptionEnabled)(),
    theme: "gray-background"
  }), w.default.createElement("div", {
    className: (0, A.default)(b.uiMargin.top12)
  }, w.default.createElement(S.WDSTextSmall, null, T.fbt._("This group suggestion must be approved by a community admin. If approved, anyone in the community can join it. {=m2}", [T.fbt._implicitParam("=m2", w.default.createElement(p.ExternalLink, {
    href: (0, m.getMemberAddedGroupsUrl)()
  }, T.fbt._("Learn more", null, {
    hk: "1CrXlN"
  })))], {
    hk: "41WIU2"
  }))))), w.default.createElement(M.default, {
    transitionName: "btn"
  }, F() === true ? w.default.createElement("div", {
    className: (0, A.default)(k)
  }, w.default.createElement(v.Round, {
    testid: "create-group-suggestion-btn",
    onClick: B,
    label: T.fbt._("Create group suggestion", null, {
      hk: "3bU0MQ"
    })
  }, L ? w.default.createElement(y.Spinner, {
    size: 16
  }) : w.default.createElement(o.CheckmarkMediumIcon, null))) : null)));
}
var R = (0, w.forwardRef)(I);
exports.default = R;