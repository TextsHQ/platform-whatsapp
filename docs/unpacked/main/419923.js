var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    parentChat: t,
    onClose: n
  } = e;
  const a = (0, E.useRef)();
  const v = g.fbt._("Welcome to a community", null, {
    hk: "1ZUQ8L"
  });
  const y = E.default.createElement(l.CommunityNuxIcon, null);
  const C = E.default.createElement(E.default.Fragment, null, g.fbt._("As a member, you can see and join groups in this community and stay updated with admin announcements.", null, {
    hk: "3e6rnb"
  }), " ", (0, o.communityCreatePrivacyEnabled)() ? null : E.default.createElement(u.ExternalLink, {
    href: (0, s.getCommunityHomeNuxUrl)()
  }, (0, c.default)("Learn more")));
  const b = g.fbt._("Your profile is visible to community admins.", null, {
    hk: "4CWbGn"
  });
  const M = E.default.createElement(E.default.Fragment, null, g.fbt._("Your profile is visible to community admins. Our Privacy Policy includes details about Communities.", null, {
    hk: "1h3Qmb"
  }), " ", E.default.createElement(u.ExternalLink, {
    href: (0, s.getCommunityMemberPrivacyUrl)()
  }, (0, c.default)("Learn more")));
  (0, E.useEffect)(() => {
    var e;
    if (!((e = a.current) === null || e === undefined)) {
      e.focus();
    }
  }, []);
  return E.default.createElement(i.ConfirmPopup, {
    okText: g.fbt._("View community", null, {
      hk: "3IZc51"
    }),
    cancelText: g.fbt._("Close", null, {
      hk: "2NuprU"
    }),
    onOK: () => {
      r.Cmd.openCommunityHome(t.id);
      m.ModalManager.close();
      if (!(n == null)) {
        n();
      }
    },
    onCancel: () => {
      m.ModalManager.close();
      if (!(n == null)) {
        n();
      }
    },
    type: p.ModalTheme.Promote,
    ref: a
  }, E.default.createElement(d.FlexRow, {
    align: "center",
    justify: "center"
  }, E.default.createElement(f.default, {
    xstyle: _.badge
  }, y)), E.default.createElement(d.FlexRow, {
    align: "center",
    justify: "center"
  }, E.default.createElement(h.TextHeader, {
    level: "2",
    xstyle: _.header,
    size: "24",
    color: "dark",
    weight: "bold"
  }, v)), t.formattedTitle != null ? E.default.createElement(d.FlexRow, {
    align: "center",
    justify: "center"
  }, E.default.createElement(h.TextParagraph, null, t.formattedTitle)) : null, E.default.createElement(d.FlexRow, {
    align: "center",
    justify: "center"
  }, E.default.createElement(h.TextParagraph, {
    xstyle: _.paragraph
  }, C)), E.default.createElement(d.FlexRow, {
    align: "center",
    justify: "center"
  }, E.default.createElement(h.TextParagraph, {
    xstyle: _.disclaimer,
    size: "13"
  }, (0, o.communityCreatePrivacyEnabled)() ? M : b)));
};
var r = require("../app/780549.js");
var o = require("../app/174834.js");
var l = require("./723846.js");
var i = require("../app/103440.js");
var u = require("../app/753233.js");
var s = require("../app/258105.js");
var c = a(require("../app/395767.js"));
var d = require("../app/690495.js");
var f = a(require("../app/469733.js"));
var p = require("../app/118612.js");
var m = require("../app/114850.js");
var h = require("../app/180519.js");
var g = require("../vendor/548360.js");
var E = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = v(t);
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
function v(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (v = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const _ = {
  badge: {
    marginTop: "rek1qe2c"
  },
  header: {
    marginTop: "rek1qe2c",
    marginEnd: "k1jo73ug",
    marginBottom: "mpdn4nr2",
    marginStart: "isfiuinm",
    maxWidth: "dknb6df3",
    textAlign: "qfejxiq4",
    lineHeight: "a4ywakfo"
  },
  paragraph: {
    marginTop: "phxz9vjq",
    marginEnd: "k1jo73ug",
    marginBottom: "j0epb7j8",
    marginStart: "isfiuinm",
    textAlign: "qfejxiq4"
  },
  disclaimer: {
    marginTop: "tt8xd2xn",
    marginEnd: "k1jo73ug",
    marginBottom: "ovb5y9eh",
    marginStart: "isfiuinm",
    color: "gro5s87f",
    textAlign: "qfejxiq4"
  }
};