var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FAQ_BASE_URL = undefined;
exports.getCommunityNotAvailableFaqUrl = function () {
  return o("community-no-longer-available");
};
exports.getGroupInviteGrowthLockedFaqUrl = function () {
  return o("invite-via-link-unavailable");
};
var i = r(require("./932325.js"));
const a = "https://faq.whatsapp.com";
function o(e) {
  return `${a}/cxt/?entrypointid=${e}&platform=web&lang=${i.default.getLocale()}`;
}
exports.FAQ_BASE_URL = a;