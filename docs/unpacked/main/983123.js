var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/670983.js"));
var o = require("../app/287461.js");
var l = require("../app/63014.js");
var i = require("../app/660666.js");
var u = a(require("./908081.js"));
var s = a(require("./324093.js"));
var c = require("./626194.js");
var d = a(require("./969358.js"));
var f = require("../app/690495.js");
var p = require("./183116.js");
var m = require("./11006.js");
var h = a(require("./483701.js"));
var g = require("./629881.js");
var E = require("./104900.js");
var v = require("../app/21645.js");
var _ = require("../app/130207.js");
var y = require("../app/180519.js");
var C = require("../app/676345.js");
var b = a(require("../app/625903.js"));
var M = require("../app/459857.js");
var S = require("../vendor/548360.js");
var T = function (e, t) {
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
a(require("../app/156720.js"));
var w = a(require("./426872.js"));
var A = a(require("../app/637660.js"));
var P = require("../app/655241.js");
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
  disclaimer: {
    marginBottom: "inogquss"
  },
  disclaimerText: {
    textAlign: "qfejxiq4",
    lineHeight: "e4qy2s3t"
  },
  emptyStateTitle: {
    textAlign: "qfejxiq4",
    lineHeight: "jgi8eev7"
  },
  button: {
    color: "jq3rn4u7"
  },
  empty: {
    height: "ppled2lx"
  },
  sectionTitle: {
    color: "k06jqncy"
  }
};
function D(e, t) {
  const {
    orderBy: n,
    onBack: a,
    onRequestClick: O,
    onSortBySource: D,
    onSortByTime: I,
    onGroupSettings: N
  } = e;
  const x = (0, P.useModelValues)(e.chat, ["id", "groupMetadata"]);
  const L = (0, P.useModelValues)((0, r.default)(x.groupMetadata, "chat.groupMetadata"), ["membershipApprovalRequests", "membershipApprovalMode", "participants"]);
  const [j, B] = (0, w.default)(L);
  const F = L.participants.iAmAdmin();
  let G;
  let U = (0, A.default)(() => L.membershipApprovalRequests.toArray()).current;
  if (U.length > 0 && (0, o.getABPropConfigValue)("group_join_request_m3")) {
    G = T.default.createElement(h.default, {
      orderBy: n,
      onSortBySource: D,
      onSortByTime: I
    });
  }
  const [W, H] = (0, g.useMembershipApprovalRequestsBanner)(x);
  let V;
  (0, T.useEffect)(() => {
    if (W) {
      H();
    }
    (0, p.logViewPendingParticipant)(x.id);
  }, []);
  if (U.length > 0) {
    let e;
    if ((0, o.getABPropConfigValue)("group_join_request_m3")) {
      const t = [];
      if ((0, o.getABPropConfigValue)("web_anyone_can_add_group_setting_enabled") && B) {
        U = U.filter(e => (0, M.isMeAccount)(e.addedByContact.id));
      }
      switch (n) {
        case E.MembershipApprovalRequestsOrder.Source:
          {
            var q;
            const e = (q = x.groupMetadata) === null || q === undefined ? undefined : q.getParentGroupChat();
            const {
              contacts: n,
              addedByOthers: a,
              fromCommunity: r,
              fromInviteLink: o,
              fromOtherCommunities: l
            } = function (e, t) {
              return e.reduce((e, n) => {
                if ((0, i.getIsMyContact)(n.contact)) {
                  e.contacts.push(n);
                } else {
                  switch (n.requestMethod) {
                    case _.RequestMethod.NonAdminAdd:
                      e.addedByOthers.push(n);
                      break;
                    case _.RequestMethod.InviteLink:
                      e.fromInviteLink.push(n);
                      break;
                    case _.RequestMethod.LinkedGroupJoin:
                      if (n.parentGroupId == null || n.parentGroupId.equals(t)) {
                        e.fromCommunity.push(n);
                      } else {
                        e.fromOtherCommunities.push(n);
                      }
                  }
                }
                return e;
              }, {
                contacts: [],
                addedByOthers: [],
                fromInviteLink: [],
                fromCommunity: [],
                fromOtherCommunities: []
              });
            }(U, e == null ? undefined : e.id);
            t.push({
              title: S.fbt._("Contacts", null, {
                hk: "4C6pqV"
              }),
              requests: n
            }, {
              title: S.fbt._("Added by others", null, {
                hk: "4iwY4S"
              }),
              requests: a
            });
            if (e != null) {
              t.push({
                title: S.fbt._("From {community_name}", [S.fbt._param("community_name", T.default.createElement(v.Name, {
                  chat: e
                }))], {
                  hk: "X0m2y"
                }),
                requests: r
              });
            }
            t.push({
              title: S.fbt._("From invite link", null, {
                hk: "3VwbbN"
              }),
              requests: o
            }, {
              title: S.fbt._("From other communities", null, {
                hk: "3l5ntp"
              }),
              requests: l
            });
            break;
          }
        case E.MembershipApprovalRequestsOrder.Time:
          t.push(...function (e) {
            const t = [];
            let n;
            e.forEach(e => {
              var a;
              const r = l.Clock.membershipApprovalRequestSectionDate(e.t);
              if (r !== ((a = n) === null || a === undefined ? undefined : a.date)) {
                n = {
                  date: r,
                  requests: []
                };
                t.push(n);
              }
              n.requests.push(e);
            });
            return t;
          }(U).map(e => ({
            title: e.date,
            requests: e.requests
          })));
      }
      e = t.filter(e => e.requests.length > 0).map(e => T.default.createElement(R, {
        key: e.title,
        title: e.title
      }, e.requests.map(e => T.default.createElement(m.MembershipApprovalRequest, {
        key: e.id.toString(),
        chat: x,
        request: e,
        onRequestClick: O,
        onBack: a
      }))));
    } else {
      e = T.default.createElement(d.default, {
        animation: false,
        shadow: false
      }, U.map(e => T.default.createElement(m.MembershipApprovalRequest, {
        key: e.id.toString(),
        chat: x,
        request: e,
        onRequestClick: O,
        onBack: a
      })));
    }
    V = T.default.createElement(T.default.Fragment, null, T.default.createElement(d.default, {
      xstyle: [k.disclaimer, C.uiPadding.horiz24, C.uiPadding.top24, C.uiPadding.bottom15],
      animation: false,
      shadow: false
    }, T.default.createElement(f.FlexRow, {
      justify: "center",
      align: "center"
    }, T.default.createElement(y.TextDiv, {
      size: "14",
      color: "secondary",
      xstyle: k.disclaimerText
    }, F ? S.fbt._("New participants need admin approval to join this group. Change in {=m2}", [S.fbt._implicitParam("=m2", T.default.createElement(b.default, {
      onClick: N,
      xstyle: k.button
    }, S.fbt._("group settings", null, {
      hk: "42EFQ8"
    })))], {
      hk: "2GIfvk"
    }) : S.fbt._("New participants need admin approval to join this group.", null, {
      hk: "22HLHa"
    })))), e);
  } else {
    let e;
    let t;
    if ((0, o.getABPropConfigValue)("group_join_request_m3")) {
      e = S.fbt._("No participants to review", null, {
        hk: "QJU9T"
      });
      t = L.membershipApprovalMode ? S.fbt._("People who requested to join this group and are waiting to be approved will appear here.", null, {
        hk: "2gUMtg"
      }) : S.fbt._("People who requested to join this group and are waiting to be approved will appear here. Turn on admin approval in {=m2}.", [S.fbt._implicitParam("=m2", T.default.createElement(b.default, {
        onClick: N,
        xstyle: k.button
      }, S.fbt._("group settings", null, {
        hk: "4bYTD4"
      })))], {
        hk: "aph7e"
      });
    } else {
      t = S.fbt._("{=m0}", [S.fbt._implicitParam("=m0", T.default.createElement("div", null, S.fbt._("People who requested to join this group and are waiting to be approved will appear here. Turn off admin approval in {=m2} .", [S.fbt._implicitParam("=m2", T.default.createElement(b.default, {
        onClick: N,
        xstyle: k.button
      }, S.fbt._("group settings", null, {
        hk: "2Szh3X"
      })))], {
        hk: "37co9g"
      })))], {
        hk: "3rijqI"
      });
    }
    V = T.default.createElement(f.FlexColumn, {
      xstyle: [k.empty, C.uiPadding.horiz24],
      justify: "center",
      align: "center"
    }, e != null ? T.default.createElement(y.TextDiv, {
      size: "20",
      color: "secondary",
      xstyle: [k.emptyStateTitle, C.uiPadding.bottom14]
    }, e) : null, T.default.createElement(y.TextDiv, {
      size: "14",
      color: "secondary",
      xstyle: k.disclaimerText
    }, t));
  }
  return T.default.createElement(u.default, {
    ref: t,
    theme: (0, o.getABPropConfigValue)("group_join_request_m3") ? "invite" : "striped"
  }, T.default.createElement(c.DrawerHeader, {
    title: (0, o.getABPropConfigValue)("group_join_request_m3") ? S.fbt._("Pending requests", null, {
      hk: "wQQpI"
    }) : S.fbt._("Pending participants", null, {
      hk: "3r0VMk"
    }),
    type: c.DRAWER_HEADER_TYPE.SMALL,
    rtlFixIfOnDarwin: true,
    onBack: a,
    menu: G
  }), T.default.createElement(s.default, null, V));
}
var I = (0, T.forwardRef)(D);
function R(e) {
  let {
    title: t,
    children: n
  } = e;
  return T.default.createElement(d.default, {
    title: t,
    animation: false,
    shadow: false,
    xstyle: C.uiMargin.bottom0,
    titleXStyle: [C.uiMargin.bottom0, C.uiPadding.horiz16, C.uiPadding.top24, C.uiPadding.bottom12],
    titleTextXStyle: k.sectionTitle
  }, n);
}
exports.default = I;