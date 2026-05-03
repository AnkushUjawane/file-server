const Share = require("../models/Share");
const crypto = require("crypto");

exports.createShare = async (fileId, userId) => {
  const token = crypto.randomBytes(16).toString("hex");

  const share = await Share.create({
    fileId,
    userId,
    shareToken: token,
  });

  return share;
};

exports.getUserShares = async (userId) => {
  return await Share.findAll({ where: { userId } });
};

exports.getByToken = async (token) => {
  return await Share.findOne({ where: { shareToken: token } });
};