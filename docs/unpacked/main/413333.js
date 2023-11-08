var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    disabled: t,
    onPinOrUnpin: n
  } = e;
  const a = (0, i.useModelValues)(e.chat, ["pin"]);
  return l.default.createElement(r.DropdownItem, {
    testid: "mi-pin",
    action: () => {
      n(!a.pin);
    },
    key: "PinChat",
    disabled: t
  }, a.pin != null && a.pin !== 0 ? o.fbt._("Unpin chat", null, {
    hk: "IFB81"
  }) : o.fbt._("Pin chat", null, {
    hk: "Qs6D6"
  }));
};
var r = require("../app/675085.js");
var o = require("../vendor/548360.js");
var l = a(require("../vendor/667294.js"));
var i = require("../app/655241.js");