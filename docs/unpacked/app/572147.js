var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./685639.js");
var o = require("./287461.js");
var s = require("./481173.js");
var l = require("./351053.js");
var u = require("./174834.js");
var c = require("./177938.js");
var d = require("./660666.js");
var p = r(require("./97359.js"));
var f = r(require("./257483.js"));
var _ = r(require("./492006.js"));
var g = r(require("./124943.js"));
var m = require("./862159.js");
var h = require("./878253.js");
var y = require("./97858.js");
var E = r(require("./851591.js"));
var S = require("./98742.js");
var v = r(require("./691856.js"));
var T = r(require("./150102.js"));
var M = require("./39294.js");
var A = require("./459857.js");
var b = r(require("./124928.js"));
var C = require("./669050.js");
var P = require("./574819.js");
var O = require("../vendor/548360.js");
class I extends s.BaseModel {
  constructor() {
    super(...arguments);
    this.participants = (0, s.collection)(_.default);
    this.pendingParticipants = (0, s.collection)(g.default);
    this.pastParticipants = (0, s.collection)(E.default);
    this.membershipApprovalRequests = (0, s.collection)(f.default);
    this.subgroupSuggestions = (0, s.collection)(v.default);
    this.id = (0, s.prop)();
    this.creation = (0, s.prop)();
    this.owner = (0, s.prop)();
    this.subject = (0, s.prop)();
    this.subjectTime = (0, s.prop)();
    this.desc = (0, s.prop)();
    this.descId = (0, s.prop)();
    this.descTime = (0, s.prop)();
    this.descOwner = (0, s.prop)();
    this.restrict = (0, s.prop)();
    this.announce = (0, s.prop)();
    this.noFrequentlyForwarded = (0, s.prop)();
    this.ephemeralDuration = (0, s.prop)();
    this.membershipApprovalMode = (0, s.prop)();
    this.memberAddMode = (0, s.prop)();
    this.growthLockExpiration = (0, s.prop)();
    this.growthLockType = (0, s.prop)();
    this.reportToAdminMode = (0, s.prop)();
    this.size = (0, s.prop)();
    this.numSubgroups = (0, s.prop)();
    this.support = (0, s.prop)();
    this.suspended = (0, s.prop)(false);
    this.terminated = (0, s.prop)(false);
    this.uniqueShortNameMap = (0, s.prop)();
    this.isLidAddressingMode = (0, s.prop)();
    this.isParentGroup = (0, s.prop)();
    this.isParentGroupClosed = (0, s.prop)();
    this.parentGroup = (0, s.prop)();
    this.defaultSubgroup = (0, s.prop)();
    this.generalSubgroup = (0, s.prop)();
    this.generalChatAutoAddDisabled = (0, s.prop)();
    this.unjoinedSubgroups = (0, s.session)(() => []);
    this.joinedSubgroups = (0, s.session)(() => []);
    this.allowNonAdminSubGroupCreation = (0, s.prop)();
    this.lastActivityTimestamp = (0, s.prop)();
    this.lastSeenActivityTimestamp = (0, s.prop)();
    this.lastReportToAdminTimestamp = (0, s.prop)();
    this.incognito = (0, s.prop)();
    this.stale = (0, s.session)(true);
    this.deviceStale = (0, s.session)(false);
    this.trusted = (0, s.session)(true);
    this.inviteCode = (0, s.session)();
    this.groupInviteCodePromise = (0, s.session)();
    this.revokeGroupInvitePromise = (0, s.session)();
    this.participantQueryPromise = (0, s.session)();
    this.deviceQueryPromise = (0, s.session)();
    this.unjoinedSubgroupsQueryPromise = (0, s.session)();
    this.displayedDesc = (0, s.session)("");
    this.revokeGroupsV4AddInvitePromise = (0, s.session)();
    this.groupInviteLink = (0, s.derived)(function () {
      if (this.inviteCode) {
        return `https://chat.whatsapp.com/${this.inviteCode}`;
      } else {
        return null;
      }
    }, ["inviteCode"]);
    this.cachedDeviceCount = (0, s.session)();
    this.cachedDeviceSizeBucket = (0, s.session)();
    this.groupType = (0, s.derived)(function () {
      if (this.defaultSubgroup === true) {
        return m.GroupType.LINKED_ANNOUNCEMENT_GROUP;
      } else if (this.generalSubgroup === true) {
        return m.GroupType.LINKED_GENERAL_GROUP;
      } else if (this.parentGroup != null) {
        return m.GroupType.LINKED_SUBGROUP;
      } else if (this.isParentGroup === true) {
        return m.GroupType.COMMUNITY;
      } else {
        return m.GroupType.DEFAULT;
      }
    }, ["parentGroup", "isParentGroup", "defaultSubgroup", "generalSubgroup"]);
    this.isIncognitoCag = (0, s.derived)(function () {
      return this.groupType === m.GroupType.LINKED_ANNOUNCEMENT_GROUP && Boolean(this.incognito);
    }, ["groupType", "incognito"]);
    this.isUnnamed = (0, s.derived)(function () {
      return this.subject === "";
    }, ["subject"]);
  }
  isNonAdminAndACAGJREnabled() {
    var e;
    const t = !this.participants.iAmAdmin();
    const n = this.participants.iAmMember();
    const r = this.memberAddMode === S.MEMBER_ADD_MODE.ALL_MEMBER_ADD;
    const i = (e = this.membershipApprovalMode) !== null && e !== undefined && e;
    return t && n && r && i;
  }
  hasUniqueShortNameMention(e) {
    var t;
    if (!this.uniqueShortNameMap || !e.shortName || !(0, d.getIsMyContact)(e)) {
      return false;
    }
    const n = this._normalizeShortName(e.shortName);
    return (t = this.uniqueShortNameMap.get(n)) !== null && t !== undefined && t;
  }
  _normalizeShortName(e) {
    return e.toLowerCase().trim();
  }
  isSuspendedOrTerminated() {
    return this.suspended || this.terminated;
  }
  delete() {
    super.delete();
    this.getCollection().remove(this.id);
    this.participants.delete();
  }
  canSetSubject() {
    if (this.isSuspendedOrTerminated()) {
      return false;
    }
    if ((0, u.communitiesEnabled)()) {
      if (this.groupType === m.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
        return false;
      }
      if (this.groupType === m.GroupType.COMMUNITY) {
        return this.participants.iAmAdmin();
      }
    }
    return !!this.participants.iAmMember() && (this.participants.iAmAdmin() || this.restrict !== true) && !this.support;
  }
  canSetDescription() {
    return !(!this.participants.iAmMember() || !this.participants.iAmAdmin() && this.restrict) && !this.isSuspendedOrTerminated() && !((0, u.communitiesEnabled)() && (this.groupType === m.GroupType.COMMUNITY || this.groupType === m.GroupType.LINKED_ANNOUNCEMENT_GROUP) && !this.participants.iAmAdmin()) && !this.support;
  }
  searchMatch(e) {
    var t;
    if (e == null) {
      return false;
    }
    const {
      id: n
    } = this;
    const r = (t = l.ChatCollection.get(n)) === null || t === undefined ? undefined : t.formattedTitle;
    return !(r == null || !r.toLowerCase().includes(e));
  }
  canSetGroupProperty() {
    return !this.isSuspendedOrTerminated() && (!(0, u.communitiesEnabled)() || this.groupType !== m.GroupType.LINKED_ANNOUNCEMENT_GROUP) && !!this.participants.iAmAdmin() && !this.support;
  }
  canSetEphemeralSetting() {
    const e = !this.support;
    return !this.isSuspendedOrTerminated() && !!this.participants.iAmMember() && (this.participants.iAmAdmin() ? e : !this.restrict && !!(0, o.getABPropConfigValue)("ephemeral_allow_group_members") && this.groupType !== m.GroupType.LINKED_ANNOUNCEMENT_GROUP && e);
  }
  initialize() {
    s.BaseModel.prototype.initialize.call(this);
    this.listenTo(this.participants, "change:isAdmin change:isSuperAdmin change:contact.isMyContact sort remove reset", () => {
      this.isTrusted();
      this._updateDisplayedDesc();
    });
    this.listenTo(this.participants, "bulk_add bulk_remove reset", this.triggerParticipantsChange);
    this.listenTo(this, "change:owner", this.isTrusted);
    this.listenTo(this, "change:isParentGroup", this._updateSubgroups);
    this.listenTo(this, "change:desc", this._updateDisplayedDesc);
    this.listenTo(this, "change:groupType", this._updateDisplayedDesc);
    this._updateDisplayedDesc();
    this.isTrusted();
    this._updateUniqueShortNameMapTimer = this._createUniqueNameMapShiftTimer();
    this.listenTo(this.participants, "change:contact.shortName", this._handleParticipantShortNameUpdated);
    this.uniqueShortNameMap = new Map();
    this.unreadMentionMetadata = new T.default();
    if (this.groupType === m.GroupType.COMMUNITY) {
      this._updateSubgroups();
    }
  }
  _handleParticipantShortNameUpdated() {
    var e;
    if (!((e = this._updateUniqueShortNameMapTimer) === null || e === undefined)) {
      e.debounce(I.UPDATE_NAME_MAP_DEBOUNCE_TIME);
    }
  }
  triggerParticipantsChange() {
    var e;
    if ((0, y.isDropLastNameEnabled)()) {
      if (!((e = this._updateUniqueShortNameMapTimer) === null || e === undefined)) {
        e.debounce(I.UPDATE_NAME_MAP_DEBOUNCE_TIME);
      }
    }
    this.trigger("change:participants");
  }
  _createUniqueNameMapShiftTimer() {
    return new a.ShiftTimer(() => {
      if ((0, y.isDropLastNameEnabled)()) {
        const e = new Map();
        if (this.participants) {
          this.participants.forEach(t => {
            if (t.contact.shortName && (0, d.getIsMyContact)(t.contact)) {
              const n = this._normalizeShortName(t.contact.shortName);
              if (e.has(n)) {
                e.set(n, false);
              } else {
                e.set(n, true);
              }
            }
          });
        }
        this.uniqueShortNameMap = e;
      }
    });
  }
  _isGroupAdminInAddressBook() {
    return this.participants.some(e => e.isAdmin && (0, d.getIsMyContact)(e.contact));
  }
  isTrusted() {
    if (this.stale) {
      return this.trusted;
    }
    if (this.support) {
      return this.trusted = true;
    }
    if (this.owner) {
      if ((0, A.isMeAccount)(this.owner)) {
        return this.trusted = true;
      }
      const e = c.ContactCollection.get(this.owner);
      if (e != null && (0, d.getIsMyContact)(e)) {
        return this.trusted = true;
      }
    }
    if (this._isGroupAdminInAddressBook()) {
      return this.trusted = true;
    } else {
      return this.trusted = false;
    }
  }
  hasJoined() {
    const {
      id: e,
      groupType: t,
      joinedSubgroups: n
    } = this;
    if (t === m.GroupType.COMMUNITY) {
      return n.length > 0;
    }
    const r = l.ChatCollection.get(e);
    return !!r && r.isReadOnly === false;
  }
  _updateDisplayedDesc() {
    if (!(0, u.communitiesEnabled)() || this.groupType !== m.GroupType.LINKED_ANNOUNCEMENT_GROUP || this.canSetDescription() || this.desc != null && this.desc !== "") {
      this.displayedDesc = this.desc;
    } else {
      this.displayedDesc = O.fbt._("", null, {
        hk: "4kc4Kr"
      }).toString();
    }
  }
  _updateSubgroups() {
    (0, M.updateJoinedSubgroups)(this);
    (0, M.updateUnjoinedSubgroups)(this);
  }
  revokeGroupsV4AddInvite(e) {
    if (this.revokeGroupsV4AddInvitePromise) {
      return this.revokeGroupsV4AddInvitePromise;
    }
    const t = (0, P.widToGroupJid)(this.id);
    const {
      pendingParticipants: n
    } = this;
    let r = Promise.resolve();
    r = (0, h.revokeGroupInviteV4)(e, t);
    return this.revokeGroupsV4AddInvitePromise = r.then(t => {
      if (t.status >= 200 && t.status < 300) {
        n.remove(e);
      }
      return t.status;
    }).catch(() => {
      __LOG__(3)`models:groupMetadata:participantCollection:revokeGroupsV4AddInvite failed`;
      return 500;
    }).finally(() => {
      this.revokeGroupsV4AddInvitePromise = null;
    });
  }
  queryGroupsV4PendingInvite() {
    var e = this;
    return (0, i.default)(function* () {
      (yield (0, h.getPendingParticipants)(e.id)).forEach(t => {
        e.pendingParticipants.add({
          id: (0, C.createUserWid)(t)
        });
      });
    })();
  }
  getJoinedSubgroupsMetadata() {
    const e = this.getCollection();
    return this.joinedSubgroups.map(t => e.get(t.toString())).filter(Boolean);
  }
  getJoinedSubgroupsChat() {
    return this.joinedSubgroups.map(e => l.ChatCollection.get(e.toString())).filter(Boolean);
  }
  getUnjoinedSubgroupsMetadata() {
    const e = this.getUnjoinedCollection();
    return this.unjoinedSubgroups.map(t => e.get(t.toString())).filter(Boolean);
  }
  getSubgroupsMetadata() {
    return [...this.getJoinedSubgroupsMetadata(), ...this.getUnjoinedSubgroupsMetadata()];
  }
  getSubgroupSuggestions() {
    const e = new Set();
    return this.subgroupSuggestions.filter(t => {
      let {
        groupId: n,
        isExistingGroup: r
      } = t;
      return !e.has(n.toString()) && e.add(n.toString()) && !(r && !(0, u.memberSuggestedGroupsM3ReceiverEnabled)());
    });
  }
  getParentGroupChat() {
    const e = this.parentGroup;
    if (e) {
      return l.ChatCollection.get(e);
    }
  }
  isParentGroupParticipant() {
    const e = this.parentGroup;
    if (!e) {
      return false;
    }
    const t = this.getCollection().get(e);
    return !!(t == null ? undefined : t.joinedSubgroups.length);
  }
  getUnjoinedCollection() {
    return (0, p.default)(require("./22368.js"));
  }
  getCollection() {
    return (0, p.default)(require("./667845.js"));
  }
}
I.Proxy = "groupMetadata";
I.idClass = b.default;
I.UPDATE_NAME_MAP_DEBOUNCE_TIME = 200;
var R = (0, s.defineModel)(I);
exports.default = R;