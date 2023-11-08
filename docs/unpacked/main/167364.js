var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    parentMsg: t
  } = e;
  const n = (0, p.useAggregated)(o.CommentCollection.byParent, t.id);
  if (n.length <= 0) {
    return null;
  }
  return d.default.createElement("button", {
    onClick: h
  }, d.default.createElement(r.default, null, d.default.createElement("div", {
    className: (0, f.default)([m.container, s.uiPadding.horiz2])
  }, d.default.createElement(u.ReplyIcon, {
    iconXstyle: m.icon,
    xstyle: [s.uiMargin.top1, s.uiMargin.end3],
    width: 15,
    height: 15,
    displayInline: true,
    directional: true
  }), c.fbt._({
    "*": "{count} replies",
    _1: "1 reply"
  }, [c.fbt._plural(n.length, "count")], {
    hk: "42QhEh"
  }))));
};
var r = a(require("./349759.js"));
var o = require("./113116.js");
var l = require("../app/103440.js");
var i = require("../app/114850.js");
var u = require("./173090.js");
var s = require("../app/676345.js");
var c = require("../vendor/548360.js");
var d = a(require("../vendor/667294.js"));
var f = a(require("../app/156720.js"));
var p = require("./980014.js");
const m = {
  container: {
    fontSize: "f8jlpxt4",
    color: "ce5kru2g"
  },
  icon: {
    color: "ce5kru2g"
  }
};
const h = () => {
  i.ModalManager.open(d.default.createElement(l.ConfirmPopup, {
    onOK: () => i.ModalManager.close()
  }, c.fbt._("Viewing replies are currently not supported on WhatsApp Web. You can view them on your phone.", null, {
    hk: "2JLiJc"
  })));
};