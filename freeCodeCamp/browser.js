let book = 1;
book++
function test(book) {
  let resultbook = book;
  resultbook++;
  console.log("Resultbook is " + resultbook);
  console.log("book inside is " + book);

}

console.log("book outside is " + book);

test(book);