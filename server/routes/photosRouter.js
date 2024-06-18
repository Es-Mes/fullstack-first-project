const express = require ('express')
const router = express.Router()
const photosController = require ('../controllers/photosController')

router.get("/",photosController.getAllPhotos)
router.get("/:id",photosController.getPhotoById)
router.post("/",photosController.createNewPhoto)
router.delete("/",photosController.deleatePhoto)
router.put("/",photosController.updatePhoto)
// router.put("/complete/:id",photosController.updatePhotoComplete)


module.exports = router