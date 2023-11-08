var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, l.useRef)(true);
  const [n, a] = (0, l.useState)([]);
  const [u, s] = (0, l.useState)(false);
  (0, i.useListener)(o.NewsletterMessageReactionsCollection, "add change remove reset", () => {
    s(!u);
  });
  (0, l.useEffect)(() => {
    (0, r.default)(function* () {
      const t = yield Promise.all(e.map(e => o.NewsletterMessageReactionsCollection.find(e.toString()).catch(() => null)));
      a(t.filter(Boolean));
    })().catch(() => {});
  }, [u]);
  return [n, t.current];
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/523497.js");
var l = require("../vendor/667294.js");
var i = require("../app/808446.js");