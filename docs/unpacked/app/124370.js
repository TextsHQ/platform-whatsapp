Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPSACampaigns = i;
exports.getPsaCampaignIndex = function (e, t) {
  if (t.length === 0) {
    return -1;
  }
  let n = 0;
  let r = t[0].campaignId;
  for (let i = 1; i < t.length; i++) {
    const {
      id: a,
      campaignId: o
    } = t[i];
    if (r !== o) {
      r = o;
      n = 0;
    } else {
      n++;
    }
    if (a.toString() === e.toString()) {
      return n;
    }
  }
  return -1;
};
exports.getPsaCampaignsString = function (e) {
  const t = i(e);
  const n = [];
  Object.keys(t).forEach(e => {
    const r = t[e];
    const {
      numberOfStatus: i,
      numberOfReadStatus: a
    } = r;
    n.push(`${e}:${i - a}`);
  });
  return n.join(",");
};
exports.isCampaignExpired = a;
exports.isExpiredStatusPSA = function (e, t) {
  const n = i(e);
  return Object.keys(n).every(e => a(n[e], t));
};
var r = require("./632157.js");
function i(e) {
  const t = {};
  e.forEach(e => {
    let {
      t: n,
      campaignId: r,
      campaignDuration: i,
      statusPSAReadTimestamp: a
    } = e;
    if (!r) {
      return;
    }
    if (!t[r]) {
      t[r] = {
        id: r,
        t: n,
        duration: i,
        firstReadTimestamp: null,
        numberOfStatus: 0,
        numberOfReadStatus: 0
      };
    }
    const o = t[r];
    o.numberOfStatus++;
    if (a != null) {
      o.numberOfReadStatus++;
      if (o.firstReadTimestamp == null || a < o.firstReadTimestamp) {
        o.firstReadTimestamp = a;
      }
    }
  });
  return t;
}
function a(e, t) {
  const n = e.firstReadTimestamp;
  if (n != null) {
    return (0, r.unixTime)() - n > t;
  }
  const i = e.duration;
  return i != null && (0, r.unixTime)() - e.t > i;
}