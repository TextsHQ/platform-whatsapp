Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewsletterProducerDisclosureId = function () {
  if (l()) {
    return parseInt((0, a.getNewsletterProducerNux)(), 10);
  } else {
    return parseInt((0, a.getNewsletterProducerTos)(), 10);
  }
};
exports.hasAcceptedNewsletterTos = l;
var a = require("../app/73225.js");
var r = require("../app/87429.js");
var o = require("../app/967910.js");
function l() {
  const e = o.UserDisclosureCollection.get((0, a.getNewsletterConsumerTos)());
  const t = o.UserDisclosureCollection.get((0, a.getNewsletterProducerTos)());
  return ((e == null ? undefined : e.accepted) || (t == null ? undefined : t.accepted)) === true || r.TosManager.getState((0, a.getNewsletterConsumerTos)()) === "ACCEPTED" || r.TosManager.getState((0, a.getNewsletterProducerTos)()) === "ACCEPTED";
}