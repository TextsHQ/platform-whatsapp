const t = {
  fragment: {
    argumentDefinitions: n = [{
      defaultValue: null,
      kind: "LocalArgument",
      name: "user_id"
    }],
    kind: "Fragment",
    metadata: null,
    name: "WAWebMexFetchAboutStatusJobQuery",
    selections: [{
      alias: null,
      args: r = [{
        kind: "Literal",
        name: "updates",
        value: ["STATUS"]
      }, {
        items: [{
          fields: [{
            kind: "Variable",
            name: "user_id",
            variableName: "user_id"
          }],
          kind: "ObjectValue",
          name: "users.0"
        }],
        kind: "ListValue",
        name: "users"
      }],
      concreteType: "XWA2UserUpdate",
      kind: "LinkedField",
      name: "xwa2_users_updates_since",
      plural: true,
      selections: [i = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "jid",
        storageKey: null
      }, {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "updates",
        plural: true,
        selections: [a = {
          kind: "InlineFragment",
          selections: [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "dhash",
            storageKey: null
          }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null
          }],
          type: "XWA2UserStatusUpdate",
          abstractKey: null
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
    name: "WAWebMexFetchAboutStatusJobQuery",
    selections: [{
      alias: null,
      args: r,
      concreteType: "XWA2UserUpdate",
      kind: "LinkedField",
      name: "xwa2_users_updates_since",
      plural: true,
      selections: [i, {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "updates",
        plural: true,
        selections: [{
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null
        }, a],
        storageKey: null
      }],
      storageKey: null
    }]
  },
  params: {
    id: "6556393721124826",
    metadata: {},
    name: "WAWebMexFetchAboutStatusJobQuery",
    operationKind: "query",
    text: null
  }
};
var n;
var r;
var i;
var a;
t.hash = "3e3dddd48c0c1019c7c44a3e710076a8";
module.exports = t;