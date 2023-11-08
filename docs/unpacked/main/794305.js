var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    phoneNumber: t,
    shouldStartSearch: n,
    onLoading: a
  } = e;
  const m = (0, d.useRef)((0, l.queryExistsAndGetChatCached)());
  const [h, g] = (0, d.useState)();
  const [E, v] = (0, d.useState)(false);
  const [_, y] = (0, d.useState)(null);
  const C = e => {
    v(e);
    if (!(a == null)) {
      a(e);
    }
  };
  const b = (0, d.useCallback)(e => {
    if (!l.PHONE_NUMBER_VALIDATION_REGEX.test(t)) {
      return false;
    }
    const a = (0, o.extractDigits)(e);
    const r = (0, o.findCC)(a);
    const i = a.substring(r.length);
    let s = (0, u.isPhoneNumberValid)(Number(r), i);
    if (!s && e.trim()[0] !== "+") {
      const e = (0, o.findCC)((0, c.getMeUser)().user);
      s = (0, u.isPhoneNumberValid)(Number(e), a);
    }
    return !!t && s && n;
  }, [n, t]);
  const M = (0, p.default)((0, r.default)(function* () {
    try {
      y(null);
      if (b(t)) {
        var e;
        var n;
        const a = `${t.trim()[0] === "+" ? "+" : ""}${(0, o.extractDigits)(t)}`;
        if (!Boolean((e = m.current) === null || e === undefined ? undefined : e.isCached(a)) && (C(true), !s.default.online)) {
          throw new i.HttpNetworkError();
        }
        const r = yield (n = m.current) === null || n === undefined ? undefined : n.getOrRun(a);
        g(r);
      } else {
        g(null);
      }
    } catch (e) {
      y(e);
      g(null);
      if (e instanceof i.HttpNetworkError) {
        __LOG__(4, undefined, new Error())` Unable to connect to the internet: ${e}`;
      } else {
        __LOG__(4, undefined, new Error(), true)`Phone number existence check failed with exceptions: ${e}`;
        SEND_LOGS("phoneNumberExistence-unknownContactSearch");
      }
    } finally {
      C(false);
    }
  }));
  (0, f.default)(M, [t]);
  return {
    unknownContactInfo: h,
    loading: E,
    error: _,
    onRetry: M
  };
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/986120.js");
var l = require("./657866.js");
var i = require("../app/791357.js");
var u = require("../app/936327.js");
var s = a(require("../app/99398.js"));
var c = require("../app/459857.js");
var d = require("../vendor/667294.js");
var f = a(require("../app/802145.js"));
var p = a(require("../app/17533.js"));