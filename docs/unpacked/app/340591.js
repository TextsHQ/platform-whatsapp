var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i;
var a = r(require("../vendor/348926.js"));
var o = require("./250281.js");
var s = r(require("./670983.js"));
var l = require("./716358.js");
var u = require("./347387.js");
var c = require("./984330.js");
var d = require("./646083.js");
var p = require("./72696.js");
var f = require("./631991.js");
var _ = require("./830944.js");
var g = require("./355813.js");
var m = require("./550866.js");
var h = r(require("./676427.js"));
var y = require("./270658.js");
var E = require("./459857.js");
r(require("./16563.js"));
const S = new u.WapParser("productResponse", e => {
  e.assertTag("iq");
  e.assertFromServer();
  const t = e.child("product_catalog").child("product");
  return (0, d.parseProductNode)(t);
});
const v = function () {
  var e = (0, a.default)(function* (e, t, n, r) {
    let i = arguments.length > 4 && arguments[4] !== undefined && arguments[4];
    let a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
    if ((0, p.commerceFeaturesDisabledBySanctions)()) {
      throw new c.E451();
    }
    const s = (0, l.wap)("iq", {
      to: l.S_WHATSAPP_NET,
      type: "get",
      xmlns: "w:biz:catalog",
      id: (0, l.generateId)()
    }, (0, l.wap)("product", {
      jid: (0, g.DEVICE_JID)(e)
    }, (0, l.wap)("product_id", null, t), (0, l.wap)("width", null, n.toString()), (0, l.wap)("height", null, r.toString()), i ? (0, l.wap)("fetch_compliance_info", null, i.toString()) : undefined, a ? (0, l.wap)("direct_connection_encrypted_info", null, a) : null));
    const u = yield (0, o.deprecatedSendIq)(s, S);
    if (u.success) {
      return {
        data: u.result
      };
    }
    if (u.errorCode === 404) {
      return {
        error: "NOT_FOUND"
      };
    }
    throw u.errorCode === 451 ? new c.E451() : new c.ServerStatusCodeError(u.errorCode);
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
const T = function () {
  var e = (0, a.default)(function* () {
    if ((0, p.commerceFeaturesDisabledBySanctions)()) {
      throw new c.E451();
    }
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
      t[r] = arguments[r];
    }
    const [a, o, l, u, d = false, g = null] = t;
    try {
      var E;
      var S;
      const e = yield (0, y.fetchQuery)(i !== undefined ? i : i = require("./141330.js"), {
        request: {
          product: {
            jid: a.toString(),
            product_id: o,
            width: String(l),
            height: String(u),
            fetch_compliance_info: String(d),
            direct_connection_encrypted_info: g
          }
        }
      }, {
        eventLogger: (0, _.createCatalogEventLogger)(_.GRAPHQL_CATALOG_ENDPOINT.GET_PRODUCT)
      });
      const t = (0, s.default)(e == null || (E = e.xwa_product_catalog_get_product) === null || E === undefined || (S = E.product_catalog) === null || S === undefined ? undefined : S.product, "data?.xwa_product_catalog_get_product?.product_catalog?.product");
      return {
        data: (0, f.parseProductGraphQL)(t)
      };
    } catch (e) {
      if (e instanceof m.GraphQLServerError) {
        var T;
        const [t] = ((T = e.source) === null || T === undefined ? undefined : T.errors) || [];
        if ((t == null ? undefined : t.code) === 2498052) {
          return {
            error: "NOT_FOUND"
          };
        }
        (0, h.default)(e);
      }
      __LOG__(3)`GraphQL: Failed fetching xwa_product_catalog_get_product query. Falling back to IQ.`;
      return v(...t);
    }
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
var M = function () {
  var e;
  return ((0, p.graphQLForCatalogM1Enabled)() && !((e = (0, E.getMaybeMeUser)()) === null || e === undefined ? undefined : e.equals(arguments.length <= 0 ? undefined : arguments[0])) ? T : v)(...arguments);
};
exports.default = M;