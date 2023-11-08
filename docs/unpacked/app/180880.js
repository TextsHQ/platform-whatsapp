const t = {
  fragment: {
    argumentDefinitions: n = [{
      defaultValue: null,
      kind: "LocalArgument",
      name: "newsletter_id"
    }],
    kind: "Fragment",
    metadata: null,
    name: "WAWebMexFetchNewsletterIntegrityUpdateJobQuery",
    selections: [{
      alias: null,
      args: r = [{
        kind: "Variable",
        name: "newsletter_id",
        variableName: "newsletter_id"
      }],
      concreteType: "XWA2NewsletterAdmin",
      kind: "LinkedField",
      name: "xwa2_newsletter_admin",
      plural: false,
      selections: [i = {
        alias: null,
        args: null,
        concreteType: "XWA2NewsletterAdminThreadMetadata",
        kind: "LinkedField",
        name: "thread_metadata",
        plural: false,
        selections: [{
          alias: null,
          args: null,
          concreteType: "XWA2NewsletterGeoState",
          kind: "LinkedField",
          name: "geo_states",
          plural: true,
          selections: [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "country_code",
            storageKey: null
          }, {
            alias: null,
            args: null,
            concreteType: "XWA2NewsletterState",
            kind: "LinkedField",
            name: "state",
            plural: false,
            selections: [{
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "type",
              storageKey: null
            }],
            storageKey: null
          }],
          storageKey: null
        }],
        storageKey: null
      }, a = {
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
    name: "WAWebMexFetchNewsletterIntegrityUpdateJobQuery",
    selections: [{
      alias: null,
      args: r,
      concreteType: "XWA2NewsletterAdmin",
      kind: "LinkedField",
      name: "xwa2_newsletter_admin",
      plural: false,
      selections: [i, a, {
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
    id: "24710381495227355",
    metadata: {},
    name: "WAWebMexFetchNewsletterIntegrityUpdateJobQuery",
    operationKind: "query",
    text: null
  }
};
var n;
var r;
var i;
var a;
t.hash = "008b3a382d84841100e24efe480d942c";
module.exports = t;