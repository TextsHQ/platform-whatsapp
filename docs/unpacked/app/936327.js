var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanPhoneNumberInputValue = u;
exports.formatPhoneNumberInput = function (e) {
  const {
    countryCodeIso: t,
    phoneNumberWithoutCountryCode: n
  } = e;
  if (t == null) {
    return s(n);
  }
  const r = a.default[t];
  const i = (0, o.compileCountryRegexes)(String(r));
  if (i == null) {
    return null;
  }
  const {
    phoneNumberWithoutCountryCode: c
  } = u(`${a.default[t]}${n}`);
  const d = function (e) {
    const t = e.lengths;
    if (typeof t == "number") {
      return [t];
    }
    return t.sort((e, t) => e - t);
  }(i);
  const p = Math.max(...d);
  if (c.length > p) {
    return s(c);
  }
  const f = d.filter(e => e >= c.length).map(e => {
    return (t = c) + "_".repeat(e - t.length);
    var t;
  });
  for (const e of i.formats) {
    const t = e.testAndFormat(c);
    if (t != null) {
      return {
        formattedInputValue: t,
        placeholder: ""
      };
    }
    for (const t of f) {
      const n = e.testAndFormat(t);
      if (n != null) {
        return l({
          phoneNumberWithoutCountryCode: c,
          formattedPaddedNumber: n
        });
      }
    }
  }
  return s(c);
};
exports.getCountryCodeIso = c;
exports.getFullFormattedInputValue = function (e, t, n) {
  if (t == null) {
    return `${e ? "+" : ""}${n}`;
  }
  return `+${t} ${n}`;
};
exports.isPhoneNumberValid = function (e, t) {
  const n = (0, o.compileCountryRegexes)(String(e));
  if (n == null) {
    return false;
  }
  return n.formats.some(e => e.testAndFormat(t) != null);
};
var i = r(require("./647628.js"));
var a = r(require("./144202.js"));
var o = require("./986120.js");
function s(e) {
  return {
    formattedInputValue: e,
    placeholder: ""
  };
}
function l(e) {
  const {
    phoneNumberWithoutCountryCode: t,
    formattedPaddedNumber: n
  } = e;
  if (t === "") {
    return {
      formattedInputValue: "",
      placeholder: n
    };
  }
  const r = Array.from(n.matchAll(/\d/g)).pop().index + 1;
  return {
    formattedInputValue: n.substr(0, r),
    placeholder: n.substr(r)
  };
}
function u(e) {
  const t = e.replaceAll(/[^\d]/g, "");
  const n = c(t);
  let r = t;
  if (n != null) {
    const e = a.default[n];
    r = r.replace(new RegExp(`^${e}`), "");
  }
  return {
    countryCodeIso: n,
    phoneNumberWithoutCountryCode: r,
    fullRawPhoneNumber: t
  };
}
function c(e) {
  const t = (0, o.findCC)(e);
  return i.default[parseInt(t, 10)];
}