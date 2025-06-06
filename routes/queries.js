const express = require('express');
const router = express.Router();
const Author = require("../models/author");
const Book = require("../models/book");

router.get('/', function (req, res, next) {
  res.send('Queries');
});

router.get('/author', async function (req, res, next) {
  const firstName = req.query["first_name"]
  const familyName = req.query["family_name"]

  let query = {}
  if (firstName) query.first_name = RegExp(firstName, "i")
  if (familyName) query.family_name = RegExp(familyName, "i")

  const authors = await Author.find(query);

  let result = ""
  if (authors.length > 0) {
    result = `<ul>${authors.map((author) => `<li>${author.name}</li>`).join("")}</ul>`;
  } else {
    result = "<h1>Not found</h1>"
  }
  res.send(result)
});

router.get('/books', async function (req, res, next) {
  const title = req.query["title"]
  
  let query = {}
  if (title) query.title = RegExp(title, "i")

  const books = await Book.find(query).populate('author');

  let result = ""
  if (books.length > 0) {
    result = `<ul>${books.map((book) => 
      `<li>${book.title} by ${book.author.first_name} ${book.author.family_name}</li>`
    ).join("")}</ul>`;
  } else {
    result = "<h1>Not found</h1>"
  }
  res.send(result)
});

module.exports = router;