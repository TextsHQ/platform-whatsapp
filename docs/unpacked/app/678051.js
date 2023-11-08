Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGetBlockListRequest = function (e) {
  const {
    itemArgs: t
  } = e;
  return (0, i.smax)("iq", {
    to: a.S_WHATSAPP_NET,
    xmlns: "blocklist",
    type: "get",
    id: (0, a.generateId)()
  }, (0, r.OPTIONAL_CHILD)(o, t));
};
exports.makeGetBlockListRequestItem = o;
var r = require("./974339.js");
var i = require("./758616.js");
var a = require("./716358.js");
function o(e) {
  const {
    itemDhash: t
  } = e;
  return (0, i.smax)("item", {
    dhash: (0, a.CUSTOM_STRING)(t)
  });
}