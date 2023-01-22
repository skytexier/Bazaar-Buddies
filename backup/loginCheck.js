function loginCheck(req, res, next) {
    if (!req.session.logged_in) {
      res.status(304).redirect("/loginSignUp");
      return;
    } else {
      next();
    }
  }
  
  module.exports = loginCheck;