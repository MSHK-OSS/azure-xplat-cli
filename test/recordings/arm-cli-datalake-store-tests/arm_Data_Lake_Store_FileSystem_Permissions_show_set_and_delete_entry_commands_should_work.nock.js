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
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls2761.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '639bc292-0baa-4f55-ac88-6702658143ed',
  'set-cookie': [ 'UserPrincipalSession=44ad9621-0ddf-42d5-bcc2-102f334ef336; path=/; secure; HttpOnly' ],
  'server-perf': '[639bc2920baa4f55ac886702658143ed][ AuthTime::1736.44153516829::PostAuthTime::30983.0782489313 ][HdfsGetAclStatus :: 00:00:126 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETACLSTATUS :: 00:00:127 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 23 Feb 2016 04:52:16 GMT',
  connection: 'close',
  'content-length': '271' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls2761.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '639bc292-0baa-4f55-ac88-6702658143ed',
  'set-cookie': [ 'UserPrincipalSession=44ad9621-0ddf-42d5-bcc2-102f334ef336; path=/; secure; HttpOnly' ],
  'server-perf': '[639bc2920baa4f55ac886702658143ed][ AuthTime::1736.44153516829::PostAuthTime::30983.0782489313 ][HdfsGetAclStatus :: 00:00:126 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETACLSTATUS :: 00:00:127 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 23 Feb 2016 04:52:16 GMT',
  connection: 'close',
  'content-length': '271' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls2761.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3%3Arwx&op=MODIFYACLENTRIES&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'e189a535-42df-4646-bd77-4d7188dd1478',
  'set-cookie': [ 'UserPrincipalSession=944986f7-6d55-4a5f-acca-8d57c79d9925; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[e189a53542df4646bd774d7188dd1478][ AuthTime::1745.85082427511::PostAuthTime::31083.5865643905 ][MODIFYACLENTRIES :: 00:00:158 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 23 Feb 2016 04:52:16 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls2761.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3%3Arwx&op=MODIFYACLENTRIES&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'e189a535-42df-4646-bd77-4d7188dd1478',
  'set-cookie': [ 'UserPrincipalSession=944986f7-6d55-4a5f-acca-8d57c79d9925; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[e189a53542df4646bd774d7188dd1478][ AuthTime::1745.85082427511::PostAuthTime::31083.5865643905 ][MODIFYACLENTRIES :: 00:00:158 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 23 Feb 2016 04:52:16 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls2761.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\",\"user:027c28d5-c91d-49f0-98c5-d10134b169b3:rwx\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '03c3589c-5987-4d6f-a896-b4540140cb6a',
  'set-cookie': [ 'UserPrincipalSession=696070c1-cc3e-43fb-be89-5cceb036a1e1; path=/; secure; HttpOnly' ],
  'server-perf': '[03c3589c59874d6fa896b4540140cb6a][ AuthTime::1768.94635208277::PostAuthTime::31184.5225748092 ][HdfsGetAclStatus :: 00:00:097 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETACLSTATUS :: 00:00:097 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 23 Feb 2016 04:52:18 GMT',
  connection: 'close',
  'content-length': '319' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls2761.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\",\"user:027c28d5-c91d-49f0-98c5-d10134b169b3:rwx\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '03c3589c-5987-4d6f-a896-b4540140cb6a',
  'set-cookie': [ 'UserPrincipalSession=696070c1-cc3e-43fb-be89-5cceb036a1e1; path=/; secure; HttpOnly' ],
  'server-perf': '[03c3589c59874d6fa896b4540140cb6a][ AuthTime::1768.94635208277::PostAuthTime::31184.5225748092 ][HdfsGetAclStatus :: 00:00:097 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETACLSTATUS :: 00:00:097 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 23 Feb 2016 04:52:18 GMT',
  connection: 'close',
  'content-length': '319' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls2761.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3%3A-w-&op=MODIFYACLENTRIES&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '62facab5-98e9-4fe0-a256-03432a86a1b0',
  'set-cookie': [ 'UserPrincipalSession=91dfc90a-1a5d-4edb-b92a-1ca1c1d41e09; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[62facab598e94fe0a25603432a86a1b0][ AuthTime::1805.2996515143::PostAuthTime::31431.2891233797 ][MODIFYACLENTRIES :: 00:00:186 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 23 Feb 2016 04:52:18 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls2761.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3%3A-w-&op=MODIFYACLENTRIES&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '62facab5-98e9-4fe0-a256-03432a86a1b0',
  'set-cookie': [ 'UserPrincipalSession=91dfc90a-1a5d-4edb-b92a-1ca1c1d41e09; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[62facab598e94fe0a25603432a86a1b0][ AuthTime::1805.2996515143::PostAuthTime::31431.2891233797 ][MODIFYACLENTRIES :: 00:00:186 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 23 Feb 2016 04:52:18 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls2761.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\",\"user:027c28d5-c91d-49f0-98c5-d10134b169b3:-w-\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '11245d50-9c9a-436f-adb9-4365829b9931',
  'set-cookie': [ 'UserPrincipalSession=21eed846-a975-4934-82f8-0492472f74d4; path=/; secure; HttpOnly' ],
  'server-perf': '[11245d509c9a436fadb94365829b9931][ AuthTime::1739.43391198986::PostAuthTime::31617.3228285839 ][HdfsGetAclStatus :: 00:00:075 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETACLSTATUS :: 00:00:075 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 23 Feb 2016 04:52:19 GMT',
  connection: 'close',
  'content-length': '319' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls2761.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\",\"user:027c28d5-c91d-49f0-98c5-d10134b169b3:-w-\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '11245d50-9c9a-436f-adb9-4365829b9931',
  'set-cookie': [ 'UserPrincipalSession=21eed846-a975-4934-82f8-0492472f74d4; path=/; secure; HttpOnly' ],
  'server-perf': '[11245d509c9a436fadb94365829b9931][ AuthTime::1739.43391198986::PostAuthTime::31617.3228285839 ][HdfsGetAclStatus :: 00:00:075 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETACLSTATUS :: 00:00:075 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 23 Feb 2016 04:52:19 GMT',
  connection: 'close',
  'content-length': '319' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls2761.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3&op=REMOVEACLENTRIES&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '30708c36-3d23-4b88-9c93-ff2f19b0c3a1',
  'set-cookie': [ 'UserPrincipalSession=5930838b-808f-4d01-b703-93b993d6f56a; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[30708c363d234b889c93ff2f19b0c3a1][ AuthTime::1738.1500848118::PostAuthTime::31485.1517331461 ][REMOVEACLENTRIES :: 00:00:195 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 23 Feb 2016 04:52:20 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls2761.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3&op=REMOVEACLENTRIES&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '30708c36-3d23-4b88-9c93-ff2f19b0c3a1',
  'set-cookie': [ 'UserPrincipalSession=5930838b-808f-4d01-b703-93b993d6f56a; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[30708c363d234b889c93ff2f19b0c3a1][ AuthTime::1738.1500848118::PostAuthTime::31485.1517331461 ][REMOVEACLENTRIES :: 00:00:195 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 23 Feb 2016 04:52:20 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls2761.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'dfa415dd-99e3-4864-9618-2a844358c158',
  'set-cookie': [ 'UserPrincipalSession=bc96367f-67e6-48a2-aa06-3883725ae6b1; path=/; secure; HttpOnly' ],
  'server-perf': '[dfa415dd99e3486496182a844358c158][ AuthTime::1794.17958732586::PostAuthTime::31541.634375711 ][HdfsGetAclStatus :: 00:00:089 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETACLSTATUS :: 00:00:090 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 23 Feb 2016 04:52:22 GMT',
  connection: 'close',
  'content-length': '271' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls2761.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'dfa415dd-99e3-4864-9618-2a844358c158',
  'set-cookie': [ 'UserPrincipalSession=bc96367f-67e6-48a2-aa06-3883725ae6b1; path=/; secure; HttpOnly' ],
  'server-perf': '[dfa415dd99e3486496182a844358c158][ AuthTime::1794.17958732586::PostAuthTime::31541.634375711 ][HdfsGetAclStatus :: 00:00:089 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETACLSTATUS :: 00:00:090 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 23 Feb 2016 04:52:22 GMT',
  connection: 'close',
  'content-length': '271' });
 return result; }]];