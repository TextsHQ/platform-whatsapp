const t = {
  fragment: {
    argumentDefinitions: n = [{
      defaultValue: null,
      kind: "LocalArgument",
      name: "newsletter_id"
    }],
    kind: "Fragment",
    metadata: null,
    name: "WAWebMexFetchGeoSuspendedCountriesJobQuery",
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
    name: "WAWebMexFetchGeoSuspendedCountriesJobQuery",
    selections: [{
      alias: null,
      args: r,
      concreteType: "XWA2NewsletterAdmin",
      kind: "LinkedField",
      name: "xwa2_newsletter_admin",
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
    id: "7240683889293155",
    metadata: {},
    name: "WAWebMexFetchGeoSuspendedCountriesJobQuery",
    operationKind: "query",
    text: null
  }
};
var n;
var r;
var i;
t.hash = "2a91075ae314e624d219ee2b3b969bd4";
module.exports = t;