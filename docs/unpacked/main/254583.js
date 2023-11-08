var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  const e = (0, h.useModelValues)((0, l.getHistorySyncProgress)(), ["progress"]);
  return p.default.createElement(r.ConfirmPopup, {
    type: u.ModalTheme.HistorySyncProgress,
    title: p.default.createElement(d.TextHeader, {
      xstyle: g.title
    }, (0, i.SYNCING_OLDER_MESSAGES_MODAL_TITLE)()),
    cancelText: f.fbt._("Learn more", null, {
      hk: "2S4fxr"
    }),
    onOK: () => {
      s.ModalManager.close();
    },
    onCancel: () => {
      window.open((0, o.getMessageHistoryOnLinkedDevicesFAQUrl)());
    }
  }, p.default.createElement(E, {
    progress: e.progress
  }), p.default.createElement(d.TextParagraph, {
    xstyle: g.body
  }, (0, i.SYNCING_OLDER_MESSAGES_MODAL_TEXT)()));
};
var r = require("../app/103440.js");
var o = require("../app/258105.js");
var l = require("./894795.js");
var i = require("../app/631588.js");
var u = require("../app/118612.js");
var s = require("../app/114850.js");
var c = a(require("../app/525481.js"));
var d = require("../app/180519.js");
var f = require("../vendor/548360.js");
var p = a(require("../vendor/667294.js"));
var m = a(require("../app/156720.js"));
var h = require("../app/655241.js");
const g = {
  title: {
    fontWeight: "hnx8ox4h",
    fontSize: "p9fp32ui"
  },
  body: {
    fontWeight: "m1e7cby3",
    fontSize: "enbbiyaj",
    lineHeight: "l85iiqla",
    color: "k35l1n51"
  },
  progressBarContainer: {
    paddingTop: "b7n2qyd4",
    marginBottom: "t4zgqcuo",
    display: "p357zi0d",
    flexDirection: "f8m0rgwh"
  },
  progressBarIndeterminate: {
    animationName: "i8de924n",
    animationDuration: "qw8wxbb9",
    animationIterationCount: "tkmeqcnu",
    backgroundImage: "ikaz7xrh",
    backgroundSize: "iozoqvlu",
    height: "d9lyu8cj"
  },
  percentage: {
    height: "qsxhpkal",
    marginBottom: "du8bjn1j"
  }
};
function E(e) {
  const t = e.progress;
  return p.default.createElement(p.default.Fragment, null, p.default.createElement("div", {
    className: (0, m.default)(g.progressBarContainer)
  }, t == null ? p.default.createElement(v, null) : p.default.createElement(c.default, {
    value: t,
    max: 100
  })), p.default.createElement(d.TextDiv, {
    color: "dark",
    size: "12",
    className: (0, m.default)(g.percentage)
  }, t == null ? "" : (0, i.SYNCING_OLDER_MESSAGES_MODAL_PERCENT)(t)));
}
function v() {
  return p.default.createElement("div", {
    className: (0, m.default)(g.progressBarIndeterminate)
  });
}