var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClickableDeactivatedCommunityName = w;
exports.getClickableIntegrityDeactivateCommunityName = function (e, t, n) {
  if (c.ContactCollection.get(e.toString()) != null) {
    return U(e, !n, R(e));
  }
  if (t == null || t === "") {
    return null;
  }
  if (n) {
    return C.default.createElement(d.EmojiText, {
      text: t,
      onClick: y.openTerminatedCommunityModal
    });
  }
  return t;
};
exports.getCommunityNameInQuotationMarks = function (e, t) {
  if (t) {
    return A.default._("\"{community-name}\"", [A.default._param("community-name", e)], {
      hk: "1M6rO5"
    });
  } else {
    return C.default.createElement("span", {
      className: (0, P.default)(O.communityName)
    }, b.fbt._("\"{community-name}\"", [b.fbt._param("community-name", e)], {
      hk: "1M6rO5"
    }));
  }
};
exports.getFormattedCommunityName = L;
exports.getFormattedCommunityNameWithAlternative = function (e) {
  let {
    jid: t,
    asString: n = false,
    alternativeStringName: r
  } = e;
  const i = L(t, n);
  if (i == null && r) {
    return w(r, !n);
  }
  if (typeof i == "string" && !n) {
    return C.default.createElement(d.EmojiText, {
      text: i
    });
  }
  return i;
};
exports.getFormattedGroupListForCommunity = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  let n = arguments.length > 2 ? arguments[2] : undefined;
  const r = (0, h.unFlattenPairList)(e).map(e => {
    let [r, i] = e;
    const a = k(r, t, n);
    if (a !== "" && a != null) {
      return a;
    } else {
      return i;
    }
  });
  return (0, g.default)(r, t, "group_list");
};
exports.getFormattedName = G;
exports.getFormattedNameIfExists = k;
exports.getFormattedNames = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  if (!Array.isArray(e)) {
    return G(e, t);
  }
  const n = e.map(e => G(e, t));
  return (0, g.default)(n, t);
};
exports.openCommunity = R;
var i = require("./351053.js");
var a = r(require("./196554.js"));
var o = require("./780549.js");
var s = require("./359198.js");
var l = require("./877171.js");
var u = require("./103440.js");
var c = require("./177938.js");
var d = require("./305521.js");
var p = require("./581354.js");
var f = require("./714574.js");
var _ = r(require("./667845.js"));
var g = r(require("./682026.js"));
var m = require("./114850.js");
var h = require("./628199.js");
var y = require("./428991.js");
var E = require("./625786.js");
var S = require("./390737.js");
var v = r(require("./22368.js"));
var T = require("./571444.js");
var M = require("./965927.js");
var A = r(require("./286816.js"));
var b = require("../vendor/548360.js");
var C = r(require("../vendor/667294.js"));
var P = r(require("./156720.js"));
const O = {
  linkColor: {
    color: "e7al1772"
  },
  communityName: {
    whiteSpace: "le5p0ye3"
  }
};
function I(e, t) {
  return n => {
    if (n) {
      n.preventDefault();
      n.stopPropagation();
    }
    (0, p.findChat)(e, "formatParticipantNames").then(n => {
      if (t === "sibling_group_link") {
        new s.CommunityGroupJourneyEvent({
          action: T.CHAT_FILTER_ACTION_TYPES.GROUP_SYSTEM_MESSAGE_CLICK,
          surface: M.SURFACE_TYPE.CHAT,
          chat: i.ChatCollection.get(e)
        }).commit();
      }
      o.Cmd.openChatFromUnread(n).then(e => {
        if (e) {
          l.ComposeBoxActions.focus(n);
        }
      });
    });
  };
}
function R(e, t) {
  return n => {
    if (n) {
      n.preventDefault();
      n.stopPropagation();
    }
    o.Cmd.openCommunityHome(e, undefined, t);
  };
}
function N(e) {
  const {
    Name: t
  } = require("./21645.js");
  return n => {
    if (n) {
      n.preventDefault();
      n.stopPropagation();
    }
    m.ModalManager.open(C.default.createElement(u.ConfirmPopup, {
      onOK: () => m.ModalManager.close()
    }, b.fbt._("You are no longer a member of the community \"{community}\"", [b.fbt._param("community", C.default.createElement(t, {
      contact: e
    }))], {
      hk: "3of0pz"
    })));
  };
}
function D() {
  S.ToastManager.open(C.default.createElement(E.Toast, {
    msg: b.fbt._("This community no longer exists", null, {
      hk: "2eWR0J"
    })
  }));
}
function w(e, t) {
  if (t) {
    return C.default.createElement(a.default, {
      onClick: D,
      xstyle: O.linkColor
    }, C.default.createElement(d.EmojiText, {
      text: e
    }));
  } else {
    return e;
  }
}
function L(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  const n = c.ContactCollection.get(e.toString());
  if (!n) {
    return null;
  }
  const r = _.default.get(e);
  let i = R(e);
  if (!(r == null ? undefined : r.joinedSubgroups.length)) {
    i = N(n);
  }
  return U(e, t, i);
}
function k(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  let n = arguments.length > 2 ? arguments[2] : undefined;
  if (c.ContactCollection.get(e.toString()) != null) {
    return U(e, t, I(e, n));
  }
  const r = v.default.get(e.toString());
  if (r == null ? undefined : r.subject) {
    return r.subject;
  } else {
    return null;
  }
}
function G(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  let n = arguments.length > 2 ? arguments[2] : undefined;
  return U(e, t, I(e, n));
}
function U(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  let r = arguments.length > 2 ? arguments[2] : undefined;
  const i = c.ContactCollection.gadd(e, {
    silent: true
  });
  const a = t ? undefined : r;
  const {
    Name: o
  } = require("./21645.js");
  if (t || i.id.isLid()) {
    return (0, f.getFormattedUser)(i);
  } else {
    return C.default.createElement(o, {
      contact: i,
      onClick: a
    });
  }
}