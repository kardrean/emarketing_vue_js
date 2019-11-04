let express = require('express');
let router = express.Router();
let jwt = require('jwt-simple');
let passport = require('../src/auth/auth');
let User = require('../src/models/user');
let cfg = require('../config');

router.post('/token', function (req, res, next){
  let user = req.body;
  if (!user.username || !user.password) {
    return res.status(401).send('Unauthorized');
 }
    let query = {email: user.username, password: user.password};

    let callback = function (err, user) {
      if(err) {
        return err;
      }  
      return user; 
  }

  user = User.findOne(query, callback);
  if(!user){
    return res.status(401).send('UNAUTHORIZED')
  }

    let payload = {is: user.id};
    let token = jwt.encode(payload, cfg.jwrSecret);
    return res.json({token: token});
});

/* GET users listing. */
router.get('/me', passport.authenticate('jwt', { session: false }), function (req, res, next) {
  let callback = function (err, user) {
    if (err) {
      return res.status(500).json({ err: err });
    }

    if (!user) {
      return res.status(404).json({ user: null });
    }

    return res.status(200).json({ user: user });
  }

  User.findById('5db8469c781a020010debcfa', callback)
});

router.post('/register', function (req, res, next) {
  let data = {
    nome: req.body.name,
    email: req.body.email,
    password: req.body.password,
    accounts: [{
      name: req.body.account_name,
      role: 'owner',
      enabled: true
    }]
  }

  let callback = function (err, user) {
    if (err) {
      return res.status(422).json({ err: err });
    }
    return res.status(200).json({ user: user });
  }

  User.create(data, callback);
});

module.exports = router;