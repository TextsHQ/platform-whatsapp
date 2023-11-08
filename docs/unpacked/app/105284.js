var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNameString = p;
exports.getNameStringFromNames = f;
exports.mergeVcards = function (e) {
  if (e.length === 0) {
    throw (0, c.default)("No vcards provided");
  }
  if (e.length === 1) {
    return e[0];
  }
  return {
    displayName: p(e),
    vcard: e.map(e => e.vcard).join("\n"),
    isMultiVcard: true
  };
};
exports.vcardGetOrganizationString = function (e) {
  var t;
  var n;
  const r = (t = e.ORG) === null || t === undefined ? undefined : t[0];
  const i = (n = e.TITLE) === null || n === undefined ? undefined : n[0];
  if (r && Array.isArray(r.value) && r.value.length > 0) {
    var a;
    let e = null;
    if (i == null ? undefined : i.value) {
      e = `${i.value}`.trim();
    }
    const [t, ...n] = r.value;
    n.push(t);
    const o = n.map(e => (0, s.isString)(e) ? e.trim() : "").filter(e => e.length).join(l.default.t(54));
    return (e || "") + (((a = e) === null || a === undefined ? undefined : a.length) && o.length ? " - " : "") + o;
  }
  return "";
};
exports.vcardGetType = function (e) {
  const t = {
    jabber: d.fbt._("Jabber", null, {
      hk: "3usmYV"
    }),
    "skype-username": d.fbt._("Skype", null, {
      hk: "1eW8ty"
    }),
    skype: d.fbt._("Skype", null, {
      hk: "1eW8ty"
    }),
    msn: d.fbt._("Windows Live", null, {
      hk: "Cb3b1"
    }),
    aim: d.fbt._("AIM", null, {
      hk: "1dlOP"
    }),
    yahoo: d.fbt._("Yahoo", null, {
      hk: "1VtQI7"
    }),
    icq: d.fbt._("ICQ", null, {
      hk: "M7uX3"
    }),
    "wa-biz-description": d.fbt._("Description", null, {
      hk: "3NFP7B"
    }),
    [u.WA_BIZ_NAME]: d.fbt._("Business Name", null, {
      hk: "MfcFj"
    })
  };
  let n = e.properties["X-ABLabel"] || t[e.type.toLowerCase()];
  if (n != null && n !== "") {
    return (0, u.clean)(String(n));
  }
  const r = {
    TEL: [[["cell"], d.fbt._("Mobile", null, {
      hk: "1ciHPV"
    })], [["iphone"], d.fbt._("iPhone", null, {
      hk: "2MkuaG"
    })], [["main"], d.fbt._("Main", null, {
      hk: "46Vh7G"
    })], [["home", "fax"], d.fbt._("Home Fax", null, {
      hk: "34IobZ"
    })], [["work", "fax"], d.fbt._("Work Fax", null, {
      hk: "4FNmsW"
    })], [["home"], d.fbt._("Home", null, {
      hk: "2zkVn1"
    })], [["work"], d.fbt._("Work", null, {
      hk: "3QfW2u"
    })], [["pager"], d.fbt._("Pager", null, {
      hk: "20r5VT"
    })], [[], d.fbt._("Home", null, {
      hk: "2zkVn1"
    })]],
    EMAIL: [[["home"], d.fbt._("Home", null, {
      hk: "2zkVn1"
    })], [["work"], d.fbt._("Work", null, {
      hk: "3QfW2u"
    })], [["internet"], d.fbt._("Email", null, {
      hk: "2Vzd0N"
    })]],
    URL: [[["home"], d.fbt._("Home", null, {
      hk: "2zkVn1"
    })], [["work"], d.fbt._("Work", null, {
      hk: "3QfW2u"
    })]],
    ADR: [[["home"], d.fbt._("Home", null, {
      hk: "2zkVn1"
    })], [["work"], d.fbt._("Work", null, {
      hk: "3QfW2u"
    })]]
  };
  n = e.type;
  (0, o.default)(r, t => {
    if (t) {
      const [r, o] = t;
      if ((0, a.default)(r, (0, i.default)(e.properties.type, e => e.toLowerCase())).length === 0) {
        n = o;
        return false;
      }
    }
  });
  return n;
};
var i = r(require("../vendor/435161.js"));
var a = r(require("../vendor/291966.js"));
var o = r(require("../vendor/402525.js"));
var s = require("./724976.js");
var l = r(require("./932325.js"));
var u = require("./517660.js");
var c = r(require("./556869.js"));
var d = require("../vendor/548360.js");
function p(e) {
  return f(e.map(e => e.displayName)).toString();
}
function f(e) {
  const t = e.find(e => !!e);
  if (e.length) {
    if (t) {
      if (e.length === 1) {
        return t;
      } else {
        return d.fbt._({
          "*": "{contactName} and {count} other contacts",
          _1: "{contactName} and 1 other contact"
        }, [d.fbt._plural(e.length - 1, "count"), d.fbt._param("contactName", t)], {
          hk: "2OVrwA"
        });
      }
    } else {
      return d.fbt._({
        "*": "{count} contacts",
        _1: "1 contact"
      }, [d.fbt._plural(e.length, "count")], {
        hk: "13EUBn"
      });
    }
  } else {
    return d.fbt._("No contacts", null, {
      hk: "1p56oN"
    });
  }
}