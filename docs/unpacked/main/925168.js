var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubgroupSuggestion = function (e) {
  const {
    subgroupSuggestion: t,
    isAdmin: n,
    parentGroupChat: a,
    callbacks: S
  } = e;
  const [w, A] = (0, M.default)(t, ["change:currentState", "change:error"], () => [t.currentState, t.error]);
  const [P, O] = (0, b.useState)();
  const k = (0, y.isMeAccount)(t.owner);
  const D = (0, m.getFormattedName)(t.ownerContact);
  const I = n ? C.fbt._("Suggested by {user-name}", [C.fbt._param("user-name", b.default.createElement(f.EmojiText, {
    text: D
  }))], {
    hk: "31Ra6G"
  }) : i.Clock.suggestedOnDateStr(t.t);
  const R = t.desc != null ? {
    title: C.fbt._("Group description", null, {
      hk: "3siVni"
    }),
    content: t.desc
  } : undefined;
  const N = t.participantCount != null ? C.fbt._({
    "*": "{participant-count} participants",
    _1: "1 participant"
  }, [C.fbt._plural(t.participantCount, "participant-count")], {
    hk: "w1kuH"
  }) : undefined;
  let x;
  if (P) {
    x = b.default.createElement(v.UIE, {
      displayName: "SubgroupSuggestionContextMenu",
      escapable: true,
      popable: true,
      dismissOnWindowResize: true,
      requestDismiss: () => {
        O(null);
      }
    }, b.default.createElement(_.default, {
      contextMenu: P
    }));
  }
  return b.default.createElement(b.default.Fragment, null, b.default.createElement(l.CellRequest, (0, r.default)({
    image: b.default.createElement(c.DetailImage, {
      size: c.DetailImageSize.Small,
      id: t.groupId
    }),
    primary: b.default.createElement(f.EmojiText, {
      text: t.subject,
      xstyle: T.text
    }),
    secondary: I,
    secondaryTestId: "suggestion-subtitle",
    signals: {
      description: R,
      participantCountText: N
    },
    state: w,
    onApprove: n ? e => {
      (e => {
        e.stopPropagation();
        (0, h.approveSubgroupSuggestions)(a, [t], S.onManageCommunityGroupsClick);
      })(e);
    } : undefined,
    onReject: e => {
      if (n) {
        (e => {
          e.stopPropagation();
          (0, h.rejectSubgroupSuggestions)(a, [t]);
        })(e);
      } else {
        (e => {
          e.stopPropagation();
          (0, h.cancelSubgroupSuggestions)(a, [t]);
        })(e);
      }
    },
    onError: e => {
      e.stopPropagation();
      if (A != null) {
        E.ToastManager.open(b.default.createElement(g.Toast, {
          msg: A
        }));
      }
    }
  }, !k && {
    onClick: e => {
      const n = t.ownerContact.id;
      const a = C.fbt._("Message {name}", [C.fbt._param("name", (0, m.getFormattedShortName)(t.ownerContact))], {
        hk: "1Lwd74"
      });
      const r = function () {
        var e = (0, o.default)(function* () {
          try {
            const e = yield (0, p.findChat)(n, "communitySubgroupSuggestions");
            if (u.Cmd.openChatFromUnread(e)) {
              s.ComposeBoxActions.focus(e);
            }
          } catch (e) {
            __LOG__(4, undefined, new Error())`Opening chat failed with exceptions`;
          }
        });
        return function () {
          return e.apply(this, arguments);
        };
      }();
      O({
        contactId: n,
        menu: [b.default.createElement(d.DropdownItem, {
          testid: "message-suggestion-owner",
          key: "message-suggestion-owner",
          action: r,
          ariaLabel: a,
          addSpacing: true
        }, b.default.createElement(f.EmojiText, {
          text: a,
          xstyle: T.dropdownText
        }))],
        anchor: e.target
      });
    },
    hoverEnabled: true
  })), x);
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/348926.js"));
var l = require("./718922.js");
var i = require("../app/63014.js");
var u = require("../app/780549.js");
var s = require("../app/877171.js");
var c = require("../app/23641.js");
var d = require("../app/675085.js");
var f = require("../app/305521.js");
var p = require("../app/581354.js");
var m = require("../app/714574.js");
var h = require("./659338.js");
var g = require("../app/625786.js");
var E = require("../app/390737.js");
var v = require("../app/392632.js");
var _ = a(require("../app/37875.js"));
var y = require("../app/459857.js");
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
  var n = S(t);
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
var M = a(require("../app/524578.js"));
function S(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (S = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const T = {
  text: {
    maxWidth: "laorhtua",
    whiteSpace: "le5p0ye3",
    textOverflow: "lhj4utae",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  dropdownText: {
    display: "p357zi0d",
    alignItems: "gndfcl4n"
  }
};