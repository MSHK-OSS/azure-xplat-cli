// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5157?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls8609\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls8609\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla5157.azuredatalakeanalytics.net\",\"creationTime\":\"2016-02-23T01:55:06.0453826Z\",\"lastModifiedTime\":\"2016-02-23T01:55:06.0453826Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5157\",\"name\":\"xplattestadla5157\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '746',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd98a6140-d548-4a09-8b46-7490d4ee9db3',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '38dca70f-0fba-4883-b8f3-977fad673d18',
  'x-ms-routing-request-id': 'CENTRALUS:20160223T015546Z:38dca70f-0fba-4883-b8f3-977fad673d18',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 23 Feb 2016 01:55:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5157?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls8609\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls8609\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla5157.azuredatalakeanalytics.net\",\"creationTime\":\"2016-02-23T01:55:06.0453826Z\",\"lastModifiedTime\":\"2016-02-23T01:55:06.0453826Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5157\",\"name\":\"xplattestadla5157\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '746',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd98a6140-d548-4a09-8b46-7490d4ee9db3',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '38dca70f-0fba-4883-b8f3-977fad673d18',
  'x-ms-routing-request-id': 'CENTRALUS:20160223T015546Z:38dca70f-0fba-4883-b8f3-977fad673d18',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 23 Feb 2016 01:55:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testaba22463.azuredatalakeanalytics.net\",\"creationTime\":\"2016-01-27T23:38:52.1409021Z\",\"lastModifiedTime\":\"2016-01-27T23:38:52.1409021Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba12048/providers/Microsoft.DataLakeAnalytics/accounts/testaba22463\",\"name\":\"testaba22463\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testaba15365.azuredatalakeanalytics.net\",\"creationTime\":\"2016-01-27T23:28:35.9650496Z\",\"lastModifiedTime\":\"2016-01-27T23:28:35.9650496Z\"},\"location\":\"East US 2\",\"tags\":{\"testkey\":\"testvalue\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba18569/providers/Microsoft.DataLakeAnalytics/accounts/testaba15365\",\"name\":\"testaba15365\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla5157.azuredatalakeanalytics.net\",\"creationTime\":\"2016-02-23T01:55:06.0453826Z\",\"lastModifiedTime\":\"2016-02-23T01:55:06.0453826Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5157\",\"name\":\"xplattestadla5157\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla6242.azuredatalakeanalytics.net\",\"creationTime\":\"2016-02-23T01:54:28.8175517Z\",\"lastModifiedTime\":\"2016-02-23T01:54:28.8175517Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla6242\",\"name\":\"xplattestadla6242\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1965',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '0044b01e-abdc-492c-addf-e3659f622020',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '91ef0010-000c-4bba-ba98-3cace780c2f6',
  'x-ms-routing-request-id': 'CENTRALUS:20160223T015546Z:91ef0010-000c-4bba-ba98-3cace780c2f6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 23 Feb 2016 01:55:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testaba22463.azuredatalakeanalytics.net\",\"creationTime\":\"2016-01-27T23:38:52.1409021Z\",\"lastModifiedTime\":\"2016-01-27T23:38:52.1409021Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba12048/providers/Microsoft.DataLakeAnalytics/accounts/testaba22463\",\"name\":\"testaba22463\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testaba15365.azuredatalakeanalytics.net\",\"creationTime\":\"2016-01-27T23:28:35.9650496Z\",\"lastModifiedTime\":\"2016-01-27T23:28:35.9650496Z\"},\"location\":\"East US 2\",\"tags\":{\"testkey\":\"testvalue\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba18569/providers/Microsoft.DataLakeAnalytics/accounts/testaba15365\",\"name\":\"testaba15365\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla5157.azuredatalakeanalytics.net\",\"creationTime\":\"2016-02-23T01:55:06.0453826Z\",\"lastModifiedTime\":\"2016-02-23T01:55:06.0453826Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5157\",\"name\":\"xplattestadla5157\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla6242.azuredatalakeanalytics.net\",\"creationTime\":\"2016-02-23T01:54:28.8175517Z\",\"lastModifiedTime\":\"2016-02-23T01:54:28.8175517Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla6242\",\"name\":\"xplattestadla6242\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1965',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '0044b01e-abdc-492c-addf-e3659f622020',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '91ef0010-000c-4bba-ba98-3cace780c2f6',
  'x-ms-routing-request-id': 'CENTRALUS:20160223T015546Z:91ef0010-000c-4bba-ba98-3cace780c2f6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 23 Feb 2016 01:55:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5157?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls8609\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls8609\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla5157.azuredatalakeanalytics.net\",\"creationTime\":\"2016-02-23T01:55:06.0453826Z\",\"lastModifiedTime\":\"2016-02-23T01:55:06.0453826Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5157\",\"name\":\"xplattestadla5157\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '746',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'b6bafc4a-6a8b-4314-b445-832ee87ec62e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'f8c220b2-db21-424a-bccd-0b5b8448fe62',
  'x-ms-routing-request-id': 'CENTRALUS:20160223T015547Z:f8c220b2-db21-424a-bccd-0b5b8448fe62',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 23 Feb 2016 01:55:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5157?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls8609\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls8609\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla5157.azuredatalakeanalytics.net\",\"creationTime\":\"2016-02-23T01:55:06.0453826Z\",\"lastModifiedTime\":\"2016-02-23T01:55:06.0453826Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5157\",\"name\":\"xplattestadla5157\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '746',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'b6bafc4a-6a8b-4314-b445-832ee87ec62e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'f8c220b2-db21-424a-bccd-0b5b8448fe62',
  'x-ms-routing-request-id': 'CENTRALUS:20160223T015547Z:f8c220b2-db21-424a-bccd-0b5b8448fe62',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 23 Feb 2016 01:55:47 GMT',
  connection: 'close' });
 return result; }]];