var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCoverPhoto = function () {
  return g.apply(this, arguments);
};
exports.editBusinessProfile = function () {
  return f.apply(this, arguments);
};
exports.sendCoverPhoto = function () {
  return _.apply(this, arguments);
};
exports.updateCartEnabled = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./984330.js");
const u = new s.WapParser("businessProfileResponse", e => {
  e.assertTag("iq");
  e.assertFromServer();
});
const c = new s.WapParser("commerceSettingsResponse", e => {
  e.assertTag("iq");
  e.assertFromServer();
  return e.child("commerce_settings").child("cart").attrString("enabled") === "true";
});
function d(e) {
  let {
    note: t,
    timezone: n,
    config: r
  } = e;
  const i = [];
  for (const e in r) {
    const t = r[e];
    const {
      mode: n,
      hours: a
    } = t;
    if (a) {
      for (const [t, r] of a) {
        i.push({
          day_of_week: e,
          mode: n,
          open_time: t,
          close_time: r
        });
      }
    } else {
      i.push({
        day_of_week: e,
        mode: n
      });
    }
  }
  const a = [];
  if (t) {
    a.push((0, o.wap)("business_hours_note", null, t));
  }
  a.push(...i.map(e => (0, o.wap)("business_hours_config", {
    day_of_week: (0, o.CUSTOM_STRING)(e.day_of_week),
    mode: e.mode,
    open_time: e.open_time ? (0, o.CUSTOM_STRING)(e.open_time.toString()) : o.DROP_ATTR,
    close_time: e.close_time ? (0, o.CUSTOM_STRING)(e.close_time.toString()) : o.DROP_ATTR
  })));
  return (0, o.wap)("business_hours", {
    timezone: n ? (0, o.CUSTOM_STRING)(n) : o.DROP_ATTR
  }, a);
}
function p() {
  return (p = (0, i.default)(function* (e) {
    const t = (0, o.wap)("iq", {
      to: o.S_WHATSAPP_NET,
      smax_id: "25",
      xmlns: "fb:thrift_iq",
      id: (0, o.generateId)(),
      type: "set"
    }, (0, o.wap)("commerce_settings", null, (0, o.wap)("cart", {
      enabled: (0, o.CUSTOM_STRING)(e.toString())
    })));
    const n = yield (0, a.deprecatedSendIq)(t, c);
    if (n.success) {
      return n.result;
    }
    throw new l.ServerStatusCodeError(n.errorCode);
  })).apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e) {
    let {
      address: t,
      description: n,
      categories: r,
      email: i,
      website: s,
      businessHours: c
    } = e;
    const p = (0, o.wap)("iq", {
      to: o.S_WHATSAPP_NET,
      xmlns: "w:biz",
      id: (0, o.generateId)(),
      type: "set"
    }, (0, o.wap)("business_profile", {
      v: "3",
      mutation_type: "delta"
    }, t !== undefined ? (0, o.wap)("address", null, t) : null, n !== undefined ? (0, o.wap)("description", null, n) : null, i !== undefined ? (0, o.wap)("email", null, i) : null, s && s.length === 0 ? (0, o.wap)("website", null) : null, s && s.length > 0 ? (0, o.wap)("website", null, s[0]) : null, s && s.length > 1 ? (0, o.wap)("website", null, s[1]) : null, r ? (0, o.wap)("categories", null, r.map(e => (0, o.wap)("category", {
      id: (0, o.CUSTOM_STRING)(e.id)
    }))) : null, c ? d(c) : null));
    const f = yield (0, a.deprecatedSendIq)(p, u);
    if (!f.success) {
      throw new l.ServerStatusCodeError(f.errorCode);
    }
  })).apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* (e, t, n) {
    const r = (0, o.wap)("iq", {
      to: o.S_WHATSAPP_NET,
      xmlns: "w:biz",
      id: (0, o.generateId)(),
      type: "set"
    }, (0, o.wap)("business_profile", {
      v: "3",
      mutation_type: "delta"
    }, (0, o.wap)("cover_photo", {
      op: "update",
      id: (0, o.CUSTOM_STRING)(e.toString()),
      ts: (0, o.CUSTOM_STRING)(t.toString()),
      token: (0, o.CUSTOM_STRING)(n)
    })));
    const i = yield (0, a.deprecatedSendIq)(r, u);
    if (!i.success) {
      throw new l.ServerStatusCodeError(i.errorCode);
    }
  })).apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* (e) {
    const t = (0, o.wap)("iq", {
      to: o.S_WHATSAPP_NET,
      xmlns: "w:biz",
      id: (0, o.generateId)(),
      type: "set"
    }, (0, o.wap)("business_profile", {
      v: "3",
      mutation_type: "delta"
    }, (0, o.wap)("cover_photo", {
      op: "delete",
      id: (0, o.CUSTOM_STRING)(e.toString())
    })));
    const n = yield (0, a.deprecatedSendIq)(t, u);
    if (!n.success) {
      throw new l.ServerStatusCodeError(n.errorCode);
    }
  })).apply(this, arguments);
}