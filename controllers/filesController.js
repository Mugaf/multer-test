exports.fileUpload = async (req, res, next) => {
    try {
        console.log(req.file);
        console.log(req.body);
    } catch (error) {
        next(error);
    }
}