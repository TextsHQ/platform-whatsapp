const t = {
  fragment: {
    argumentDefinitions: n = [{
      defaultValue: null,
      kind: "LocalArgument",
      name: "jid"
    }],
    kind: "Fragment",
    metadata: null,
    name: "WAWebMexFetchNewsletterMessageDeliveryUpdatesJobQuery",
    selections: [{
      alias: null,
      args: r = [{
        fields: [{
          kind: "Variable",
          name: "key",
          variableName: "jid"
        }, {
          kind: "Literal",
          name: "type",
          value: "JID"
        }],
        kind: "ObjectValue",
        name: "input"
      }],
      concreteType: "XWA2Newsletter",
      kind: "LinkedField",
      name: "xwa2_newsletter",
      plural: false,
      selections: [i = {
        alias: null,
        args: null,
        concreteType: "XWA2NewsletterMessageConnection",
        kind: "LinkedField",
        name: "messages",
        plural: false,
        selections: [{
          alias: null,
          args: null,
          concreteType: "XWA2NewsletterMessageEdge",
          kind: "LinkedField",
          name: "edges",
          plural: true,
          selections: [{
            alias: null,
            args: null,
            concreteType: "XWA2NewsletterMessage",
            kind: "LinkedField",
            name: "node",
            plural: false,
            selections: [{
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "server_id",
              storageKey: null
            }, {
              alias: null,
              args: null,
              concreteType: "XWA2MessageDeliveryUpdate",
              kind: "LinkedField",
              name: "message_delivery_update",
              plural: false,
              selections: [{
                alias: null,
                args: null,
                concreteType: "XWA2MessageDeliveryUpdateIssue",
                kind: "LinkedField",
                name: "issue",
                plural: false,
                selections: [{
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "code",
                  storageKey: null
                }],
                storageKey: null
              }],
              storageKey: null
            }],
            storageKey: null
          }],
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
    name: "WAWebMexFetchNewsletterMessageDeliveryUpdatesJobQuery",
    selections: [{
      alias: null,
      args: r,
      concreteType: "XWA2Newsletter",
      kind: "LinkedField",
      name: "xwa2_newsletter",
      plural: false,
      selections: [i, {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "id",
        storageKey: null
      }],
      storageKey: null
    }]
  },
  params: {
    id: "6389716984454191",
    metadata: {},
    name: "WAWebMexFetchNewsletterMessageDeliveryUpdatesJobQuery",
    operationKind: "query",
    text: null
  }
};
var n;
var r;
var i;
t.hash = "2ad2ed43c19382053691d5e7c226a56d";
module.exports = t;