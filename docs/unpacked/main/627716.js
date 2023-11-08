var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  (0, u.useModelValues)(e.mute, ["isMuted"]);
  const t = (0, u.useModelValues)(e.groupMetadata, ["participants", "id"]);
  const n = l.default.createElement("span", {
    role: "button",
    onClick: () => {
      (0, r.handleMsgAdmin)(t, o.fbt._("Message admin", null, {
        hk: "Bfaqs"
      }));
    },
    className: (0, i.default)(s)
  }, o.fbt._("admins", null, {
    hk: "2HQmrC"
  }));
  return l.default.createElement("span", {
    className: (0, i.default)(c)
  }, o.fbt._("Only {admins} can send messages", [o.fbt._param("admins", n)], {
    hk: "3RYttw"
  }));
};
var r = require("./387304.js");
var o = require("../vendor/548360.js");
var l = a(require("../vendor/667294.js"));
var i = a(require("../app/156720.js"));
var u = require("../app/655241.js");
const s = {
  color: "o0rubyzf"
};
const c = {
  whiteSpace: "bbv8nyr4"
};