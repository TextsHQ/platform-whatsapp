Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jobSerializers = undefined;
var r = require("./632157.js");
var i = require("./984330.js");
var a = require("./72696.js");
const o = {
  rotateKey: () => ({
    type: "rotateKey",
    args: {},
    uniqKey: "rotateKey"
  }),
  setAbout: e => ({
    type: "setAbout",
    args: {
      content: e
    },
    uniqKey: "setAbout"
  }),
  queryProductList(e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    let r = arguments.length > 3 ? arguments[3] : undefined;
    let o = arguments.length > 4 ? arguments[4] : undefined;
    if ((0, a.commerceFeaturesDisabledBySanctions)()) {
      throw new i.E451();
    }
    return {
      type: "queryProductList",
      args: {
        catalogWid: e.toString(),
        productIds: t,
        width: r,
        height: o,
        directConnectionEncryptedInfo: n
      },
      uniqKey: `queryProductList:${t.slice().sort().join(",")}:${r}:${o}`
    };
  },
  getPublicKey: e => ({
    type: "getPublicKey",
    args: {
      businessJid: e.toString()
    },
    uniqKey: `getPublicKey:${e.toString()}`
  }),
  getSignedUserInfo: e => ({
    type: "getSignedUserInfo",
    args: {
      businessJid: e.toString()
    },
    uniqKey: `getSignedUserInfo:${e.toString()}`
  }),
  verifyPostcode: (e, t) => ({
    type: "verifyPostcode",
    args: {
      businessJid: e.toString(),
      directConnectionEncryptedInfo: t
    },
    uniqKey: `verifyPostcode:${e.toString()}:${t}`
  }),
  deleteReactions: (e, t) => ({
    type: "deleteReactions",
    args: {
      chatId: e,
      parentMsgKeys: t
    },
    uniqKey: `deleteReactions:${e}`
  }),
  deleteReactionsV2: (e, t) => ({
    type: "deleteReactionsV2",
    args: {
      chatId: e,
      parentMsgKeys: t
    }
  }),
  deleteAddOns: (e, t) => ({
    type: "deleteAddOns",
    args: {
      chatId: e,
      parentMsgKeys: t
    }
  }),
  sendRequestedKeyShare: (e, t, n) => ({
    type: "sendRequestedKeyShare",
    args: {
      keys: e,
      orphanKeys: t,
      peerDeviceId: n.toString()
    }
  }),
  dismissQuickPromotion(e) {
    const t = (0, r.unixTime)();
    return {
      type: "dismissQuickPromotion",
      args: {
        id: e,
        ts: t
      },
      uniqKey: `dismissQuickPromotion-${e}-${t}`
    };
  },
  primaryActionClickInQuickPromotion(e) {
    const t = (0, r.unixTime)();
    return {
      type: "primaryActionClickInQuickPromotion",
      args: {
        id: e,
        ts: t
      },
      uniqKey: `primaryActionClickInQuickPromotion-${e}-${t}`
    };
  },
  impressionOnQuickPromotion(e) {
    const t = (0, r.unixTime)();
    return {
      type: "impressionOnQuickPromotion",
      args: {
        id: e,
        ts: t
      },
      uniqKey: `impressionOnQuickPromotion-${e}-${t}`
    };
  },
  userExposureToQuickPromotion(e, t) {
    const n = (0, r.unixTime)();
    return {
      type: "userExposureToQuickPromotion",
      args: {
        id: e,
        ts: n,
        experimentKey: t
      },
      uniqKey: `userExposureToQuickPromotion-${e}-${n}`
    };
  },
  setTextStatus: (e, t, n, r) => ({
    type: "setTextStatus",
    args: {
      id: e,
      text: t,
      emoji: n,
      ephemeralDurationSeconds: r
    },
    uniqKey: "setTextStatus"
  })
};
exports.jobSerializers = o;