var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/287461.js");
var o = require("./811462.js");
var l = require("./755782.js");
var i = require("./43212.js");
var u = require("../app/177938.js");
var s = a(require("./908081.js"));
var c = a(require("./831269.js"));
var d = a(require("./324093.js"));
var f = require("./626194.js");
var p = a(require("./969358.js"));
var m = require("../app/305521.js");
var h = require("../app/656134.js");
var g = a(require("./649391.js"));
var E = require("./123285.js");
var v = require("./196398.js");
var _ = require("../app/114850.js");
var y = require("../app/95589.js");
var C = require("./588792.js");
var b = require("./511696.js");
var M = require("./202391.js");
var S = require("./435595.js");
var T = require("../app/937001.js");
var w = require("../app/180519.js");
var A = require("../app/454905.js");
var P = require("../app/377773.js");
var O = a(require("../app/844453.js"));
var k = require("../vendor/548360.js");
var D = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = N(t);
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
var I = a(require("../app/156720.js"));
var R = a(require("../app/829686.js"));
function N(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (N = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const x = {
  nextButton: {
    zIndex: "b9fczbqn",
    display: "p357zi0d",
    justifyContent: "j1p1mz06",
    paddingBottom: "gpgqxepn",
    marginTop: "th20vg8r",
    textAlign: "qfejxiq4"
  },
  section: {
    marginTop: "th20vg8r",
    marginEnd: "ramqyho6",
    marginBottom: "nym7wvdi",
    marginStart: "m51t5hoj"
  },
  header: {
    marginBottom: "j4enbv94"
  },
  chevronIcon: {
    color: "cs9t9or5"
  },
  labelDescription: {
    lineHeight: "iuhl9who",
    fontSize: "i5q8zipx",
    color: "gro5s87f"
  }
};
function L(e) {
  let t;
  let {
    ephemeralDuration: n,
    handleEphemeralDurationClick: a
  } = e;
  t = n > 0 ? (0, E.getDisappearingMessageDurationString)(n) : k.fbt._("Off", null, {
    hk: "2oC0wl"
  });
  const r = D.default.createElement(l.ChevronRightAltIcon, {
    xstyle: x.chevronIcon,
    directional: true
  });
  return D.default.createElement(p.default, null, D.default.createElement(c.default, {
    testid: "ephemeral-duration-block",
    onClick: a,
    side: r,
    ariaLabel: k.fbt._("Disappearing messages", null, {
      hk: "3JQStz"
    }).toString(),
    multiline: true
  }, D.default.createElement("div", {
    className: (0, I.default)(x.header)
  }, D.default.createElement(w.TextHeader, {
    level: "3",
    theme: "title"
  }, k.fbt._("Disappearing messages", null, {
    hk: "384ocn"
  }))), D.default.createElement(w.TextParagraph, {
    theme: "muted"
  }, t)));
}
function j(e) {
  let {
    onAddParticipants: t,
    participants: n
  } = e;
  const a = (0, i.getParticipantInfoText)(n);
  return D.default.createElement(p.default, null, D.default.createElement(c.default, {
    onClick: t,
    side: D.default.createElement(l.ChevronRightAltIcon, {
      xstyle: x.chevronIcon,
      directional: true
    }),
    ariaLabel: k.fbt._("Add participants", null, {
      hk: "CwUt0"
    }).toString(),
    multiline: true
  }, D.default.createElement(w.TextHeader, {
    level: "3",
    theme: "title",
    xstyle: x.header
  }, k.fbt._("Add Participants (optional)", null, {
    hk: "1IE4EG"
  })), D.default.createElement(w.TextParagraph, {
    theme: "muted"
  }, a)));
}
const B = (0, D.forwardRef)((e, t) => {
  const {
    participants: n = [],
    onSubmit: a,
    communityName: l,
    allowUnnamedGroup: i,
    parentGroupId: c,
    shortenedCreationFlow: E,
    onAddParticipants: w
  } = e;
  const [N, B] = (0, D.useState)(e.subject || "");
  const [F, G] = (0, D.useState)(e.thumb);
  const [U, W] = (0, D.useState)(e.full);
  const [H, V] = (0, D.useState)(() => {
    if (e.ephemeralDuration != null) {
      return e.ephemeralDuration;
    }
    const t = (0, h.getEphemeralDurationForUser)(u.ContactCollection.getMeContact());
    if (t != null) {
      return t;
    } else {
      return 0;
    }
  });
  const q = (0, R.default)(() => {
    const e = N.trim();
    a(e, F, U, H, n);
  });
  const Y = t => {
    var n;
    V(t);
    if (!((n = e.handleLiftGroupInfo) === null || n === undefined)) {
      n.call(e, {
        ephemeralDuration: t
      });
    }
  };
  const z = () => {
    _.ModalManager.open(D.default.createElement(v.EphemeralPopup, {
      initialDuration: H,
      onDurationSelected: Y
    }));
  };
  const K = () => c || i !== true ? N.trim().length > 0 : !!(0, r.getABPropConfigValue)("ugc_enabled") || N.trim().length > 0;
  const Q = !c && i === true && (0, r.getABPropConfigValue)("ugc_enabled") ? k.fbt._("Group Subject (Optional)", null, {
    hk: "1INLmg"
  }) : k.fbt._("Group Subject", null, {
    hk: "1GfUDH"
  });
  const X = D.default.createElement(L, {
    ephemeralDuration: H,
    handleEphemeralDurationClick: () => {
      if ((0, P.shouldShowNUX)(y.NUX.EPHEMERAL)) {
        _.ModalManager.open(D.default.createElement(g.default, {
          fromMe: true,
          onOk: z
        }));
      } else {
        z();
      }
    }
  });
  const Z = E === true && w ? D.default.createElement(j, {
    participants: n,
    onAddParticipants: w
  }) : null;
  return D.default.createElement(s.default, {
    ref: t,
    testid: "new-group-drawer-submit"
  }, D.default.createElement(f.DrawerHeader, {
    title: k.fbt._("New group", null, {
      hk: "m8Oyw"
    }),
    type: (0, A.topMenuRedesignEnabled)() ? f.DRAWER_HEADER_TYPE.SMALL : f.DRAWER_HEADER_TYPE.LARGE,
    onBack: e.onBack
  }), D.default.createElement(d.default, null, D.default.createElement(p.default, null, D.default.createElement("div", {
    className: (0, I.default)(x.section)
  }, D.default.createElement(b.PhotoPickerLoadable, {
    type: C.PhotoPickerType.GROUP,
    attachToChat: false,
    startImage: U,
    onImageSet: (t, n) => {
      var a;
      G(t);
      W(n);
      if (!((a = e.handleLiftGroupInfo) === null || a === undefined)) {
        a.call(e, {
          thumb: t,
          full: n
        });
      }
    }
  })), D.default.createElement("div", {
    className: (0, I.default)(x.section)
  }, D.default.createElement(M.RichTextField, {
    value: N,
    maxLength: T.ServerProps.maxSubject,
    showRemaining: true,
    onChange: t => {
      var n;
      var a;
      n = t.text;
      B(n);
      if (!((a = e.handleLiftGroupInfo) === null || a === undefined)) {
        a.call(e, {
          text: n
        });
      }
    },
    title: Q,
    placeholder: Q,
    onEnter: K() ? q : () => {},
    supportsEmoji: true,
    focusOnMount: true
  }), (0, r.getABPropConfigValue)("parent_group_no_disclaimer") || l == null ? null : D.default.createElement(m.EmojiText, {
    xstyle: x.labelDescription,
    element: "p",
    text: k.fbt._("Anyone in the community \"{community-name}\" can join this group.", [k.fbt._param("community-name", l)], {
      hk: "2tLCty"
    })
  }))), X, Z, D.default.createElement(O.default, {
    transitionName: "btn"
  }, K() === true ? D.default.createElement("div", {
    className: (0, I.default)(x.nextButton)
  }, D.default.createElement(S.Round, {
    testid: "create-group-btn",
    onClick: q,
    label: k.fbt._("Create group", null, {
      hk: "2L8uEA"
    })
  }, D.default.createElement(o.CheckmarkMediumIcon, null))) : null)));
});
B.displayName = "NewGroupDrawer";
var F = B;
exports.default = F;