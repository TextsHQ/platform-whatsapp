var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    disabled: t
  } = e;
  const n = (0, i.useModelValues)(e.chat, ["archive"]);
  const a = e.onArchive.bind(null, !n.archive);
  return l.default.createElement(r.DropdownItem, {
    testid: "mi-archive",
    action: a,
    key: "ArchiveMenuItem",
    disabled: t
  }, n.archive ? o.fbt._("Unarchive chat", null, {
    hk: "A6gfT"
  }) : o.fbt._("Archive chat", null, {
    hk: "2ShFzX"
  }));
};
var r = require("../app/675085.js");
var o = require("../vendor/548360.js");
var l = a(require("../vendor/667294.js"));
var i = require("../app/655241.js");