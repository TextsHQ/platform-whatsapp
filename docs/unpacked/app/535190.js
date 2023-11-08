var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectionReorderError = undefined;
exports.appealCollection = function () {
  return I.apply(this, arguments);
};
exports.createCollection = function () {
  return A.apply(this, arguments);
};
exports.deleteCollection = function () {
  return C.apply(this, arguments);
};
exports.editCollection = function () {
  return P.apply(this, arguments);
};
exports.querySingleCollectionIQ = exports.queryCollectionsIQ = undefined;
exports.reorderCollection = function () {
  return w.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./477689.js");
var s = require("./716358.js");
var l = require("./347387.js");
var u = require("./984330.js");
var c = require("./646083.js");
var d = require("./72696.js");
var p = require("./355813.js");
var f = require("./791357.js");
var _ = r(require("./99398.js"));
var g = require("./694630.js");
const m = e => {
  var t;
  var n;
  var r;
  var i;
  return {
    status: (t = (0, g.asProductReviewType)(e.child("status").contentString())) !== null && t !== undefined ? t : "APPROVED",
    canAppeal: ((n = e.maybeChild("can_appeal")) === null || n === undefined ? undefined : n.contentString().toLowerCase()) === "true",
    rejectReason: (r = e.maybeChild("reject_reason")) === null || r === undefined ? undefined : r.contentString(),
    commerceUrl: (i = e.maybeChild("commerce_url")) === null || i === undefined ? undefined : i.contentString()
  };
};
const h = e => {
  var t;
  var n;
  const r = e.maybeChild("status_info");
  const i = r ? m(r) : undefined;
  const a = (t = i == null ? undefined : i.status) !== null && t !== undefined ? t : "APPROVED";
  const o = !!i && i.canAppeal;
  const s = {
    id: e.child("id").contentString(),
    name: e.child("name").contentString(),
    isHidden: ((n = e.maybeChild("is_hidden")) === null || n === undefined ? undefined : n.contentString()) === "TRUE",
    rejectReason: i == null ? undefined : i.rejectReason,
    commerceUrl: i == null ? undefined : i.commerceUrl,
    totalItemsCount: 0,
    products: [],
    reviewStatus: a,
    canAppeal: o
  };
  e.forEachChildWithTag("product", e => {
    s.products.push((0, c.parseProductNode)(e));
  });
  return s;
};
const y = new l.WapParser("collectionsResponse", e => {
  e.assertTag("iq");
  e.assertFromServer();
  const t = e.child("collections");
  const n = [];
  t.forEachChildWithTag("collection", e => {
    n.push(h(e));
  });
  const r = t.child("paging").child("after");
  const i = r.hasContent() ? r.contentString() : "";
  return {
    collections: n,
    afterCursor: i
  };
});
const E = function () {
  var e = (0, i.default)(function* (e) {
    let {
      catalogWid: t,
      afterCursor: n,
      limit: r,
      productsCount: i,
      width: o,
      height: l,
      directConnectionEncryptedInfo: c = null
    } = e;
    if ((0, d.commerceFeaturesDisabledBySanctions)()) {
      throw new u.E451();
    }
    const f = n ? (0, s.wap)("after", null, n) : undefined;
    const _ = (0, s.wap)("iq", {
      to: s.S_WHATSAPP_NET,
      type: "get",
      xmlns: "w:biz:catalog",
      id: (0, s.generateId)(),
      smax_id: "35"
    }, (0, s.wap)("collections", {
      biz_jid: (0, p.DEVICE_JID)(t)
    }, (0, s.wap)("collection_limit", null, r.toString()), (0, s.wap)("item_limit", null, i.toString()), (0, s.wap)("width", null, o.toString()), (0, s.wap)("height", null, l.toString()), f, c ? (0, s.wap)("direct_connection_encrypted_info", null, c) : null));
    const g = yield (0, a.deprecatedSendIq)(_, y);
    if (g.success) {
      return g.result;
    }
    if (g.errorCode === 404) {
      return {
        collections: [],
        afterCursor: ""
      };
    }
    if (g.errorCode === 451) {
      throw new u.E451();
    }
    throw new u.ServerStatusCodeError(g.errorCode);
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.queryCollectionsIQ = E;
const S = new l.WapParser("singleCollectionResponse", e => {
  e.assertTag("iq");
  e.assertFromServer();
  const t = e.child("collection");
  const n = h(t);
  const r = t.child("paging").child("after");
  return {
    collections: [n],
    afterCursor: r.hasContent() ? r.contentString() : ""
  };
});
const v = function () {
  var e = (0, i.default)(function* (e) {
    let {
      catalogWid: t,
      collectionId: n,
      afterCursor: r,
      limit: i,
      width: o,
      height: l,
      directConnectionEncryptedInfo: c = null
    } = e;
    if ((0, d.commerceFeaturesDisabledBySanctions)()) {
      throw new u.E451();
    }
    const f = r ? (0, s.wap)("after", null, r) : undefined;
    const _ = (0, s.wap)("iq", {
      to: s.S_WHATSAPP_NET,
      type: "get",
      xmlns: "w:biz:catalog",
      id: (0, s.generateId)(),
      smax_id: "30"
    }, (0, s.wap)("collection", {
      biz_jid: (0, p.DEVICE_JID)(t),
      id: (0, s.CUSTOM_STRING)(n)
    }, (0, s.wap)("limit", null, i.toString()), (0, s.wap)("width", null, o.toString()), (0, s.wap)("height", null, l.toString()), f, c ? (0, s.wap)("direct_connection_encrypted_info", null, c) : null));
    const g = yield (0, a.deprecatedSendIq)(_, S);
    if (g.success) {
      return g.result;
    }
    if (g.errorCode === 451) {
      throw new u.E451();
    }
    throw new u.ServerStatusCodeError(g.errorCode);
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.querySingleCollectionIQ = v;
const T = new l.WapParser("createOrEditCollectionResponse", e => {
  e.assertTag("iq");
  e.assertFromServer();
  const t = e.child("collection");
  const n = t.child("id").contentString();
  const r = t.maybeChild("status_info");
  return {
    id: n,
    reviewStatus: r ? m(r).status : "APPROVED"
  };
});
const M = new l.WapParser("createOrEditCollectionResponseErrorParser", e => {
  const t = e.attrString("code");
  const n = e.attrString("text");
  const r = e.maybeChild("field");
  return {
    code: t,
    text: n,
    fieldName: r == null ? undefined : r.attrString("name"),
    fieldReason: r == null ? undefined : r.attrString("reason")
  };
});
function A() {
  return (A = (0, i.default)(function* (e, t, n) {
    if ((0, d.commerceFeaturesDisabledBySanctions)()) {
      throw new u.E451();
    }
    const r = [];
    r.push((0, s.wap)("name", null, e));
    r.push(...t.map(e => (0, s.wap)("product", null, (0, s.wap)("id", null, e))));
    r.push((0, s.wap)("catalog_session_id", null, n));
    const i = (0, s.wap)("iq", {
      to: s.S_WHATSAPP_NET,
      type: "set",
      xmlns: "w:biz:catalog",
      id: (0, s.generateId)(),
      smax_id: "36"
    }, (0, s.wap)("collection", {
      op: "create"
    }, r));
    const o = yield (0, a.deprecatedSendIqErrorParser)(i, T, M);
    if (o.success) {
      return o.result;
    }
    if (o.errorCode === 451) {
      throw new u.E451();
    }
    throw o.customError;
  })).apply(this, arguments);
}
const b = new l.WapParser("deleteCollectionResponse", e => {
  e.assertTag("iq");
  const t = e.maybeChild("response");
  return (t == null ? undefined : t.maybeChild("success")) != null;
});
function C() {
  return (C = (0, i.default)(function* (e, t) {
    if ((0, d.commerceFeaturesDisabledBySanctions)()) {
      throw new u.E451();
    }
    const n = (0, s.wap)("iq", {
      to: s.S_WHATSAPP_NET,
      type: "set",
      xmlns: "w:biz:catalog",
      id: (0, s.generateId)(),
      smax_id: "43"
    }, (0, s.wap)("collections", {
      op: "delete"
    }, (0, s.wap)("id", null, e), (0, s.wap)("catalog_session_id", null, t)));
    const r = yield (0, a.deprecatedSendIq)(n, b);
    if (!r.success) {
      if (r.errorCode === 451) {
        throw new u.E451();
      }
      throw new u.ServerStatusCodeError(r.errorCode);
    }
    if (!r.result) {
      throw new u.ServerStatusCodeError(500);
    }
  })).apply(this, arguments);
}
function P() {
  return (P = (0, i.default)(function* (e, t, n, r, i, o) {
    if ((0, d.commerceFeaturesDisabledBySanctions)()) {
      throw new u.E451();
    }
    const l = (0, s.wap)("iq", {
      to: s.S_WHATSAPP_NET,
      type: "set",
      xmlns: "w:biz:catalog",
      id: (0, s.generateId)(),
      smax_id: "40"
    }, (0, s.wap)("collection", {
      op: "update"
    }, (0, s.wap)("id", null, e), t ? (0, s.wap)("name", null, t) : undefined, r.length > 0 ? (0, s.wap)("add", null, r.map(e => (0, s.wap)("id", null, e))) : undefined, i.length > 0 ? (0, s.wap)("remove", null, i.map(e => (0, s.wap)("id", null, e))) : undefined, (0, s.wap)("catalog_session_id", null, o)));
    const c = yield (0, a.deprecatedSendIqErrorParser)(l, T, M);
    if (c.success) {
      return c.result;
    }
    if (c.errorCode === 451) {
      throw new u.E451();
    }
    throw c.customError;
  })).apply(this, arguments);
}
const O = new l.WapParser("appealCollectionResponse", e => {
  e.assertTag("iq");
  e.assertFromServer();
  const t = e.maybeChild("response");
  return (t == null ? undefined : t.maybeChild("success")) != null;
});
function I() {
  return (I = (0, i.default)(function* (e, t) {
    if ((0, d.commerceFeaturesDisabledBySanctions)()) {
      throw new u.E451();
    }
    const n = t ? (0, s.wap)("reason", null, t) : undefined;
    const r = (0, s.wap)("iq", {
      id: (0, s.generateId)(),
      to: s.S_WHATSAPP_NET,
      xmlns: "w:biz:catalog",
      type: "set",
      smax_id: "48"
    }, (0, s.wap)("collection", {
      op: "appeal",
      id: (0, s.CUSTOM_STRING)(e)
    }, n));
    const i = yield (0, a.deprecatedSendIq)(r, O);
    if (i.success) {
      return i.result;
    }
    if (i.errorCode === 451) {
      throw new u.E451();
    }
    throw new u.ServerStatusCodeError(i.errorCode);
  })).apply(this, arguments);
}
const R = new l.WapParser("reorderCollectionResponse", e => {
  e.assertTag("iq");
  const t = e.maybeChild("response");
  return (t == null ? undefined : t.maybeChild("success")) != null;
});
class N extends (0, o.customError)("CollectionReorderError", true, Error) {
  constructor() {
    super("CollectionReorderError");
  }
}
exports.CollectionReorderError = N;
const D = require("../vendor/76672.js")({
  ProductOutOfOrder: 457,
  IndexOutOfBound: 458
});
function w() {
  return (w = (0, i.default)(function* (e) {
    if (!_.default.online) {
      throw new f.HttpNetworkError();
    }
    if ((0, d.commerceFeaturesDisabledBySanctions)()) {
      throw new u.E451();
    }
    const t = (0, s.wap)("iq", {
      id: (0, s.generateId)(),
      to: s.S_WHATSAPP_NET,
      xmlns: "w:biz:catalog",
      type: "set",
      smax_id: "92"
    }, (0, s.wap)("collections", {
      op: "update"
    }, (0, s.wap)("move", null, e.map(e => {
      let [t, n, r] = e;
      return (0, s.wap)("id", {
        from_index: (0, s.CUSTOM_STRING)(n.toString()),
        to_index: (0, s.CUSTOM_STRING)(r.toString())
      }, t);
    }))));
    const n = yield (0, a.deprecatedSendIq)(t, R);
    if (n.success) {
      return n.result;
    }
    if (n.errorCode === 451) {
      throw new u.E451();
    }
    if ([D.IndexOutOfBound, D.ProductOutOfOrder].includes(n.errorCode)) {
      throw new N();
    }
    throw new u.ServerStatusCodeError(n.errorCode);
  })).apply(this, arguments);
}