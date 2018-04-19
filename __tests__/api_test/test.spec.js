const YAML = require('yamljs');
const fs = require("fs");

describe('read file', function () {
  it('should read file', function (done) {
    var data = YAML.parse(fs.readFileSync("__tests__/config/config.yml").toString());
    var user = data.user;
    var books = data.books;
    console.log(user);
    console.log(books);
    done();
  });
});
