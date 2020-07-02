const fetch = require('node-fetch');

fetch(
  'https://www.goodreads.com/author/show.xml?id=4432&key=risKm8wwXsIcyEiTktvA'
)
.then(resp => {
  resp.text()
})
.then(text => {
  console.log(text);
  
})