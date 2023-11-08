var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, n) {
  const r = (0, i.getFormattedName)(e, !n);
  const s = t[0];
  if ((0, a.systemMessageActionTextStylingEnabled)()) {
    return o.fbt._("{suggestion-owner} suggested the group \"{suggested-group-name}\"", [o.fbt._param("suggestion-owner", r), o.fbt._param("suggested-group-name", s)], {
      hk: "4Eh4Wk"
    });
  } else {
    return o.fbt._("{suggestion-owner} suggested the group \"{suggested-group-name}\". Click to approve or reject.", [o.fbt._param("suggestion-owner", r), o.fbt._param("suggested-group-name", s)], {
      hk: "LnUFd"
    });
  }
};
var i = require("./436355.js");
var a = require("./108590.js");
var o = require("../vendor/548360.js");
r(require("../vendor/667294.js"));