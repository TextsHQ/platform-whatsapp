var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UiCommunityCreationAction = undefined;
exports.getDeeplinkEntrypointType = function (e) {
  switch (e) {
    case "banner":
      return u.COMMUNITY_CREATION_ENTRYPOINT_TYPE.DEEP_LINK_BANNER;
    case "channel":
      return u.COMMUNITY_CREATION_ENTRYPOINT_TYPE.DEEP_LINK_CHANNEL;
    case "psa":
      return u.COMMUNITY_CREATION_ENTRYPOINT_TYPE.DEEP_LINK_PSA;
    case "chat":
      return u.COMMUNITY_CREATION_ENTRYPOINT_TYPE.DEEP_LINK_CHAT;
    default:
      return u.COMMUNITY_CREATION_ENTRYPOINT_TYPE.DEEP_LINK;
  }
};
var r = require("./129323.js");
var o = a(require("../app/243957.js"));
var l = require("./923907.js");
var i = require("./135516.js");
var u = require("./909588.js");
const s = new class {
  _commitAction(e) {
    let {
      actionCount: t,
      actionTaken: n,
      currentScreen: a,
      communityId: o
    } = e;
    const l = new r.CommunityCreationWamEvent({
      communityCreationSessionId: this._sessionId,
      communityCreationActionTaken: n,
      communityCreationCurrentScreen: a,
      communityCreationActionCount: t,
      communityId: o
    });
    if (this._entryPoint != null) {
      l.communityCreationEntrypoint = this._entryPoint;
    }
    l.commit();
  }
  startSession(e) {
    this._sessionId = (0, o.default)();
    this._entryPoint = e;
  }
  _endSession() {
    this.startSession();
  }
  enter(e) {
    this._commitAction({
      actionTaken: l.COMMUNITY_CREATION_ACTION_TAKEN_TYPE.ENTER,
      currentScreen: e
    });
  }
  getStarted() {
    this._commitAction({
      actionTaken: l.COMMUNITY_CREATION_ACTION_TAKEN_TYPE.GET_STARTED,
      currentScreen: i.COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_NUX
    });
  }
  dismiss() {
    this._commitAction({
      actionTaken: l.COMMUNITY_CREATION_ACTION_TAKEN_TYPE.DISMISS,
      currentScreen: i.COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_NUX
    });
  }
  next() {
    this._commitAction({
      actionTaken: l.COMMUNITY_CREATION_ACTION_TAKEN_TYPE.NEXT,
      currentScreen: i.COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_INFO
    });
  }
  createGroup(e, t) {
    this._commitAction({
      actionTaken: l.COMMUNITY_CREATION_ACTION_TAKEN_TYPE.CREATE_GROUP,
      actionCount: e,
      currentScreen: t
    });
  }
  linkGroup(e, t) {
    this._commitAction({
      actionTaken: l.COMMUNITY_CREATION_ACTION_TAKEN_TYPE.LINK_GROUP,
      actionCount: e,
      currentScreen: t
    });
  }
  createCommunity(e) {
    this._commitAction({
      actionTaken: l.COMMUNITY_CREATION_ACTION_TAKEN_TYPE.CREATE_COMMUNITY,
      currentScreen: e
    });
  }
  exit() {
    this._commitAction({
      actionTaken: l.COMMUNITY_CREATION_ACTION_TAKEN_TYPE.EXIT,
      currentScreen: i.COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_INFO
    });
    this._endSession();
  }
  unlinkGroup() {
    this._commitAction({
      actionTaken: l.COMMUNITY_CREATION_ACTION_TAKEN_TYPE.UNLINK_GROUP,
      currentScreen: i.COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_INFO
    });
  }
  createCommunitySuccess(e, t) {
    this._commitAction({
      actionTaken: l.COMMUNITY_CREATION_ACTION_TAKEN_TYPE.CREATE_COMMUNITY_SUCCESS,
      currentScreen: e,
      communityId: t
    });
  }
  createCommunityFail(e) {
    this._commitAction({
      actionTaken: l.COMMUNITY_CREATION_ACTION_TAKEN_TYPE.CREATE_COMMUNITY_FAIL,
      currentScreen: e
    });
  }
  helpIconClick() {
    this._commitAction({
      actionTaken: l.COMMUNITY_CREATION_ACTION_TAKEN_TYPE.HELP_ICON_CLICK,
      currentScreen: i.COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_INFO
    });
  }
  linkGroupConfirmationOk() {
    this._commitAction({
      actionTaken: l.COMMUNITY_CREATION_ACTION_TAKEN_TYPE.LINK_GROUP_CONFIRMATION_OK,
      currentScreen: i.COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.LINK_GROUP_CONFIRMATION
    });
  }
  linkGroupConfirmationCancel() {
    this._commitAction({
      actionTaken: l.COMMUNITY_CREATION_ACTION_TAKEN_TYPE.LINK_GROUP_CONFIRMATION_CANCEL,
      currentScreen: i.COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.LINK_GROUP_CONFIRMATION
    });
  }
}();
exports.UiCommunityCreationAction = s;