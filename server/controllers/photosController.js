const Photos= require ("../models/Photos")
const createNewPhoto = async (req,res)=>{
//create
 const{title,imageUrl} = req.body
 const photo = await Photos.create({title,imageUrl})
 return res.json(photo)

}
//read
const getAllPhotos = async (req,res)=>{
    const photos = await Photos.find().lean()
    // if(!photos?.length){
    //     return res.status(400).json({massage:'No photos Found'})
    // }
    return res.json(photos)
}
//update
const updatePhoto = async (req,res)=>{
    const {_id,title,imageUrl}=req.body
    if(!title){
    return res.status(400).json({massage:'photo not found'})
    }
    // -------to chack--------
    const photo = await Photos.findById(_id).exec()
    if(!photo){
        return res.status(400).json({message:'photo not found'})
    }
    else{
    photo.title=title
    photo.imageUrl=imageUrl
    const updatePhoto = await photo.save()
    return res.json(`'${updatePhoto.title}' updated`)
}
    
    
}
//delete
//----------chack-------------
const deleatePhoto = async (req,res)=>{
    const {id} = req.body
    const photo = await Photos.findById(id).exec()
    if(!photo) {
        return res.json({message:'photo not found'})
    }
    const result = await photo.deleteOne()
    const replay=`photo ${result.title}ID ${result._id} deleted` 
    return res.json(replay)
}
const getPhotoById = async(req,res)=>{
    const {id} = req.params
    const photo = await Photos.findById(id).lean()
    if(!photo){
        return res.status(400).json({message:'photo not found'})
    }
    return res.json(photo)

}

module.exports = {createNewPhoto,getAllPhotos,updatePhoto,deleatePhoto,getPhotoById}