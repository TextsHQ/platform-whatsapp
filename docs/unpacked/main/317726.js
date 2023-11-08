var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreatePollModal = function (e) {
  let {
    chat: t,
    getComposeBoxEditorRef: n
  } = e;
  const a = (0, O.default)(() => {
    var e;
    var t;
    if ((0, g.isPrefillPollQuestionEnabled)() && (e = (t = n()) === null || t === undefined ? undefined : t.getTextContent()) !== null && e !== undefined) {
      return e;
    } else {
      return "";
    }
  }).current;
  const [D, R] = (0, A.useState)(a);
  const [N, j] = (0, A.useState)(false);
  const [B, F] = (0, A.useState)(false);
  const G = (0, g.getMaxPollOptionCount)();
  const [U, W] = (0, A.useState)(() => x([], {
    maxOptionsCount: G
  }));
  const H = (0, A.useRef)(new Map());
  const V = (0, A.useRef)(null);
  const q = (e, t) => {
    W(x(e, {
      maxOptionsCount: G,
      focusedKey: t
    }));
  };
  (0, A.useEffect)(() => {
    (0, h.commitPollOpenCreationModal)(t);
  }, []);
  const Y = (0, A.useRef)();
  const z = (0, A.useRef)(U.length);
  (0, A.useLayoutEffect)(() => {
    const e = V.current;
    const t = z.current;
    const n = U.findIndex(e => e.key === Y.current);
    if (e != null && t < U.length && n === U.length - 2 && U[U.length - 1].name === "") {
      e.scroll({
        top: e.scrollHeight,
        behavior: "smooth"
      });
    }
    z.current = U.length;
  }, [U]);
  const K = U.filter(e => !L(e));
  const Q = (0, A.useMemo)(() => function (e) {
    const t = new Set();
    const n = new Map();
    for (const a of e) {
      const e = (0, T.trim)(a.name);
      if (e !== "") {
        if (t.has(e)) {
          n.set(a.key, w.fbt._("This is already an option", null, {
            hk: "1qZNjV"
          }));
        } else {
          t.add(e);
        }
      }
    }
    return n;
  }(U), [U]);
  const X = (0, T.trim)(D).length > 0 && K.length >= 2 && Q.size === 0;
  (0, A.useEffect)(() => {
    t.isComposingPoll = D.length > 0 || U.some(e => e.name.length > 0);
  }, [t, D, U]);
  (0, k.default)(() => {
    t.isComposingPoll = false;
  });
  const Z = U[G - 2];
  const J = U[G - 1];
  const $ = U.length === G && !L(Z) && L(J);
  const ee = (0, A.useRef)();
  const te = function () {
    let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    m.ModalManager.close();
    if (e) {
      l.AttachmentMenuLogger.logAttachmentCancel(t, l.AttachmentMenuTarget.POLL);
    }
  };
  const ne = D !== "" || U.some(e => e.name !== "");
  const ae = () => {
    if (ne && (0, g.isPollsCancelationPromptEnabled)()) {
      F(true);
    } else {
      te(true);
    }
  };
  const re = () => {
    if (ne && (0, g.isPollsCancelationPromptEnabled)()) {
      if (!B) {
        F(true);
      }
    } else {
      te(true);
    }
  };
  return A.default.createElement(f.HotKeys, {
    handlers: {
      esc: e => {
        e.stopPropagation();
        ae();
      }
    }
  }, A.default.createElement(p.Modal, {
    type: p.ModalTheme.Tower,
    testid: "poll-creation-modal",
    onOverlayClick: re
  }, A.default.createElement(s.default, {
    xstyle: I.drawer
  }, A.default.createElement(d.DrawerHeader, {
    title: w.fbt._("Create Poll", null, {
      hk: "2ScJhR"
    }),
    type: d.DRAWER_HEADER_TYPE.POPUP,
    onCancel: ae
  }), A.default.createElement(c.default, null, A.default.createElement("div", {
    className: (0, P.default)(I.bodyContainer, S.uiPadding.top32)
  }, A.default.createElement("span", {
    className: (0, P.default)(I.sectionTitle)
  }, w.fbt._("Question", null, {
    hk: "rWgSd"
  })), A.default.createElement(y.RichTextField, {
    ref: ee,
    testid: "poll-question-input",
    focusOnMount: true,
    hideFloatingLabel: true,
    showRemaining: true,
    supportsEmoji: true,
    textFormatEnabled: true,
    value: a,
    maxLength: (0, g.getMaxPollNameLength)(),
    maxVisibleLines: 5,
    maxCodeUnits: (0, g.getMaxPollNameLengthForIncomingMessages)(),
    onChange: e => {
      let {
        text: t
      } = e;
      R(t);
    },
    placeholder: w.fbt._("Ask question", null, {
      hk: "19SopM"
    })
  }), A.default.createElement("span", {
    className: (0, P.default)(I.sectionTitle, S.uiMargin.top25)
  }, w.fbt._("Options", null, {
    hk: "x7mkv"
  })), A.default.createElement("div", {
    ref: V,
    className: (0, P.default)(I.optionsContainer, S.uiMargin.top2, S.uiMargin.bottom10)
  }, A.default.createElement(v.OrderableList, {
    items: U,
    onReordered: q,
    renderItem: e => {
      let {
        startDrag: t,
        item: n,
        index: a
      } = e;
      return A.default.createElement(E.OptionInput, {
        initialText: n.name,
        error: Q.get(n.key),
        testid: `poll-option-input-${a}`,
        onTextInputRef: e => {
          if (e) {
            H.current.set(n.key, e);
          } else {
            H.current.delete(n.key);
          }
        },
        onChange: e => {
          const t = [...U];
          t[a] = (0, o.default)((0, o.default)({}, n), {}, {
            name: e
          });
          q(t, n.key);
        },
        onDragThumbMouseDown: e => {
          if (e.button === 0) {
            t(n.key, e);
          }
        },
        onInputFocus: () => {
          Y.current = n.key;
        },
        onInputBlur: () => {
          Y.current = null;
        }
      });
    }
  })), A.default.createElement("h3", {
    className: (0, P.default)(I.maxOptionsHint, !$ && I.maxOptionsHintHidden)
  }, w.fbt._("You can add one more option.", null, {
    hk: "AU2jc"
  })), (0, g.isSingleOptionPollsSendingEnabled)(t.id) && A.default.createElement("div", {
    className: (0, P.default)(I.singleOptionContainer, S.uiPadding.bottom20)
  }, A.default.createElement("label", {
    htmlFor: "polls-single-option-switch",
    className: (0, P.default)(I.singleOptionLabel, S.uiPadding.vert4)
  }, w.fbt._("Allow multiple answers", null, {
    hk: "2pzQ28"
  })), A.default.createElement(M.Switch, {
    id: "polls-single-option-switch",
    checked: !N,
    onChange: () => {
      j(!N);
    },
    testid: "polls-single-option-switch"
  })))), A.default.createElement("div", {
    className: (0, P.default)(I.createPollButtonContainer, S.uiMargin.top30)
  }, A.default.createElement(C.Round, {
    xstyle: I.sendButton,
    theme: C.RoundTheme.DrawerFooter,
    large: true,
    onClick: (0, r.default)(function* () {
      var e;
      te(false);
      yield (0, i.maybeShowBizBot1pTos)(t);
      (0, _.sendPollCreation)({
        poll: {
          name: D,
          options: U.filter(e => !L(e)).map(e => {
            let {
              name: t
            } = e;
            return {
              name: t
            };
          }),
          selectableOptionsCount: N ? 1 : 0
        },
        chat: t,
        quotedMsg: (0, g.arePollsFastFollowsEnabled)() ? t.composeQuotedMsg : null
      });
      t.composeQuotedMsg = null;
      t.setComposeContents({});
      if (!((e = n()) === null || e === undefined)) {
        e.reset();
      }
      l.AttachmentMenuLogger.logAttachmentSend(t, l.AttachmentMenuTarget.POLL);
    }),
    disabled: !X,
    label: w.fbt._("Send", null, {
      hk: "46NU43"
    }),
    testid: "poll-send-button"
  }, A.default.createElement(b.SendIcon, {
    width: 22,
    height: 20,
    directional: true
  }))))), (0, g.isPollsCancelationPromptEnabled)() && B && A.default.createElement(u.ConfirmPopup, {
    theme: u.ConfirmPopupTheme.PollsCancelationPrompt,
    title: w.fbt._("Leave poll?", null, {
      hk: "2MOAbw"
    }),
    okText: w.fbt._("Keep editing", null, {
      hk: "33vPCk"
    }),
    onOK: () => {
      var e;
      F(false);
      if (!((e = ee.current) === null || e === undefined)) {
        e.restoreFocus();
      }
    },
    cancelText: w.fbt._("Leave", null, {
      hk: "2mnhWj"
    }),
    onCancel: () => {
      te(true);
    },
    onOverlayClick: re
  }, w.fbt._("Your edits won't be saved.", null, {
    hk: "1qXad"
  })));
};
exports.formatOptions = x;
var r = a(require("../vendor/348926.js"));
var o = a(require("../vendor/81109.js"));
var l = require("./855637.js");
var i = require("../app/332221.js");
var u = require("../app/103440.js");
var s = a(require("./908081.js"));
var c = a(require("./324093.js"));
var d = require("./626194.js");
var f = require("../app/81644.js");
var p = require("../app/118612.js");
var m = require("../app/114850.js");
var h = require("./561820.js");
var g = require("../app/671598.js");
var E = require("./542125.js");
var v = require("./227420.js");
var _ = require("./809217.js");
var y = require("./202391.js");
var C = require("./435595.js");
var b = require("./848605.js");
var M = require("../main-chunk/137506.js");
var S = require("../app/676345.js");
var T = require("./261580.js");
var w = require("../vendor/548360.js");
var A = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = D(t);
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
var P = a(require("../app/156720.js"));
var O = a(require("../app/637660.js"));
var k = a(require("../app/558532.js"));
function D(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (D = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const I = {
  bodyContainer: {
    boxSizing: "cm280p3y",
    width: "nhajnb67",
    paddingStart: "lyvj5e2u",
    paddingEnd: "l9g3jx6n",
    display: "p357zi0d",
    flexDirection: "f8m0rgwh",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  sectionTitle: {
    fontSize: "iqrewfee",
    fontWeight: "hnx8ox4h"
  },
  maxOptionsHint: {
    fontSize: "ovllcyds"
  },
  maxOptionsHintHidden: {
    visibility: "kojwoqec"
  },
  createPollButtonContainer: {
    width: "ln8gz9je",
    display: "p357zi0d",
    justifyContent: "kcgo1i74",
    height: "db4qzak4",
    backgroundColor: "d72ibw2u"
  },
  optionsContainer: {
    overflowY: "ag5g9lrv"
  },
  drawer: {
    backgroundColor: "lyerox4x"
  },
  sendButton: {
    transform: "m7vo9q63",
    marginEnd: "gqi0zhd6",
    transitionProperty: "fvlmj93r",
    transitionDuration: "p4t1lx4y"
  },
  singleOptionContainer: {
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    width: "ln8gz9je",
    fontSize: "enbbiyaj",
    lineHeight: "erpdyial"
  },
  singleOptionLabel: {
    width: "ln8gz9je",
    display: "l7jjieqr",
    cursor: "ajgl1lbb"
  }
};
let R = 0;
function N() {
  const e = R.toString();
  R++;
  return e;
}
function x(e, t) {
  let {
    maxOptionsCount: n,
    focusedKey: a
  } = t;
  const r = [...e];
  let o;
  for (const e of r) {
    var l;
    if (e.name === "") {
      if (e.key === a) {
        o = e.key;
        break;
      }
      o = (l = o) !== null && l !== undefined ? l : e.key;
    }
  }
  let i = r.length - 1;
  for (; r.length > 2 && i >= 0;) {
    const e = r[i];
    if (e.key !== o && e.name === "") {
      r.splice(i, 1);
    }
    i--;
  }
  let u = Math.max(o == null ? 1 : 0, 2 - r.length);
  for (; u > 0 && r.length < n;) {
    r.push({
      name: "",
      key: N()
    });
    u--;
  }
  return r;
}
function L(e) {
  return (0, T.trim)(e.name) === "";
}