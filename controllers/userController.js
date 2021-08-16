const User = require('../models/User');

// login controller
exports.login = (req, res) => {
  let user = new User(req.body);
  user.login().then((result) => {
    req.session.user = { avatar: user.avatar, username: user.data.username };
    req.session.save(function () {
      res.redirect('/');
    });
  }).catch((err) => {
    req.flash('errors', err)
    req.session.save(function () {
      res.redirect('/');
    })
  });
};

// logout controller
exports.logout = (req, res) => {
  req.session.destroy(() => res.redirect('/'));
};

// register controller
exports.register = async (req, res) => {
  let user = new User(req.body)
  user.register().then(() => {
    req.session.user = { avatar: user.avatar, username: user.data.username };
    req.session.save(function () {
      res.redirect('/');
    });
  }).catch((regErrors) => {
    regErrors.forEach(error => {
      req.flash('regErrors', error)
    });
    req.session.save(function () {
      res.redirect('/');
    });
  });
};

// homepage controller
exports.home = (req, res) => {
  if (req.session.user) {
    res.render('home-dashboard', {username: req.session.user.username, avatar: req.session.user.avatar});
  } else {
    res.render('home-guests', {errors: req.flash('errors'), regErrors: req.flash('regErrors')});
  };
};
