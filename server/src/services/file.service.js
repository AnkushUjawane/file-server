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

const upload = multer({
    storage,
    limits: {fileSize: 10 * 1024 * 1024},
    fileFilter: (req, file, cb) => {
        const allowed = ["image/jpeg", "image/png", "application/pdf"];
        if(!allowed.includes(file.mimetype)){
            return cb(new Error("Invalid File Type"));
        }
        cb(null, true);
    },
});

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

const getFileById = async (id, userId) => {
    const file = await File.findByPk(id);
    if(!file){
        throw new Error("File not found");
    }
    if (userId && file.userId !== userId) {
        throw new Error("Unauthorized to access this file");
    }
    return file;
}

const deleteFile = async (id, userId) => {
    const file = await getFileById(id, userId);

    fs.unlinkSync(file.path);
    await file.destroy();

    return true;
}

const renameFile = async (id, userId, newName) => {
    const file = await getFileById(id, userId);

    const safeName = path.basename(newName);
    const newPath = path.join(uploadDir, safeName);

    fs.renameSync(file.path, newPath);

    file.filename = safeName;
    file.path = newPath;
    await file.save();

    return file;
}

module.exports = {
    upload,
    saveFile,
    getFiles,
    getFileById,
    deleteFile,
    renameFile,
};