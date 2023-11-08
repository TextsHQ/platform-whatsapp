Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeBotListRequest = function (e) {
  const {
    botV: t
  } = e;
  return (0, a.mergeBotListIQMixin)((0, i.smax)("iq", null, (0, i.smax)("bot", {
    v: (0, r.OPTIONAL)(o.CUSTOM_STRING, t)
  })));
};
var r = require("./93864.js");
var i = require("./758616.js");
var a = require("./985050.js");
var o = require("./716358.js");