var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t,
    displayType: n
  } = e;
  const [a, w, A, P, O] = (0, b.useMsgValues)(e.msg.id, [f.getIsSentByMe, f.getIsGroupMsg, s.getSenderObj, f.getSubtype, f.getType]);
  const k = (0, s.getChat)(t.unsafe());
  const D = function () {
    var e = (0, r.default)(function* () {
      const e = (0, u.getViewOnceScreenshotProtectionUrl)();
      const t = O === p.MSG_TYPE.IMAGE ? E.VO_MESSAGE_TYPE.PHOTO : E.VO_MESSAGE_TYPE.VIDEO;
      const n = k.isGroup;
      const a = yield (0, o.getChatThreadID)(k.id.toJid());
      new h.ViewOnceScreenshotActionsWamEvent({
        isAGroup: n,
        threadId: a,
        voMessageType: t,
        voSsAction: v.VO_SS_ACTION.PLACEHOLDER_MESSAGE_LEARN_MORE_TAP
      }).commit();
      (0, i.openExternalLink)(e);
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const I = _.fbt._("You received a view once message. For added privacy, you can only open it on your phone. {=m2}", [_.fbt._implicitParam("=m2", y.default.createElement(l.default, {
    onClick: () => {
      D();
    }
  }, _.fbt._("Learn more", null, {
    hk: "YpcU3"
  })))], {
    hk: "2LoGjd"
  });
  return y.default.createElement(d.default, {
    msg: (0, m.unproxy)(t),
    displayAuthor: true,
    displayType: n
  }, y.default.createElement("div", {
    className: (0, C.default)(M)
  }, y.default.createElement("div", {
    className: (0, C.default)(S)
  }, y.default.createElement(g.ViewOnceSunsetIcon, null)), y.default.createElement("div", {
    className: (0, C.default)(T)
  }, y.default.createElement(c.default, {
    msg: t.unsafe(),
    theme: "placeholder"
  }, I))));
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/698867.js");
var l = a(require("../app/196554.js"));
var i = require("../app/753233.js");
var u = require("../app/258105.js");
var s = require("../app/163755.js");
var c = a(require("./19805.js"));
var d = a(require("./398685.js"));
var f = require("../app/787742.js");
var p = require("../app/373070.js");
var m = require("../app/163139.js");
var h = require("./25694.js");
var g = require("./530525.js");
var E = require("./230862.js");
var v = require("./18831.js");
var _ = require("../vendor/548360.js");
var y = a(require("../vendor/667294.js"));
var C = a(require("../app/156720.js"));
var b = require("./871210.js");
const M = {
  display: "p357zi0d",
  flexDirection: "sap93d0t",
  alignItems: "gndfcl4n",
  overflowX: "gfz4du6o",
  overflowY: "r7fjleex",
  fontSize: "ovllcyds",
  fontStyle: "h432zind",
  lineHeight: "g2xi8p6r",
  wordWrap: "b6f1x6w7",
  position: "g0rxnol2"
};
const S = {
  flex: "kk3akd72",
  marginTop: "g1eqewly",
  marginEnd: "bugiwsl0",
  marginBottom: "j4enbv94",
  marginStart: "svoq16ka"
};
const T = {
  marginTop: "g1eqewly",
  marginBottom: "j4enbv94"
};