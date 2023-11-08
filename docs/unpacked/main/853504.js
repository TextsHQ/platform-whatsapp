var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryActiveLinkedAccountInfo = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("../app/721569.js");
var l = require("./69489.js");
const i = () => {
  let e = 3;
  const t = function () {
    var t = (0, r.default)(function* (t) {
      const n = yield (0, l.sendGetLinkedAccountsRPC)({});
      const a = [];
      switch (n.name) {
        case "GetLinkedAccountsResponseForbidden":
          return void t(null);
        case "GetLinkedAccountsResponseError":
          break;
        default:
          var r;
          var o;
          var i;
          var u;
          var s;
          var c;
          n.name;
          if (n.value.linkedAccountsFbPage) {
            a.push({
              type: "facebook",
              id: (r = n.value.linkedAccountsFbPage) === null || r === undefined ? undefined : r.id,
              hasActiveLinkedAd: ((o = n.value.linkedAccountsFbPage) === null || o === undefined ? undefined : o.adStatusHasActiveCtwaAd) === "true",
              hasCreatedAd: ((i = n.value.linkedAccountsFbPage) === null || i === undefined ? undefined : i.adStatusHasCreatedAd) === "true"
            });
          }
          if (n.value.linkedAccountsWhatsappAdIdentity) {
            a.push({
              type: "whatsapp",
              id: (u = n.value.linkedAccountsWhatsappAdIdentity) === null || u === undefined ? undefined : u.id,
              hasActiveLinkedAd: ((s = n.value.linkedAccountsWhatsappAdIdentity) === null || s === undefined ? undefined : s.adStatusHasActiveCtwaAd) === "true",
              hasCreatedAd: ((c = n.value.linkedAccountsWhatsappAdIdentity) === null || c === undefined ? undefined : c.adStatusHasCreatedAd) === "true"
            });
          }
          return void t({
            accounts: a
          });
      }
      if (--e == 0) {
        t(null);
      }
    });
    return function () {
      return t.apply(this, arguments);
    };
  }();
  const n = new o.PromiseRetryLoop({
    name: "queryLinkedAccounts",
    timer: {
      algo: {
        type: "exponential",
        first: 250
      },
      max: 1000
    },
    code: t
  });
  n.start();
  return n.promise();
};
const u = function () {
  var e = (0, r.default)(function* () {
    const e = yield i();
    if (!e || (e == null ? undefined : e.accounts.length) === 0) {
      return null;
    }
    const t = e.accounts.find(e => e.type === "whatsapp");
    const n = e.accounts.find(e => e.type === "facebook");
    if (t) {
      return {
        id: t.id,
        hasCreatedAd: t.hasCreatedAd,
        hasFacebookPage: n != null,
        type: t.type
      };
    } else if (n) {
      return {
        id: n.id,
        hasCreatedAd: n.hasCreatedAd,
        hasFacebookPage: true,
        type: n.type
      };
    } else {
      return null;
    }
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.queryActiveLinkedAccountInfo = u;