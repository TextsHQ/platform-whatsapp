Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t
  } = e;
  const n = t.displayName();
  const u = t.get("author");
  const s = t.recipients || [];
  const c = (0, o.getFormattedNames)(s, true);
  const d = s[0];
  const f = d ? a.ContactCollection.get(d) : undefined;
  const p = f ? (0, l.getFormattedName)(f) : d ? (0, i.widToFormattedUser)(d) : "";
  return (0, r.formatAddNotification)({
    author: u,
    authorClickable: n,
    subject: d,
    subjectClickable: p,
    participantsClickable: c
  });
};
var a = require("../app/177938.js");
var r = require("../app/979406.js");
var o = require("../app/436355.js");
var l = require("../app/714574.js");
var i = require("../app/931019.js");