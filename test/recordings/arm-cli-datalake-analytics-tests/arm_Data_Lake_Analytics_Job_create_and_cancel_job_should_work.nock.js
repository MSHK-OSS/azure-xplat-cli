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
nock('http://xplattestadla6242.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/Jobs/eb887c30-7aca-42ce-86f9-321eed0f29de?api-version=2015-11-01-preview', '*')
  .reply(200, "{\"jobId\":\"eb887c30-7aca-42ce-86f9-321eed0f29de\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"account\":null,\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"Tue, 23 Feb 2016 01:59:18 GMT\",\"startTime\":null,\"endTime\":null,\"state\":\"Compiling\",\"result\":\"Succeeded\",\"errorMessage\":null,\"storageAccounts\":null,\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"Tue, 23 Feb 2016 01:59:18 GMT\",\"requestedByUser\":null,\"details\":\"userName:adlsvc01@benwgoldoutlook.onmicrosoft.com;submitMachine:N/A\"}],\"properties\":{\"owner\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"algebraFilePath\":\"adl://xplattestadls8609.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/02/23/01/59/eb887c30-7aca-42ce-86f9-321eed0f29de/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"Unknown\",\"totalCompilationTime\":\"00:00:00\",\"totalPausedTime\":\"00:00:00\",\"totalQueuedTime\":\"00:00:00\",\"totalRunningTime\":\"00:00:00\",\"type\":\"USql\"}}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fc0c5759-4c2d-4813-b901-c4df09d56674',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 23 Feb 2016 01:59:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla6242.azuredatalakeanalytics.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/Jobs/eb887c30-7aca-42ce-86f9-321eed0f29de?api-version=2015-11-01-preview', '*')
  .reply(200, "{\"jobId\":\"eb887c30-7aca-42ce-86f9-321eed0f29de\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"account\":null,\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"Tue, 23 Feb 2016 01:59:18 GMT\",\"startTime\":null,\"endTime\":null,\"state\":\"Compiling\",\"result\":\"Succeeded\",\"errorMessage\":null,\"storageAccounts\":null,\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"Tue, 23 Feb 2016 01:59:18 GMT\",\"requestedByUser\":null,\"details\":\"userName:adlsvc01@benwgoldoutlook.onmicrosoft.com;submitMachine:N/A\"}],\"properties\":{\"owner\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"algebraFilePath\":\"adl://xplattestadls8609.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/02/23/01/59/eb887c30-7aca-42ce-86f9-321eed0f29de/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"Unknown\",\"totalCompilationTime\":\"00:00:00\",\"totalPausedTime\":\"00:00:00\",\"totalQueuedTime\":\"00:00:00\",\"totalRunningTime\":\"00:00:00\",\"type\":\"USql\"}}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fc0c5759-4c2d-4813-b901-c4df09d56674',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 23 Feb 2016 01:59:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla6242.azuredatalakeanalytics.net:443')
  .post('/Jobs/eb887c30-7aca-42ce-86f9-321eed0f29de/CancelJob?api-version=2015-11-01-preview')
  .reply(200, "", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  expires: '-1',
  'x-ms-request-id': '6591af4c-6e09-4c75-8f59-59a547fd0f77',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 23 Feb 2016 01:59:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla6242.azuredatalakeanalytics.net:443')
  .post('/Jobs/eb887c30-7aca-42ce-86f9-321eed0f29de/CancelJob?api-version=2015-11-01-preview')
  .reply(200, "", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  expires: '-1',
  'x-ms-request-id': '6591af4c-6e09-4c75-8f59-59a547fd0f77',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 23 Feb 2016 01:59:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla6242.azuredatalakeanalytics.net:443')
  .get('/Jobs/eb887c30-7aca-42ce-86f9-321eed0f29de?api-version=2015-11-01-preview')
  .reply(200, "{\"jobId\":\"eb887c30-7aca-42ce-86f9-321eed0f29de\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"account\":null,\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"Tue, 23 Feb 2016 01:59:18 GMT\",\"startTime\":null,\"endTime\":\"Tue, 23 Feb 2016 01:59:20 GMT\",\"state\":\"Ended\",\"result\":\"Cancelled\",\"errorMessage\":[{\"errorId\":\"I_UNKNOWN_CJS_CANCELEDBYUSERWITHOUTREASON\",\"name\":\"CANCELED_BY_USER_WITHOUT_REASON\",\"severity\":\"Info\",\"source\":\"Unknown\",\"component\":\"CJS\",\"message\":\"Job was cancelled.\",\"detail\":\"\",\"description\":\"Job was cancelled by adlsvc01@benwgoldoutlook.onmicrosoft.com.\",\"resolution\":\"\",\"helpLink\":\"\",\"internalDebugInfo\":null,\"innerError\":null}],\"storageAccounts\":null,\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"Tue, 23 Feb 2016 01:59:18 GMT\",\"requestedByUser\":null,\"details\":\"userName:adlsvc01@benwgoldoutlook.onmicrosoft.com;submitMachine:N/A\"},{\"newState\":\"Compiling\",\"timeStamp\":\"Tue, 23 Feb 2016 01:59:18 GMT\",\"requestedByUser\":null,\"details\":\"CcsAttempts:1;Status:Dispatched\"},{\"newState\":\"Ended\",\"timeStamp\":\"Tue, 23 Feb 2016 01:59:20 GMT\",\"requestedByUser\":null,\"details\":\"result:CanceledByUser\"}],\"properties\":{\"owner\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"resources\":[{\"name\":\"Profile\",\"resourcePath\":\"adl://xplattestadls8609.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/02/23/01/59/eb887c30-7aca-42ce-86f9-321eed0f29de/profile\",\"type\":\"StatisticsResource\"},{\"name\":\"__ScopeRuntimeStatistics__.xml\",\"resourcePath\":\"adl://xplattestadls8609.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/02/23/01/59/eb887c30-7aca-42ce-86f9-321eed0f29de/__ScopeRuntimeStatistics__.xml\",\"type\":\"StatisticsResource\"}],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"script\":\"DROP DATABASE IF EXISTS FOO; CREATE DATABASE FOO; DROP DATABASE IF EXISTS FOO;\",\"algebraFilePath\":\"adl://xplattestadls8609.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/02/23/01/59/eb887c30-7aca-42ce-86f9-321eed0f29de/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"Unknown\",\"totalCompilationTime\":\"00:00:01.1093955\",\"totalPausedTime\":\"00:00:00\",\"totalQueuedTime\":\"00:00:00\",\"totalRunningTime\":\"00:00:00\",\"type\":\"USql\"}}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3777e168-6e59-478d-ad3b-9596df00a2ca',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 23 Feb 2016 01:59:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla6242.azuredatalakeanalytics.net:443')
  .get('/Jobs/eb887c30-7aca-42ce-86f9-321eed0f29de?api-version=2015-11-01-preview')
  .reply(200, "{\"jobId\":\"eb887c30-7aca-42ce-86f9-321eed0f29de\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"account\":null,\"degreeOfParallelism\":1,\"priority\":1000,\"submitTime\":\"Tue, 23 Feb 2016 01:59:18 GMT\",\"startTime\":null,\"endTime\":\"Tue, 23 Feb 2016 01:59:20 GMT\",\"state\":\"Ended\",\"result\":\"Cancelled\",\"errorMessage\":[{\"errorId\":\"I_UNKNOWN_CJS_CANCELEDBYUSERWITHOUTREASON\",\"name\":\"CANCELED_BY_USER_WITHOUT_REASON\",\"severity\":\"Info\",\"source\":\"Unknown\",\"component\":\"CJS\",\"message\":\"Job was cancelled.\",\"detail\":\"\",\"description\":\"Job was cancelled by adlsvc01@benwgoldoutlook.onmicrosoft.com.\",\"resolution\":\"\",\"helpLink\":\"\",\"internalDebugInfo\":null,\"innerError\":null}],\"storageAccounts\":null,\"stateAuditRecords\":[{\"newState\":\"New\",\"timeStamp\":\"Tue, 23 Feb 2016 01:59:18 GMT\",\"requestedByUser\":null,\"details\":\"userName:adlsvc01@benwgoldoutlook.onmicrosoft.com;submitMachine:N/A\"},{\"newState\":\"Compiling\",\"timeStamp\":\"Tue, 23 Feb 2016 01:59:18 GMT\",\"requestedByUser\":null,\"details\":\"CcsAttempts:1;Status:Dispatched\"},{\"newState\":\"Ended\",\"timeStamp\":\"Tue, 23 Feb 2016 01:59:20 GMT\",\"requestedByUser\":null,\"details\":\"result:CanceledByUser\"}],\"properties\":{\"owner\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"resources\":[{\"name\":\"Profile\",\"resourcePath\":\"adl://xplattestadls8609.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/02/23/01/59/eb887c30-7aca-42ce-86f9-321eed0f29de/profile\",\"type\":\"StatisticsResource\"},{\"name\":\"__ScopeRuntimeStatistics__.xml\",\"resourcePath\":\"adl://xplattestadls8609.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/02/23/01/59/eb887c30-7aca-42ce-86f9-321eed0f29de/__ScopeRuntimeStatistics__.xml\",\"type\":\"StatisticsResource\"}],\"runtimeVersion\":\"default\",\"rootProcessNodeId\":\"00000000-0000-0000-0000-000000000000\",\"script\":\"DROP DATABASE IF EXISTS FOO; CREATE DATABASE FOO; DROP DATABASE IF EXISTS FOO;\",\"algebraFilePath\":\"adl://xplattestadls8609.azuredatalakestore.net/system/jobservice/jobs/Usql/2016/02/23/01/59/eb887c30-7aca-42ce-86f9-321eed0f29de/algebra.xml\",\"compileMode\":\"Semantic\",\"errorSource\":\"Unknown\",\"totalCompilationTime\":\"00:00:01.1093955\",\"totalPausedTime\":\"00:00:00\",\"totalQueuedTime\":\"00:00:00\",\"totalRunningTime\":\"00:00:00\",\"type\":\"USql\"}}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3777e168-6e59-478d-ad3b-9596df00a2ca',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 23 Feb 2016 01:59:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadla6242.azuredatalakeanalytics.net:443')
  .post('/Jobs/eb887c30-7aca-42ce-86f9-321eed0f29de/GetStatistics?api-version=2015-11-01-preview')
  .reply(400, "{\"error\":{\"code\":\"JobHasNeverRun\",\"message\":\"Cannot find job debugging data or job statistics.\"}}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1975227f-7233-41ae-976e-2a8da7cf56d2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 23 Feb 2016 01:59:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla6242.azuredatalakeanalytics.net:443')
  .post('/Jobs/eb887c30-7aca-42ce-86f9-321eed0f29de/GetStatistics?api-version=2015-11-01-preview')
  .reply(400, "{\"error\":{\"code\":\"JobHasNeverRun\",\"message\":\"Cannot find job debugging data or job statistics.\"}}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1975227f-7233-41ae-976e-2a8da7cf56d2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 23 Feb 2016 01:59:21 GMT',
  connection: 'close' });
 return result; }]];
 exports.uuidsGenerated = function() { return ['eb887c30-7aca-42ce-86f9-321eed0f29de'];};