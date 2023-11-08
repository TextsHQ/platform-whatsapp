var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  return (0, f.getChatTable)().bulkCreateOrMerge(e.map(e => {
    const {
      pendingInitialLoading: t,
      disappearingModeInitiator: n,
      disappearingModeTrigger: r
    } = e;
    const o = (0, a.default)(e, _);
    const s = (0, i.default)((0, i.default)((0, i.default)({}, o), {}, {
      id: e.id.toString(),
      muteExpiration: 0,
      isAutoMuted: false
    }, g(o)), {}, {
      endOfHistoryTransferType: e.endOfHistoryTransferType
    });
    if (n != null) {
      s.disappearingModeInitiator = n;
    }
    if (r != null) {
      s.disappearingModeTrigger = r;
    }
    return s;
  })).then(() => (0, l.frontendSendAndReceive)("chatCollectionAdd", {
    things: e.map(e => (0, i.default)((0, i.default)((0, i.default)({}, e), g(e)), {}, {
      endOfHistoryTransferType: u.ConversationEndOfHistoryTransferModelPropType.cast(e.endOfHistoryTransferType)
    })),
    options: {
      merge: true
    }
  })).then(() => {
    if (!(d.Conn.platform !== p.PLATFORMS.IPHONE && d.Conn.platform !== p.PLATFORMS.SMBI)) {
      if ((0, o.default)(e)) {
        (0, l.frontendFireAndForget)("msgCollectionTrigger", {
          name: c.COLLECTION_HAS_SYNCED
        });
      } else {
        self.setTimeout(() => {
          (0, l.frontendFireAndForget)("msgCollectionTrigger", {
            name: c.COLLECTION_HAS_SYNCED
          });
        }, 2500);
      }
    }
    (0, l.frontendFireAndForget)("chatCollectionTrigger", {
      name: c.COLLECTION_HAS_SYNCED,
      args: {
        count: e.length
      }
    });
  });
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/506479.js"));
var o = r(require("../vendor/441609.js"));
var s = require("./229079.js");
var l = require("./359987.js");
var u = require("./735618.js");
var c = require("./292220.js");
var d = require("./445729.js");
var p = require("./94602.js");
var f = require("./61229.js");
const _ = ["pendingInitialLoading", "disappearingModeInitiator", "disappearingModeTrigger"];
function g(e) {
  return {
    ephemeralSettingTimestamp: (0, s.maybeNumberOrThrowIfTooLarge)(e.ephemeralSettingTimestamp),
    tcTokenSenderTimestamp: (0, s.maybeNumberOrThrowIfTooLarge)(e.tcTokenSenderTimestamp),
    tcTokenTimestamp: (0, s.maybeNumberOrThrowIfTooLarge)(e.tcTokenTimestamp)
  };
}