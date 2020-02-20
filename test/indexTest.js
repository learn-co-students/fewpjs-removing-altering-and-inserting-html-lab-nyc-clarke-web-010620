describe("index.html", function () {
  this.timeout(0)
  describe("after index.js is processed", function () {
    this.timeout(0)
    it("no longer has DOM node 'main#main'", function() {
      this.timeout(0)
      expect(document.querySelector('main'), "Make sure you remove the <main> with id 'main'").to.not.exist
    });

    it("has a 'newHeader' variable that points to node 'h1#victory'", function () {
      this.timeout(0)
      expect(newHeader.nodeName, "Make sure you create an <h1> with id 'victory'").eql('H1')
    });

    it("has a 'newHeader' variable that points to node 'h1#victory'", function () {
      this.timeout(0)
      expect(newHeader.id, "Make sure you create an <h1> with id 'victory'").eql('victory')
    });

    it("has a 'newHeader' variable that points to node 'h1#victory' with \"YOUR-NAME is the champion\" inside", function () {
      this.timeout(0)
      expect(newHeader.innerHTML, "Make sure you create an <h1> with id 'victory' with a sweet message in it").to.include("is the champion");
    });

  });
})
