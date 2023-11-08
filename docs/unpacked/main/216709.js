var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactMenuItem = function (e) {
  let {
    contact: t,
    onSelect: n
  } = e;
  return i.default.createElement(l.ActionMenuItem, (0, r.default)({
    optionId: `contact-${t.id.toString()}`,
    onSelect: n
  }, (0, o.getContactCellContent)(t)));
};
var r = a(require("../vendor/967154.js"));
var o = require("./871511.js");
var l = require("./752104.js");
var i = a(require("../vendor/667294.js"));