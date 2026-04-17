const multer = require('multer');
const path = require("path");
const fs = require("fs");
const File = require('../models/file.model');

const uploadDir = path.join(__dirname, "../../uploads");

if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir, {recursive: true});
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({storage});

const saveFile = async(file, userId) => {
    const saved = await File.create({
        filename: file.filename,
        path: file.path,
        size: file.size,
        userId,
    });

    return saved;
};

const getFiles = async (userId) => {
    return await File.findAll({where: {userId}});
};

module.exports = {
    upload,
    saveFile,
    getFiles,
};