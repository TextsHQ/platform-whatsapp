var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addonBackendTable = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./634951.js");
var s = require("./994879.js");
var l = require("./62280.js");
var u = require("./183381.js");
var c = require("./899581.js");
var d = require("./732011.js");
var p = require("./373070.js");
var f = require("./954226.js");
var _ = require("./509672.js");
var g = require("./450125.js");
var m = require("./521109.js");
var h = require("./941322.js");
const y = function () {
  var e = (0, i.default)(function* (e, t) {
    switch (e) {
      case o.AddonTableMode.Pin:
        {
          const e = t.reduce((e, t) => {
            if (t.type !== p.MSG_TYPE.PIN_MESSAGE) {
              throw new s.AddonInfraError(s.AddonInfraErrorCode.UnexpectedMsgType, t.type);
            }
            e.push((0, _.serializePinInChatMsgData)(t));
            return e;
          }, []);
          yield (0, u.createOrUpdatePinInChat)(t[0].id.remote, e);
          break;
        }
      case o.AddonTableMode.Comment:
        {
          const e = t.reduce((e, t) => {
            if (t.type !== p.MSG_TYPE.COMMENT || t.addonEncrypted) {
              throw new s.AddonInfraError(s.AddonInfraErrorCode.UnexpectedMsgType, t.type);
            }
            e.push((0, l.dbRowFromCommentMessage)(t));
            return e;
          }, []);
          yield (0, d.getStorage)().table("comments").bulkCreateOrReplace(e);
          break;
        }
      case o.AddonTableMode.PollVote:
        {
          const e = t.map(e => {
            if (e.type === p.MSG_TYPE.POLL_UPDATE && !e.addonEncrypted) {
              return (0, m.pollVoteMsgDataToVoteData)(e);
            }
            throw new s.AddonInfraError(s.AddonInfraErrorCode.UnexpectedMsgType, e.type);
          });
          yield (0, c.upsertVotesDb)(e);
          break;
        }
      case o.AddonTableMode.Unified:
        throw new s.AddonInfraError(s.AddonInfraErrorCode.UnexpectedError);
    }
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
const E = function () {
  var e = (0, i.default)(function* (e, t) {
    switch (e) {
      case o.AddonTableMode.Pin:
        {
          const e = (yield (0, f.getTable)().equals(["msgKey"], t.toString()))[0];
          if (e == null) {
            return e;
          } else {
            return (0, _.deserializePinInChatMsgData)(e);
          }
        }
      case o.AddonTableMode.Comment:
        break;
      case o.AddonTableMode.PollVote:
        {
          const e = (yield (0, h.getTable)().equals(["msgKey"], t.toString()))[0];
          if (e == null) {
            return e;
          } else {
            return (0, m.voteDataToPollVoteMsgData)((0, g.voteFromDbRow)(e));
          }
        }
      case o.AddonTableMode.Unified:
        throw new s.AddonInfraError(s.AddonInfraErrorCode.UnexpectedError);
    }
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
const S = {
  bulkCreateOrReplace: y,
  updateAck: function () {
    var e = (0, i.default)(function* (e, t, n) {
      switch (e) {
        case o.AddonTableMode.Pin:
          {
            if (t.type !== p.MSG_TYPE.PIN_MESSAGE) {
              throw new s.AddonInfraError(s.AddonInfraErrorCode.UnexpectedMsgType, t.type);
            }
            const e = (0, _.serializePinInChatMsgData)(t);
            yield (0, f.getTable)().merge(e.parentMsgKey, {
              ack: n
            });
            break;
          }
        case o.AddonTableMode.Comment:
          break;
        case o.AddonTableMode.PollVote:
          if (t.type !== p.MSG_TYPE.POLL_UPDATE) {
            throw new s.AddonInfraError(s.AddonInfraErrorCode.UnexpectedMsgType, t.type);
          }
          yield (0, h.getTable)().merge([t.pollUpdateParentKey.toString(), (0, a.default)(t.from, "row.from").toString()], {
            ack: n
          });
          break;
        case o.AddonTableMode.Unified:
          throw new s.AddonInfraError(s.AddonInfraErrorCode.UnexpectedError);
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }(),
  getByMsgKey: E
};
exports.addonBackendTable = S;