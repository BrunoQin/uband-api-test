const frisby = require('frisby');
const Joi = frisby.Joi;

describe('Test', function () {

  beforeAll(function () {
    // Add our custom expect handler
    frisby.addExpectHandler('isBeijing', function (res) {
      expect(res.json.city).toBe("北京");
    });
  });

  it('should response Beijing\'s weather', function (done) {
    frisby.get('http://www.sojson.com/open/api/weather/json.shtml?city=北京')
      .expect('isBeijing')
      .expect('status', 200)
      .expect('jsonTypes', {
        message: Joi.string(),
        pm25: Joi.number(),
        pm10: Joi.number(),
        shidu: Joi.string(),
        quality: Joi.string()
      })
      .then(function (res) {
        expect(res.json.message).toBe('Success !');
        expect(res.json.data.pm25).toBe(150.0);
      })
      .done(done);
  });

  afterAll(function () {
    // Remove said custom handler (if needed)
    frisby.removeExpectHandler('isBeijing');
  });

});
