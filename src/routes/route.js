const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const batchController=require("../controllers/batchController")
const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController=require("../controllers/publishercontroller")
const developerController=require("../controllers/developerController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/createBook", bookController.createBook)

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
router.post("/createnewAuthor",authorController.createnewAuthor)
router.post("/createnewPublisher",publisherController.createnewPublisher)
router.post("/createnewBook",bookController.createnewBook)
router.get("/getLibraryBooks",bookController.getLibraryBooks)
router.put("/books",bookController.books)
router.post("/createBatch",batchController.createBatch)
router.post("/createDeveloper",developerController.createDeveloper)
router.get("/scolarshipDeveloper",developerController.scolarshipDeveloper)
router.get("/developers",developerController.developers)


module.exports = router;