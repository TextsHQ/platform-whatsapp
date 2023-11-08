var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const {
    chat: n,
    onBack: a,
    onDeactivateCommunity: i
  } = e;
  const u = (0, o.isTerminatedGroupOrNotMember)(n) || (0, r.isIntegritySuspendedCommunity)(n) ? null : C.default.createElement(w, {
    chat: n,
    onDeactivateCommunity: i
  });
  const s = (0, r.isIntegritySuspendedCommunity)(n) ? C.default.createElement(T, {
    chat: n,
    onBack: a
  }) : null;
  const c = (0, r.isIntegritySuspendedCommunity)(n) ? null : C.default.createElement(S, {
    chat: n,
    onDeactivateCommunity: i
  });
  const d = (0, b.default)(n == null || (t = n.groupMetadata) === null || t === undefined ? undefined : t.participants, ["bulk_add", "bulk_remove", "reset", "change:isSuperAdmin"], () => (0, r.canDeactivateCommunity)(n)) ? C.default.createElement(A, {
    onDeactivateCommunity: i
  }) : null;
  return C.default.createElement(l.ChatInfoDrawerSection, {
    xstyle: [M.drawerSectionContainer, _.uiMargin.vert10]
  }, u, s, c, d);
};
var r = require("../app/394164.js");
var o = require("../app/374660.js");
var l = require("./464659.js");
var i = require("./406623.js");
var u = require("./24957.js");
var s = require("./184385.js");
var c = require("./36045.js");
var d = require("../app/900316.js");
var f = require("./69943.js");
var p = require("./736371.js");
var m = require("../app/114850.js");
var h = a(require("./338695.js"));
var g = require("../app/383296.js");
var E = require("../app/453603.js");
var v = require("./647890.js");
var _ = require("../app/676345.js");
var y = require("../vendor/548360.js");
var C = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
var b = a(require("../app/524578.js"));
const M = {
  drawerSectionContainer: {
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f"
  }
};
function S(e) {
  let {
    chat: t,
    onDeactivateCommunity: n
  } = e;
  const a = y.fbt._("Report community", null, {
    hk: "p0JiQ"
  });
  return C.default.createElement(c.DrawerButtonSimple, {
    ariaLabel: a.toString(),
    testid: "li-report-community-spam",
    color: "danger",
    icon: C.default.createElement(v.ThumbsDownIcon, null),
    theme: "chat-info",
    onClick: e => {
      e.preventDefault();
      m.ModalManager.open(C.default.createElement(h.default, {
        isCommunity: true,
        isGroupChat: true,
        isMessage: false,
        onReport: () => {
          (0, g.sendReport)({
            chat: t,
            spamFlow: E.SpamFlow.CommunityHome
          });
          m.ModalManager.close();
        },
        onReportExitClear: () => {
          (0, g.sendReport)({
            chat: t,
            spamFlow: E.SpamFlow.CommunityHome
          }).then(() => {
            m.ModalManager.open(C.default.createElement(p.LeaveCommunityModal, {
              chat: t,
              onDeactivateCommunity: n
            }), {
              transition: "modal-flow"
            });
          });
        },
        onCancel: () => m.ModalManager.close()
      }));
    }
  }, y.fbt._("Report community", null, {
    hk: "eFuSU"
  }));
}
function T(e) {
  let {
    chat: t,
    onBack: n
  } = e;
  const a = y.fbt._("Delete community", null, {
    hk: "2W1doI"
  });
  const r = e => {
    t.pendingAction++;
    e.finally(() => {
      t.pendingAction--;
      if (n) {
        n();
      } else {
        d.DrawerManager.closeDrawerLeft();
      }
    });
  };
  return C.default.createElement(c.DrawerButtonSimple, {
    ariaLabel: a.toString(),
    testid: "li-delete-community",
    color: "danger",
    icon: C.default.createElement(s.DeleteIcon, {
      directional: true
    }),
    theme: "chat-info",
    onClick: e => {
      e.preventDefault();
      m.ModalManager.open(C.default.createElement(u.DeleteChatPopup, {
        chat: t,
        onDeleteOrExit: r
      }), {
        transition: "modal-flow"
      });
    }
  }, y.fbt._("Delete community", null, {
    hk: "3pAEv0"
  }));
}
function w(e) {
  let {
    chat: t,
    onDeactivateCommunity: n
  } = e;
  const a = y.fbt._("Exit community", null, {
    hk: "3Wb9l2"
  });
  return C.default.createElement(c.DrawerButtonSimple, {
    ariaLabel: a.toString(),
    testid: "li-exit-community",
    color: "danger",
    icon: C.default.createElement(f.ExitIcon, {
      directional: true
    }),
    theme: "chat-info",
    onClick: e => {
      e.preventDefault();
      m.ModalManager.open(C.default.createElement(p.LeaveCommunityModal, {
        chat: t,
        onDeactivateCommunity: n
      }), {
        transition: "modal-flow"
      });
    }
  }, y.fbt._("Exit community", null, {
    hk: "MpILy"
  }));
}
function A(e) {
  let {
    onDeactivateCommunity: t
  } = e;
  const n = y.fbt._("Deactivate community", null, {
    hk: "3E5nRl"
  });
  return C.default.createElement(c.DrawerButtonSimple, {
    ariaLabel: n.toString(),
    testid: "li-deactivate-community",
    color: "danger",
    icon: C.default.createElement(i.DeactivateIconIcon, null),
    theme: "chat-info",
    onClick: t
  }, y.fbt._("Deactivate community", null, {
    hk: "30Wv41"
  }));
}