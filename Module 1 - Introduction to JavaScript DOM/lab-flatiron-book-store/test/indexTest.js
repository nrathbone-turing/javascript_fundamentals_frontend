require ( './helpers.js' );

describe("index.html", () => {

  describe("after index.js is processed", () => {

    it("the header element has the text \"Flatbooks Technical Books\" ", () => {
      expect(document.querySelector('#header').innerHTML, "Make sure your <h1> with id 'header' includes the text \"Flatbooks Technical Books\" inside it").to.include("Flatbooks Technical Books");
    });

    it('the #book-list element has the title of all the books in it',()=>{
      expect(document.querySelector('#book-list').innerHTML, "Make sure your book list contains the first book, Eloquent JavaScript: A Modern Introduction to Programming").to.include("Eloquent JavaScript: A Modern Introduction to Programming");
      expect(document.querySelector('#book-list').innerHTML, "Make sure your book list contains the last book, Cracking the Coding Interview").to.include("Cracking the Coding Interview");
    })
    it('the #book-list element has the author of all the books in it',()=>{
      expect(document.querySelector('#book-list').innerHTML, "Make sure your book list contains the second book author, Jon Duckett").to.include("Jon Duckett");
    })
    it('the #book-list element has the image of all the books in it',()=>{
      expect(document.querySelector('#book-list').innerHTML, "Make sure your book list contains the first book image link").to.include("https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg");
    })
  });
})
