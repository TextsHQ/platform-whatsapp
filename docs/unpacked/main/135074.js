var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, n) {
  if (n) {
    return i.fbt._("You shared your phone number. Click to learn more.", null, {
      hk: "3PnAgh"
    });
  }
  const a = r.ContactCollection.gadd(e);
  const u = (0, o.getIsMyContact)(a) ? (0, l.getFormattedName)(a) : (0, l.getFormattedPhone)(a);
  return i.fbt._("{contact-name} shared their phone number. Click to learn more.", [i.fbt._param("contact-name", u)], {
    hk: "2t7YLW"
  });
};
var r = require("../app/177938.js");
var o = require("../app/660666.js");
var l = require("../app/714574.js");
var i = require("../vendor/548360.js");
a(require("../vendor/667294.js"));