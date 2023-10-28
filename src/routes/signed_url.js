const authValid = require("../middlewares/authToken");
const express = require("express");

const SignedUrlController = require("../controllers/signedUrlsController");
const StorageService = require("../services/storageService");

const router = express.Router();

const StorageClientOptions = {
  keyFilename: "credentials.json",
  projectId: "video-platform-402415",
};

const bucketName = "input-videos-bucket";

const storageService = new StorageService(StorageClientOptions, bucketName);
const signedUrlsController = new SignedUrlController(storageService);

router.post("/generate", (req, res) =>
  signedUrlsController.generateSignedUrl(req, res),
);

module.exports = router;
