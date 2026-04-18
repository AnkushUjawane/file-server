const fileService = require('../services/file.service');

const uploadFile = async (req, res, next) => {
    try {
        if(!req.file){
            return res.status(400).json({
                success: false,
                message: "file is reuqired",
            })
        }

        const file = req.file;
        const userId = req.user.id;

        const saved = await fileService.saveFile(file, userId);

        res.json({
            success: true,
            message: "File uploaded successfully",
            data: saved
        });
    } catch (err) {
        next(err);
    }

    console.log("REQ.FILE:", req.file);
    console.log("User ID uploading:", req.user.id);
};

const listFiles = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const files = await fileService.getFiles(userId);

        res.json({
            success: true,
            data: files
        });
    } catch (err) {
        next(err);
    }
    console.log("Fetching files for user:", req.user.id);
};

const downloadFile = async (req, res, next) => {
    try {
        const file = await fileService.getFilebyId(
            req.params.id,
            req.user.id
        );

        res.download(file.path, file.filename);
    } catch (err) {
        next(err);
    }
};

const deleteFile = async (req, res, next) => {
    try {
        const file = await fileService.deleteFile(
            req.params.id,
            req.user.id
        )

        res.json({
            success: true,
            message: "File deleted successfully",
        })
    } catch (err) {
        next(err);
    }
};

const renameFile = async (req, res, next) => {
    try {
        const { name } = req.body;

        const file = await fileService.renameFile(
            req.params.id,
            name,
            req.user.id
        )

        res.json({
            success: true,
            message: "file renamed successfully",
            data: file,
        });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    uploadFile,
    listFiles,
    downloadFile,
    deleteFile,
    renameFile,
}