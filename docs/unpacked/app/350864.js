Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAds = function (e) {
  return (0, u.createNonPersistedJob)("fetchAds", () => function (e) {
    return (0, i.promiseTimeout)(function (e) {
      d.QPL.markerStart(c.QuickLogMarkerId.MANAGE_ADS_FETCH_ADS);
      d.QPL.markerPoint(c.QuickLogMarkerId.MANAGE_ADS_FETCH_ADS, "fetch_ads_start");
      return (0, l.fetchToken)().then(t => t.type === "success" ? function (e) {
        let {
          token: t,
          pageId: n
        } = e;
        const r = new FormData();
        r.append("access_token", t);
        r.append("doc_id", _);
        r.append("variables", JSON.stringify({
          pageID: n,
          options: {}
        }));
        const i = new Request(f, {
          method: "POST",
          body: r
        });
        return self.fetch(i).then(e => e.json()).then(e => {
          if (e == null || typeof e != "object") {
            return p;
          }
          const {
            data: t
          } = e;
          if (t == null || typeof t != "object") {
            return p;
          }
          const {
            ctwa: n
          } = t;
          if (n == null || typeof n != "object") {
            return p;
          }
          const {
            all_ctwa_ads: r
          } = n;
          if (r == null || typeof r != "object") {
            return p;
          }
          const {
            edges: i
          } = r;
          if (!Array.isArray(i)) {
            return p;
          }
          const a = i.reduce((e, t) => {
            var n;
            var r;
            var i;
            if (t == null || typeof t != "object") {
              return e;
            }
            const {
              node: a
            } = t;
            if (a == null || typeof a != "object") {
              return e;
            }
            const {
              wrapper_renderer: s
            } = a;
            if (s == null || typeof s != "object") {
              return e;
            }
            const {
              boosted_component: l
            } = s;
            if (l == null || typeof l != "object") {
              return e;
            }
            const {
              id: u,
              boosting_info: c,
              spec: d,
              campaign_group: p
            } = l;
            if (u == null || typeof u != "string") {
              return e;
            }
            if (c == null || typeof c != "object") {
              return e;
            }
            if (d == null || typeof d != "object") {
              return e;
            }
            if (p == null || typeof p != "object") {
              return e;
            }
            const {
              thumbnail_image_url: f,
              spent: _
            } = c;
            if (typeof f != "string") {
              return e;
            }
            if (_ == null || typeof _ != "object") {
              return e;
            }
            const {
              adgroup_spec: g,
              boosting_status: m
            } = d;
            if (!Array.isArray(g)) {
              return e;
            }
            if (typeof m != "string") {
              return e;
            }
            const {
              formatted_for_lwi: h
            } = _;
            if (typeof h != "string") {
              return e;
            }
            const {
              id: y
            } = p;
            if (typeof y != "string") {
              return e;
            }
            const E = function (e) {
              const {
                ad_insights: t
              } = e;
              if (t == null || typeof t != "object") {
                return;
              }
              const {
                edges: n
              } = t;
              if (!Array.isArray(n)) {
                return;
              }
              const r = n.reduce((e, t) => {
                if (t == null || typeof t != "object") {
                  return e;
                }
                const {
                  node: n
                } = t;
                if (n == null || typeof n != "object") {
                  return e;
                }
                const {
                  reach: r,
                  results: i
                } = n;
                if (!(typeof r != "number" || i != null && typeof i != "number")) {
                  e.push({
                    reach: r,
                    conversations: i != null ? i : 0
                  });
                }
                return e;
              }, []);
              if (r.length === 0) {
                return;
              }
              return r[0];
            }(p);
            const S = (n = E == null ? undefined : E.reach) !== null && n !== undefined ? n : 0;
            const v = (r = E == null ? undefined : E.conversations) !== null && r !== undefined ? r : 0;
            const T = {
              adId: (0, o.asAdId)(u),
              thumbnailUrl: f,
              boostingStatus: (i = o.BoostingStatusEnum.cast(m)) !== null && i !== undefined ? i : o.BoostingStatusEnum.UNKNOWN,
              budget: h,
              campaignGroupId: (0, o.asAdCampaignGroupId)(y),
              conversations: v,
              reach: S
            };
            const M = g[0];
            if (M != null && typeof M == "object") {
              const {
                creative: e
              } = M;
              if (e != null && typeof e == "object") {
                const {
                  body: t
                } = e;
                if (typeof t == "string") {
                  T.creativeText = t;
                }
              }
            }
            e.push(T);
            return e;
          }, []);
          if (a.length < i.length) {
            return p;
          } else {
            return {
              type: "success",
              ads: a
            };
          }
        }).catch(() => p);
      }({
        token: t.token,
        pageId: e
      }).then(e => {
        d.QPL.markerPoint(c.QuickLogMarkerId.MANAGE_ADS_FETCH_ADS, "fetch_ads_end");
        if (e.type !== "success") {
          d.QPL.markerEnd(c.QuickLogMarkerId.MANAGE_ADS_FETCH_ADS, a.QuickLogActionType.FAIL);
          (0, l.markTokenAsInvalid)();
        } else {
          e.type;
          d.QPL.markerEnd(c.QuickLogMarkerId.MANAGE_ADS_FETCH_ADS, a.QuickLogActionType.SUCCESS);
        }
        return e;
      }) : (t.type, t));
    }(e), s.MANAGE_ADS_FETCH_TIMEOUT_MS).catch(e => {
      if (e instanceof r.TimeoutError) {
        d.QPL.markerPoint(c.QuickLogMarkerId.MANAGE_ADS_FETCH_ADS, "fetch_ads_end");
        d.QPL.markerEnd(c.QuickLogMarkerId.MANAGE_ADS_FETCH_ADS, a.QuickLogActionType.ABORTED);
        __LOG__(3)`fetchAdsWithTimeout: timeout`;
        return {
          type: "timeout"
        };
      }
      throw e;
    });
  }(e)).waitUntilCompleted();
};
var r = require("./477689.js");
var i = require("./434517.js");
var a = require("./15842.js");
var o = require("./814052.js");
var s = require("./312158.js");
var l = require("./825185.js");
var u = require("./899137.js");
var c = require("./316348.js");
var d = require("./555622.js");
const p = {
  type: "error"
};
const f = "https://graph.facebook.com/graphql";
const _ = "7525037087522941";