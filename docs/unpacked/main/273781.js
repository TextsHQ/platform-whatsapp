Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupBridgeApi = undefined;
var a = require("../app/351053.js");
var r = require("../app/177938.js");
var o = require("../app/61113.js");
var l = require("../app/274054.js");
var i = require("../app/651368.js");
var u = require("./760471.js");
var s = require("./127997.js");
const c = {
  updateModelForGroupAction(e) {
    let {
      groupMeta: t,
      groupAction: n
    } = e;
    (0, s.updateModelForGroupAction)(t, n);
  },
  restoreGroupParticipantsForChats(e) {
    let {
      chatIds: t
    } = e;
    (0, u.restoreGroupParticipantsForChats)(t);
  },
  expireGroupInviteV4(e) {
    var t;
    let {
      inviteMsgId: n
    } = e;
    if (!((t = o.MsgCollection.get(n)) === null || t === undefined)) {
      t.set({
        inviteCodeExp: "0"
      });
    }
  },
  updateGroupSubject(e) {
    let {
      id: t,
      subject: n
    } = e;
    r.ContactCollection.add({
      id: t,
      name: n
    }, {
      merge: true
    });
  },
  notAlreadyInGroup(e) {
    var t;
    let {
      groupId: n,
      participants: r
    } = e;
    const o = (t = a.ChatCollection.get(n)) === null || t === undefined ? undefined : t.groupMetadata;
    if (o) {
      return r.filter(e => {
        let {
          id: t
        } = e;
        return !o.participants.get(t);
      });
    } else {
      return r;
    }
  },
  createOrUpdateGroupMetadataFromQuery(e) {
    let {
      groupInfo: t
    } = e;
    (0, l.createOrUpdateGroupMetadataModelFromQuery)(t);
  },
  queryAndUpdateSubgroupSuggestions(e) {
    let {
      id: t,
      subgroupId: n
    } = e;
    (0, i.queryAndUpdateSubgroupSuggestions)(t, n);
  }
};
exports.GroupBridgeApi = c;