var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteFromStorage = function (e) {
  return (0, E.getStorage)().lock(["chat", "label-association", "message", "chat-assignment", "orphan-tc-token"], (0, a.default)(function* () {
    const t = yield (0, _.getBoundsForChat)(e);
    const n = yield (0, T.getChatTable)().get(e.toString());
    const [r, i, a] = yield Promise.all([(0, T.getChatTable)().remove(e.toString()), (0, _.queryAndRemoveMessageHistory)(e), P(e), (0, d.removeChatAssignmentsForChat)(e), I(e, n == null ? undefined : n.tcToken, n == null ? undefined : n.tcTokenTimestamp)]);
    return {
      chatBoundaries: t,
      deletedMsgIds: i
    };
  })).then(function () {
    var t = (0, a.default)(function* (t) {
      let {
        chatBoundaries: r,
        deletedMsgIds: a
      } = t;
      if (r) {
        m.ftsClient.purgeRange((0, i.default)({
          chatId: e.toString()
        }, r));
        (0, b.deleteModelsForLastAddOnPreview)(a);
        const t = require("./628905.js").getJobManager;
        yield t().waitUntilPersisted(v.jobSerializers.deleteAddOns(e.toString(), a));
      } else {
        __LOG__(3)`sendConversationDelete: chat boundaries was null`;
      }
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
};
exports.sendConversationDelete = function (e, t, r) {
  return function () {
    return w.apply(this, arguments);
  }(e, true, false, t, r).then(function () {
    var t = (0, a.default)(function* (t) {
      if (t.result != null && t.result.length > 0) {
        const r = t.result;
        (0, b.deleteModelsForLastAddOnPreview)(r);
        (0, S.deleteChatFromInitialSyncBoundary)(e);
        const i = require("./628905.js").getJobManager;
        yield i().waitUntilPersisted(v.jobSerializers.deleteAddOns(e.toString(), r));
        return t;
      }
      return t;
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./527796.js");
var s = require("./632157.js");
var l = require("./287461.js");
var u = require("./791381.js");
var c = require("./328329.js");
var d = require("./452072.js");
var p = require("./72696.js");
var f = require("./610011.js");
var _ = require("./422033.js");
var g = require("./834909.js");
var m = require("./110567.js");
var h = r(require("./97359.js"));
var y = require("./97858.js");
var E = require("./732011.js");
var S = require("./510306.js");
var v = require("./323829.js");
var T = require("./61229.js");
var M = require("./98742.js");
var A = require("./362029.js");
var b = require("./251444.js");
var C = require("./394629.js");
function P() {
  return O.apply(this, arguments);
}
function O() {
  return (O = (0, a.default)(function* (e) {
    if (!(0, p.canEditLabelAssociation)()) {
      return;
    }
    const {
      labelsToUpdate: t,
      modelRecords: n
    } = yield N(e);
    yield (0, g.editLocalLabelAssociationMD)(t, n);
  })).apply(this, arguments);
}
function I() {
  return R.apply(this, arguments);
}
function R() {
  return (R = (0, a.default)(function* (e, t, n) {
    if ((0, l.getABPropConfigValue)("enable_spam_report_iq_with_privacy_token") && t != null && n != null) {
      return (0, c.createOrUpdateOrphanTcToken)(e.toString(), {
        tcToken: t,
        tcTokenTimestamp: n
      });
    } else {
      return Promise.resolve();
    }
  })).apply(this, arguments);
}
function N() {
  return D.apply(this, arguments);
}
function D() {
  return (D = (0, a.default)(function* (e) {
    return {
      labelsToUpdate: (yield (0, f.queryLocalLabelAssociation)([{
        associationId: e.toString(),
        type: A.LabelAssociationType.Jid
      }])).map(e => {
        let {
          labelId: t
        } = e;
        return {
          id: t,
          type: "remove"
        };
      }),
      modelRecords: [{
        labelAssociationType: A.LabelAssociationType.Jid,
        modelId: e.toString(),
        mutationIndexSegments: [e.toString({
          legacy: true
        })]
      }]
    };
  })).apply(this, arguments);
}
function w() {
  return (w = (0, a.default)(function* (e, t) {
    let r = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    let i = arguments.length > 3 ? arguments[3] : undefined;
    let l = arguments.length > 4 ? arguments[4] : undefined;
    const {
      lockForMessageRangeSync: c
    } = require("./414240.js");
    const d = (0, h.default)(require("./208592.js"));
    const p = (0, h.default)(require("./229431.js"));
    const f = (0, s.unixTimeMs)();
    const [g, m, E] = yield Promise.all([p.getDeleteChatMutation(f, e, !r), d.getPinMutation(f, false, e), L(e)]);
    const S = [...E];
    let v;
    if ((0, y.pinChatSyncEnabled)()) {
      S.push(m);
    }
    if (t) {
      S.push(g);
    }
    yield c(["message", "chat", "label-association", "group-metadata", "orphan-tc-token"], S, (0, a.default)(function* () {
      var n;
      if (t) {
        yield (0, u.addActiveMessageRange)(e.toString(), (0, u.getActiveRangeAction)("deleteChat", {
          deleteMedia: !r
        }), g.binarySyncAction);
      }
      const a = (n = (0, C.decodeProtobuf)(o.SyncActionValueSpec, g.binarySyncAction).deleteChatAction) === null || n === undefined ? undefined : n.messageRange;
      if (a) {
        v = yield (0, _.queryAndRemoveMessagesInMessageRange)(e, a, {
          forceDeleteAllMessages: true
        });
        yield Promise.all([(0, T.getChatTable)().remove(e.toString()), (0, M.getGroupMetadataTable)().remove(e.toString()), P(e), I(e, i, l)]);
      }
    }));
    return {
      status: 200,
      result: v
    };
  })).apply(this, arguments);
}
function L() {
  return k.apply(this, arguments);
}
function k() {
  return (k = (0, a.default)(function* (e) {
    if (!(0, p.canEditLabelAssociation)()) {
      return [];
    }
    const {
      labelsToUpdate: t,
      modelRecords: n
    } = yield N(e);
    return (0, g.createLabelAssociationMutations)(t, n);
  })).apply(this, arguments);
}