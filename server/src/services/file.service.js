const multer = require('multer');
const path = require('path');
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

const getFilebyId = async (id, userId) => {
    const file = await File.findOne({where: {id, userId}});
    if(!file){
        throw new Error("File not found");
    }
    return file;
}

const deleteFile = async (id, userId) => {
    const file = await getFilebyId(id, userId);

    fs.unlinkSync(file.path);
    await file.destroy();

    return true;
}

const renameFile = async (id, userId, newName) => {
    const file = await getFilebyId(id, userId);

    const newPath = path.join("uploads", newName);

    fs.renameSync(file.path, newPath);

    file.filename = newName;
    file.path = newPath;
    await file.save();

    return file;
}

module.exports = {
    upload,
    saveFile,
    getFiles,
    getFilebyId,
    deleteFile,
    renameFile,
};