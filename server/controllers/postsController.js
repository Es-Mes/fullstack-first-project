const Posts= require ("../models/Posts")
const createNewPost = async (req,res)=>{
//create
 const{title,body} = req.body
 const post = await Posts.create({title,body})
return res.json(post)

}
//read
const getAllPosts = async (req,res)=>{
    const posts = await Posts.find().lean()
    // if(!posts?.length){
    //     return res.json({massage:'No posts Found'})
    // }
    res.json(posts)
}
//update
const updatePost = async (req,res)=>{
    const {_id,title,body}=req.body

    if(!title){
    return res.json({massage:'post not found'})
    }
    const post = await Posts.findById(_id).exec()

    // -------to chack--------
    if(!post){
        return res.status(400).json({message:'post not found'})
    }
    else{
    post.title=title
    post.body=body 
    const updatePost = await post.save()
    res.json(`'${updatePost.title}' updated`)
}
}
//delete
//----------chack-------------
const deleatePost = async (req,res)=>{
    const {id} = req.body
    const post = await Posts.findById(id).exec()
    if(!post) {
        return res.status(400).json({message:'post not found'})
    }
    const result = await post.deleteOne()
    const replay=`post ${result.title}ID ${result._id} deleted` 
    res.json(replay)
}
const getPostById = async(req,res)=>{
    const {id} = req.params
    const post = await Posts.findById(id).lean()
    if(!post){
        return res.status(400).json({message:'post not found'})
    }
    res.json(post)

}
const updatePostComplete = async (req,res)=>{
    const {id} = req.params
    const post = await Posts.findById(id).exec()
    if(!post){
        return res.status(400).json({message:'post not found'})
    }
    post.complete = !post.complete
    const updatePost = await post.save()
    res.json(`${updatePost.name} updated`)
}
module.exports = {createNewPost,getAllPosts,updatePost,deleatePost,getPostById,updatePostComplete}