var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionRow = function (e) {
  let {
    msg: t,
    option: n,
    result: a,
    index: v,
    checked: _,
    selectable: y,
    trusted: C,
    links: b,
    onOptionToggle: M,
    onDetailImageClick: S
  } = e;
  const {
    name: T,
    localId: w
  } = n;
  const {
    votes: A,
    count: P
  } = a;
  const O = `${t.id.toString()}-option-${w}`;
  const k = (0, g.useElectronCompatibleStyles)().textSize;
  const D = (0, s.getIsSentByMe)(t) ? "polls_sender" : "polls_receiver";
  const I = (0, s.getIsSentByMe)(t);
  const R = (0, i.Conversation)({
    links: [],
    phoneNumbers: [],
    selectable: y,
    trusted: C === true,
    fromMe: I
  });
  const N = p.fbt._({
    "*": "{option} {votes} votes",
    _1: "{option} 1 vote"
  }, [p.fbt._plural(P, "votes"), p.fbt._param("option", T)], {
    hk: "3eO5Cu"
  });
  return m.default.createElement("div", {
    className: (0, h.default)(E.optionRowContainer, d.uiPadding.vert12)
  }, m.default.createElement("div", {
    className: (0, h.default)(E.checkBoxContainer, d.uiMargin.start1, d.uiMargin.end10)
  }, m.default.createElement(r.CheckBox, {
    checked: _,
    id: O,
    disabled: !y,
    ariaLabel: N,
    theme: I ? r.CheckboxTheme.POLLS_SENDER : r.CheckboxTheme.POLLS_RECEIVER,
    onChange: () => {
      M(w);
    },
    testid: `poll-option-${v}`
  })), m.default.createElement("div", {
    className: (0, h.default)(E.rightContainer)
  }, m.default.createElement("div", {
    className: (0, h.default)(E.top)
  }, m.default.createElement("label", {
    htmlFor: O,
    className: (0, h.default)(E.optionName, k, !y && E.disabledPollLabel)
  }, m.default.createElement(l.EmojiText, {
    text: T,
    selectable: true,
    formatters: R
  })), m.default.createElement("div", {
    className: (0, h.default)(E.votersContainer, d.uiMargin.start10)
  }, m.default.createElement(f.default, {
    tabIndex: -1,
    className: (0, h.default)(E.votersButton, d.uiMargin.startAuto),
    onClick: S
  }, A[0] && m.default.createElement("div", {
    className: (0, h.default)(E.firstVoter)
  }, m.default.createElement(o.DetailImage, {
    id: A[0].senderObj.id,
    size: 18,
    theme: D
  })), A[1] && m.default.createElement("div", {
    className: (0, h.default)(E.secondVoter)
  }, m.default.createElement(o.DetailImage, {
    id: A[1].senderObj.id,
    size: 18,
    theme: D
  })), m.default.createElement("div", {
    className: (0, h.default)(E.voteCountContainer, d.uiMargin.start5)
  }, m.default.createElement("span", {
    className: (0, h.default)(E.voteCount)
  }, u.default.d(P)))))), m.default.createElement(c.OptionBar, {
    result: a,
    isPollSentByMe: I
  })));
};
var r = require("./468926.js");
var o = require("../app/23641.js");
var l = require("../app/305521.js");
var i = require("../app/675886.js");
var u = a(require("../app/932325.js"));
var s = require("../app/787742.js");
var c = require("./62876.js");
var d = require("../app/676345.js");
var f = a(require("../app/625903.js"));
var p = require("../vendor/548360.js");
var m = a(require("../vendor/667294.js"));
var h = a(require("../app/156720.js"));
var g = require("../app/140455.js");
const E = {
  optionRowContainer: {
    width: "ln8gz9je",
    display: "p357zi0d",
    alignItems: "gndfcl4n"
  },
  checkBoxContainer: {
    height: "ppled2lx",
    alignSelf: "ex3gcxaf"
  },
  rightContainer: {
    width: "ln8gz9je",
    height: "ppled2lx",
    wordBreak: "cw3vfol9"
  },
  top: {
    display: "p357zi0d",
    minHeight: "g4oj0cdv"
  },
  optionName: {
    width: "ln8gz9je",
    cursor: "ajgl1lbb",
    overflowY: "r7fjleex"
  },
  voteCountContainer: {
    textAlign: "e65innqk",
    minWidth: "h3jhcnxg"
  },
  voteCount: {
    fontSize: "dsh4tgtl"
  },
  votersContainer: {
    minWidth: "km15ofqp"
  },
  votersButton: {
    display: "p357zi0d",
    justifyContent: "kcgo1i74"
  },
  firstVoter: {
    zIndex: "b9fczbqn"
  },
  secondVoter: {
    marginStart: "h35p8r1c"
  },
  disabledPollLabel: {
    cursor: "bx7g2weo"
  }
};