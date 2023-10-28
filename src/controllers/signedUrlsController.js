class SignedUrlController {
  constructor(storageService) {
    this.storageService = storageService;
  }

  async generateSignedUrl(req, res) {
    const { filePath } = req.body;
    const signedUrl = await this.storageService.generateSignedUrl(filePath);
    console.log(`Uploading file at relative path: ${filePath}`);
    res.status(200).send({ signedUrl: signedUrl });
  }
}

module.exports = SignedUrlController;
