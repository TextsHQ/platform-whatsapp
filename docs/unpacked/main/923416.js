Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  (0, a.useEffect)(() => {}, []);
  const t = null;
  (0, r.useListener)(t, "change:archive", e => {});
  (0, r.useListener)(t, "change:isReadOnly", e => {});
  (0, r.useListener)(t, "change:hasUnread", e => {});
  (0, r.useListener)(t, "change:mute.isMuted", e => {});
  (0, r.useListener)(t, "change:pin", e => {});
};
var a = require("../vendor/667294.js");
var r = require("../app/808446.js");