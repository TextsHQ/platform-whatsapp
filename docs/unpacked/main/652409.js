var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = function (e) {
    const t = l.default.filesize((0, c.getMaxFilesSizeServerProp)());
    switch (e) {
      case s.MSG_TYPE.AUDIO:
      case s.MSG_TYPE.PTT:
        return d.fbt._("This audio is too large. You can send audio up to {maxSize}.", [d.fbt._param("maxSize", l.default.filesize((0, i.getUploadLimit)("audio")))], {
          hk: "3hqoTb"
        });
      case s.MSG_TYPE.IMAGE:
        return d.fbt._("This image is too large. You can send images up to {maxSize}.", [d.fbt._param("maxSize", l.default.filesize((0, i.getUploadLimit)("image")))], {
          hk: "38Ldbm"
        });
      case s.MSG_TYPE.VIDEO:
        return d.fbt._("This video is too large. You can send videos up to {maxSize}.", [d.fbt._param("maxSize", l.default.filesize((0, i.getUploadLimit)("video")))], {
          hk: "3nEHJE"
        });
      case s.MSG_TYPE.DOCUMENT:
        return d.fbt._("This document is too large. You can send documents up to {maxSize}.", [d.fbt._param("maxSize", t)], {
          hk: "3Efjis"
        });
      case s.MSG_TYPE.UNKNOWN:
      default:
        return d.fbt._("This file is too large. You can send files up to {maxSize}.", [d.fbt._param("maxSize", t)], {
          hk: "3vnF2a"
        });
    }
  }(e.mediaType);
  return f.default.createElement(o.default, {
    displayType: e.displayType,
    onClick: p.bind(null, t),
    tooltip: t,
    ariaLabel: t
  });
};
var r = require("../app/103440.js");
var o = a(require("./761926.js"));
var l = a(require("../app/932325.js"));
var i = require("../app/75421.js");
var u = require("../app/114850.js");
var s = require("../app/373070.js");
var c = require("../app/937001.js");
var d = require("../vendor/548360.js");
var f = a(require("../vendor/667294.js"));
function p(e) {
  u.ModalManager.open(f.default.createElement(r.ConfirmPopup, {
    onOK: () => u.ModalManager.close()
  }, e));
}