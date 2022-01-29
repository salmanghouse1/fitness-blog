const router = require('express').Router();

const homeRoutes = require('./home-routes.js');

// router.use('/', homeRoutes);


router.get('/login', (req, res) => {
    console.log("as");
    User.findAll()
})
module.exports = router;