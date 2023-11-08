var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    displayType: t,
    msg: n,
    mediaData: a
  } = e;
  const [m, h, g] = (0, p.useMsgValues)(n.id, [u.getIsFailed, u.getType, o.getIsUnsentMedia]);
  const {
    mediaStage: E,
    type: v
  } = (0, f.useModelValues)(a, ["mediaStage", "type"]);
  if (h === s.MSG_TYPE.REVOKED) {
    return null;
  }
  if (E === i.MEDIA_DATA_STAGE.ERROR_TOO_LARGE) {
    return d.default.createElement(l.default, {
      displayType: t,
      mediaType: v
    });
  }
  if (g && (E === i.MEDIA_DATA_STAGE.ERROR_MISSING || E === i.MEDIA_DATA_STAGE.ERROR_UNSUPPORTED)) {
    const e = c.fbt._("Couldn't send this message.", null, {
      hk: "1aBrnE"
    });
    return d.default.createElement(r.default, {
      displayType: t,
      tooltip: e,
      ariaLabel: e
    });
  }
  if (m) {
    if (E === i.MEDIA_DATA_STAGE.ERROR_MISSING) {
      const e = c.fbt._("Could not forward this message because the file is no longer on your phone.", null, {
        hk: "1g3L8P"
      });
      return d.default.createElement(r.default, {
        displayType: t,
        tooltip: e,
        ariaLabel: e
      });
    }
    if (h === s.MSG_TYPE.PTT && E === i.MEDIA_DATA_STAGE.PREPARING) {
      const e = c.fbt._("Couldn't send this Voice Message.", null, {
        hk: "3qlnwF"
      });
      return d.default.createElement(r.default, {
        displayType: t,
        tooltip: e,
        ariaLabel: e
      });
    }
    const e = c.fbt._("Couldn't send this message.", null, {
      hk: "1aBrnE"
    });
    return d.default.createElement(r.default, {
      displayType: t,
      tooltip: e,
      ariaLabel: e
    });
  }
  return null;
};
var r = a(require("./761926.js"));
var o = require("../app/163755.js");
var l = a(require("./652409.js"));
var i = require("../app/172259.js");
var u = require("../app/787742.js");
var s = require("../app/373070.js");
var c = require("../vendor/548360.js");
var d = a(require("../vendor/667294.js"));
var f = require("../app/655241.js");
var p = require("./871210.js");