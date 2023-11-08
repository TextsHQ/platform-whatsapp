const t = {
  fragment: {
    argumentDefinitions: [n = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "fetch_creation_time"
    }, r = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "fetch_full_image"
    }, i = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "fetch_viewer_metadata"
    }, a = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "input"
    }],
    kind: "Fragment",
    metadata: null,
    name: "WAWebMexFetchNewsletterJobQuery",
    selections: c = [{
      alias: null,
      args: [{
        kind: "Variable",
        name: "input",
        variableName: "input"
      }],
      concreteType: "XWA2Newsletter",
      kind: "LinkedField",
      name: "xwa2_newsletter",
      plural: false,
      selections: [o = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "id",
        storageKey: null
      }, {
        alias: null,
        args: null,
        concreteType: "XWA2NewsletterState",
        kind: "LinkedField",
        name: "state",
        plural: false,
        selections: [s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null
        }],
        storageKey: null
      }, {
        alias: null,
        args: null,
        concreteType: "XWA2NewsletterThreadMetadata",
        kind: "LinkedField",
        name: "thread_metadata",
        plural: false,
        selections: [{
          alias: null,
          args: null,
          concreteType: "XWA2NewsletterName",
          kind: "LinkedField",
          name: "name",
          plural: false,
          selections: l = [o, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null
          }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "update_time",
            storageKey: null
          }],
          storageKey: null
        }, {
          alias: "preview",
          args: [{
            kind: "Literal",
            name: "type",
            value: "PREVIEW"
          }],
          concreteType: "XWA2Picture",
          kind: "LinkedField",
          name: "picture",
          plural: false,
          selections: u = [o, s, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "direct_path",
            storageKey: null
          }],
          storageKey: "picture(type:\"PREVIEW\")"
        }, {
          alias: null,
          args: null,
          concreteType: "XWA2NewsletterDescription",
          kind: "LinkedField",
          name: "description",
          plural: false,
          selections: l,
          storageKey: null
        }, {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "invite",
          storageKey: null
        }, {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "handle",
          storageKey: null
        }, {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "subscribers_count",
          storageKey: null
        }, {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "verification",
          storageKey: null
        }, {
          alias: null,
          args: null,
          concreteType: "XWA2NewsletterThreadSettings",
          kind: "LinkedField",
          name: "settings",
          plural: false,
          selections: [{
            alias: null,
            args: null,
            concreteType: "XWA2NewsletterReactionCodesSetting",
            kind: "LinkedField",
            name: "reaction_codes",
            plural: false,
            selections: [{
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "value",
              storageKey: null
            }],
            storageKey: null
          }],
          storageKey: null
        }, {
          condition: "fetch_creation_time",
          kind: "Condition",
          passingValue: true,
          selections: [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "creation_time",
            storageKey: null
          }]
        }, {
          condition: "fetch_full_image",
          kind: "Condition",
          passingValue: true,
          selections: [{
            alias: null,
            args: [{
              kind: "Literal",
              name: "type",
              value: "IMAGE"
            }],
            concreteType: "XWA2Picture",
            kind: "LinkedField",
            name: "picture",
            plural: false,
            selections: u,
            storageKey: "picture(type:\"IMAGE\")"
          }]
        }],
        storageKey: null
      }, {
        condition: "fetch_viewer_metadata",
        kind: "Condition",
        passingValue: true,
        selections: [{
          alias: null,
          args: null,
          concreteType: "XWA2NewsletterViewerMetadata",
          kind: "LinkedField",
          name: "viewer_metadata",
          plural: false,
          selections: [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "mute",
            storageKey: null
          }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "role",
            storageKey: null
          }],
          storageKey: null
        }]
      }],
      storageKey: null
    }],
    type: "Query",
    abstractKey: null
  },
  kind: "Request",
  operation: {
    argumentDefinitions: [a, i, r, n],
    kind: "Operation",
    name: "WAWebMexFetchNewsletterJobQuery",
    selections: c
  },
  params: {
    id: "6563316087068696",
    metadata: {},
    name: "WAWebMexFetchNewsletterJobQuery",
    operationKind: "query",
    text: null
  }
};
var n;
var r;
var i;
var a;
var o;
var s;
var l;
var u;
var c;
t.hash = "74e77cdd22b470e560740f21686b8d0e";
module.exports = t;