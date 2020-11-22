const express = require('express');
const router = express.Router();

//referenciação do controller
const controller = require('../controllers/userController');

router.post('/', controller.post);
router.put('/', controller.put);
router.delete('/', controller.delete);




module.exports = router;