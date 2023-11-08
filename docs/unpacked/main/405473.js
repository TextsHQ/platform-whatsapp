var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToDirectoryNewsletter = function () {
  return D.apply(this, arguments);
};
exports.subscribeToNewsletter = function () {
  return k.apply(this, arguments);
};
exports.subscribeToNewsletterAction = P;
var r = a(require("../vendor/348926.js"));
var o = require("../app/418987.js");
var l = require("../app/927531.js");
var i = require("./949359.js");
var u = require("../app/293056.js");
var s = require("../app/678794.js");
var c = require("../app/21645.js");
var d = require("../app/509169.js");
var f = require("../app/309570.js");
var p = require("../app/549142.js");
var m = require("../app/73225.js");
var h = require("../app/380137.js");
var g = require("../app/787671.js");
var E = require("../app/425280.js");
var v = require("../app/718561.js");
var _ = require("./418783.js");
var y = require("../app/251309.js");
var C = require("../app/108803.js");
var b = require("./190539.js");
var M = require("../app/625786.js");
var S = require("../app/390737.js");
var T = require("../app/991547.js");
var w = require("../vendor/548360.js");
var A = a(require("../vendor/667294.js"));
function P(e, t) {
  let {
    eventSurface: n
  } = t;
  return f.newsletterSubscribeQueue.enqueue((0, r.default)(function* () {
    const {
      newsletterMetadata: t
    } = e;
    if (!e.isNewsletter || t == null) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletters][subscribeToNewsletterAction] called with a non-newsletter chat`;
      return void SEND_LOGS("subscribe-to-not-a-newsletter", 1, "newsletter");
    }
    d.NewsletterCoreEventLogger.log({
      cid: e.id,
      eventSurface: n,
      channelCoreEventType: T.CHANNEL_EVENT_TYPE.FOLLOW
    });
    const a = (0, o.toNewsletterJid)(e.id.toJid());
    try {
      var r;
      var i;
      yield (0, _.subscribeToNewsletter)(a);
      e.t = (r = (i = e.msgs.last()) === null || i === undefined ? undefined : i.t) !== null && r !== undefined ? r : t.creationTime;
      t.membershipType = l.NewsletterMembershipType.Subscriber;
      yield (0, g.updateNewsletterMetadata)((0, v.createNewsletterMetadataObjectForStorage)(t));
      yield (0, y.addNewsletterMsgsRecords)(e.msgs.map(s.msgDataFromMsgModel));
      if ((0, m.isNewsletterReactionEnabled)()) {
        yield (0, h.getMyNewsletterAddOnsJob)({
          count: 5000,
          newsletterJid: a
        });
        yield (0, b.storeNewsletterMessageAddOns)(e.msgs.toArray());
      }
      yield (0, C.updateNewsletterChatRecords)([(0, u.createNewsletterObjectForStorage)(e)]);
      yield p.NewsletterBridgeApi.subscribeToNewsletter({
        newsletter: e
      });
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletters][subscribeToNewsletterAction] Failed to subscribe`;
      SEND_LOGS("newsletter-failed-to-subscribe", 1, "newsletter");
      throw e;
    }
  }));
}
function O(e) {
  S.ToastManager.open(A.default.createElement(M.Toast, {
    msg: e
  }));
}
function k() {
  return (k = (0, r.default)(function* (e, t) {
    let {
      eventSurface: n
    } = t;
    try {
      yield P(e, {
        eventSurface: n
      });
      O(w.fbt._("Following {channel_name}", [w.fbt._param("channel_name", A.default.createElement(c.Name, {
        chat: e
      }))], {
        hk: "23cDt9"
      }));
    } catch (e) {
      if (e.status === 419) {
        O(w.fbt._("This channel has reached the follower limit. Please try again later.", null, {
          hk: "1Ow70P"
        }));
      } else if (e.status === 405) {
        O(w.fbt._("This channel is closed to new followers. Try again later.", null, {
          hk: "48ujCd"
        }));
      } else if (e.status === 451) {
        O(yield (0, i.getGeosuspendedInYourCountryString)());
      } else {
        O(w.fbt._("Couldn't follow this channel. Please try again later.", null, {
          hk: "4eqM2y"
        }));
      }
    }
  })).apply(this, arguments);
}
function D() {
  return (D = (0, r.default)(function* (e, t) {
    let {
      eventSurface: n
    } = t;
    const {
      newsletterMetadata: a
    } = e;
    if ((a == null ? undefined : a.isPreview) === true) {
      if (e.msgs.length === 0) {
        yield (0, E.pullNewsletterMessagesFromServer)(e, {
          messageCount: 1
        });
      }
      yield P(e, {
        eventSurface: n
      });
    }
  })).apply(this, arguments);
}