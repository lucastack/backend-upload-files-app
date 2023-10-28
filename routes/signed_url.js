const express = require("express");
const authToken = require("../middlewares/authToken");
const { Storage } = require("@google-cloud/storage");

const router = express.Router();

const storage = new Storage({
  keyFilename: "credentials.json",
  projectId: "video-platform-402415",
});

const bucket = storage.bucket("input-videos-bucket");

async function generateV4WriteSignedUrl(fileName) {
  const options = {
    version: "v4",
    action: "write",
    expires: Date.now() + 15 * 60 * 1000,
    contentType: "application/octet-stream",
  };
  const [signedUrl] = await bucket.file(fileName).getSignedUrl(options);
  return signedUrl;
}

router.post("/generate", authToken, async (req, res) => {
  const { filePath } = req.body;
  signedUrl = await generateV4WriteSignedUrl(filePath);
  console.log(`Uploading file at relative path: ${filePath}`);
  // res.status(200).send({ signedUrl: signedUrl });
});

module.exports = router;
