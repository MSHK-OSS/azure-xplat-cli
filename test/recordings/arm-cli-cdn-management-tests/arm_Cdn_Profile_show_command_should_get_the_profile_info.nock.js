// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4',
    name: 'Visual Studio Enterprise with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: 'ed912eac-e7c1-43f8-a91f-ef14a7879293',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_1'] = 'xplattestadlsrgr01';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_1'] = 'cliTestProfile01';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_2'] = 'xplattestadlsrgr02';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_2'] = 'cliTestProfile02';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_1'] = 'cliTestEndpoint001';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_2'] = 'cliTestEndpoint002';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_1'] = 'cliTestOrigin01';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_2'] = 'cliTestOrigin02';
  process.env['AZURE_ARM_TEST_ENDPOINT_TEST_LOCATION_1'] = 'eastus';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_NAME_1'] = 'cliTestCustomDomain01';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_HOST_NAME_1'] = 'cli-59e92ce9-af32-4879-baad-d5f36a9ede94.azureedge-test.net';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"cliTestProfile01\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '387',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'be9965c9-04dc-4266-b3ed-d054a30d65bc',
  'x-ms-client-request-id': 'c026ea54-0ef1-4768-a53c-b81db0794b71',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '2975ba4d-7c59-4ea6-b28c-a5ab810de0c0',
  'x-ms-routing-request-id': 'CENTRALUS:20161219T230501Z:2975ba4d-7c59-4ea6-b28c-a5ab810de0c0',
  date: 'Mon, 19 Dec 2016 23:05:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"cliTestProfile01\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"sku\":{\r\n    \"name\":\"Standard_Verizon\"\r\n  },\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '387',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'be9965c9-04dc-4266-b3ed-d054a30d65bc',
  'x-ms-client-request-id': 'c026ea54-0ef1-4768-a53c-b81db0794b71',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '2975ba4d-7c59-4ea6-b28c-a5ab810de0c0',
  'x-ms-routing-request-id': 'CENTRALUS:20161219T230501Z:2975ba4d-7c59-4ea6-b28c-a5ab810de0c0',
  date: 'Mon, 19 Dec 2016 23:05:01 GMT',
  connection: 'close' });
 return result; }]];