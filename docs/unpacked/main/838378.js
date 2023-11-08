var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    chat: t,
    isAdmin: n,
    mini: a = false
  } = e;
  let r = (0, o.default)(e, G);
  const l = (0, j.useModelValues)(t, ["groupMetadata", "contact", "id"]);
  const {
    subgroupCount: i
  } = (0, L.default)(l.groupMetadata);
  const u = (0, f.isIntegritySuspendedCommunity)(l);
  const s = R.fbt._("Community", null, {
    hk: "2youO2"
  });
  return N.default.createElement(E.default, {
    theme: "padding-large"
  }, N.default.createElement(_.FlexColumn, {
    align: "center"
  }, N.default.createElement(q, {
    chat: l,
    xstyle: H.photo,
    isCommunitySuspended: u,
    mini: a
  }), N.default.createElement(Y, {
    chat: l,
    mini: a
  }), !a && N.default.createElement("div", {
    className: (0, x.default)(H.groupSecondary)
  }, N.default.createElement(g.SelectableSpan, {
    dir: "auto",
    selectable: true
  }, N.default.createElement(k.TextSpan, {
    size: "16",
    color: "secondary"
  }, s, u ? null : N.default.createElement(N.default.Fragment, null, C.default.isRTL() ? " - " : " · ", R.fbt._({
    "*": "{count} Groups",
    _1: "1 Group"
  }, [R.fbt._plural(i, "count")], {
    hk: "Ar6Pi"
  }))))), !a && n && (0, p.communityHomeHeaderActionsEnabled)() ? N.default.createElement(V, r) : null));
};
var r = a(require("../vendor/348926.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/898817.js");
var i = require("../app/122583.js");
var u = a(require("../app/670983.js"));
var s = a(require("../app/229922.js"));
var c = require("./570588.js");
var d = require("./640998.js");
var f = require("../app/394164.js");
var p = require("../app/174834.js");
var m = require("./771972.js");
var h = require("../app/103440.js");
var g = require("../app/306703.js");
var E = a(require("./969358.js"));
var v = a(require("../app/395767.js"));
var _ = require("../app/690495.js");
var y = a(require("./559719.js"));
var C = a(require("../app/932325.js"));
var b = require("./406506.js");
var M = W(require("../app/288057.js"));
var S = require("../app/114850.js");
var T = require("./312727.js");
var w = require("./588792.js");
var A = require("./511696.js");
var P = require("../app/115948.js");
var O = require("./470824.js");
var k = require("../app/180519.js");
var D = require("../app/676345.js");
var I = a(require("../app/625903.js"));
var R = require("../vendor/548360.js");
var N = W(require("../vendor/667294.js"));
var x = a(require("../app/156720.js"));
var L = a(require("./847116.js"));
var j = require("../app/655241.js");
var B = a(require("./311930.js"));
var F = a(require("../app/895851.js"));
const G = ["chat", "isAdmin", "mini"];
function U(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (U = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function W(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = U(t);
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
}
const H = {
  groupSecondary: {
    lineHeight: "a4ywakfo",
    marginTop: "ma4rpf0l",
    overflowWrap: "fd365im1"
  },
  photo: {
    marginBottom: "njub1g37"
  },
  icon: {
    zIndex: "rys9xrs2"
  },
  subjectInputFlex: {
    justifyContent: "ac2vgrno",
    width: "ln8gz9je"
  },
  infoActions: {
    display: "btb1m7bk",
    gap: "nkqqdrrm",
    gridAutoFlow: "ndu3x4py",
    gridAutoColumns: "jbdbrikl",
    justifyItems: "g3ty6e9x",
    alignItems: "gndfcl4n"
  },
  actionIcon: {
    color: "fsk8o631"
  },
  infoAction: {
    flexGrow: "ggj6brxn",
    color: "fsk8o631",
    fontWeight: "sy6s5v3r"
  },
  infoActionFontSize: {
    fontSize: "f8jlpxt4"
  }
};
function V(e) {
  let {
    onInviteMembersClick: t,
    onManageCommunityGroupsClick: n,
    onAddMembersClick: a,
    onViewMembersClick: r
  } = e;
  const o = [{
    Icon: b.LinkIcon,
    onClick: t,
    testid: "info-invite-action",
    title: R.fbt._("Invite", null, {
      hk: "2jYI0S"
    })
  }, {
    Icon: c.AddUserIcon,
    onClick: a != null ? a : r,
    testid: "info-members-action",
    title: a ? R.fbt._("Add members", null, {
      hk: "1jR9Rs"
    }) : R.fbt._("Members", null, {
      hk: "1BitOg"
    })
  }, {
    Icon: T.NewGroupIcon,
    onClick: n,
    testid: "info-add-groups-action",
    title: R.fbt._("Add groups", null, {
      hk: "3uGica"
    })
  }];
  return N.default.createElement("div", {
    className: (0, x.default)(H.infoActions, D.uiPadding.top15, D.uiPadding.horiz20)
  }, o.map((e, t) => {
    let {
      testid: n,
      Icon: a,
      onClick: r,
      title: o
    } = e;
    return N.default.createElement(I.default, {
      key: t,
      "aria-label": o,
      testid: n,
      onClick: r,
      xstyle: H.infoActionFontSize
    }, N.default.createElement(_.FlexColumn, {
      align: "center",
      xstyle: [H.infoAction, D.uiPadding.all5]
    }, N.default.createElement(a, {
      xstyle: H.actionIcon,
      width: 32,
      height: 32
    }), o));
  }));
}
function q(e) {
  var t;
  const n = (0, j.useModelValues)(e.chat, ["isReadOnly", "groupMetadata", "contact"]);
  const a = (0, j.useModelValues)(n.contact, ["id", "profilePicThumb"]);
  a.getProfilePicThumb();
  const r = (0, j.useModelValues)(a.profilePicThumb, ["imgFull"]);
  const [o, u] = (0, N.useState)(false);
  const [c, d] = (0, N.useState)(false);
  const f = (0, F.default)();
  const p = e.mini || n.isReadOnly || !r.canDelete() && !r.canSet() || e.isCommunitySuspended || !((t = n.groupMetadata) === null || t === undefined ? undefined : t.participants.iAmAdmin());
  return N.default.createElement("div", {
    className: (0, x.default)(e.xstyle)
  }, N.default.createElement(A.PhotoPickerLoadable, {
    key: String(o),
    type: w.PhotoPickerType.COMMUNITY,
    id: a.id,
    attachToChat: true,
    pending: c,
    startImage: r.imgFull,
    readOnly: p,
    onImageSet: (e, t) => {
      let n;
      d(true);
      n = e && t ? (0, P.setProfilePic)(r, e, t) : (0, P.deleteProfilePic)(r);
      (0, s.default)(n, f).catch((0, l.catchAbort)(() => {})).catch((0, i.filteredCatch)(M.ActionError, () => {
        __LOG__(3)`CommunityInfoDrawer: failed to set/delete community image`;
        u(!o);
      })).finally(() => {
        d(false);
      });
    },
    dimmed: e.isCommunitySuspended
  }));
}
function Y(e) {
  const t = (0, j.useModelValues)(e.chat.contact, ["name"]);
  const n = (0, j.useModelValues)((0, u.default)(e.chat.groupMetadata, "props.chat.groupMetadata"), ["creation", "restrict"]);
  const a = (0, F.default)();
  const [o, i] = (0, N.useState)(false);
  const c = (0, B.default)(e.chat);
  const f = function () {
    var n = (0, r.default)(function* (n) {
      const r = n;
      if (r.trim() !== t.name) {
        yield (0, s.default)((0, O.setGroupSubject)(e.chat, r), a).catch((0, l.catchAbort)(() => {})).catch(() => {
          __LOG__(3)`community_home:onSetSubject failed`;
        });
      }
    });
    return function () {
      return n.apply(this, arguments);
    };
  }();
  return N.default.createElement(_.FlexRow, {
    xstyle: H.subjectInputFlex
  }, N.default.createElement(y.default, {
    testid: "community-home-subject-input",
    subject: t.name,
    onSave: f,
    editable: !(e.mini || c && !o) && n.canSetSubject(),
    editRestrictionInfo: n.restrict ? () => {
      S.ModalManager.open(N.default.createElement(h.ConfirmPopup, {
        onOK: () => S.ModalManager.close(),
        okText: (0, v.default)("OK")
      }, R.fbt._("Only admins can edit this community's info", null, {
        hk: "2ddKAP"
      })));
    } : undefined
  }), c && !o ? N.default.createElement(I.default, {
    onClick: () => {
      S.ModalManager.open(N.default.createElement(m.CommunitySubjectSyncingIssuePopup, {
        parentChat: e.chat,
        onOK: () => i(true)
      }));
    },
    className: (0, x.default)(H.icon, D.uiMargin.top8)
  }, N.default.createElement(d.AlertErrorIcon, {
    width: 20
  })) : null);
}