var multer = require("multer");
var path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './tmp/my-uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.parse(file.originalname).ext);
    }
})

exports.upload = multer({ storage: storage })