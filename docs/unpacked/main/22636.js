Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAddOnsFromMessages = function (e) {
  return e.reduce((e, t) => {
    o.forEach(n => {
      const a = n(t);
      if (a != null) {
        e[n.key].push(a);
      }
    });
    return e;
  }, {
    reactions: []
  });
};
var a = require("../app/523497.js");
function r(e) {
  return a.NewsletterMessageReactionsCollection.get(e.id);
}
r.key = "reactions";
const o = [r];