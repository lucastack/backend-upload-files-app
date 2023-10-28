const authValid = (req, res, next) => {
  console.log("hello from a middleware");
  console.log("Time:", Date.now());
  console.log(req.user);
  next();
};

module.exports = authValid;
