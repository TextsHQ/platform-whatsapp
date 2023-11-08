var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orphanFromDbRow = function (e) {
  return (0, i.default)((0, i.default)({}, e), {}, {
    sender: e.sender == null ? null : (0, o.createUserWid)(e.sender),
    parsedMsgPayload: (0, a.messageFromDbRow)(e.parsedMsgPayload)
  });
};
var i = r(require("../vendor/81109.js"));
var a = require("./907539.js");
var o = require("./669050.js");