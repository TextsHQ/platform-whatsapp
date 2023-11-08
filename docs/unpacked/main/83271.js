var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusV3ProfilePhotoRingWrapper = function (e) {
  const {
    photoSize: t,
    waitIdle: n,
    hideWhenNoUnreadStatuses: a,
    rowSection: d,
    rowIndex: f
  } = e;
  const [p, m, h] = (0, c.useContactValues)(e.contact.id, [r.getId, r.getStatusMute, r.getIsMe]);
  const g = s.default.createElement(o.DetailImage, {
    id: p,
    size: t,
    waitIdle: n,
    ephemeralIcon: "chat-list"
  });
  if (!(0, i.isStatusV3ProfilePhotoRingEnabled)() || m || h) {
    return g;
  }
  const E = l.StatusV3Collection.get(p);
  if (E == null) {
    return g;
  }
  return s.default.createElement("div", null, s.default.createElement(u.StatusV3ProfilePhotoRing, {
    contactStatusV3: E,
    photoSize: t,
    waitIdle: n,
    hideWhenNoUnreadStatuses: a,
    rowSection: d,
    rowIndex: f
  }));
};
var r = require("../app/660666.js");
var o = require("../app/23641.js");
var l = require("../app/657694.js");
var i = require("../app/918715.js");
var u = require("./814539.js");
var s = a(require("../vendor/667294.js"));
var c = require("../app/379811.js");