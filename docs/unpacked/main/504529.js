var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChevronButtonWithFadedBackground = function (e) {
  let {
    type: t,
    onClick: n,
    theme: a,
    displayType: s
  } = e;
  return l.default.createElement("div", {
    className: (0, i.default)(t === r.ButtonType.Prev && u.backgroundPrev, t === r.ButtonType.Next && u.backgroundNext)
  }, l.default.createElement("div", {
    className: (0, i.default)(u.btnContainer, t === r.ButtonType.Prev && (o.default.isRTL() ? u.btnContainerBackgroundPrevRTL : u.btnContainerBackgroundPrev), t === r.ButtonType.Next && (o.default.isRTL() ? u.btnContainerBackgroundNextRTL : u.btnContainerBackgroundNext))
  }, l.default.createElement(r.ChevronButton, {
    type: t,
    onClick: n,
    theme: a,
    displayType: s
  })));
};
var r = require("./305989.js");
var o = a(require("../app/932325.js"));
var l = a(require("../vendor/667294.js"));
var i = a(require("../app/156720.js"));
const u = {
  backgroundNext: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    end: "ebjesfe0",
    height: "b82nm36r",
    width: "hj839x6e"
  },
  backgroundPrev: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    height: "b82nm36r",
    width: "hj839x6e",
    zIndex: "mb8var44"
  },
  btnContainer: {
    position: "g0rxnol2",
    height: "b82nm36r",
    width: "hj839x6e",
    borderTopStartRadius: "i3rsbmdh",
    borderTopEndRadius: "d6h2ibm4",
    borderBottomEndRadius: "rh5xaqwm",
    borderBottomStartRadius: "e6tbvuqx"
  },
  btnContainerBackgroundPrev: {
    backgroundImage: "mbrbt8gs"
  },
  btnContainerBackgroundNext: {
    backgroundImage: "apslyhqx"
  },
  btnContainerBackgroundPrevRTL: {
    backgroundImage: "apslyhqx"
  },
  btnContainerBackgroundNextRTL: {
    backgroundImage: "mbrbt8gs"
  }
};