var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBusinessHours = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  const {
    config: n
  } = e;
  const r = new Date().getDay();
  const a = i.DAYS_OF_WEEK.map((e, a) => {
    const o = (r + a) % i.DAYS_OF_WEEK.length;
    const s = i.DAYS_OF_WEEK[o];
    return {
      day: l(o),
      hours: u(n[s], t).toString(),
      first: a === 0
    };
  });
  return a;
};
exports.getBusinessHoursForEdit = function (e) {
  const t = e == null ? {} : e.config;
  const {
    note: n,
    timezone: r
  } = e || {};
  let o;
  const u = i.DAYS_OF_WEEK.map((e, n) => {
    const r = t[e];
    const i = l(n);
    let s;
    if (r) {
      o = r.mode;
      if (r.hours) {
        s = r.hours.map(e => {
          let [t, n] = e;
          return [(0, a.minutesToTime)(t), (0, a.minutesToTime)(n)];
        });
      }
    }
    return {
      dayName: i,
      dayKey: e,
      closed: !r,
      hours: s
    };
  });
  let c;
  {
    const e = s.default.weekdays(true, 0);
    const t = s.default.weekdays().indexOf(e);
    const n = u.splice(t);
    c = [...n, ...u];
  }
  return {
    mode: o,
    days: c,
    timezone: r,
    note: n
  };
};
exports.getWebsiteLink = function (e) {
  return `https://l.wl.co/l?u=${encodeURIComponent(e)}`;
};
var i = require("./817649.js");
var a = require("./360398.js");
var o = require("../vendor/548360.js");
var s = r(require("../vendor/730381.js"));
function l(e) {
  return s.default.weekdays(e);
}
function u(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  switch (e == null ? undefined : e.mode) {
    case i.BUSINESS_HOUR_MODES.SPECIFIC_HOURS:
      if (t) {
        return d(e == null ? undefined : e.hours);
      } else {
        return c(e == null ? undefined : e.hours);
      }
    case i.BUSINESS_HOUR_MODES.APPOINTMENT_ONLY:
      return o.fbt._("By appointment only", null, {
        hk: "e1vew"
      });
    case i.BUSINESS_HOUR_MODES.OPEN_24H:
      return o.fbt._("Open 24 hours", null, {
        hk: "1AlfF5"
      });
    default:
      return o.fbt._("Closed", null, {
        hk: "3IRgct"
      });
  }
}
function c(e) {
  if (e) {
    return e.map(e => e.map(a.minutesToTime).join(" - ")).join("\n");
  } else {
    return "";
  }
}
function d(e) {
  if ((e == null ? undefined : e.length) === 1) {
    return e[0].map(a.minutesToTime).join(" - ");
  }
  if ((e == null ? undefined : e.length) === 2) {
    const t = (0, a.minutesToTime)(e[0][0]);
    const n = (0, a.minutesToTime)(e[0][1]);
    const r = (0, a.minutesToTime)(e[1][0]);
    const i = (0, a.minutesToTime)(e[1][1]);
    return o.fbt._("{openTime} - {closeTime} and {additionalOpenTime} - {additionalCloseTime}", [o.fbt._param("openTime", t), o.fbt._param("closeTime", n), o.fbt._param("additionalOpenTime", r), o.fbt._param("additionalCloseTime", i)], {
      hk: "MyQHy"
    });
  }
  return "";
}