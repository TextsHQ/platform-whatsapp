var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadMoreMessages = function (e) {
  let {
    direction: t,
    loadMoreMsgs: n,
    isLoadingEarlierMsgs: a,
    isLoadingRecentMsgs: f,
    isLoadingAroundMsgs: p,
    isRepairingMsgHistory: m,
    mdHistorySyncTransferState: h,
    chatId: g
  } = e;
  const E = t === "earlier" && a || t === "recent" && f || t === "around" && p || m;
  let v;
  let _;
  let y;
  if (E) {
    v = u.default.createElement(l.Spinner, {
      stroke: 6,
      size: 24,
      color: "highlight"
    });
    _ = i.fbt._("loading messages…", null, {
      hk: "hdje2"
    });
  } else {
    if (h != null && !E) {
      return u.default.createElement(r.HistorySyncLoadMoreMessages, {
        mdHistorySyncTransferState: h,
        chatId: g
      });
    }
    switch (t) {
      case "earlier":
        _ = i.fbt._("load earlier messages…", null, {
          hk: "4CJzGf"
        });
        break;
      case "recent":
        _ = i.fbt._("load recent messages…", null, {
          hk: "2LTs5T"
        });
        break;
      default:
        _ = i.fbt._("loading messages…", null, {
          hk: "hdje2"
        });
    }
    v = u.default.createElement(o.RefreshIcon, null);
    y = n;
  }
  return u.default.createElement("div", {
    className: (0, s.default)(c)
  }, u.default.createElement("div", {
    className: (0, s.default)(d),
    title: _,
    onClick: y
  }, v));
};
var r = require("./780250.js");
var o = require("./129572.js");
var l = require("../app/956113.js");
var i = require("../vendor/548360.js");
var u = a(require("../vendor/667294.js"));
var s = a(require("../app/156720.js"));
const c = {
  display: "p357zi0d",
  flex: "kk3akd72",
  justifyContent: "ac2vgrno",
  paddingTop: "i5tg98hk",
  paddingEnd: "f9ovudaz",
  paddingBottom: "lzi2pvmc",
  paddingStart: "gx1rr48f"
};
const d = {
  display: "p357zi0d",
  alignItems: "gndfcl4n",
  justifyContent: "ac2vgrno",
  width: "hj839x6e",
  height: "rd228egi",
  marginTop: "tt8xd2xn",
  marginEnd: "k1jo73ug",
  marginBottom: "mpdn4nr2",
  marginStart: "isfiuinm",
  color: "t3rh7lfs",
  backgroundColor: "ihvf49ua",
  borderTopStartRadius: "g9p5wyxn",
  borderTopEndRadius: "i0tg5vk9",
  borderBottomEndRadius: "aoogvgrq",
  borderBottomStartRadius: "o2zu3hjb",
  boxShadow: "e6ckhcgy"
};