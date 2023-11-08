const t = {
  fragment: {
    argumentDefinitions: n = [{
      defaultValue: null,
      kind: "LocalArgument",
      name: "request"
    }],
    kind: "Fragment",
    metadata: null,
    name: "WAWebQueryProductCollectionsQuery",
    selections: l = [{
      alias: null,
      args: [{
        kind: "Variable",
        name: "request",
        variableName: "request"
      }],
      concreteType: "XWAProductCatalogGetCollectionsResponseSuccess",
      kind: "LinkedField",
      name: "xwa_product_catalog_get_collections",
      plural: false,
      selections: [{
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "__typename",
        storageKey: null
      }, {
        alias: null,
        args: null,
        concreteType: "XWACatalogProductCollection",
        kind: "LinkedField",
        name: "collections",
        plural: true,
        selections: [r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null
        }, i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null
        }, {
          alias: null,
          args: null,
          concreteType: "XWAProductCatalogCollectionStatusInfo",
          kind: "LinkedField",
          name: "status_info",
          plural: false,
          selections: [a = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "status",
            storageKey: null
          }, o = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "can_appeal",
            storageKey: null
          }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "reject_reason",
            storageKey: null
          }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "commerce_url",
            storageKey: null
          }],
          storageKey: null
        }, {
          alias: null,
          args: null,
          concreteType: "XWACatalogProduct",
          kind: "LinkedField",
          name: "products",
          plural: true,
          selections: [r, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "retailer_id",
            storageKey: null
          }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_hidden",
            storageKey: null
          }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "product_availability",
            storageKey: null
          }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "max_available",
            storageKey: null
          }, i, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "description",
            storageKey: null
          }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "url",
            storageKey: null
          }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "currency",
            storageKey: null
          }, s = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "price",
            storageKey: null
          }, {
            alias: null,
            args: null,
            concreteType: "XWAProductCatalogProductStatusInfo",
            kind: "LinkedField",
            name: "status_info",
            plural: false,
            selections: [o, a],
            storageKey: null
          }, {
            alias: null,
            args: null,
            concreteType: "XWAProductCatalogProductSalePrice",
            kind: "LinkedField",
            name: "sale_price",
            plural: false,
            selections: [s, {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "start_date",
              storageKey: null
            }, {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "end_date",
              storageKey: null
            }],
            storageKey: null
          }, {
            alias: null,
            args: null,
            concreteType: "XWAProductCatalogProductMedia",
            kind: "LinkedField",
            name: "media",
            plural: false,
            selections: [{
              alias: null,
              args: null,
              concreteType: "XWAProductCatalogProductMediaImage",
              kind: "LinkedField",
              name: "images",
              plural: true,
              selections: [r, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "original_image_url",
                storageKey: null
              }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "request_image_url",
                storageKey: null
              }],
              storageKey: null
            }],
            storageKey: null
          }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "belongs_to",
            storageKey: null
          }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "compliance_category",
            storageKey: null
          }, {
            alias: null,
            args: null,
            concreteType: "XWAProductCatalogProductComplianceInfo",
            kind: "LinkedField",
            name: "compliance_info",
            plural: false,
            selections: [{
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "country_code_origin",
              storageKey: null
            }, {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "importer_name",
              storageKey: null
            }, {
              alias: null,
              args: null,
              concreteType: "XWAProductCatalogProductComplianceInfoImporterAddress",
              kind: "LinkedField",
              name: "importer_address",
              plural: false,
              selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "street1",
                storageKey: null
              }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "street2",
                storageKey: null
              }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "postal_code",
                storageKey: null
              }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "city",
                storageKey: null
              }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "region",
                storageKey: null
              }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "country_code",
                storageKey: null
              }],
              storageKey: null
            }],
            storageKey: null
          }],
          storageKey: null
        }],
        storageKey: null
      }, {
        alias: null,
        args: null,
        concreteType: "XWACatalogPaging",
        kind: "LinkedField",
        name: "paging",
        plural: false,
        selections: [{
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "after",
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
    name: "WAWebQueryProductCollectionsQuery",
    selections: l
  },
  params: {
    id: "WAWebQueryProductCollectionsQuery",
    metadata: {},
    name: "WAWebQueryProductCollectionsQuery",
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
t.hash = "12a9551193361530e95abb2b4c1b32a4";
module.exports = t;