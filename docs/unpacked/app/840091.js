const t = {
  fragment: {
    argumentDefinitions: n = [{
      defaultValue: null,
      kind: "LocalArgument",
      name: "input"
    }],
    kind: "Fragment",
    metadata: null,
    name: "WAWebMexFetchTextStatusListJobQuery",
    selections: r = [{
      alias: null,
      args: [{
        kind: "Variable",
        name: "input",
        variableName: "input"
      }],
      concreteType: "XWA2TextStatus",
      kind: "LinkedField",
      name: "xwa2_text_status_list",
      plural: true,
      selections: [{
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "jid",
        storageKey: null
      }, {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "text",
        storageKey: null
      }, {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "last_update_time",
        storageKey: null
      }, {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "ephemeral_duration_sec",
        storageKey: null
      }, {
        alias: null,
        args: null,
        concreteType: "XWA2TextStatusEmoji",
        kind: "LinkedField",
        name: "emoji",
        plural: false,
        selections: [{
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "content",
          storageKey: null
        }],
        storageKey: null
      }],
      storageKey: null
    }],
    type: "Query",
    abstractKey: null
  },
  kind: "Request",
  operation: {
    argumentDefinitions: n,
    kind: "Operation",
    name: "WAWebMexFetchTextStatusListJobQuery",
    selections: r
  },
  params: {
    id: "6657242354369052",
    metadata: {},
    name: "WAWebMexFetchTextStatusListJobQuery",
    operationKind: "query",
    text: null
  }
};
var n;
var r;
t.hash = "f8ce764f3d82bf735fbe95d1c87054d7";
module.exports = t;