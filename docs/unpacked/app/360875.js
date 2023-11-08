Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGetRequest = function (e) {
  const {
    pictureType: t,
    pictureId: n,
    pictureQuery: c,
    pictureInvite: d,
    addRequestMixinArgs: p
  } = e;
  return (0, l.mergeGetIQMixin)((0, s.mergeBaseGetIQMixin)((0, i.smax)("iq", null, (0, a.optionalMerge)(o.mergeAddRequestMixin, (0, i.smax)("picture", {
    type: (0, r.OPTIONAL)(u.CUSTOM_STRING, t),
    id: (0, r.OPTIONAL)(u.CUSTOM_STRING, n),
    query: (0, r.OPTIONAL)(u.CUSTOM_STRING, c),
    invite: (0, r.OPTIONAL)(u.CUSTOM_STRING, d)
  }), p))), e);
};
var r = require("./93864.js");
var i = require("./758616.js");
var a = require("./770006.js");
var o = require("./531306.js");
var s = require("./78515.js");
var l = require("./956160.js");
var u = require("./716358.js");