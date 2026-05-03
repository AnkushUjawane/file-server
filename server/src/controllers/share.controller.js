const shareService = require("../services/share.service");
const fileService = require("../services/file.service");

exports.createShare = async (req, res) => {
  const { id } = req.params;

  const share = await shareService.createShare(id, req.user.id);

  res.json({
    success: true,
    link: `${process.env.BASE_URL}/api/share/${share.shareToken}`,
  });
};

exports.getMyShares = async (req, res) => {
  const shares = await shareService.getUserShares(req.user.id);

  res.json({
    success: true,
    data: shares,
  });
};

exports.accessSharedFile = async (req, res) => {
  const { token } = req.params;

  const share = await shareService.getByToken(token);

  if (!share) {
    return res.status(404).json({ message: "Invalid link" });
  }

  const file = await fileService.getFileById(share.fileId);

  res.download(file.path, file.filename);
};