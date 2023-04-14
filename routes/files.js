var express = require('express');
var router = express.Router();
var { upload } = require("../middlewares/multer");
var filesController = require("../controllers/filesController");

router.post('/uploadFile', upload.single("file"), filesController.fileUpload)

module.exports = router;
