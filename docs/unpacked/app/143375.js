var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleGroupCreation = function () {
  return g.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./35234.js");
var s = require("./359987.js");
var l = require("./293056.js");
var u = require("./297031.js");
var c = require("./136574.js");
var d = require("./660913.js");
var p = require("./789375.js");
var f = require("./459857.js");
var _ = require("./766187.js");
function g() {
  return (g = (0, a.default)(function* (e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    let r = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
    __LOG__(2, undefined, undefined, undefined, ["groups"])`inside handleGroupCreation`;
    const {
      chatId: a,
      author: g,
      pushname: m
    } = e;
    const {
      id: h,
      participants: y,
      pvId: E,
      subject: S,
      creation: v
    } = t;
    if (!(e.author != null && e.author.equals((0, f.getMaybeMeUser)()))) {
      new c.GroupJoinCWamEvent().commit();
    }
    if (g && m) {
      (0, p.updatePushname)(g, m, n);
    }
    yield Promise.all([(0, u.updateGroupMetadataTableJob)([t]), (0, d.updateParticipantsJob)({
      group: h,
      participants: y,
      version: E,
      isOffline: n,
      groupInfo: t
    })]);
    __LOG__(2, undefined, undefined, undefined, ["groups"])`updated GroupMetadata and participants tables`;
    if ((yield (0, o.getChatRecord)(a)) != null) {
      (0, s.frontendFireAndForget)("updateGroupSubject", {
        id: a,
        subject: S
      });
    } else {
      yield (0, l.createChat)(a, "groupCreation", (0, i.default)({
        t: v,
        pendingInitialLoading: false,
        createdLocally: false
      }, r === true && {
        notSpam: true
      }), {
        createdOffline: n
      });
      __LOG__(2, undefined, undefined, undefined, ["groups"])`updated chat model and table`;
      (0, s.frontendFireAndForget)("updateContactName", {
        contactId: h,
        name: S
      });
    }
    (0, s.frontendFireAndForget)("setGroupMetadata", t);
    (0, s.frontendFireAndForget)("markProfilePicStale", {
      profilePicThumbWid: h
    });
    if (!n) {
      (0, _.workerSafeFireAndForget)("maybeSendKeyDistributionMsgToNewGroup", {
        groupId: h
      });
    }
  })).apply(this, arguments);
}