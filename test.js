var sha1 = require('./sha1.js');
var assert = require('assert');

describe('sha1', function () {
  it ('should return the expected SHA-1 hash for "message"', function () {
    assert.equal('6f9b9af3cd6e8b8a73c2cdced37fe9f59226e27d', sha1('message'));
  });
});
