var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  var n;
  var r;
  var l;
  const u = e.maybeChild("address");
  const c = u ? u.contentString() : undefined;
  let d;
  const p = e.maybeChild("description");
  if (p) {
    d = p.contentString();
  }
  const f = e.maybeChild("email");
  const _ = f ? f.contentString() : undefined;
  const g = e.maybeChild("latitude");
  const m = g ? parseFloat(g.contentString()) : undefined;
  const h = e.maybeChild("longitude");
  const y = h ? parseFloat(h.contentString()) : undefined;
  const E = e.maybeChild("vertical");
  let S;
  if (E) {
    const e = E.maybeAttrString("canonical");
    const t = E.hasContent() ? E.contentString() : undefined;
    S = {
      name: t,
      canonical: e
    };
  }
  let v = [];
  e.forEachChildWithTag("website", e => {
    v.push(e.contentString());
  });
  const T = [];
  const M = e.maybeChild("categories");
  if (M) {
    M.forEachChildWithTag("category", e => {
      const t = e.attrString("id");
      T.push({
        id: t,
        localized_display_name: e.contentString()
      });
    });
  }
  let A;
  const b = e.maybeChild("business_hours");
  if (b) {
    const e = b.maybeAttrString("timezone");
    const t = [];
    b.forEachChildWithTag("business_hours_config", e => {
      t.push({
        day_of_week: e.attrString("day_of_week"),
        mode: e.attrString("mode"),
        open_time: e.hasAttr("open_time") ? parseInt(e.attrString("open_time"), 10) : 0,
        close_time: e.hasAttr("close_time") ? parseInt(e.attrString("close_time"), 10) : 0
      });
    });
    A = {
      config: t,
      timezone: e
    };
  }
  let C;
  const P = e.maybeChild("profile_options");
  if (P) {
    C = {};
    const e = P.maybeChild("commerce_experience");
    var O;
    if (e) {
      C.commerce_experience = (O = o.COMMERCE_EXPERIENCE_TYPES.cast(e.contentString())) !== null && O !== undefined ? O : o.COMMERCE_EXPERIENCE_TYPES.NONE;
    }
    const t = P.maybeChild("cart_enabled");
    if (t) {
      C.cart_enabled = t.contentString() === "true";
    }
    const n = P.maybeChild("shop_url");
    if (n) {
      C.shop_url = n.contentString();
    }
    const r = P.maybeChild("commerce_manager_url");
    if (r) {
      C.commerce_manager_url = r.contentString();
    }
    const i = P.maybeChild("is_banned");
    if (i) {
      C.is_banned = i.contentString() === "true";
    }
    const a = P.maybeChild("direct_connection");
    if (a) {
      C.direct_connection = a.contentString() === "true";
    }
    const s = P.maybeChild("is_profile_edit_disabled");
    if (s) {
      C.is_profile_edit_disabled = s.contentString() === "true";
    }
  }
  const I = e.maybeChild("direct_connection");
  let R;
  if (I) {
    const e = I.maybeChild("default_postcode");
    R = {
      enabled: I.maybeAttrString("enabled") === "true",
      defaultPostcode: e ? {
        code: e.attrString("code"),
        locationName: e.attrString("location_name")
      } : undefined
    };
  }
  const N = e.maybeChild("catalog_status");
  const D = N ? N.attrString("status") : undefined;
  let w;
  let L = {};
  let k = {};
  let G = false;
  const U = e.maybeChild("linked_accounts");
  if (U) {
    G = true;
    const e = U.maybeChild("fb_page");
    if (e) {
      const t = e.maybeChild("display_name");
      const n = e.maybeChild("likes");
      L = {
        displayName: t == null ? undefined : t.contentString(),
        likes: n == null ? undefined : n.contentString(),
        id: e.maybeAttrString("id")
      };
    }
    const t = U.maybeChild("ig_professional");
    if (t) {
      const e = t.maybeChild("ig_handle");
      const n = t.maybeChild("followers");
      k = {
        handle: e == null ? undefined : e.contentString(),
        followers: n == null ? undefined : n.contentString()
      };
    }
  }
  const x = e.maybeChild("cover_photo");
  const B = x ? {
    id: x.attrString("id"),
    url: new URL(x.contentString())
  } : undefined;
  if ((0, i.isCustomURLViaBizProfileEnabled)()) {
    const t = e.maybeChild("custom_url");
    if (t) {
      w = t == null ? undefined : t.contentString();
    }
  }
  const F = a.BizBotAutomatedType.cast((t = e.maybeChild("automated_type")) === null || t === undefined ? undefined : t.contentString());
  const j = a.BotWelcomeMsgProtocolModeType.cast((n = e.maybeChild("welcome_message_protocol_mode")) === null || n === undefined ? undefined : n.contentString());
  let Y;
  const K = e.maybeChild("prompts");
  if (K) {
    Y = function (e) {
      const t = [];
      e.forEachChildWithTag("prompt", e => {
        var n;
        var r;
        const i = e.maybeChild("emoji");
        const a = (n = i == null ? undefined : i.contentString()) !== null && n !== undefined ? n : "";
        const o = e.maybeChild("text");
        const s = (r = o == null ? undefined : o.contentString()) !== null && r !== undefined ? r : "";
        t.push({
          emoji: a,
          text: s
        });
      });
      return t;
    }(K);
  }
  let W;
  let V = (r = e.maybeChild("commands")) === null || r === undefined || (l = r.maybeChild("description")) === null || l === undefined ? undefined : l.contentString();
  const H = e.maybeChild("commands");
  if (H) {
    W = function (e) {
      const t = [];
      e.forEachChildWithTag("command", e => {
        var n;
        var r;
        const i = e.maybeChild("name");
        const a = (n = i == null ? undefined : i.contentString()) !== null && n !== undefined ? n : "";
        const o = e.maybeChild("description");
        const s = (r = o == null ? undefined : o.contentString()) !== null && r !== undefined ? r : "";
        t.push({
          name: a,
          description: s
        });
      });
      return t;
    }(H);
  }
  const $ = {
    address: c,
    description: d,
    email: _,
    latitude: m,
    longitude: y,
    vertical: S,
    website: v,
    categories: T,
    business_hours: A,
    catalog_status: D,
    profile_options: C,
    fbPage: L,
    igProfessional: k,
    isProfileLinked: G,
    directConnection: R,
    cover_photo: B,
    customUrlPath: w,
    prompts: Y,
    commands: W,
    commands_description: V,
    automated_type: F,
    welcome_message_protocol_mode: j
  };
  return (0, s.default)($);
};
var i = require("./72696.js");
var a = require("./37237.js");
var o = require("./817649.js");
var s = r(require("./176309.js"));