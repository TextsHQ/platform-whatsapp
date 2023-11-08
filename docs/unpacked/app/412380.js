Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatAssignmentCollection = undefined;
var r = require("./919833.js");
var i = require("./552304.js");
var a = require("./392125.js");
var o = require("./849559.js");
var s = require("./669050.js");
class l extends a.BaseCollection {
  constructor() {
    super();
    this._chatUnopenedStatus = new Map();
    this._agentChatAssignmentCollections = new Map();
    this._pendingInitializations = [];
    this.listenTo(this, "add", this._handleAdd);
    this.listenTo(this, "remove", this._handleRemove);
    this.listenTo(this, "change", this._handleChange);
    this.listenTo(r.AgentCollection, "add", this._handleAgentAdd);
  }
  _handleAdd(e) {
    this._chatUnopenedStatus.set(e.chatId, !e.chatOpenedByAgent);
    const t = this.getAgentCollectionForChatId((0, s.createWid)(e.chatId));
    if (e.agent == null) {
      const t = r.AgentCollection.get(e.agentId);
      if (t != null) {
        e.agent = t;
      } else {
        __LOG__(3, undefined, undefined, true)`chat_assignment_collection:_handleAdd failed`;
        SEND_LOGS("chat_assignment_collection:_handleAdd: attempted to add assignment without agent");
      }
    }
    if (e.agent != null) {
      t.add(e.agent);
    }
  }
  _handleRemove(e) {
    const t = this._agentChatAssignmentCollections.get(e.chatId);
    if (t) {
      t.remove(e.agent);
    }
    this._chatUnopenedStatus.delete(e.chatId);
  }
  _handleChange(e) {
    this._chatUnopenedStatus.set(e.chatId, !e.chatOpenedByAgent);
    this.getAgentCollectionForChatId((0, s.createWid)(e.chatId)).trigger("change", []);
  }
  _handleAgentAdd(e) {
    const t = this._pendingInitializations.filter(t => t.agentId === e.id);
    this.processChatAssignments(t);
  }
  processChatAssignments(e) {
    const t = [];
    e.forEach(e => {
      var n;
      const i = r.AgentCollection.get(e.agentId);
      var a;
      if (((n = this.get(e.id)) === null || n === undefined ? undefined : n.agent.id) === e.agentId) {
        if (!((a = this.get(e.id)) === null || a === undefined)) {
          a.set({
            chatOpenedByAgent: e.chatOpenedByAgent
          });
        }
      } else if (i && !i.isDeleted) {
        t.push(new o.ChatAssignment({
          id: e.id,
          chatId: e.chatId,
          chatOpenedByAgent: e.chatOpenedByAgent,
          agent: i
        }));
      } else {
        this._pendingInitializations.push(e);
      }
    });
    this.add(t, {
      merge: true
    });
  }
  getChatUnopenedStatus(e) {
    return !!this._chatUnopenedStatus.get(e.toString({
      legacy: true
    }));
  }
  reset() {
    this._agentChatAssignmentCollections.forEach(e => {
      e.reset();
    });
    super.reset();
  }
  getAgentCollectionForChatId(e) {
    let t = this._agentChatAssignmentCollections.get(e.toString({
      legacy: true
    }));
    if (!t) {
      t = new i.AssignedAgentsCollection();
      this._agentChatAssignmentCollections.set(e.toString({
        legacy: true
      }), t);
    }
    return t;
  }
  initializeFromCache(e) {
    this.processChatAssignments(e);
  }
}
l.model = o.ChatAssignment;
const u = new l();
exports.ChatAssignmentCollection = u;