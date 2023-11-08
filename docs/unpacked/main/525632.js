var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let t = null;
  let n = 0;
  try {
    var a;
    const r = e.length;
    for (; n < r;) {
      const a = e.codePointAt(n);
      const r = a > 65535 ? 2 : 1;
      if (E(t) && (a < 48 || a > 57)) {
        if (a === 45) {
          if (t.phoneNumberParenthesesDepth === 0) {
            if (t.phoneNumberLastSignificantCodePoint === 45) {
              _(t, n);
            } else if (t.phoneNumber.length === 0) {
              m(t);
            } else {
              c(t);
            }
          } else {
            m(t);
          }
        } else if (a === 46) {
          if (t.phoneNumberParenthesesDepth === 0) {
            if (t.phoneNumberLastSignificantCodePoint === 46) {
              _(t, n);
            } else if (t.phoneNumber.length === 0) {
              m(t);
            } else {
              s(t);
            }
          } else {
            m(t);
          }
        } else if (a === 40) ;else if (a === 41) {
          y(t, n);
        } else if (a === 32) {
          if (t.phoneNumberLastSignificantCodePoint === 32) {
            m(t);
          } else if (!v(t, n)) {
            d(t);
          }
        } else {
          _(t, n);
        }
      }
      switch (a) {
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          if (!E(t)) {
            if (!t) {
              t = i(e);
            }
            p(t, n);
          }
          f(t, a);
          break;
        case 43:
          if (!t) {
            t = i(e);
          }
          p(t, n);
          u(t);
          break;
        case 40:
          if (!E(t)) {
            if (!t) {
              t = i(e);
            }
            p(t, n);
          }
          h(t, n);
      }
      n += r;
    }
    if (t && t.openings != null) {
      _(t, e.length);
    }
    if (((a = t) === null || a === undefined ? undefined : a.parsedPhoneNumbers) && t.parsedPhoneNumbers.length > 0) {
      return t.parsedPhoneNumbers.reduce((e, t) => {
        e.push({
          phone: t.matchedText,
          index: t.start
        });
        return e;
      }, []);
    } else {
      return [];
    }
  } catch (e) {
    __LOG__(4, undefined, new Error(), true)`findPhoneNumbers parse error: ${String(e)}`;
    SEND_LOGS("findPhoneNumbers-error");
    return [];
  }
};
var r = a(require("../vendor/288306.js"));
var o = require("../app/986120.js");
var l = require("../app/459857.js");
function i(e) {
  return {
    uniqueId: 0,
    text: e,
    openings: null,
    phoneNumber: "",
    phoneNumberStartsWithPlus: false,
    phoneNumberLastSignificantCodePoint: -1,
    phoneNumberParenthesesDepth: 0,
    phoneNumberLeadingZeroes: 0,
    phoneNumberCurrentlyMatchingLeadingZeroes: true,
    parsedPhoneNumbers: null
  };
}
function u(e) {
  e.phoneNumberStartsWithPlus = true;
}
function s(e) {
  e.phoneNumberLastSignificantCodePoint = 46;
}
function c(e) {
  e.phoneNumberLastSignificantCodePoint = 45;
}
function d(e) {
  e.phoneNumberLastSignificantCodePoint = 32;
}
function f(e, t) {
  e.phoneNumber += String.fromCodePoint(t);
  e.phoneNumberLastSignificantCodePoint = t;
  if (e.phoneNumberCurrentlyMatchingLeadingZeroes) {
    if (t === 48) {
      e.phoneNumberLeadingZeroes++;
    } else {
      e.phoneNumberCurrentlyMatchingLeadingZeroes = false;
    }
  }
}
function p(e, t) {
  if (e.openings == null) {
    e.openings = t;
    e.phoneNumber = "";
    e.phoneNumberStartsWithPlus = false;
    e.phoneNumberLastSignificantCodePoint = -1;
    e.phoneNumberParenthesesDepth = 0;
    e.phoneNumberLeadingZeroes = 0;
    e.phoneNumberCurrentlyMatchingLeadingZeroes = true;
  } else {
    __LOG__(4, undefined, new Error())`Msg formatting: cannot open a style before closing it`;
  }
}
function m(e) {
  if (e.openings != null) {
    e.openings = null;
  } else {
    __LOG__(4, undefined, new Error())`Msg formatting: cannot close a style before opening it`;
  }
}
function h(e, t) {
  if (e.phoneNumberParenthesesDepth !== 1) {
    e.phoneNumberParenthesesDepth++;
    e.phoneNumberLastSignificantCodePoint = -1;
  } else {
    m(e);
  }
}
const g = (0, r.default)(e => (0, o.phoneCC)(e));
function E(e) {
  return e != null && e.openings != null;
}
function v(e, t) {
  const n = function (e, t) {
    if (e.openings == null) {
      return;
    }
    if (e.phoneNumberParenthesesDepth === 1) {
      return null;
    }
    const n = e.phoneNumber.slice(Math.min(2, e.phoneNumberLeadingZeroes));
    if (n.length === 0) {
      return null;
    }
    let a = false;
    let r = n;
    if (e.phoneNumberStartsWithPlus || e.phoneNumberLeadingZeroes >= 2) {
      const e = (0, o.findCC)(n);
      const t = n.slice(e.length);
      a = (0, o.isPotentiallyValid)(e, t);
    } else {
      var i;
      const e = ((i = (0, l.getMaybeMeUser)()) === null || i === undefined ? undefined : i.toString()) || "";
      const t = g(e);
      a = (0, o.isPotentiallyValid)(t, n);
      if (a) {
        r = `${t}${n}`;
      } else {
        const e = (0, o.findCC)(n);
        if (e === t) {
          const t = n.slice(e.length);
          a = (0, o.isPotentiallyValid)(e, t);
        }
      }
    }
    if (a) {
      const n = e.openings;
      if (n == null) {
        return null;
      }
      const a = e.phoneNumberLastSignificantCodePoint === 45 || e.phoneNumberLastSignificantCodePoint === 46 ? t - 1 : t;
      const o = e.text.slice(n, a);
      return {
        start: n,
        end: a,
        id: "phone" + ++e.uniqueId,
        phoneNumber: r,
        matchedText: o
      };
    }
    return null;
  }(e, t);
  return n != null && (m(e), e.parsedPhoneNumbers ? e.parsedPhoneNumbers.push(n) : e.parsedPhoneNumbers = [n], true);
}
function _(e, t) {
  if (!v(e, t)) {
    m(e);
  }
}
function y(e, t) {
  if (e.phoneNumberParenthesesDepth === 0 || e.phoneNumberLastSignificantCodePoint < 48 || e.phoneNumberLastSignificantCodePoint > 57) {
    m(e);
  } else {
    e.phoneNumberParenthesesDepth--;
    e.phoneNumberLastSignificantCodePoint = -1;
  }
}