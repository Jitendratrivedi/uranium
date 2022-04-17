const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController=require("../controllers/publishercontroller")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook)

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
router.post("/createnewAuthor",authorController.createnewAuthor)
router.post("/createnewPublisher",publisherController.createnewPublisher)
router.post("/createnewBook",bookController.createnewBook)
router.get("/getLibraryBooks",bookController.getLibraryBooks)
router.put("/books",bookController.books)


module.exports = router;