var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./392125.js");
var a = require("./828597.js");
var o = r(require("./572147.js"));
var s = r(require("./196331.js"));
var l = require("./446474.js");
var u = require("./39294.js");
var c = r(require("./124928.js"));
var d = r(require("./556869.js"));
class p extends i.BaseCollection {
  constructor() {
    super();
    this._handleIsParentGroupChange = e => {
      if (e.isParentGroup === true) {
        l.ProfilePicThumbCollection.update(e.id);
      }
    };
    this.listenTo(this, "add", this._handleGroupAdd);
    this.listenTo(this, "remove", this._handleGroupRemove);
    this.listenTo(this, "change:parentGroup", this._handleParentGroupChange);
    this.listenTo(this, "change:isParentGroup", this._handleIsParentGroupChange);
    this.listenTo(this, "change:defaultSubgroup", this._handleDefaultSubgroupChange);
  }
  _handleGroupAdd(e) {
    if (e.defaultSubgroup === true) {
      s.default.add(e.id);
    }
    if (!e.participants.iAmMember()) {
      return;
    }
    const t = e.parentGroup ? this.get(e.parentGroup.toString()) : null;
    if (t != null) {
      const n = e.id;
      (0, u.subgroupUnjoinedToJoined)(t, n);
    }
  }
  _handleGroupRemove(e) {
    if (e.defaultSubgroup === true) {
      s.default.remove(e.id);
    }
    if (!e.participants.iAmMember()) {
      return;
    }
    const t = e.parentGroup ? this.get(e.parentGroup.toString()) : null;
    if (t != null) {
      (0, u.updateJoinedSubgroups)(t);
    }
  }
  _handleParentGroupChange(e, t, n) {
    if (!e.participants.iAmMember()) {
      return;
    }
    const r = e.id;
    const i = t != null ? this.get(t.toString()) : null;
    const a = n != null ? this.get(n.toString()) : null;
    if (i != null) {
      (0, u.subgroupUnjoinedToJoined)(i, r);
      if (a != null) {
        (0, u.updateJoinedSubgroups)(a);
      }
    } else if (a != null) {
      (0, u.unlinkParentGroup)(a, r);
    }
  }
  _handleDefaultSubgroupChange(e, t) {
    if (t === true) {
      s.default.add(e.id);
    } else {
      s.default.remove(e.id);
    }
  }
  findImpl(e) {
    if (c.default.isGroup(e)) {
      var t;
      const r = require("./351053.js").ChatCollection.get(e);
      if ((r == null ? undefined : r.isReadOnly) && (r == null || (t = r.groupMetadata) === null || t === undefined ? undefined : t.stale) === false) {
        __LOG__(2)`groupMetadata: skip trying to find groupMetadata wid ${e.toString()}`;
        return Promise.resolve({
          id: e
        });
      } else {
        return (0, a.findGroupMetadata)(e);
      }
    }
    if (c.default.isBroadcast(e)) {
      return Promise.resolve({
        id: e
      });
    } else {
      __LOG__(2)`groupMetadata:find trying to fetch non-group/bclist wid ${e.toString()}`;
      return Promise.reject((0, d.default)(`groupMetadata:find trying to fetch non-group/bclist wid ${e.toString()}`));
    }
  }
}
p.model = o.default;
p.staleCollection = true;
var f = new p();
exports.default = f;