var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i;
var a = r(require("../vendor/348926.js"));
var o = require("./250281.js");
var s = require("./716358.js");
var l = require("./347387.js");
var u = require("./984330.js");
var c = require("./646083.js");
var d = require("./72696.js");
var p = require("./631991.js");
var f = require("./830944.js");
var _ = require("./355813.js");
var g = require("./550866.js");
var m = r(require("./676427.js"));
var h = require("./270658.js");
var y = require("./459857.js");
const E = new l.WapParser("catalogResponse", e => {
  e.assertTag("iq");
  e.assertFromServer();
  const t = e.child("product_catalog");
  const n = [];
  t.forEachChildWithTag("product", e => {
    if (e.maybeChild("id")) {
      n.push((0, c.parseProductNode)(e));
    }
  });
  const r = t.child("paging");
  const i = r.child("before");
  const a = i.hasContent() ? i.contentString() : "";
  const o = r.child("after");
  const s = o.hasContent() ? o.contentString() : "";
  return {
    data: n,
    paging: {
      cursors: {
        after: s,
        before: a
      }
    }
  };
});
const S = function () {
  var e = (0, a.default)(function* (e) {
    let {
      catalogWid: t,
      afterCursor: n,
      limit: r,
      width: i,
      height: a,
      checkmarkCollectionId: l,
      allowShopSource: c,
      directConnectionEncryptedInfo: p = null
    } = e;
    if ((0, d.commerceFeaturesDisabledBySanctions)()) {
      throw new u.E451();
    }
    const f = n ? (0, s.wap)("after", null, n) : undefined;
    const g = l ? (0, s.wap)("belongs_to", null, (0, s.wap)("collection_id", null, l)) : undefined;
    const m = (0, s.wap)("iq", {
      to: s.S_WHATSAPP_NET,
      type: "get",
      xmlns: "w:biz:catalog",
      id: (0, s.generateId)()
    }, (0, s.wap)("product_catalog", {
      jid: (0, _.DEVICE_JID)(t),
      allow_shop_source: (h = c, h ? "true" : "false")
    }, (0, s.wap)("limit", null, r.toString()), (0, s.wap)("width", null, i.toString()), (0, s.wap)("height", null, a.toString()), f, g, p ? (0, s.wap)("direct_connection_encrypted_info", null, p) : null));
    var h;
    const y = yield (0, o.deprecatedSendIq)(m, E);
    if (y.success) {
      return y.result;
    }
    if (y.errorCode === 451) {
      throw new u.E451();
    }
    throw new u.ServerStatusCodeError(y.errorCode);
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
const v = function () {
  var e = (0, a.default)(function* (e) {
    if ((0, d.commerceFeaturesDisabledBySanctions)()) {
      throw new u.E451();
    }
    try {
      var t;
      var r;
      var a;
      const {
        catalogWid: o,
        afterCursor: s,
        limit: l,
        width: u,
        height: c,
        checkmarkCollectionId: d,
        allowShopSource: _,
        directConnectionEncryptedInfo: g
      } = e;
      const m = yield (0, h.fetchQuery)(i !== undefined ? i : i = require("./39063.js"), {
        request: {
          product_catalog: {
            jid: o.toString(),
            allow_shop_source: _ ? "ALLOWSHOPSOURCE_TRUE" : "ALLOWSHOPSOURCE_FALSE",
            width: String(u),
            height: String(c),
            direct_connection_encrypted_info: g,
            limit: String(l),
            after: s,
            catalog_session_id: d
          }
        }
      }, {
        eventLogger: (0, f.createCatalogEventLogger)(f.GRAPHQL_CATALOG_ENDPOINT.GET_CATALOG)
      });
      const {
        paging: y,
        products: E
      } = (m == null || (t = m.xwa_product_catalog_get_product_catalog) === null || t === undefined ? undefined : t.product_catalog) || {};
      return {
        data: E.map(p.parseProductGraphQL),
        paging: {
          cursors: {
            before: (r = y == null ? undefined : y.before) !== null && r !== undefined ? r : "",
            after: (a = y == null ? undefined : y.after) !== null && a !== undefined ? a : ""
          }
        }
      };
    } catch (t) {
      if (t instanceof g.GraphQLServerError) {
        (0, m.default)(t);
      }
      __LOG__(3)`GraphQL: Failed fetching xwa_product_catalog_get_product_catalog query. Falling back to IQ.`;
      return S(e);
    }
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
var T = e => ((0, d.graphQLForCatalogM1Enabled)() && !(0, y.getMaybeMeUser)().equals(e.catalogWid) ? v : S)(e);
exports.default = T;