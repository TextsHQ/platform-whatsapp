Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeClientRequest = function () {
  return (0, i.mergeClientWellFormedToMixin)((0, r.smax)("iq", {
    id: (0, a.generateId)(),
    type: "get",
    xmlns: "w:p"
  }));
};
var r = require("./758616.js");
var i = require("./503072.js");
var a = require("./716358.js");