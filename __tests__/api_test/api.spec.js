const frisby = require('frisby');

describe('Posts', function () {
  it('should be a teapot', function (done) {
    frisby.get('http://www.sojson.com/open/api/weather/json.shtml?city=北京')
      .expect('status', 200)
      .done(done);
  });
});
