const { Storage } = require("@google-cloud/storage");

class StorageService {
  constructor(StorageClientOptions, bucketName) {
    this.storageClient = new Storage(StorageClientOptions);
    this.bucket = this.storageClient.bucket(bucketName);
  }

  async generateSignedUrl(filePath) {
    const options = {
      version: "v4",
      action: "write",
      expires: Date.now() + 15 * 60 * 1000,
      contentType: "application/octet-stream",
    };
    const [signedUrl] = await this.bucket.file(filePath).getSignedUrl(options);
    return signedUrl;
  }
}

module.exports = StorageService;
