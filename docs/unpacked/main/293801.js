var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("./579484.js"));
var o = require("../app/921264.js");
var l = require("./925168.js");
var i = require("../app/103440.js");
var u = a(require("./908081.js"));
var s = a(require("./324093.js"));
var c = require("./626194.js");
var d = a(require("./969358.js"));
var f = require("../app/690495.js");
var p = a(require("../app/932325.js"));
var m = require("../app/114850.js");
var h = a(require("./772549.js"));
var g = require("./659338.js");
var E = require("../app/180519.js");
var v = require("../app/454905.js");
var _ = require("../app/676345.js");
var y = a(require("../app/625903.js"));
var C = require("../app/617425.js");
var b = require("../vendor/548360.js");
var M = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = A(t);
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
var S = a(require("../app/401715.js"));
var T = a(require("../app/637660.js"));
var w = a(require("../app/558532.js"));
function A(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (A = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const P = {
  disclaimer: {
    textAlign: "qfejxiq4",
    borderBottom: "n8n2xqzm"
  },
  button: {
    color: "jq3rn4u7",
    display: "r6ttzeij"
  },
  footer: {
    position: "cca4rwve",
    bottom: "jxacihee",
    flexGrow: "ggj6brxn",
    display: "p357zi0d",
    alignItems: "r6jd426a"
  },
  footerRow: {
    width: "ln8gz9je"
  },
  disclaimerText: {
    textAlign: "qfejxiq4",
    lineHeight: "e4qy2s3t"
  },
  emptyStateTitle: {
    textAlign: "qfejxiq4",
    lineHeight: "jgi8eev7"
  },
  empty: {
    height: "ppled2lx"
  },
  sectionTitle: {
    color: "k06jqncy"
  }
};
function O(e) {
  let {
    title: t,
    suggestions: n,
    isAdmin: a,
    chat: r,
    callbacks: o
  } = e;
  return M.default.createElement(d.default, {
    shadow: false,
    xstyle: _.uiMargin.bottom16
  }, M.default.createElement(h.default, {
    header: t,
    xstyle: [P.sectionTitle, _.uiPadding.horiz24, _.uiPadding.top16, _.uiPadding.bottom12]
  }), n == null ? undefined : n.map(e => M.default.createElement(l.SubgroupSuggestion, {
    key: e.id,
    subgroupSuggestion: e,
    isAdmin: a,
    parentGroupChat: r,
    callbacks: o
  })));
}
function k(e, t) {
  const {
    chat: n,
    callbacks: a
  } = e;
  const l = (0, S.default)();
  const [h, A] = (0, M.useState)(false);
  const k = (0, T.default)(() => {
    var e;
    return Boolean(n == null || (e = n.groupMetadata) === null || e === undefined ? undefined : e.participants.iAmAdmin());
  }).current;
  const D = (0, T.default)(() => {
    var e;
    if ((e = n.groupMetadata) === null || e === undefined) {
      return undefined;
    } else {
      return e.getSubgroupSuggestions();
    }
  }).current || [];
  const I = () => {
    const e = D == null ? undefined : D.filter(e => e.currentState === o.State.Pending);
    if (e == null ? undefined : e.length) {
      (0, g.approveSubgroupSuggestions)(n, e, a.onManageCommunityGroupsClick).then(() => A(true));
    }
  };
  const R = () => {
    const e = b.fbt._("Reject all group suggestions?", null, {
      hk: "1FZWVg"
    });
    const t = b.fbt._("The suggestions will not be added to the community.", null, {
      hk: "43skuE"
    });
    m.ModalManager.open(M.default.createElement(i.ConfirmPopup, {
      onOK: () => {
        m.ModalManager.close();
        const e = D == null ? undefined : D.filter(e => e.currentState === o.State.Pending);
        if (e == null ? undefined : e.length) {
          (0, g.rejectSubgroupSuggestions)(n, e).then(() => A(true));
        }
      },
      okText: b.fbt._("Reject all", null, {
        hk: "3exqPB"
      }),
      onCancel: () => m.ModalManager.close(),
      title: e
    }, t));
  };
  (0, w.default)(() => {
    if (!(D == null)) {
      D.forEach(e => {
        e.resetState();
      });
    }
  });
  const N = b.fbt._("Pending groups", null, {
    hk: "2VkwAf"
  });
  let x;
  if (D.length > 0) {
    const e = M.default.createElement(d.default, {
      xstyle: [P.disclaimer, _.uiPadding.horiz24, _.uiPadding.top24, _.uiPadding.bottom16],
      shadow: false
    }, M.default.createElement(f.FlexRow, {
      justify: "center",
      align: "center"
    }, M.default.createElement(E.WDSTextMuted, null, k ? b.fbt._("Group suggestions from members need admin approval. Change in {=m2}", [b.fbt._implicitParam("=m2", M.default.createElement(y.default, {
      onClick: a.onCommunitySettingsClick,
      xstyle: P.button
    }, b.fbt._("community settings", null, {
      hk: "jpvgk"
    })))], {
      hk: "3t8OVJ"
    }) : b.fbt._("Manage your group suggestions that are pending community admin approval", null, {
      hk: "2rWuTf"
    }))));
    const t = [];
    const o = [];
    D.forEach(e => {
      if (e.isExistingGroup) {
        t.push(e);
      } else {
        o.push(e);
      }
    });
    const l = [{
      sectionTitle: b.fbt._("Suggested existing groups ({suggested-existing-groups-count})", [b.fbt._param("suggested-existing-groups-count", p.default.n(t.length))], {
        hk: "1EughE"
      }),
      suggestions: t
    }, {
      sectionTitle: b.fbt._("Suggested new groups ({suggested-new-groups-count})", [b.fbt._param("suggested-new-groups-count", p.default.n(o.length))], {
        hk: "4qcR7x"
      }),
      suggestions: o
    }].map((e, t) => {
      let {
        sectionTitle: l,
        suggestions: i
      } = e;
      if (i.length) {
        return M.default.createElement("section", {
          key: t
        }, M.default.createElement(O, {
          title: l,
          suggestions: i,
          isAdmin: k,
          chat: n,
          callbacks: a
        }), t === 0 && o.length ? M.default.createElement(r.default, {
          noMargin: true
        }) : null);
      } else {
        return null;
      }
    });
    const i = k ? M.default.createElement(d.default, {
      shadow: false,
      xstyle: [P.footer, _.uiPadding.all16, _.uiPadding.bottom6]
    }, M.default.createElement(f.FlexRow, {
      justify: "center",
      gap: 8,
      xstyle: P.footerRow
    }, M.default.createElement(C.WDSButtonSecondary, {
      onClick: R,
      disabled: h,
      stretch: true
    }, b.fbt._("Reject all", null, {
      hk: "cW11F"
    })), M.default.createElement(C.WDSButtonPrimary, {
      onClick: I,
      disabled: h,
      stretch: true
    }, b.fbt._("Approve all", null, {
      hk: "hO2gr"
    })))) : null;
    x = M.default.createElement(M.default.Fragment, null, e, l, i);
  } else {
    x = M.default.createElement(f.FlexColumn, {
      xstyle: [P.empty, _.uiPadding.horiz24],
      justify: "center",
      align: "center"
    }, M.default.createElement(E.TextDiv, {
      size: "20",
      color: "secondary",
      xstyle: [P.emptyStateTitle, _.uiPadding.bottom14]
    }, b.fbt._("No pending group suggestions", null, {
      hk: "cshsw"
    })), M.default.createElement(E.TextDiv, {
      size: "14",
      color: "secondary",
      xstyle: P.disclaimerText
    }, b.fbt._("Groups that members have suggested to add to the community and are waiting to be be approved will appear here.", null, {
      hk: "1hWMJU"
    })));
  }
  return M.default.createElement("div", {
    role: "complementary",
    ref: l,
    tabIndex: "-1",
    "aria-label": N
  }, M.default.createElement(u.default, {
    ref: t,
    testid: "subgroup-suggestions-drawer",
    theme: "invite"
  }, M.default.createElement(c.DrawerHeader, {
    title: N,
    type: (0, v.topMenuRedesignEnabled)() ? c.DRAWER_HEADER_TYPE.SMALL : c.DRAWER_HEADER_TYPE.LARGE,
    onBack: e.onBack
  }), M.default.createElement(s.default, null, x)));
}
var D = (0, M.forwardRef)(k);
exports.default = D;