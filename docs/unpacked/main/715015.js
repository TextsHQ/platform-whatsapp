var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    chat: t,
    showFullDescription: n = false,
    showCreate: a = false
  } = e;
  const u = (0, o.richCommunityDescriptionEnabled)() ? l.fbt._("What's this community for? It's helpful to add rules for your members.", null, {
    hk: "21kwB1"
  }) : l.fbt._("Add community description", null, {
    hk: "3ZDKQz"
  });
  return i.default.createElement(r.default, {
    chat: t,
    showFullDescription: n,
    editRestrictionText: l.fbt._("Only admins can edit this community's info", null, {
      hk: "2ddKAP"
    }),
    testid: "community-home-drawer-description-title-input",
    containerTestId: "community-home-drawer-description",
    emptyValuePlaceholder: u,
    showCreate: a
  });
};
var r = a(require("./707655.js"));
var o = require("../app/174834.js");
var l = require("../vendor/548360.js");
var i = a(require("../vendor/667294.js"));