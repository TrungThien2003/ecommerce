const authMiddleware = require("../middleware/authMiddleware")
const express = require('express') 
const router = express.Router() 
const userController = require('../controllers/UserController')

router.post('/sign-up', userController.createUser);
router.post('/sign-in', userController.loginUser)
router.delete('/delete/:id',authMiddleware.authMiddleware, userController.deleteUser)
router.put('/update/:id',authMiddleware.authMiddleware,  userController.updateUser)
router.get('/refresh-token', userController.refreshToken)
module.exports = router; 