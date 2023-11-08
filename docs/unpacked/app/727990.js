var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.joinGroupViaInviteV4 = function () {
  return p.apply(this, arguments);
};
exports.queryGroupInviteV4 = function () {
  return d.apply(this, arguments);
};
exports.revokeGroupInviteV4 = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./662210.js");
var o = require("./929651.js");
var s = require("./548011.js");
var l = require("./429267.js");
var u = require("./854379.js");
var c = require("./574819.js");
function d() {
  return (d = (0, i.default)(function* (e, t, n, r, i) {
    const a = yield (0, o.sendGetGroupInfoRPC)({
      addRequestArgs: {
        addRequestExpiration: parseInt(t, 10),
        addRequestAdmin: (0, c.widToUserJid)(r),
        addRequestCode: e
      },
      iqTo: n,
      queryPhash: i
    });
    switch (a.name) {
      case "GetGroupInfoResponseSuccess":
        if (a.value.group == null) {
          return {
            status: 200,
            phashMatch: true
          };
        }
        return {
          status: 200,
          groupMetadata: (0, l.parseGroupSmax)(a.value.group)
        };
      case "GetGroupInfoResponseClientError":
        {
          const {
            code: e,
            text: t
          } = a.value.errorGetGroupInfoClientErrors.value;
          __LOG__(2)`queryGroupInviteV4: failed ${Number(e)}:${t}`;
          return {
            status: Number(e)
          };
        }
      case "GetGroupInfoResponseServerError":
        {
          const {
            code: e,
            text: t
          } = a.value.errorServerErrors.value;
          __LOG__(2)`queryGroupInviteV4: failed ${e}:${t}`;
          return {
            status: Number(e)
          };
        }
    }
  })).apply(this, arguments);
}
function p() {
  return (p = (0, i.default)(function* (e, t, n, r) {
    const i = yield (0, a.sendAcceptGroupAddRPC)({
      iqTo: n,
      acceptCode: e,
      acceptExpiration: parseInt(t, 10),
      acceptAdmin: (0, c.widToUserJid)(r)
    });
    switch (i.name) {
      case "AcceptGroupAddResponseSuccess":
      case "AcceptGroupAddResponseGroupJoinRequestSuccess":
        return {
          status: 200,
          gid: (0, u.groupJidToWid)(n)
        };
      case "AcceptGroupAddResponseClientError":
        {
          const {
            code: e,
            text: t
          } = i.value.errorAcceptGroupAddClientErrors.value;
          __LOG__(2)`joinGroupViaInviteV4: failed ${e}:${t}`;
          return {
            status: Number(e)
          };
        }
      case "AcceptGroupAddResponseServerError":
        {
          const {
            code: e,
            text: t
          } = i.value.errorServerErrors.value;
          __LOG__(2)`joinGroupViaInviteV4: failed ${e}:${t}`;
          return {
            status: Number(e)
          };
        }
    }
  })).apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e, t) {
    const n = yield (0, s.sendRevokeRequestCodeRPC)({
      participantArgs: e.map(e => ({
        participantJid: (0, c.widToUserJid)(e)
      })),
      iqTo: t
    });
    switch (n.name) {
      case "RevokeRequestCodeResponseSuccess":
        return {
          status: 200
        };
      case "RevokeRequestCodeResponseClientError":
        {
          const {
            code: e,
            text: t
          } = n.value.errorClientErrors.value;
          __LOG__(2)`revokeGroupInviteV4: failed ${e}:${t}`;
          return {
            status: Number(e)
          };
        }
      case "RevokeRequestCodeResponseServerError":
        {
          const {
            code: e,
            text: t
          } = n.value.errorServerErrors.value;
          __LOG__(2)`revokeGroupInviteV4: failed ${e}:${t}`;
          return {
            status: Number(e)
          };
        }
    }
  })).apply(this, arguments);
}