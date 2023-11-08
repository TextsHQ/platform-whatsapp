Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Domains = undefined;
exports.validateAndGetParts = function (e) {
  if (e == null) {
    return null;
  }
  const t = e.match(/(.*)@(.*)/);
  if (t == null) {
    if (e === "call" || e === "s.whatsapp.net") {
      return {
        serverPart: e
      };
    } else {
      return null;
    }
  }
  const n = t[1];
  const i = r.cast(t[2]);
  if (i == null) {
    __LOG__(3)`validateAndGetParts: Domain not supported`;
    return null;
  }
  const a = n.match(d[t[2]]);
  if (!a) {
    return null;
  }
  switch (i) {
    case r.BROADCAST:
      return {
        serverPart: r.BROADCAST,
        userPart: a[1]
      };
    case r.CALL:
      return {
        serverPart: r.CALL,
        userPart: a[1]
      };
    case r.G_US:
      return {
        serverPart: r.G_US,
        userPart: a[1]
      };
    case r.NEWSLETTER:
      return {
        serverPart: r.NEWSLETTER,
        userPart: a[1]
      };
    case r.C_US:
      return {
        serverPart: r.C_US,
        userPart: a[1],
        devicePart: a[3]
      };
    case r.S_WHATSAPP_NET:
      return {
        serverPart: r.S_WHATSAPP_NET,
        userPart: a[1],
        devicePart: a[3]
      };
    case r.LID:
      return {
        serverPart: r.LID,
        userPart: a[1],
        devicePart: a[3]
      };
    case r.MSGR:
      return {
        serverPart: r.LID,
        userPart: a[1],
        devicePart: a[2]
      };
  }
  return null;
};
exports.validateWid = function (e) {
  if (e == null) {
    return false;
  }
  const t = e.match(/(.*)@(.*)/);
  if (t == null) {
    return e === "call" || e === "s.whatsapp.net";
  }
  const n = t[1];
  const r = t[2];
  if (d[r] == null) {
    return false;
  }
  return d[r].test(n);
};
const r = require("../vendor/76672.js")({
  BROADCAST: "broadcast",
  CALL: "call",
  C_US: "c.us",
  G_US: "g.us",
  LID: "lid",
  MSGR: "msgr",
  S_WHATSAPP_NET: "s.whatsapp.net",
  NEWSLETTER: "newsletter"
});
exports.Domains = r;
const i = /[0-9]{1,2}/;
const a = /0/;
const o = /[1-9][0-9]{0,19}/;
const s = /(?!10)[1-9][0-9]{4,19}/;
const l = new RegExp(`^(${s.source}[-]${/[1-9][0-9]{9}/.source}$|^${o.source})$`);
const u = new RegExp(`^(${o.source}$|${["status", "location", "chat"].map(e => "^" + e + "$").join("|")})`, "i");
const c = new RegExp(`^(0$|^${s.source})([.]${a.source})?(?:[:](${i.source}))?$`);
const d = {
  broadcast: u,
  call: /^([0-9a-f]{18,32})$/i,
  "c.us": c,
  "g.us": l,
  lid: new RegExp(`^(${/[1-9][0-9]{0,14}/.source})([.]${a.source})?(?:[:](${i.source}))?$`),
  msgr: new RegExp(`^(${o.source})(?:[:](${/[1-9][0-9]{0,2}/.source}))?$`),
  "s.whatsapp.net": c,
  newsletter: new RegExp(`^(${o.source})$`)
};