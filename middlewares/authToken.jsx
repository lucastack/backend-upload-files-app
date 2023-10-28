const authvalid = (req, res, next) => {
  console.log("hello from a middleware");
  next();
};

module.exports = authvalid;
