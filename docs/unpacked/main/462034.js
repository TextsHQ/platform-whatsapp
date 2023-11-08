var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    disabled: t
  } = e;
  const n = (0, s.useModelValues)(e.mute, ["isMuted"]);
  const a = (0, s.useModelValues)(e.chat, ["archive"]);
  const d = (0, s.useModelValues)(e.settings, ["showArchiveV2"]);
  const f = e.onMute.bind(null, !n.isMuted);
  let p;
  let m;
  let h;
  let g;
  if (a.archive && (0, o.archiveV2Supported)() && d.showArchiveV2) {
    p = c;
    g = i.fbt._("Unmute notifications", null, {
      hk: "4aQGmY"
    });
    m = r.ThemeOptions.MUTED;
    h = i.fbt._("Archived chats are muted", null, {
      hk: "31ZVD"
    });
  } else {
    g = n.isMuted ? i.fbt._("Unmute notifications", null, {
      hk: "4aQGmY"
    }) : i.fbt._("Mute notifications", null, {
      hk: "2Fm15X"
    });
    p = f;
  }
  return u.default.createElement(r.DropdownItem, {
    testid: "mi-mute",
    action: p,
    disabled: t,
    theme: m,
    tooltip: h,
    tooltipPosition: l.PopoverPosition.Start
  }, g);
};
var r = require("../app/675085.js");
var o = require("../app/97858.js");
var l = require("../app/258290.js");
var i = require("../vendor/548360.js");
var u = a(require("../vendor/667294.js"));
var s = require("../app/655241.js");
const c = () => {};