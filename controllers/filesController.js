var fs = require("fs");

exports.fileUpload = async (req, res, next) => {
    try {
        console.log(req.file);
        console.log(req.body);
        const base64File = fs.readFileSync(req.file.path, { encoding: 'base64' });
        //fileName, base64File <--- input to database
        fs.unlinkSync(req.file.path);
        /**
         * img src={file.base64File}
         */
    } catch (error) {
        next(error);
    }
}