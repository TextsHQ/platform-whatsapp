var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CATALOG_EXISTS = exports.BUSINESS_OPEN_STATUS = undefined;
exports.getBusinessOpenState = A;
exports.parseBusinessProfile = exports.isShopBanned = exports.isCompleteBizProfile = exports.hasShop = exports.hasCatalog = exports.goToShop = exports.goToCommerceManager = undefined;
exports.quickReplyHoursStr = function (e) {
  const t = function (e) {
    switch (A(e).status) {
      case M.OPEN_24H:
      case M.OPEN_APPOINTMENT:
      case M.OPEN:
        return true;
      case M.CLOSED:
      case M.CLOSED_TODAY:
      default:
        return false;
    }
  }(e) ? g.fbt._("We're currently *open*", null, {
    hk: "1Skaff"
  }) : g.fbt._("We're currently *closed*", null, {
    hk: "18eiaZ"
  });
  const n = g.fbt._("Our business hours are:", null, {
    hk: "Qljt"
  });
  const r = (0, _.getBusinessHours)(e, true).map(e => `${(0, o.default)(e.day)}: ${e.hours}`).join("\n");
  return [t, n, r].join("\n");
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/506479.js"));
var o = r(require("./817173.js"));
var s = require("./37237.js");
var l = require("./335898.js");
var u = require("./817649.js");
var c = require("./713464.js");
var d = require("./177938.js");
var p = r(require("./524173.js"));
var f = require("./937001.js");
var _ = require("./341463.js");
var g = require("../vendor/548360.js");
const m = ["business_hours", "catalog_status", "structured_address", "profile_options", "address", "legal_entity_details", "fb_page", "ig_professional", "profile_is_linked", "cover_photo", "custom_url", "automated_type", "commands_description", "welcome_message_protocol_mode", "prompts", "commands"];
const h = "catalog_exists";
exports.CATALOG_EXISTS = h;
const y = e => {
  var t;
  return (e == null || (t = e.profile_options) === null || t === undefined ? undefined : t.commerce_experience) === u.COMMERCE_EXPERIENCE_TYPES.CATALOG || (e == null ? undefined : e.catalog_status) === h;
};
exports.hasCatalog = e => {
  var t;
  if (e && e instanceof l.BusinessProfile) {
    return ((t = e.profileOptions) === null || t === undefined ? undefined : t.commerceExperience) === u.COMMERCE_EXPERIENCE_TYPES.CATALOG || e.catalogStatus === h;
  } else {
    return y(e);
  }
};
const E = e => {
  var t;
  var n;
  return (e == null || (t = e.profileOptions) === null || t === undefined ? undefined : t.commerceExperience) === u.COMMERCE_EXPERIENCE_TYPES.SHOP && Boolean(e == null || (n = e.profileOptions) === null || n === undefined ? undefined : n.shopURL);
};
exports.hasShop = E;
exports.isShopBanned = e => {
  var t;
  var n;
  return (e == null || (t = e.profileOptions) === null || t === undefined ? undefined : t.commerceExperience) === u.COMMERCE_EXPERIENCE_TYPES.NONE || E(e) && !!(e == null || (n = e.profileOptions) === null || n === undefined ? undefined : n.isBanned);
};
exports.goToShop = e => {
  var t;
  const n = e == null || (t = e.profileOptions) === null || t === undefined ? undefined : t.shopURL;
  if (n) {
    p.default.open(n);
  }
};
exports.goToCommerceManager = e => {
  var t;
  const n = e == null || (t = e.profileOptions) === null || t === undefined ? undefined : t.commerceManagerURL;
  p.default.open(n || "https://business.facebook.com/commerce_manager/");
};
const S = e => y(e) || f.ServerProps.shopsProductGrid && (e => {
  var t;
  var n;
  return (e == null || (t = e.profile_options) === null || t === undefined ? undefined : t.commerce_experience) === u.COMMERCE_EXPERIENCE_TYPES.SHOP && Boolean(e == null || (n = e.profile_options) === null || n === undefined ? undefined : n.shop_url);
})(e);
const v = e => {
  let {
    email: t,
    landline_number: n,
    mobile_number: r
  } = e;
  const i = {
    email: t
  };
  if (n) {
    i.landlineNumber = n;
  }
  if (r) {
    i.mobileNumber = r;
  }
  return i;
};
const T = e => {
  let {
    entity_name: t,
    entity_type: n,
    is_registered: r,
    entity_type_custom: i,
    customer_care_details: a,
    grievance_officer_details: o
  } = e;
  const s = {
    entityName: t,
    entityType: n,
    isRegistered: r
  };
  if (i) {
    s.entityTypeCustom = i;
  }
  if (a) {
    s.customerCareDetails = (e => {
      let {
        email: t,
        landline_number: n,
        mobile_number: r
      } = e;
      return v({
        email: t,
        landline_number: n,
        mobile_number: r
      });
    })(a);
  }
  if (o) {
    s.grievanceOfficerDetails = (e => {
      let {
        name: t,
        email: n,
        landline_number: r,
        mobile_number: i
      } = e;
      const a = v({
        email: n,
        landline_number: r,
        mobile_number: i
      });
      a.name = t;
      return a;
    })(o);
  }
  return s;
};
exports.parseBusinessProfile = e => {
  let {
    profile: t,
    id: n,
    queryCatalog: r,
    customUrlPaths: o
  } = e;
  if (!t) {
    return {
      id: n
    };
  }
  const {
    business_hours: p,
    catalog_status: f,
    structured_address: _,
    profile_options: g,
    address: h,
    legal_entity_details: y,
    fb_page: E,
    ig_professional: v,
    profile_is_linked: M,
    cover_photo: A,
    custom_url: b,
    automated_type: C,
    commands_description: P,
    welcome_message_protocol_mode: O,
    prompts: I,
    commands: R
  } = t;
  const N = (0, a.default)(t, m);
  const D = {};
  D.businessHours = p ? (e => {
    let {
      config: t,
      timezone: n
    } = e;
    const r = {};
    t.forEach(e => {
      const {
        day_of_week: t,
        mode: n
      } = e;
      if (n === u.BUSINESS_HOUR_MODES.SPECIFIC_HOURS) {
        const {
          open_time: i,
          close_time: a
        } = e;
        if (!r[t]) {
          r[t] = {
            mode: n,
            hours: []
          };
        }
        if (i != null && a != null && r[t].hours) {
          r[t].hours.push([i, a]);
        }
      } else {
        r[t] = {
          mode: n
        };
      }
    });
    return {
      config: r,
      timezone: n
    };
  })(p) : null;
  if (g) {
    D.profileOptions = {};
    D.profileOptions.commerceExperience = g.commerce_experience;
    D.profileOptions.cartEnabled = g.cart_enabled;
    D.profileOptions.directConnection = g.direct_connection;
    if (g.shop_url != null) {
      D.profileOptions.shopURL = g.shop_url;
    }
    if (g.commerce_manager_url != null) {
      D.profileOptions.commerceManagerURL = g.commerce_manager_url;
    }
    if (g.is_banned != null) {
      D.profileOptions.isBanned = g.is_banned;
    }
    if (g.is_profile_edit_disabled != null) {
      D.profileOptions.isProfileEditDisabled = g.is_profile_edit_disabled;
    }
  }
  if (S(t)) {
    D.catalogStatus = f;
    if (r) {
      c.CatalogCollection.findCarouselCatalog(n).then(e => {
        const t = Array.isArray(e) ? e[0] : e;
        const r = d.ContactCollection.get(n);
        if (r) {
          r.businessCatalog = t;
        }
      }).catch(() => __LOG__(3)`Store:BusinessProfile:missing catalog`);
    }
  }
  if (_) {
    D.structuredAddress = {
      streetAddress: _.street_address,
      cityId: _.city_id,
      localizedCityName: _.localized_city_name,
      zipCode: _.zip_code
    };
  } else {
    D.address = h || null;
  }
  if (y) {
    D.legalEntityDetails = T(y);
  }
  if (E) {
    D.fbPage = {
      displayName: E.display_name,
      likes: E.likes,
      id: E.id
    };
  }
  if (v) {
    D.igProfessional = {
      handle: v.ig_handle,
      followers: v.followers
    };
  }
  if (M != null) {
    D.isProfileLinked = !!M;
  }
  if (o != null) {
    D.customUrlPaths = o;
  }
  if (b != null) {
    D.customUrlPath = b;
  }
  D.automatedType = C != null ? C : s.BizBotAutomatedType.UNKNOWN;
  D.welcomeMsgProtocolMode = O != null ? O : s.BotWelcomeMsgProtocolModeType.NONE;
  D.commandsDescription = P != null ? P : null;
  D.prompts = I != null ? I : null;
  D.commands = R != null ? R : null;
  D.coverPhoto = A != null ? {
    id: A.id,
    url: A.url
  } : null;
  return (0, i.default)((0, i.default)((0, i.default)((0, i.default)({}, l.DEFAULTS), N), D), {}, {
    id: n
  });
};
exports.isCompleteBizProfile = e => {
  var t;
  var n;
  return e.address != null && e.description != null && ((t = e.businessHours) === null || t === undefined ? undefined : t.config) != null && Object.keys(e.businessHours.config).length !== 0 && e.email != null && ((n = e.website) === null || n === undefined ? undefined : n.length) !== 0;
};
const M = {
  OPEN: "open",
  CLOSED: "closed",
  OPEN_TODAY: "open_today",
  CLOSED_TODAY: "closed_today",
  OPEN_APPOINTMENT: "open_appointment",
  OPEN_24H: "open_24h",
  UNKNOWN: "unknown"
};
function A(e, t) {
  if (e.timezone == null) {
    return {
      status: "unknown"
    };
  }
  const n = t || new Date();
  const r = new Date(n.toLocaleString("en-US", {
    timeZone: e.timezone
  }));
  const i = (n.getTime() - r.getTime()) / 1000 / 60;
  const a = e.config[u.DAYS_OF_WEEK[n.getDay()]];
  if (!a) {
    return {
      status: M.CLOSED_TODAY
    };
  }
  switch (a.mode) {
    case u.BUSINESS_HOUR_MODES.OPEN_24H:
      if (a) {
        return {
          status: M.OPEN_24H
        };
      }
      break;
    case u.BUSINESS_HOUR_MODES.APPOINTMENT_ONLY:
      if (a) {
        return {
          status: M.OPEN_APPOINTMENT
        };
      }
      break;
    case u.BUSINESS_HOUR_MODES.SPECIFIC_HOURS:
      {
        var o;
        var s;
        const e = n.getHours() * 60 + n.getMinutes();
        if (((o = a.hours) === null || o === undefined ? undefined : o.length) === 1) {
          const t = a.hours[0][0];
          const n = a.hours[0][1];
          if (e >= t && e <= n) {
            return {
              status: M.OPEN,
              openUntil: b(i + n)
            };
          } else if (e <= t) {
            return {
              status: M.CLOSED,
              opensAt: b(i + t)
            };
          } else {
            return {
              status: M.CLOSED
            };
          }
        }
        if (((s = a.hours) === null || s === undefined ? undefined : s.length) === 2) {
          const t = a.hours[0][0];
          const n = a.hours[0][1];
          const r = a.hours[1][0];
          const o = a.hours[1][1];
          if (e >= t && e <= n) {
            return {
              status: M.OPEN,
              openUntil: b(i + n),
              additionalOpen: b(i + r),
              additionalClose: b(i + o)
            };
          } else if (e < t) {
            return {
              status: M.CLOSED,
              opensAt: b(i + t),
              additionalOpen: b(i + r),
              additionalClose: b(i + o)
            };
          } else if (e >= r && e <= o) {
            return {
              status: M.OPEN,
              openUntil: b(i + o)
            };
          } else if (e < r) {
            return {
              status: M.CLOSED,
              opensAt: b(i + r)
            };
          } else {
            return {
              status: M.CLOSED
            };
          }
        }
        break;
      }
  }
  return {
    status: "unknown"
  };
}
function b(e) {
  const t = new Date();
  const n = Math.floor(e / 60);
  t.setHours(n);
  t.setMinutes(e % 60);
  t.setSeconds(0);
  return t;
}
exports.BUSINESS_OPEN_STATUS = M;