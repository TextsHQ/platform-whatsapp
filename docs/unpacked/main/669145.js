var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageActionButtonsRow = function (e) {
  let {
    isOutgoingMsg: t,
    isMsgGallery: n,
    hasReaction: a,
    messageActionButtons: s
  } = e;
  const c = (t ? s.reverse() : s).map((e, t) => e && !n ? i.default.createElement(o.default, {
    xstyle: u.buttonWrapper,
    key: t
  }, e) : e);
  let d = "end";
  if (!(n || t)) {
    d = "start";
  }
  return i.default.createElement(r.FlexRow, {
    justify: d,
    align: "center",
    className: l.default.messageActionButtonsContainer
  }, c);
};
var r = require("../app/690495.js");
var o = a(require("../app/469733.js"));
var l = a(require("./409468.js"));
var i = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
const u = {
  buttonWrapper: {
    height: "rqm6ogl5",
    paddingTop: "i5tg98hk",
    paddingEnd: "folpon7g",
    paddingBottom: "przvwfww",
    paddingStart: "snweb893"
  }
};