Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toNewsletterJidOrThrow = function (e) {
  a(e);
  return (0, r.toNewsletterJid)(e);
};
exports.validateNewsletterJidOrThrow = a;
var r = require("./418987.js");
var i = require("./287256.js");
function a(e) {
  if (!((0, r.validateNewsletterJid)(e) != null)) {
    __LOG__(4, undefined, new Error())`${e} is not a valid newsletter JID`;
    throw new i.UnexpectedNonNewsletterJidError();
  }
}