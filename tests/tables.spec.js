const fetch = require("node-fetch");
describe("Tables Page", function() {
  beforeEach(function() {
    browser.url("./#/tables");
  });
  it("renders tables page", function() {
    var results = browser.checkDocument();

    results.forEach(function(result) {
      expect(result.isWithinMisMatchTolerance).to.equal(
        true,
        "screenshot failure"
      );
    });
  });
  it("check the page for broken links", async function() {
    const links = browser.$$("a");

    let urls = links.map(link => link.getAttribute("href"));

    const isValidUrl = url => {
      const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
      return regexp.test(url);
    };

    const validUrls = urls.filter(isValidUrl);

    const requests = validUrls.map(url => fetch(url));

    const responses = await Promise.all(requests);

    const statusCodes = responses.map(response => response.status);

    statusCodes.forEach((statusCode, i) => {
      if (statusCode == "404") {
        console.log("Invalid url " + validUrls[i]);
      }
      expect(statusCode).to.be.below(400);
    });
  });
});
