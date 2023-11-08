var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactCell = undefined;
exports.getContactCellContent = m;
var r = a(require("./203528.js"));
var o = a(require("./717304.js"));
var l = require("../app/660666.js");
var i = require("./270457.js");
var u = require("../app/714574.js");
var s = require("../app/21645.js");
var c = require("../app/491805.js");
var d = require("./219753.js");
var f = a(require("../vendor/667294.js"));
var p = require("../app/379811.js");
function m(e) {
  const t = f.default.createElement(s.Name, {
    contact: e,
    showBusinessCheckmark: (0, l.getShowBusinessCheckmarkAsPrimary)(e),
    showLabel: true,
    titlify: true,
    ellipsify: true,
    you: true
  });
  let n;
  n = (0, c.receiveTextStatusEnabled)() ? f.default.createElement(o.default, {
    contactId: e.id
  }) : f.default.createElement(r.default, {
    id: e.id
  });
  return {
    primary: t,
    secondary: n,
    detailLeft: f.default.createElement(i.ContactImage, {
      contact: e,
      size: 40
    })
  };
}
exports.ContactCell = e => {
  let {
    contact: t
  } = e;
  (0, p.useContactValues)(t.id, [l.getId, u.getPendingAction, l.getNotifyName, l.getName, l.getShowBusinessCheckmarkAsPrimary, l.getIsGroup, u.getFormattedPhone, l.getVerifiedName, l.getVerifiedLevel]);
  if ((0, l.getIsGroup)(t)) {
    return null;
  }
  const n = m(t);
  return f.default.createElement(d.WDSCell, n);
};