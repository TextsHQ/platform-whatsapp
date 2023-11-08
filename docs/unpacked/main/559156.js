var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PollMessageComponentView = function (e) {
  let {
    msg: t,
    displayAuthor: n,
    trusted: a,
    displayType: l,
    quotedMsg: y,
    optionsToResults: j
  } = e;
  const G = D.fbt._("View votes", null, {
    hk: "1TiaW"
  });
  const U = (0, N.useElectronCompatibleStyles)().pollQuestionTextSize;
  const [H, V, q, Y, z, K] = (0, x.useMsgValues)(t.id, o.default, [C.getPollName, C.getPollInvalidated, C.getPollSelectableOptionsCount, C.getT, C.getIsSentByMe, C.getIsNewsletterMsg]);
  const Q = !K && (0, T.isPollResultDetailsViewEnabled)();
  const X = (0, I.useMemo)(() => {
    const e = [];
    for (const [t, n] of j) {
      if (n.isVotedForByMe) {
        e.push(t.localId);
      }
    }
    return new Set(e);
  }, [j]);
  const Z = (0, I.useMemo)(() => {
    for (const e of j.values()) {
      if (e.votes.length > 0) {
        return false;
      }
    }
    return true;
  }, [j]);
  const J = H.slice(0, 500);
  const $ = (0, L.default)();
  const ee = () => {
    i.DrawerManager.openDrawerRight(I.default.createElement(S.DetailsFlow, {
      msg: t,
      key: t.id.toString()
    }), {
      transition: "slide-left",
      uim: $,
      focusType: p.FocusType.TABBABLE,
      noFocus: true
    });
  };
  const te = (0, I.useMemo)(() => (0, P.getOptionWithCount)(j), [j]);
  return I.default.createElement(_.default, {
    msg: t,
    displayType: l,
    displayAuthor: n,
    hideMeta: true,
    ariaLabel: F(J, Y, t.displayName(), z, te),
    useFixedWidth: t.isDynamicReplyButtonsMsg,
    testid: "poll-bubble"
  }, I.default.createElement(g.default, {
    contact: t.senderObj,
    msg: t.unsafe()
  }, !t.ctwaContext && I.default.createElement(r.SuspiciousLabel, {
    msg: t.unsafe(),
    displayType: l
  }), y, I.default.createElement(v.default, {
    msg: t.unsafe(),
    spacer: false,
    "data-id": t.id
  }, I.default.createElement("div", {
    className: (0, R.default)(O.uiPadding.all4)
  }, I.default.createElement(s.ExpandableText, {
    text: J,
    textLimit: (0, C.getInitialPageSize)(t)
  }, e => {
    let {
      textLimit: n
    } = e;
    const r = (0, d.Conversation)({
      mentions: t.mentionMap(),
      groupMentions: t.groupMentionMap(),
      links: (0, b.getLinksFromMsg)(t.unsafe(), n),
      phoneNumbers: (0, M.getPhoneNumbersFromMsg)(t.unsafe(), n),
      selectable: true,
      trusted: a === true,
      fromMe: z,
      fromChatWid: t.id.remote
    });
    return I.default.createElement(u.EmojiText, {
      text: J,
      dirMismatch: (0, f.getRtl)(t) !== m.default.isRTL(),
      direction: (0, f.getDir)(t),
      inferLinesDirection: true,
      formatters: r,
      selectable: true,
      textLimit: n,
      xstyle: [B.pollName, U]
    });
  }))), q != null && I.default.createElement(W, {
    selectableOptionsCount: q
  }), I.default.createElement("div", {
    className: (0, R.default)(O.uiPadding.all4)
  }, I.default.createElement(w.Options, {
    msg: t,
    options: j,
    checkedOptionLocalIds: X,
    trusted: a,
    isPollInvalid: V,
    onOptionToggle: e => {
      const n = new Set(X);
      if (n.has(e)) {
        n.delete(e);
      } else {
        if (q === 1) {
          n.clear();
        }
        n.add(e);
      }
      (0, A.sendVote)(t, n);
    },
    onDetailImageClick: ee
  }), V && I.default.createElement(c.FlexRow, {
    xstyle: [B.invalidPollWarning, z ? B.invalidPollWarningBorderSender : B.invalidPollWarningBorderReceiver, O.uiMargin.bottom4, O.uiPadding.vert8, O.uiPadding.start14, O.uiPadding.end12]
  }, I.default.createElement(k.WarningIcon, {
    width: 19,
    height: 17,
    iconXstyle: B.warningIcon
  }), I.default.createElement("span", {
    className: (0, R.default)(B.outOfDate, O.uiMargin.start8)
  }, D.fbt._("You can only see votes made before you left.", null, {
    hk: "4EZqvn"
  }))), I.default.createElement(c.FlexRow, {
    justify: "end"
  }, I.default.createElement(E.Meta, {
    msg: t
  }))), Q && I.default.createElement(h.BubbleActions, {
    theme: z ? h.BubbleActionsTheme.POLL_SENDER : h.BubbleActionsTheme.POLL_RECEIVER,
    items: [{
      label: G,
      title: G,
      onClick: ee,
      disabled: Z,
      testid: "poll-view-votes"
    }]
  })));
};
var r = require("./751349.js");
var o = a(require("./761323.js"));
var l = require("../app/63014.js");
var i = require("../app/900316.js");
var u = require("../app/305521.js");
var s = require("./999649.js");
var c = require("../app/690495.js");
var d = require("../app/675886.js");
var f = require("../app/163755.js");
var p = require("../app/299950.js");
var m = a(require("../app/932325.js"));
var h = require("./20493.js");
var g = a(require("./902538.js"));
var E = require("./789955.js");
var v = a(require("./19805.js"));
var _ = a(require("./398685.js"));
var y = require("../app/97858.js");
var C = require("../app/787742.js");
var b = require("../app/44118.js");
var M = require("./527530.js");
var S = require("./233240.js");
var T = require("../app/671598.js");
var w = require("./527816.js");
var A = require("./702414.js");
var P = require("./620283.js");
var O = require("../app/676345.js");
var k = require("../app/344575.js");
var D = require("../vendor/548360.js");
var I = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = j(t);
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
var R = a(require("../app/156720.js"));
var N = require("../app/140455.js");
var x = require("./871210.js");
var L = a(require("../app/321201.js"));
function j(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (j = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const B = {
  pollName: {
    fontWeight: "sy6s5v3r",
    fontSize: "enbbiyaj"
  },
  invalidPollWarning: {
    alignItems: "gndfcl4n",
    borderTopStartRadius: "ho9ovbg7",
    borderTopEndRadius: "tcg15ap9",
    borderBottomEndRadius: "c5wy1lv0",
    borderBottomStartRadius: "bqysl6j9",
    borderTop: "gb6ia7xa",
    borderEnd: "digrcooj",
    borderBottom: "flf84san",
    borderStart: "dic3qptu"
  },
  invalidPollWarningBorderReceiver: {
    borderTopColor: "bw1ke36e",
    borderEndColor: "cot8q50n",
    borderBottomColor: "j8n3wzpc",
    borderStartColor: "rgg6xpk2"
  },
  invalidPollWarningBorderSender: {
    borderTopColor: "pxy3fndx",
    borderEndColor: "emi0afa8",
    borderBottomColor: "ronchshs",
    borderStartColor: "lq03rdsz"
  },
  outOfDate: {
    fontSize: "dsh4tgtl",
    lineHeight: "q5jc98e4"
  },
  warningIcon: {
    color: "pahbacuu"
  }
};
function F(e, t, n, a, r) {
  const o = (0, y.messageListA11yRedesignEnabled)() ? "" : D.fbt._("Interaction with polls will be available in the next update.", null, {
    hk: "1gTqk6"
  });
  if (a) {
    return D.fbt._("Poll from you {time} {poll-name} Top vote counts: {poll-results}. {no-kb-navigation}", [D.fbt._param("time", l.Clock.timestampStr(t)), D.fbt._param("poll-name", e), D.fbt._param("poll-results", r), D.fbt._param("no-kb-navigation", o)], {
      hk: "4raYlP"
    });
  } else {
    return D.fbt._("Poll from {poll-author-name-not-you} {time} {poll-name} Top vote counts: {poll-results}. {no-kb-navigation}", [D.fbt._param("poll-author-name-not-you", n), D.fbt._param("time", l.Clock.timestampStr(t)), D.fbt._param("poll-name", e), D.fbt._param("poll-results", r), D.fbt._param("no-kb-navigation", o)], {
      hk: "FvnM9"
    });
  }
}
const G = {
  display: "p357zi0d",
  alignItems: "gndfcl4n"
};
const U = {
  fontSize: "dsh4tgtl",
  lineHeight: "q5jc98e4",
  color: "s2bd9hgu"
};
function W(e) {
  let {
    selectableOptionsCount: t
  } = e;
  if ((0, T.isSingleOptionPollsReceivingEnabled)()) {
    return I.default.createElement("div", {
      className: (0, R.default)(G, O.uiPadding.all4)
    }, t === 1 ? I.default.createElement(H, null) : I.default.createElement(V, null), I.default.createElement("span", {
      className: (0, R.default)(U, O.uiPadding.start5)
    }, t === 1 ? D.fbt._("Select one", null, {
      hk: "1a8DzY"
    }) : D.fbt._("Select one or more", null, {
      hk: "1gmK38"
    })));
  } else {
    return null;
  }
}
function H() {
  return I.default.createElement("svg", {
    height: "10",
    viewBox: "0 0 10 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, I.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 10.002C7.76142 10.002 10 7.76338 10 5.00195C10 2.24053 7.76142 0.00195312 5 0.00195312C2.23858 0.00195312 0 2.24053 0 5.00195C0 7.76338 2.23858 10.002 5 10.002ZM7.97775 3.73846L7.22403 3.00113L4.26249 5.96266L2.76249 4.46266L2.02348 5.20167L4.26223 7.45398L7.97775 3.73846Z",
    fill: "var(--poll-selectable-options-icon-hint-color)"
  }));
}
function V() {
  return I.default.createElement("svg", {
    height: "10",
    viewBox: "0 0 19 11",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, I.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.75576 0.926518C7.95661 0.404445 7.00597 0.0996094 5.99219 0.0996094C3.21094 0.0996094 0.910156 2.40039 0.910156 5.18555C0.910156 7.9707 3.21484 10.2715 5.99609 10.2715C7.00967 10.2715 7.95961 9.96677 8.758 9.44489C7.75031 8.42148 7.09728 7.04775 7.01 5.5334L5.73438 7.5293C5.64062 7.67383 5.51953 7.74023 5.37109 7.74023C5.22656 7.74023 5.11328 7.68164 4.98828 7.5332L3.48438 5.70508C3.41406 5.62305 3.375 5.51758 3.375 5.41992C3.375 5.21289 3.53906 5.06055 3.73047 5.06055C3.85547 5.06055 3.96094 5.10742 4.0625 5.23633L5.35547 6.85742L7.1021 4.08022C7.32858 2.86768 7.91988 1.77637 8.75576 0.926518Z",
    fill: "var(--poll-selectable-options-icon-hint-color)"
  }), I.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.1758 5.18555C18.1758 7.9707 15.8711 10.2715 13.0859 10.2715C10.3047 10.2715 8 7.9707 8 5.18555C8 2.40039 10.3008 0.0996094 13.082 0.0996094C15.8672 0.0996094 18.1758 2.40039 18.1758 5.18555ZM12.6133 7.5332C12.7383 7.68164 12.8516 7.74023 12.9961 7.74023C13.1445 7.74023 13.2656 7.67383 13.3594 7.5293L15.9883 3.41602C16.043 3.33008 16.0938 3.22461 16.0938 3.13086C16.0938 2.92383 15.9102 2.79492 15.7227 2.79492C15.6055 2.79492 15.4922 2.86133 15.4102 2.99414L12.9805 6.85742L11.6875 5.23633C11.5859 5.10742 11.4805 5.06055 11.3555 5.06055C11.1641 5.06055 11 5.21289 11 5.41992C11 5.51758 11.0391 5.62305 11.1094 5.70508L12.6133 7.5332Z",
    fill: "var(--poll-selectable-options-icon-hint-color)"
  }));
}