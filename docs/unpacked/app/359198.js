Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityGroupJourneyEvent = undefined;
var r = require("./660407.js");
var i = require("./71419.js");
var a = require("./862159.js");
var o = require("./965927.js");
var s = require("./460416.js");
var l = require("./790213.js");
exports.CommunityGroupJourneyEvent = class {
  constructor(e) {
    let {
      action: t,
      surface: n,
      chat: i
    } = e;
    this.action = t;
    this.surface = n;
    this.chat = i;
    this.sessionId = (0, r.getSharedSessionId)();
  }
  static inviteModalSourceToSurface(e) {
    switch (e) {
      case "community_home":
        return o.SURFACE_TYPE.COMMUNITY_HOME;
      case "community_nav":
        return o.SURFACE_TYPE.COMMUNITY_NAV;
      case "subgroup_switcher":
        return o.SURFACE_TYPE.COMMUNITY_NAV_SHEET;
      case "invite_link":
      case "group_mention":
        return o.SURFACE_TYPE.CHAT;
      case "other":
        __LOG__(4, undefined, new Error())`No relevant communtiy journey log for this invite modal`;
        return null;
    }
  }
  shouldLogThreadType() {
    switch (this.surface) {
      case o.SURFACE_TYPE.CHAT:
      case o.SURFACE_TYPE.CHATLIST:
      case o.SURFACE_TYPE.COMMUNITY_HOME:
      case o.SURFACE_TYPE.COMMUNITY_TAB:
      case o.SURFACE_TYPE.COMMUNITY_NAV:
      case o.SURFACE_TYPE.COMMUNITY_NAV_SHEET:
      case o.SURFACE_TYPE.COMMUNITY_SETTINGS:
      case o.SURFACE_TYPE.GROUP_INFO:
        return true;
      default:
        return false;
    }
  }
  getThreadType() {
    var e;
    const t = (e = this.chat) === null || e === undefined ? undefined : e.groupMetadata;
    if (this.shouldLogThreadType() === false || t == null) {
      return null;
    }
    switch (t.groupType) {
      case a.GroupType.COMMUNITY:
        return s.THREAD_TYPE.PARENT_GROUP;
      case a.GroupType.DEFAULT:
        return s.THREAD_TYPE.GROUP;
      case a.GroupType.LINKED_SUBGROUP:
        return s.THREAD_TYPE.SUB_GROUP;
      case a.GroupType.LINKED_ANNOUNCEMENT_GROUP:
        return s.THREAD_TYPE.DEFAULT_SUB_GROUP;
      case a.GroupType.LINKED_GENERAL_GROUP:
        return s.THREAD_TYPE.SUB_GROUP;
    }
    return null;
  }
  getGroupSize() {
    var e;
    var t;
    const n = (e = this.chat) === null || e === undefined ? undefined : e.groupMetadata;
    if (n == null) {
      return 0;
    } else if ((t = n.participants.length) !== null && t !== undefined) {
      return t;
    } else {
      return 0;
    }
  }
  getUserRole() {
    var e;
    const t = (e = this.chat) === null || e === undefined ? undefined : e.groupMetadata;
    if (this.chat == null || t == null) {
      return null;
    }
    const n = t.participants.iAmAdmin();
    if ((n && t.isParentGroup) === true) {
      return l.USER_ROLE_TYPE.CADMIN;
    } else if (n === true) {
      return l.USER_ROLE_TYPE.ADMIN;
    } else {
      return l.USER_ROLE_TYPE.MEMBER;
    }
  }
  commit() {
    const e = new i.GroupJourneyWamEvent({
      actionType: this.action,
      appSessionId: this.sessionId,
      surface: this.surface,
      groupSize: this.getGroupSize()
    });
    const t = this.getThreadType();
    if (t != null) {
      e.threadType = t;
    }
    const n = this.getUserRole();
    if (n != null) {
      e.userRole = n;
    }
    e.commit();
  }
};