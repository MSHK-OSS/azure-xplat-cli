// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestRouteTbl?api-version=2015-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestRouteTbl' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14906',
  'x-ms-request-id': 'b624a6a9-bbf3-40fb-af0d-1735bf84d26b',
  'x-ms-correlation-request-id': 'b624a6a9-bbf3-40fb-af0d-1735bf84d26b',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T112939Z:b624a6a9-bbf3-40fb-af0d-1735bf84d26b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:29:39 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestRouteTbl?api-version=2015-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestRouteTbl' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14906',
  'x-ms-request-id': 'b624a6a9-bbf3-40fb-af0d-1735bf84d26b',
  'x-ms-correlation-request-id': 'b624a6a9-bbf3-40fb-af0d-1735bf84d26b',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T112939Z:b624a6a9-bbf3-40fb-af0d-1735bf84d26b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:29:39 GMT',
  connection: 'close',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestRouteTbl?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl\",\"name\":\"xplatTestRouteTbl\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '197',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1163',
  'x-ms-request-id': '9739c7f4-1844-411c-896e-4d7b70f750da',
  'x-ms-correlation-request-id': '9739c7f4-1844-411c-896e-4d7b70f750da',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T112942Z:9739c7f4-1844-411c-896e-4d7b70f750da',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:29:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestRouteTbl?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl\",\"name\":\"xplatTestRouteTbl\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '197',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1163',
  'x-ms-request-id': '9739c7f4-1844-411c-896e-4d7b70f750da',
  'x-ms-correlation-request-id': '9739c7f4-1844-411c-896e-4d7b70f750da',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T112942Z:9739c7f4-1844-411c-896e-4d7b70f750da',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:29:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/routeTables/ArmRouteTbl' under resource group 'xplatTestRouteTbl' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '93364759-bee1-4118-86bd-10c440235dec',
  'x-ms-correlation-request-id': '93364759-bee1-4118-86bd-10c440235dec',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T112944Z:93364759-bee1-4118-86bd-10c440235dec',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:29:43 GMT',
  connection: 'close',
  'content-length': '162' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/routeTables/ArmRouteTbl' under resource group 'xplatTestRouteTbl' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '93364759-bee1-4118-86bd-10c440235dec',
  'x-ms-correlation-request-id': '93364759-bee1-4118-86bd-10c440235dec',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T112944Z:93364759-bee1-4118-86bd-10c440235dec',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 29 Dec 2015 11:29:43 GMT',
  connection: 'close',
  'content-length': '162' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"ArmRouteTbl\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl\",\r\n  \"etag\": \"W/\\\"61937bdd-7fd5-454a-b480-b8c2968c2867\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"a4f631d4-8faf-4edc-8d1d-1ff229af4c75\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '446',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '295a8d2d-8dd3-4995-b830-10687bb174e2',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/295a8d2d-8dd3-4995-b830-10687bb174e2?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1160',
  'x-ms-correlation-request-id': '7e13d882-49b7-4d62-ba54-01e73a25d83e',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T112950Z:7e13d882-49b7-4d62-ba54-01e73a25d83e',
  date: 'Tue, 29 Dec 2015 11:29:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"ArmRouteTbl\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl\",\r\n  \"etag\": \"W/\\\"61937bdd-7fd5-454a-b480-b8c2968c2867\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"a4f631d4-8faf-4edc-8d1d-1ff229af4c75\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '446',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '295a8d2d-8dd3-4995-b830-10687bb174e2',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/295a8d2d-8dd3-4995-b830-10687bb174e2?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1160',
  'x-ms-correlation-request-id': '7e13d882-49b7-4d62-ba54-01e73a25d83e',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T112950Z:7e13d882-49b7-4d62-ba54-01e73a25d83e',
  date: 'Tue, 29 Dec 2015 11:29:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/295a8d2d-8dd3-4995-b830-10687bb174e2?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '65f0ae48-eb1f-45c5-b487-2bdf0de880d1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14912',
  'x-ms-correlation-request-id': '7730a15e-3bfa-4be2-b43d-b3e658c8007b',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113002Z:7730a15e-3bfa-4be2-b43d-b3e658c8007b',
  date: 'Tue, 29 Dec 2015 11:30:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/295a8d2d-8dd3-4995-b830-10687bb174e2?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '65f0ae48-eb1f-45c5-b487-2bdf0de880d1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14912',
  'x-ms-correlation-request-id': '7730a15e-3bfa-4be2-b43d-b3e658c8007b',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113002Z:7730a15e-3bfa-4be2-b43d-b3e658c8007b',
  date: 'Tue, 29 Dec 2015 11:30:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"ArmRouteTbl\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl\",\r\n  \"etag\": \"W/\\\"36bf1b55-7e04-4777-aa35-faa616aed269\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"a4f631d4-8faf-4edc-8d1d-1ff229af4c75\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '447',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"36bf1b55-7e04-4777-aa35-faa616aed269"',
  'x-ms-request-id': '7a1cbdb3-6ec9-47a6-a53b-61d749852007',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14911',
  'x-ms-correlation-request-id': '940b251a-3d49-46e1-86cd-8570dc519d32',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113003Z:940b251a-3d49-46e1-86cd-8570dc519d32',
  date: 'Tue, 29 Dec 2015 11:30:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"ArmRouteTbl\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestRouteTbl/providers/Microsoft.Network/routeTables/ArmRouteTbl\",\r\n  \"etag\": \"W/\\\"36bf1b55-7e04-4777-aa35-faa616aed269\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"a4f631d4-8faf-4edc-8d1d-1ff229af4c75\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '447',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"36bf1b55-7e04-4777-aa35-faa616aed269"',
  'x-ms-request-id': '7a1cbdb3-6ec9-47a6-a53b-61d749852007',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14911',
  'x-ms-correlation-request-id': '940b251a-3d49-46e1-86cd-8570dc519d32',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T113003Z:940b251a-3d49-46e1-86cd-8570dc519d32',
  date: 'Tue, 29 Dec 2015 11:30:03 GMT',
  connection: 'close' });
 return result; }]];