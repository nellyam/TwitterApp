const router = require('express').Router();
const { ensureAuthenticated } = require('../config/guards.config');
const { signup, signupForm, uploadImage, userProfile, userList } = require('../controllers/users.controller');

router.get("/", userList)
router.get("/:username", userProfile)
router.get('/signup/form', signupForm);
router.post('/signup', signup);
router.post('/update/image', ensureAuthenticated, uploadImage);

module.exports = router;