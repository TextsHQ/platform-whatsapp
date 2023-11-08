var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    chat: t,
    undelivered: n,
    canForward: r,
    cannotForward: o
  } = e;
  const s = r.length - n.length;
  const l = o.length + n.length;
  if (s > 0) {
    if (n.length) {
      if (o.length) {
        if (t.isUser) {
          return i.default.t(30, {
            count: l,
            _plural: l,
            contact: t.formattedTitle
          });
        } else {
          return i.default.t(30, {
            count: l,
            contact: t.formattedTitle,
            _plural: l
          });
        }
      } else {
        return a.fbt._({
          "*": "{count} messages couldn't be forwarded because the file is missing.",
          _1: "{count} message couldn't be forwarded because the file is missing."
        }, [a.fbt._plural(l), a.fbt._param("count", i.default.n(l))], {
          hk: "1JTcMZ"
        });
      }
    } else {
      return i.default.t(29, {
        count: l,
        _plural: l,
        contact: t.formattedTitle
      });
    }
  }
  if (n.length) {
    if (o.length) {
      if (t.isUser) {
        return a.fbt._("No messages could be forwarded because the file is missing or {contact} is on a version of WhatsApp that doesn't support them.", [a.fbt._param("contact", t.formattedTitle)], {
          hk: "1dNF4S"
        });
      } else {
        return a.fbt._("No messages could be forwarded because the file is missing or __contact__ is on a version of WhatsApp that doesn't support them.", null, {
          hk: "11bRZ3"
        });
      }
    } else {
      return a.fbt._("No messages could be forwarded because the file is missing.", null, {
        hk: "1dn9Vk"
      });
    }
  }
  if (!t.isUser) {
    return a.fbt._("No messages could be forwarded because __contact__ is on a version of WhatsApp that doesn't support them.", null, {
      hk: "143ncS"
    });
  }
  return a.fbt._("No messages could be forwarded because {contact} is on a version of WhatsApp that doesn't support them.", [a.fbt._param("contact", t.formattedTitle)], {
    hk: "3MTTaw"
  });
};
var i = r(require("./932325.js"));
var a = require("../vendor/548360.js");