var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterMetadataUpdateEntryPoint = undefined;
exports.processDeletedNewsletters = k;
exports.processUnsubscribedNewsletters = U;
exports.queryAndUpdateAllNewsletterMetadataAction = function () {
  return N.apply(this, arguments);
};
exports.queryAndUpdateNewsletterMetadataAction = function () {
  return D.apply(this, arguments);
};
exports.updateCollections = w;
var i = r(require("../vendor/348926.js"));
var a = require("./984330.js");
var o = require("./927531.js");
var s = require("./177938.js");
var l = require("./710310.js");
var u = require("./293056.js");
var c = require("./421324.js");
var d = require("./549142.js");
var p = r(require("./358533.js"));
var f = require("./362626.js");
var _ = require("./73225.js");
var g = require("./548329.js");
var m = require("./280635.js");
var h = require("./532583.js");
var y = require("./751460.js");
var E = r(require("./876319.js"));
var S = require("./787671.js");
var v = require("./14291.js");
var T = require("./425280.js");
var M = require("./718561.js");
var A = require("./787111.js");
var b = require("./108803.js");
var C = require("./446474.js");
var P = require("./61229.js");
var O = require("./669050.js");
function I(e) {
  return e != null && Number.isInteger(e) && e > 0;
}
const R = require("../vendor/76672.js").Mirrored(["Bootstrap", "DirtyBit", "Debug"]);
function N() {
  return (N = (0, i.default)(function* (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    __LOG__(2)`[newsletters][queryAndUpdateAllNewsletterMetadataAction] Start`;
    const {
      messageCount: n,
      addSystemMsgs: r,
      qplEvent: i
    } = t != null ? t : {};
    try {
      if (!(i == null)) {
        i.annotate({
          string: {
            entryPoint: e
          }
        });
      }
      if (!(i == null)) {
        i.addPoint("getAllNewslettersMetadata_start");
      }
      const {
        newsletters: t,
        deletedNewsletters: a
      } = yield (0, S.getAllNewslettersMetadata)();
      const {
        chats: o,
        metadata: s,
        pics: l
      } = t.reduce((e, t) => {
        var n;
        e.chats.push((0, v.mapNewsletterToChat)(t));
        e.metadata.push((0, v.mapNewsletterToMetadata)(t));
        const r = (n = t.newsletterPictureMetadataMixin) === null || n === undefined ? undefined : n.picture;
        if (r != null) {
          e.pics.push((0, v.mapPicturesToProfilePicThumb)(t.idJid, r));
        }
        return e;
      }, {
        chats: [],
        metadata: [],
        pics: []
      });
      if (!(i == null)) {
        i.addPoint("getAllNewslettersMetadata_end");
      }
      if (!(i == null)) {
        i.addPoint("processDeletedNewsletters_start");
      }
      yield k(a);
      if (!(i == null)) {
        i.addPoint("processDeletedNewsletters_end");
      }
      const u = t.map(e => e.idJid).concat(...((a == null ? undefined : a.id) || []).map(e => e.jid));
      if (e === R.DirtyBit) {
        if (!(i == null)) {
          i.addPoint("processUnsubscribedNewsletters_start");
        }
        yield U(u);
        if (!(i == null)) {
          i.addPoint("processUnsubscribedNewsletters_end");
        }
      }
      __LOG__(2)`[newsletters][queryAndUpdateAllNewsletterMetadataAction] Update local model`;
      yield w({
        chats: o,
        metadata: s,
        pics: l,
        messageCount: n,
        addSystemMsgs: r,
        qplEvent: i
      });
      if ((0, _.isNewsletterMessageDeliveryUpdatesEnabled)() && (0, _.isNewsletterGeosuspendEnabled)() && (0, _.isNewsletterGeosuspendAdminAlertsEnabled)()) {
        if (!(i == null)) {
          i.addPoint("processIntegrityUpdates_start");
        }
        yield Promise.all(s.map(e => {
          if ((0, y.iAmAdminOrOwner)(e)) {
            (0, m.getIntegrityUpdatesAction)((0, O.createWid)(e.id.toString()));
          }
        }));
        if (!(i == null)) {
          i.addPoint("processIntegrityUpdates_end");
        }
      } else if ((0, _.isNewsletterMessageDeliveryUpdatesEnabled)()) {
        if (!(i == null)) {
          i.addPoint("processDeliveryUpdates_start");
        }
        yield Promise.all(s.map(e => {
          if ((0, y.iAmAdminOrOwner)(e)) {
            (0, h.getMessageDeliveryUpdatesAction)((0, O.createWid)(e.id.toString()));
          }
        }));
        if (!(i == null)) {
          i.addPoint("processDeliveryUpdates_end");
        }
      } else if ((0, _.isNewsletterGeosuspendEnabled)() && (0, _.isNewsletterGeosuspendAdminAlertsEnabled)()) {
        if (!(i == null)) {
          i.addPoint("processGeosuspensions_start");
        }
        yield Promise.all(s.map(e => {
          if ((0, y.iAmAdminOrOwner)(e)) {
            (0, g.getGeoSuspendedCountriesAction)((0, O.createWid)(e.id.toString()));
          }
        }));
        if (!(i == null)) {
          i.addPoint("processGeosuspensions_end");
        }
      }
      __LOG__(2)`[newsletters][queryAndUpdateAllNewsletterMetadataAction] End`;
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][queryAndUpdateAllNewsletterMetadataAction] Failed to retrieve the list of newsletters`;
      SEND_LOGS("newsletter-failed-to-retrieve-newsletters", 1, "newsletter");
    }
  })).apply(this, arguments);
}
function D() {
  return (D = (0, i.default)(function* (e, t) {
    __LOG__(2)`[newsletters][queryAndUpdateNewsletterMetadataAction] Start`;
    try {
      var n;
      const r = (0, v.getRoleByIdentifier)(e);
      const i = yield (0, S.getNewsletterMetadata)(e, r, t == null ? undefined : t.fields);
      if (i == null) {
        return;
      }
      const a = (0, v.mapNewsletterToChat)(i);
      const o = (0, v.mapNewsletterToMetadata)(i);
      const s = (n = i.newsletterPictureMetadataMixin) === null || n === undefined ? undefined : n.picture;
      const l = s ? [(0, v.mapPicturesToProfilePicThumb)(e, s)] : [];
      yield w({
        chats: [a],
        metadata: [o],
        pics: l,
        messageCount: t == null ? undefined : t.messageCount
      });
      __LOG__(2)`[newsletters][queryAndUpdateNewsletterMetadataAction] End`;
      return p.default.get(i.idJid);
    } catch (e) {
      if (e instanceof a.ServerStatusCodeError && e.statusCode === 405) {
        return;
      }
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][queryAndUpdateNewsletterMetadataAction] Failed to retrieve newsletter metadata`;
      SEND_LOGS("newsletter-failed-to-retrieve-newsletter", 1, "newsletter");
    }
  })).apply(this, arguments);
}
function w() {
  return L.apply(this, arguments);
}
function L() {
  return (L = (0, i.default)(function* (e) {
    let {
      chats: t,
      metadata: n,
      pics: r,
      messageCount: i,
      addSystemMsgs: a,
      qplEvent: o
    } = e;
    __LOG__(2)`[newsletters][updateCollections] Start`;
    const {
      filteredChats: d,
      filteredMetadata: f,
      filteredPics: _
    } = B(t, n, r);
    if (!(o == null)) {
      o.addPoint("updateNewsletterChatRecords_start");
    }
    yield (0, b.updateNewsletterChatRecords)(d.map(u.createNewsletterObjectForStorage));
    if (!(o == null)) {
      o.addPoint("updateNewsletterChatRecords_end");
    }
    __LOG__(2)`[newsletters][updateCollections][chat] Persist changes to DB`;
    if (!(o == null)) {
      o.addPoint("updateNewsletterMetadata_start");
    }
    yield (0, S.updateNewsletterMetadata)(f.map(M.createNewsletterMetadataObjectForStorage));
    if (!(o == null)) {
      o.addPoint("updateNewsletterMetadata_end");
    }
    __LOG__(2)`[newsletters][updateCollections][metadata] Persist changes to DB`;
    if (!(o == null)) {
      o.addPoint("bulkPersistProfilePicChanges_start");
    }
    yield (0, c.bulkPersistProfilePicChanges)(_.map(e => {
      var t;
      var n;
      var r;
      var i;
      if (!e.hasOwnProperty("eurl")) {
        return;
      }
      const a = (0, O.createWid)(e.id.toString());
      return (0, l.mapProfilePictureToProfilePicThumbRowType)(a, {
        id: a,
        tag: (t = e.tag) !== null && t !== undefined ? t : undefined,
        eurl: (n = e.eurl) !== null && n !== undefined ? n : undefined,
        previewEurl: (r = e.previewEurl) !== null && r !== undefined ? r : undefined,
        stale: e.stale,
        eurlStale: false,
        timestamp: (i = e.timestamp) !== null && i !== undefined ? i : Date.now()
      });
    }).filter(Boolean));
    if (!(o == null)) {
      o.addPoint("bulkPersistProfilePicChanges_end");
    }
    __LOG__(2)`[newsletters][updateCollections][picture] Persist changes to DB`;
    __LOG__(2)`[newsletters][queryAndUpdateAllNewsletterMetadataAction] Update local model`;
    E.default.add(n, {
      merge: true
    });
    C.ProfilePicThumbCollection.add(r, {
      merge: true
    });
    p.default.add(t, {
      merge: true
    });
    if (!(o == null)) {
      o.addPoint("pullNewsletterMessagesFromServer_start");
    }
    __LOG__(2)`[newsletters][queryAndUpdateAllNewsletterMetadataAction][messages] Start`;
    if (I(i)) {
      yield Promise.all(p.default.filter(e => {
        var t;
        return !((t = e.newsletterMetadata) === null || t === undefined ? undefined : t.isSuspendedOrTerminated);
      }).map(e => (0, T.pullNewsletterMessagesFromServer)(e, {
        messageCount: i,
        resetUnreadCount: true
      }).then(t => {
        if (t.length === 0 && a === true) {
          return (0, A.addSystemMessagesToChat)(e);
        }
      }).catch(() => {})));
    }
    if (!(o == null)) {
      o.addPoint("pullNewsletterMessagesFromServer_end");
    }
    __LOG__(2)`[newsletters][queryAndUpdateAllNewsletterMetadataAction][messages] End`;
    if (!(o == null)) {
      o.addPoint("contactUpdates_start");
    }
    const g = n.filter(e => e.name).map(e => ({
      id: e.id,
      name: e.name
    }));
    s.ContactCollection.add(g, {
      merge: true
    });
    if (!(o == null)) {
      o.addPoint("contactUpdates_end");
    }
  })).apply(this, arguments);
}
function k() {
  return G.apply(this, arguments);
}
function G() {
  return (G = (0, i.default)(function* (e) {
    if (e == null) {
      return;
    }
    const t = e.id.map(e => ({
      id: e.jid.toString(),
      terminated: true
    }));
    const n = e.id.map(e => ({
      id: (0, O.createWid)(e.jid),
      terminated: true
    }));
    yield (0, S.updateNewsletterMetadata)(t);
    E.default.add(n, {
      merge: true
    });
  })).apply(this, arguments);
}
function U() {
  return x.apply(this, arguments);
}
function x() {
  return (x = (0, i.default)(function* (e) {
    const t = (yield (0, P.getChatTable)().all()).map(e => (0, O.createWid)(e.id)).filter(t => t.isNewsletter() && !e.includes(t.toJid()));
    const n = [];
    t.map(e => {
      n.push(d.NewsletterBridgeApi.deleteNewsletter({
        id: e,
        keep: false
      }));
      n.push((0, S.deleteNewsletterMetadata)(e.toString()));
      n.push((0, f.deleteNewsletterChat)(e));
      n.push((0, S.deleteNewsletterPicture)(e.toString()));
    });
    yield Promise.all(n);
  })).apply(this, arguments);
}
function B(e, t, n) {
  const r = t.filter(e => {
    if (e.membershipType != null) {
      return e.membershipType === o.NewsletterMembershipType.Guest;
    }
    const t = E.default.get(e.id);
    return t != null && t.membershipType === o.NewsletterMembershipType.Guest;
  }).map(e => e.id);
  return {
    filteredChats: e.filter(e => !r.includes(e.id)),
    filteredMetadata: t.filter(e => !r.includes(e.id)),
    filteredPics: n.filter(e => !r.includes(e.id))
  };
}
exports.NewsletterMetadataUpdateEntryPoint = R;