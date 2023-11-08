var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WA_USER_JID_SUFFIX = exports.WA_USER_DOMAIN = exports.WA_SERVER_JID_SUFFIX = exports.WA_NEWSLETTER_JID_DOMAIN = exports.SURVEY_USER_JID = exports.STATUS_JID = exports.PSA_JID = exports.MSGR_USER_JID_SUFFIX = exports.MSGR_USER_DOMAIN = exports.LID_SUFFIX = exports.LID_DOMAIN = exports.INTEROP_USER_JID_SUFFIX = exports.INTEROP_DOMAIN = exports.HOSTED_SUFFIX = exports.HOSTED_DOMAIN = exports.DEFAULT_DEVICE_ID = exports.AUTHOR_SYSTEM = exports.AUTHOR_ME = undefined;
exports.asChatJid = function (e) {
  if (e === l) {
    return null;
  } else {
    return e;
  }
};
exports.asMulticastJid = function (e) {
  if (F(e) == null) {
    return e;
  } else {
    return null;
  }
};
exports.asPhoneChatJid = function (e) {
  if (e === l) {
    return null;
  } else {
    return e;
  }
};
exports.asStatusJid = function (e) {
  if (e === l) {
    return l;
  } else {
    return null;
  }
};
exports.authorAsPhoneUserJid = function (e) {
  if (e === o || e === s) {
    return null;
  }
  if (!e.endsWith(y)) {
    return null;
  }
  return e;
};
exports.authorAsUserJid = function (e) {
  if (e === o || e === s) {
    return null;
  }
  return e;
};
exports.authorToUserId = function (e, t) {
  if (e === o || e === s) {
    return t;
  } else {
    return G(e);
  }
};
exports.createJidUtils = function (e) {
  let {
    platform: t
  } = e;
  const n = t === "msgr" ? d : y;
  return {
    toUserJid: function (e) {
      return `${e}${n}`;
    },
    getUserDomain: function () {
      return n;
    },
    getGroupCallDomain: function () {
      return "@call";
    }
  };
};
exports.defaultDeviceJidForUser = te;
exports.defaultLidDeviceJidForLidUserJid = function (e) {
  return k(e, 0);
};
exports.defaultMsgrDeviceJidForUser = function (e) {
  return `${L(e)}:0@msgr`;
};
exports.defaultPhoneDeviceJidForUser = function (e) {
  return `${L(e)}:0@s.whatsapp.net`;
};
exports.extractDeviceIDParts = U;
exports.extractDeviceId = x;
exports.extractFromJid = W;
exports.extractJidFromJidWithType = function (e) {
  if (e.jidType === "phoneDevice" || e.jidType === "interopDevice" || e.jidType === "lidDevice" || e.jidType === "msgrDevice") {
    return e.deviceJid;
  } else if (e.jidType === "lidUser" || e.jidType === "interopUser" || e.jidType === "msgrUser" || e.jidType === "phoneUser") {
    return e.userJid;
  } else if (e.jidType === "group") {
    return e.groupJid;
  } else if (e.jidType === "status") {
    return e.statusJid;
  } else if (e.jidType === "call") {
    return e.callJid;
  } else if (e.jidType === "newsletter") {
    return e.newsletterJid;
  } else if (e.jidType === "hosted") {
    return e.hostedDeviceJid;
  } else {
    e.jidType;
    return e.broadcastJid;
  }
};
exports.extractLidUserJid = function (e) {
  return Y(e);
};
exports.extractPhoneUserJid = function (e) {
  return Y(e);
};
exports.extractUserId = G;
exports.extractUserJid = Y;
exports.fullFormDeviceJidString = function (e) {
  const {
    user: t,
    agent: n = "0",
    device: r = "0",
    server: i
  } = K(e);
  return `${t}.${n}:${r}@${i}`;
};
exports.getGroupDomain = function () {
  return u;
};
exports.getMsgrUserDomain = function () {
  return d;
};
exports.getServerDomain = function () {
  return "@s.whatsapp.net";
};
exports.getWhatsappUserDomain = function () {
  return y;
};
exports.groupIdFromJid = function (e) {
  if (e.endsWith(u)) {
    return e.slice(0, -u.length);
  }
  throw (0, a.default)(`groupId called with non-group jid "${e}"`);
};
exports.interpretAndValidateJid = V;
exports.interpretAsDeviceId = function (e) {
  return e;
};
exports.interpretAsGroupJid = Q;
exports.interpretAsNumber = function (e) {
  return e;
};
exports.interpretAsPhoneUserJid = function (e) {
  if (e.endsWith(y)) {
    return e;
  } else {
    return null;
  }
};
exports.interpretAsUserJid = F;
exports.isAuthorMe = function (e) {
  return e === "@me";
};
exports.isAuthorSystem = function (e) {
  return e === "@system";
};
exports.isLidUser = function (e) {
  return e.endsWith(A);
};
exports.isPrimaryDevice = function (e) {
  return x(e) === 0;
};
exports.lidFromLidUserJid = j;
exports.lidOrPhoneFromUserJid = function (e) {
  if (e.endsWith(y)) {
    return B(e);
  }
  if (e.endsWith(A)) {
    return j(e);
  }
  throw (0, a.default)(`lidOrPhoneFromUserJid called with non phone or lid jid "${e}"`);
};
exports.maybeSanitizeLogLineText = function (e) {
  if (!e.includes("@")) {
    return e;
  }
  return e.replace(D, J);
};
exports.parseJidParts = K;
exports.phoneNumberFromJid = B;
exports.sanitizeJidForLogging = J;
exports.stripAgentIdFromPhoneDeviceJid = function (e) {
  const {
    user: t,
    device: n = "0",
    server: r
  } = K(e);
  return `${t}:${n}@${r}`;
};
exports.switchOnChatJidType = X;
exports.switchOnJidType = function (e, t) {
  if (e === l) {
    return t.status();
  }
  return X(e, {
    interopUser: t.interopUser,
    phoneUser: t.phoneUser,
    msgrUser: t.msgrUser,
    lidUser: t.lidUser,
    group: t.group
  });
};
exports.switchOnMsgrChatJidType = function (e, t) {
  if (e.endsWith(d)) {
    return t.user(e);
  }
  if (Q(e) != null) {
    return t.group(e);
  }
  throw (0, a.default)(`Can not switch on chat jid ${e}`);
};
exports.switchOnMulticastJidType = function (e, t) {
  if (e === l) {
    return t.multicast(l);
  }
  return Z(e, {
    user: t.user,
    group: t.multicast
  });
};
exports.switchOnPhoneChatJidType = Z;
exports.switchOnPhoneJidType = function (e, t) {
  if (e === l) {
    return t.status();
  }
  return Z(e, {
    user: t.user,
    group: t.group
  });
};
exports.switchOnUserChatJidType = function (e, t) {
  return X(e, {
    lidUser: e => t.user(e),
    interopUser: e => t.user(e),
    msgrUser: e => t.user(e),
    phoneUser: e => t.user(e),
    group: e => t.group(e)
  });
};
exports.toBroadcastJid = function (e) {
  return `${e}@broadcast`;
};
exports.toDeviceJid = function (e, t) {
  return `${L(e)}:${t}${ee(e)}`;
};
exports.toGroupJid = function (e) {
  if (e.endsWith(u)) {
    return e;
  }
  return `${e}@g.us`;
};
exports.toHostedDeviceJid = function (e) {
  if (e.endsWith(I)) {
    return e;
  }
  return `${e}@hosted`;
};
exports.toLidDeviceJid = k;
exports.toLidUserJid = function (e) {
  return `${e}@lid`;
};
exports.toMsgrDeviceJid = function (e, t) {
  return `${L(e)}:${t}@msgr`;
};
exports.toMsgrUserJid = w;
exports.toNewsletterJid = function (e) {
  if (e.endsWith(S)) {
    return e;
  }
  return `${e}@newsletter`;
};
exports.toPhoneDeviceJid = function (e, t) {
  return `${L(e)}:${t}@s.whatsapp.net`;
};
exports.toPhoneUserJid = function (e) {
  return `${e}@s.whatsapp.net`;
};
exports.unsafeCoerceToChatJid = function (e) {
  return e;
};
exports.unsafeCoerceToDeviceId = pe;
exports.unsafeCoerceToDeviceJid = ne;
exports.unsafeCoerceToGroupJid = de;
exports.unsafeCoerceToHostedDeviceJid = function (e) {
  return e;
};
exports.unsafeCoerceToInteropDeviceJid = ae;
exports.unsafeCoerceToInteropUserJid = ue;
exports.unsafeCoerceToLidDeviceJid = oe;
exports.unsafeCoerceToMsgrDeviceJid = ie;
exports.unsafeCoerceToMsgrUserJid = ce;
exports.unsafeCoerceToNewsletterJid = function (e) {
  return e;
};
exports.unsafeCoerceToPhoneDeviceJid = re;
exports.unsafeCoerceToPhoneUserJid = le;
exports.unsafeCoerceToUserJid = se;
exports.userIdFromJid = L;
exports.validateBroadcastJid = z;
exports.validateCallJid = function (e) {
  if (O.test(e)) {
    return e;
  } else {
    return null;
  }
};
exports.validateChatJid = function (e) {
  return $(e) || q(e);
};
exports.validateDeviceJid = function (e) {
  if (T.test(e) || g.test(e) || f.test(e) || C.test(e) || N.test(e)) {
    return e;
  }
  if (M.test(e)) {
    return te(e);
  }
  return null;
};
exports.validateDomainJid = function (e) {
  if (e === "s.whatsapp.net" || e === "g.us") {
    return e;
  } else {
    return null;
  }
};
exports.validateGroupJid = q;
exports.validateHostedDeviceJid = function (e) {
  if (N.test(e)) {
    return e;
  } else {
    return null;
  }
};
exports.validateMulticastJid = function (e) {
  if (H(e) || q(e) || z(e)) {
    return e;
  } else {
    return null;
  }
};
exports.validateNewsletterJid = function (e) {
  if (v.test(e)) {
    return e;
  } else {
    return null;
  }
};
exports.validateStatusJid = H;
exports.validateUserJid = $;
var i = r(require("./367420.js"));
var a = r(require("./415227.js"));
exports.DEFAULT_DEVICE_ID = 0;
const o = "@me";
exports.AUTHOR_ME = o;
const s = "@system";
exports.AUTHOR_SYSTEM = s;
const l = "status@broadcast";
exports.STATUS_JID = l;
exports.PSA_JID = "0@s.whatsapp.net";
const u = "@g.us";
const c = /^([1-9][0-9]{0,19}|(?!10)[1-9][0-9]{4,19}-[1-9][0-9]{9})@g.us$/;
const d = "@msgr";
exports.MSGR_USER_DOMAIN = d;
exports.MSGR_USER_JID_SUFFIX = "msgr";
const p = "@interop";
exports.INTEROP_DOMAIN = p;
exports.INTEROP_USER_JID_SUFFIX = "interop";
const f = /^([1-9][0-9]{0,2}-[1-9][0-9]{0,14}(:[0])?)@interop$/;
const _ = /^([1-9][0-9]{0,2}-[1-9][0-9]{0,14}(:[0])?)@interop$/;
const g = /^([1-9][0-9]{0,19}(:[1-9][0-9]{0,2})?)@msgr$/;
const m = /^([1-9][0-9]{0,19})@msgr$/;
const h = /^([1-9][0-9]{0,19})(:0)?@msgr$/;
exports.WA_SERVER_JID_SUFFIX = "s.whatsapp.net";
const y = "@s.whatsapp.net";
exports.WA_USER_DOMAIN = y;
const E = "s.whatsapp.net";
exports.WA_USER_JID_SUFFIX = E;
const S = "@newsletter";
exports.WA_NEWSLETTER_JID_DOMAIN = S;
const v = /^([1-9][0-9]{0,19})@newsletter$/;
const T = /^(0|((?!10)[1-9][0-9]{4,19}(\.[0-9]{1,2})?(:[0-9]{1,2})))@s.whatsapp.net$/;
const M = /^(0|((?!10)[1-9][0-9]{4,19})(\.[0-9]{1,2})?)@s.whatsapp.net$/;
const A = "@lid";
exports.LID_DOMAIN = A;
exports.LID_SUFFIX = "lid";
const b = /^([1-9][0-9]{0,14})@lid$/;
const C = /^([1-9][0-9]{0,14}(:[0-9]{1,2})?)@lid$/;
const P = /^(status|location|[1-9][0-9]{0,19})@broadcast$/;
const O = /^([0-9a-fA-F]{18,32})@call$/;
const I = "@hosted";
exports.HOSTED_DOMAIN = I;
const R = "hosted";
exports.HOSTED_SUFFIX = R;
const N = /^(0|((?!10)[1-9][0-9]{4,19}(\.[0-9]{1,2})?(:[1-9][0-9]{0,1})))@hosted$/;
exports.SURVEY_USER_JID = "16505361212@s.whatsapp.net";
const D = /([0-9a-zA-Z-:]+)@(g\.us|call|s\.whatsapp\.net|broadcast|msgr|lid)/g;
function w(e) {
  return `${e}@msgr`;
}
function L(e) {
  if (e.endsWith(y)) {
    return e.slice(0, -y.length);
  }
  if (e.endsWith(d)) {
    return e.slice(0, -d.length);
  }
  if (e.endsWith(p)) {
    return e.slice(0, -p.length);
  }
  if (e.endsWith(A)) {
    return e.slice(0, -A.length);
  }
  throw (0, a.default)(`userIdFromJid called with non-user jid "${e}"`);
}
function k(e, t) {
  return `${j(e)}:${t}@lid`;
}
function G(e) {
  return e.split("@")[0];
}
function U(e) {
  const t = e.split("@")[0].split(":");
  const n = t[0];
  const r = t[1];
  return {
    userId: n,
    deviceID: parseInt(r, 10)
  };
}
function x(e) {
  return U(e).deviceID;
}
function B(e) {
  if (!e.endsWith(y)) {
    throw (0, a.default)(`phoneNumberFromJid called with non-user jid "${e}"`);
  }
  return e.slice(0, -y.length);
}
function F(e) {
  if (e.endsWith(y) || e.endsWith(p) || e.endsWith(d) || e.endsWith(A)) {
    return e;
  } else {
    return null;
  }
}
function j(e) {
  if (!e.endsWith(A)) {
    throw (0, a.default)(`lidFromLidUserJid called with non-LidUserJid "${e}"`);
  }
  return e.slice(0, -A.length);
}
function Y(e) {
  const t = e.split("@");
  let n = t[0];
  let r = t[1];
  n = n.split(":")[0];
  n = n.split(".")[0];
  if (r === R) {
    r = E;
  }
  return `${n}@${r}`;
}
function K(e) {
  const [t, n] = e.split("@");
  const [r, i] = t.split(":");
  const [a, o] = r.split(".");
  return {
    user: a,
    device: i,
    agent: o,
    server: n
  };
}
function W(e) {
  switch (e.jidType) {
    case "interopUser":
    case "lidUser":
    case "msgrUser":
    case "phoneUser":
      return e.userJid;
    case "group":
      return e.groupJid;
    case "status":
      return e.statusJid;
    case "interopDevice":
    case "lidDevice":
    case "msgrDevice":
    case "phoneDevice":
      return e.deviceJid;
    case "broadcast":
      return e.broadcastJid;
    case "call":
      return e.callJid;
    case "newsletter":
      return e.newsletterJid;
    case "hosted":
      return e.hostedDeviceJid;
    default:
      return (0, i.default)(e.jidType);
  }
}
function V(e) {
  if (e === l) {
    return {
      jidType: "status",
      statusJid: l
    };
  }
  if (M.test(e)) {
    return {
      jidType: "phoneUser",
      userJid: e
    };
  }
  if (_.test(e)) {
    return {
      jidType: "interopUser",
      userJid: e
    };
  }
  if (m.test(e)) {
    return {
      jidType: "msgrUser",
      userJid: e
    };
  }
  if (h.test(e)) {
    return {
      jidType: "msgrUser",
      userJid: w(e.substr(0, e.indexOf(":")))
    };
  }
  if (T.test(e)) {
    return {
      jidType: "phoneDevice",
      deviceJid: e
    };
  } else if (f.test(e)) {
    return {
      jidType: "interopDevice",
      deviceJid: e
    };
  } else if (g.test(e)) {
    return {
      jidType: "msgrDevice",
      deviceJid: e
    };
  } else if (c.test(e)) {
    return {
      jidType: "group",
      groupJid: e.endsWith(u) ? e : `${e}@g.us`
    };
  } else if (P.test(e)) {
    return {
      jidType: "broadcast",
      broadcastJid: e
    };
  } else if (O.test(e)) {
    return {
      jidType: "call",
      callJid: e
    };
  } else if (b.test(e)) {
    return {
      jidType: "lidUser",
      userJid: e
    };
  } else if (C.test(e)) {
    return {
      jidType: "lidDevice",
      deviceJid: e
    };
  } else if (v.test(e)) {
    return {
      jidType: "newsletter",
      newsletterJid: e
    };
  } else if (N.test(e)) {
    return {
      jidType: "hosted",
      hostedDeviceJid: e
    };
  } else {
    return {
      jidType: "unknown"
    };
  }
}
function H(e) {
  if (e === "status@broadcast") {
    return e;
  } else {
    return null;
  }
}
function $(e) {
  if (M.test(e) || _.test(e) || m.test(e) || b.test(e)) {
    return e;
  }
  if (h.test(e)) {
    return w(e.substr(0, e.indexOf(":")));
  }
  return null;
}
function z(e) {
  if (P.test(e)) {
    return e;
  } else {
    return null;
  }
}
function q(e) {
  if (c.test(e)) {
    return e;
  } else {
    return null;
  }
}
function J(e) {
  const t = V(e);
  if (t.jidType === "unknown") {
    return e;
  } else if (t.jidType === "status") {
    return t.statusJid;
  } else {
    t.jidType;
    return W(t).replace(/^([^@]*)([^@][^@][^@][^@])@(.*)$/, "...$2@$3");
  }
}
function Q(e) {
  if (e.endsWith(u)) {
    return e;
  } else {
    return null;
  }
}
function X(e, t) {
  if (e.endsWith(y)) {
    return t.phoneUser(e);
  }
  if (e.endsWith(d)) {
    return t.msgrUser(e);
  }
  if (e.endsWith(p)) {
    return t.interopUser(e);
  }
  if (e.endsWith(A)) {
    return t.lidUser(e);
  }
  if (Q(e) != null) {
    return t.group(e);
  }
  throw (0, a.default)(`Can not switch on chat jid ${e}`);
}
function Z(e, t) {
  if (e.endsWith(y)) {
    return t.user(e);
  }
  if (Q(e) != null) {
    return t.group(e);
  }
  throw (0, a.default)(`Can not switch on chat jid ${e}`);
}
function ee(e) {
  if (e.endsWith(y)) {
    return y;
  }
  if (e.endsWith(d)) {
    return d;
  }
  if (e.endsWith(A)) {
    return A;
  }
  throw (0, a.default)(`userDomainFromJid called with non-user jid "${e}"`);
}
function te(e) {
  return `${L(e)}:0${ee(e)}`;
}
function ne(e) {
  return e;
}
function re(e) {
  return e;
}
function ie(e) {
  return e;
}
function ae(e) {
  return e;
}
function oe(e) {
  return e;
}
function se(e) {
  return e;
}
function le(e) {
  return e;
}
function ue(e) {
  return e;
}
function ce(e) {
  return e;
}
function de(e) {
  return e;
}
function pe(e) {
  return e;
}