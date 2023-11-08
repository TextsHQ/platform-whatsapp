var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t, n] = (0, d.useMsgValues)(e.msg.id, [i.getType, i.getIsGif]);
  let a;
  switch (t) {
    case u.MSG_TYPE.VIDEO:
      if (!n) {
        a = s.fbt._("This video is unavailable. Please try again.", null, {
          hk: "10WhNi"
        });
      }
  }
  return c.default.createElement(r.ConfirmPopup, {
    onOK: () => {
      l.ModalManager.close();
    },
    okText: (0, o.default)("OK")
  }, a);
};
var r = require("../app/103440.js");
var o = a(require("../app/395767.js"));
var l = require("../app/114850.js");
var i = require("../app/787742.js");
var u = require("../app/373070.js");
var s = require("../vendor/548360.js");
var c = a(require("../vendor/667294.js"));
var d = require("./871210.js");