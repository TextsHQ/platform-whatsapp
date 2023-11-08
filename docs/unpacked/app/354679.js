Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  !function (e, t) {
    Object.keys(t).forEach(n => {
      if (t.hasOwnProperty(n)) {
        e.addPersistedJobImplementation(n, t[n]);
      }
    });
  }(e, {
    rotateKey: () => require.e(2266).then(require.bind(require, 322266)).then(e => e.rotateKey),
    setAbout: () => require.e(5346).then(require.bind(require, 755346)).then(e => e.setAbout),
    setTextStatus: () => require.e(9159).then(require.bind(require, 559159)).then(e => e.setTextStatus),
    queryProductList: () => require.e(432).then(require.bind(require, 970432)).then(e => e.QueryProductListCatalog),
    getPublicKey: () => require.e(648).then(require.bind(require, 720648)).then(e => e.QueryGetPublicKey),
    getSignedUserInfo: () => require.e(6086).then(require.bind(require, 66086)).then(e => e.QueryGetSignedUserInfo),
    verifyPostcode: () => require.e(4944).then(require.bind(require, 144944)).then(e => e.VerifyPostcode),
    deleteReactions: () => require.e(6235).then(require.bind(require, 116235)).then(e => e.deleteReactions),
    deleteReactionsV2: () => require.e(4106).then(require.bind(require, 254106)).then(e => e.deleteReactionsV2),
    deleteAddOns: () => require.e(4106).then(require.bind(require, 254106)).then(e => e.deleteAddOns),
    sendRequestedKeyShare: () => require.e(4548).then(require.bind(require, 864548)).then(e => e.sendRequestedKeyShare),
    dismissQuickPromotion: () => Promise.all([require.e(2997), require.e(4018)]).then(require.bind(require, 634018)).then(e => e.dismissQuickPromotion),
    primaryActionClickInQuickPromotion: () => Promise.all([require.e(2997), require.e(675)]).then(require.bind(require, 220675)).then(e => e.primaryActionClickInQuickPromotion),
    impressionOnQuickPromotion: () => Promise.all([require.e(2997), require.e(9916)]).then(require.bind(require, 219916)).then(e => e.impressionOnQuickPromotion),
    userExposureToQuickPromotion: () => Promise.all([require.e(2997), require.e(3405)]).then(require.bind(require, 123405)).then(e => e.userExposureToQuickPromotion)
  });
};