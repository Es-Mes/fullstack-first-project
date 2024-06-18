const express = require ('express')
const router = express.Router()
const usersController = require ('../controllers/usersController')

router.get("/",usersController.getAllUsers)
router.get("/:id",usersController.getUserById)
router.post("/",usersController.createNewUser)
router.delete("/",usersController.deleateUser)
router.put("/",usersController.updateUser)
// router.put("/complete/:id",usersController.updateUserComplete)


module.exports = router