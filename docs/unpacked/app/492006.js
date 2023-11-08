var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/23279.js"));
var a = require("./287461.js");
var o = require("./351053.js");
var s = r(require("./708093.js"));
var l = require("./174834.js");
var u = require("./177938.js");
var c = require("./660666.js");
var d = require("./271307.js");
var p = r(require("./762830.js"));
var f = r(require("./442690.js"));
var _ = require("./862159.js");
var g = r(require("./932325.js"));
var m = require("./98742.js");
var h = require("./39294.js");
var y = require("./459857.js");
class E extends s.default {
  constructor(e) {
    super(e, arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {});
    this._updateSubgroup = e => {
      var t;
      var n;
      if (!e || !(0, y.isMeAccount)(e.id)) {
        return;
      }
      const r = this.parent.id;
      const i = r ? (t = o.ChatCollection.get(r.toString())) === null || t === undefined ? undefined : t.groupMetadata : null;
      const a = i == null || (n = i.getParentGroupChat()) === null || n === undefined ? undefined : n.groupMetadata;
      if (a != null) {
        if (this.iAmMember()) {
          (0, h.subgroupUnjoinedToJoined)(a, r);
        } else {
          (0, h.subgroupJoinedToUnjoined)(a, r);
        }
      }
    };
    this._debouncedSort = (0, i.default)(() => this.sort(), 1000);
    this.sendForNeededAddRequest = e => {
      var t;
      var n;
      const r = this.getChat();
      const i = (t = (n = r.groupMetadata) === null || n === undefined ? undefined : n.desc) !== null && t !== undefined ? t : "";
      (0, d.sendForNeededAddRequest)(e, r.formattedTitle || r.name, i, this.parent.id);
    };
    this.listenTo(this, "change:contact.name", this._debouncedSort);
    this.listenTo(g.default, "locale_change", this._debouncedSort);
    this.listenTo(this, "add remove", this._updateSubgroup);
  }
  delete() {
    this.forEach(function (e) {
      e.delete();
    });
    this.stopListening();
    this.reset();
  }
  ensureSorted() {
    this._debouncedSort.flush();
  }
  set(e, t) {
    const n = t || {};
    if (!n.isParticipantCollectionAdd) {
      n.remove = true;
    }
    const r = super.set(e, n);
    this.trigger("bulk_add", r);
    if (n.remove === true) {
      this.trigger("bulk_remove", r);
    }
    return r;
  }
  add(e, t) {
    const n = t || {};
    n.isParticipantCollectionAdd = true;
    const r = super.add(e, n);
    this.trigger("bulk_add", r);
    return r;
  }
  remove(e, t) {
    const n = super.remove(e, t || {});
    this.trigger("bulk_remove", n);
    return n;
  }
  canAdd() {
    var e;
    if (this.iAmAdmin()) {
      return true;
    }
    if (!(0, a.getABPropConfigValue)("web_anyone_can_add_group_setting_enabled")) {
      return false;
    }
    const t = this.getChat();
    return this.iAmMember() && ((e = t.groupMetadata) === null || e === undefined ? undefined : e.memberAddMode) === m.MEMBER_ADD_MODE.ALL_MEMBER_ADD;
  }
  canPromote(e) {
    var t;
    if (!e) {
      return false;
    }
    if ((0, y.isMeAccount)(e.id)) {
      return false;
    }
    if (!this.iAmAdmin()) {
      return false;
    }
    if (e.isAdmin) {
      return false;
    }
    return !(((t = this.getChat().groupMetadata) === null || t === undefined ? undefined : t.groupType) === _.GroupType.LINKED_ANNOUNCEMENT_GROUP && !(0, l.communitiesEnabled)());
  }
  canDemote(e) {
    var t;
    var n;
    var r;
    if (!e) {
      return false;
    }
    if (!this.iAmAdmin()) {
      return false;
    }
    const i = this.getChat();
    if ((!(0, l.communitiesEnabled)() || ((t = i.groupMetadata) === null || t === undefined ? undefined : t.groupType) !== _.GroupType.COMMUNITY && ((n = i.groupMetadata) === null || n === undefined ? undefined : n.groupType) !== _.GroupType.LINKED_ANNOUNCEMENT_GROUP) && (0, y.isMeAccount)(e.id)) {
      return false;
    }
    var a;
    var o;
    if (e.isSuperAdmin) {
      return !(!(0, l.communitiesEnabled)() || ((a = i.groupMetadata) === null || a === undefined ? undefined : a.groupType) !== _.GroupType.COMMUNITY && ((o = i.groupMetadata) === null || o === undefined ? undefined : o.groupType) !== _.GroupType.LINKED_ANNOUNCEMENT_GROUP) && (0, y.isMeAccount)(e.id);
    } else {
      return !!e.isAdmin && !(!(0, l.communitiesEnabled)() && ((r = i.groupMetadata) === null || r === undefined ? undefined : r.groupType) === _.GroupType.LINKED_ANNOUNCEMENT_GROUP);
    }
  }
  canRemove(e) {
    var t;
    return !!e && !(0, y.isMeAccount)(e.id) && !!this.iAmAdmin() && (((t = this.getChat().groupMetadata) === null || t === undefined ? undefined : t.groupType) !== _.GroupType.LINKED_ANNOUNCEMENT_GROUP || !e.isAdmin && !e.isSuperAdmin);
  }
  canVerifyIdentity(e) {
    return !!e && !(0, y.isMeAccount)(e.id);
  }
  iAmMember() {
    return !!this.getMeParticipant();
  }
  iAmRestrictedMember() {
    var e;
    return ((e = this.getChat().groupMetadata) === null || e === undefined ? undefined : e.restrict) === true && !this.iAmAdmin();
  }
  iAmAdmin() {
    const e = this.getMeParticipant();
    return (e == null ? undefined : e.isAdmin) === true;
  }
  iAmSuperAdmin() {
    const e = this.getMeParticipant();
    return (e == null ? undefined : e.isSuperAdmin) === true;
  }
  getAdmins() {
    return this.where({
      isAdmin: true
    });
  }
  getSuperAdmin() {
    return this.findFirst(e => e.isSuperAdmin);
  }
  getMyContacts() {
    return this.filter(e => {
      const t = u.ContactCollection.get(e.id);
      return t != null && (0, c.getIsMyContact)(t);
    });
  }
  getMeParticipant() {
    const e = (0, y.getMaybeMeUser)();
    let t;
    if (e) {
      t = this.get(e);
    }
    const n = (0, y.getMaybeMeLidUser)();
    if (!t && n) {
      t = this.get(n);
    }
    return t;
  }
  getChat() {
    const e = this.parent.id;
    return o.ChatCollection.assertGet(e);
  }
}
exports.default = E;
E.model = f.default;
E.comparator = p.default;