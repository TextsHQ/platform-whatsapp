Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatRevokedMsg = function (e) {
  var t;
  switch ((t = e.subtype) !== null && t !== undefined ? t : "sender") {
    case "sender":
      if ((0, a.getIsSentByMe)(e)) {
        return s.fbt._("You deleted this message", null, {
          hk: "E892D"
        });
      } else {
        return s.fbt._("This message was deleted", null, {
          hk: "19qvYd"
        });
      }
    case "admin":
      if ((0, a.getIsNewsletterMsg)(e)) {
        return function (e) {
          if ((0, a.getIsRevokedByMe)(e)) {
            return s.fbt._("You deleted this update", null, {
              hk: "3xmNkr"
            });
          }
          return s.fbt._("This update was deleted", null, {
            hk: "s6uld"
          });
        }(e);
      } else if ((0, a.getIsRevokedByMe)(e)) {
        return s.fbt._("You deleted this message as admin", null, {
          hk: "oMWPt"
        });
      } else if (e.revokeSender == null) {
        return s.fbt._("This message was deleted by an admin", null, {
          hk: "28rFSm"
        });
      } else {
        return s.fbt._("This message was deleted by admin {admin}", [s.fbt._param("admin", l(e.revokeSender))], {
          hk: "3Nu81j"
        });
      }
  }
};
var r = require("./177938.js");
var i = require("./714574.js");
var a = require("./787742.js");
var o = require("./931019.js");
var s = require("../vendor/548360.js");
const l = e => {
  const t = r.ContactCollection.get(e);
  if (t) {
    return t.shortName || t.name || (0, i.getDisplayName)(t);
  } else {
    return (0, o.widToFormattedUser)(e);
  }
};