const fileService = require('../services/file.service');

const uploadFile = async (req, res, next) => {
    try{
        const file = req.file;
        const userId = req.user.id;

        const saved = await fileService.saveFile(file, userId);

        res.json({
            success: true,
            message: "File uploaded successfully",
            data: saved
        });
    } catch(err){
        next(err);
    }
};

const listFiles = async (req, res, next) => {
    try{
        const userId = req.user.id;
        const files = await fileService.getFiles(userId);

        res.json({
            success: true,
            data: files
        });
    } catch(err){
        next(err);
    }
};

module.exports = {
    uploadFile,
    listFiles,
}