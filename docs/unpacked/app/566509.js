Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageSendPerfReporter = undefined;
var r = require("./219364.js");
var i = require("./790215.js");
var a = require("./434085.js");
var o = require("./718451.js");
var s = require("./147402.js");
exports.MessageSendPerfReporter = class {
  constructor(e) {
    let {
      chatWid: t,
      mediaType: n,
      messageType: r
    } = e;
    this._isRevokeMessage = false;
    this._isDirectedMessage = false;
    this._groupData = null;
    this._messageIsInvisible = false;
    this._messageIsFirstUserMessage = false;
    this._startTime = Date.now();
    this._stagesMap = new Map();
    this._mediaType = n;
    this._messageType = r;
    this._chatWid = t;
  }
  setFetchedPrekeyCount(e) {
    this._fetchedPrekeyCount = e;
  }
  setSenderKeyDistributionCount(e) {
    this._senderKeyDistributionCount = e;
  }
  setMessageIsInvisible(e) {
    this._messageIsInvisible = e;
  }
  setMessageIsFirstUserMessage(e) {
    this._messageIsFirstUserMessage = e;
  }
  setIsRevokeMessage(e) {
    this._isRevokeMessage = e;
  }
  setIsDirectedMessage(e) {
    this._isDirectedMessage = e;
  }
  setGroupData(e) {
    this._groupData = e;
  }
  startRenderedStage() {
    this._start(a.CLIENT_MESSAGE_SEND_STAGE.CLIENT_RENDERED);
  }
  postRenderedStage() {
    this._post(a.CLIENT_MESSAGE_SEND_STAGE.CLIENT_RENDERED);
  }
  startSavedStage() {
    this._start(a.CLIENT_MESSAGE_SEND_STAGE.CLIENT_SAVED);
  }
  postSavedStage() {
    this._post(a.CLIENT_MESSAGE_SEND_STAGE.CLIENT_SAVED);
  }
  startPrekeysFetchStage() {
    this._start(a.CLIENT_MESSAGE_SEND_STAGE.CLIENT_PREKEYS_FETCH);
  }
  postPrekeysFetchStage() {
    this._post(a.CLIENT_MESSAGE_SEND_STAGE.CLIENT_PREKEYS_FETCH);
  }
  startWrittenWireStage() {
    this._start(a.CLIENT_MESSAGE_SEND_STAGE.CLIENT_WRITTEN_WIRE);
  }
  postWrittenWireStage() {
    this._post(a.CLIENT_MESSAGE_SEND_STAGE.CLIENT_WRITTEN_WIRE);
  }
  startWaitingToEncryptStage() {
    this._start(a.CLIENT_MESSAGE_SEND_STAGE.CLIENT_WAITING_TO_ENCRYPT);
  }
  postWaitingToEncryptStage() {
    this._post(a.CLIENT_MESSAGE_SEND_STAGE.CLIENT_WAITING_TO_ENCRYPT);
  }
  startReadyToSendStage() {
    this._start(a.CLIENT_MESSAGE_SEND_STAGE.CLIENT_READY_TO_SEND);
  }
  postReadyToSendStage() {
    this._post(a.CLIENT_MESSAGE_SEND_STAGE.CLIENT_READY_TO_SEND);
  }
  startClientEncryptStage() {
    this._start(a.CLIENT_MESSAGE_SEND_STAGE.CLIENT_ENCRYPT);
  }
  postClientEncryptStage() {
    this._post(a.CLIENT_MESSAGE_SEND_STAGE.CLIENT_ENCRYPT);
  }
  _start(e) {
    const t = new r.AndroidMessageSendPerfWamEvent({
      sendStage: e
    });
    this._stagesMap.set(e, t);
    return t;
  }
  _post(e) {
    var t;
    var n;
    var r;
    var a;
    var l;
    const u = this._stagesMap.get(e) || this._start(e);
    u.mediaType = this._mediaType;
    u.messageType = this._messageType;
    u.messageIsInvisible = this._messageIsInvisible;
    u.messageIsFirstUserMessage = this._messageIsFirstUserMessage;
    u.durationRelative = Date.now() - this._startTime;
    u.fetchPrekeys = this._fetchedPrekeyCount != null && this._fetchedPrekeyCount > 0;
    u.isRevokeMessage = this._isRevokeMessage;
    u.isDirectedMessage = this._isDirectedMessage;
    if (((t = this._groupData) === null || t === undefined ? undefined : t.isLid) != null) {
      u.isLid = this._groupData.isLid;
    } else if (this._messageType === o.MESSAGE_TYPE.INDIVIDUAL) {
      u.isLid = this._chatWid.isLid();
    }
    if (((n = this._groupData) === null || n === undefined ? undefined : n.wamTypeOfGroup) != null) {
      u.typeOfGroup = this._groupData.wamTypeOfGroup;
    }
    if (((r = this._groupData) === null || r === undefined ? undefined : r.participantCount) != null) {
      u.participantCount = this._groupData.participantCount;
    }
    if (((a = this._groupData) === null || a === undefined ? undefined : a.deviceSizeBucket) != null) {
      u.deviceSizeBucket = this._groupData.deviceSizeBucket;
    }
    if (((l = this._groupData) === null || l === undefined ? undefined : l.deviceCount) != null) {
      const e = this._groupData.deviceCount;
      u.deviceCount = e;
      if (this._fetchedPrekeyCount != null && e > 0) {
        u.fetchPrekeysPercentage = Math.round(this._fetchedPrekeyCount / e * 100);
      }
      if (this._senderKeyDistributionCount != null && e > 0) {
        u.senderKeyDistributionCountPercentage = Math.round(this._senderKeyDistributionCount / e * 100);
      }
    }
    if (u.participantCount != null && u.participantCount > (0, i.getGroupSizeBypassingSampling)() || u.fetchPrekeysPercentage != null && u.fetchPrekeysPercentage >= 50 || u.messageIsFirstUserMessage) {
      u.weight = 0;
    } else if (u.senderKeyDistributionCountPercentage != null && u.senderKeyDistributionCountPercentage >= 50) {
      u.weight = 20;
    } else if (!(u.deviceSizeBucket !== s.SIZE_BUCKET.LT5000 && u.deviceSizeBucket !== s.SIZE_BUCKET.LARGEST_BUCKET)) {
      u.weight = 100;
    }
    u.markDurationAbs();
    u.commit();
  }
};