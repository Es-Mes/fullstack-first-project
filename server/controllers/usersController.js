const Users = require("../models/Users")
const createNewUser = async (req, res) => {
    //create
    const { userName, password, email, address, phone, roles, active } = req.body
    //Validations
    //validation of the requiered fields
    if (!userName || !password) {
      return res.json('fields "Name" and "UserName" are required')
    }
    //validation of a unique userName
    const users = await Users.find().lean()
    const userExists = users.find((u) => u.password === password)
    if (userExists) {
       return res.json('UserName exists alrady, you have to choose a unique name')
    }
    // validation of lower case
    if (!password.toLowerCase().includes(password) || (email && !email.toLowerCase().includes(email))) {
       return res.json('Name and UserName required at lowercase only')
    }
    //validation of a correct values
    const Eroles = ["Manager", "Emploee", "Team Leader"]
    const r = Eroles.find((r) => { r === roles })
    if (roles && !r) {
       return res.json('Input valid data in roles: "Manager","Emploee" or "Team Leader"')
    }
    else {
        const user = await Users.create({ userName, password, email, address, phone, roles, active })
        return res.json(user)

    }


}
//read
const getAllUsers = async (req, res) => {
    const users = await Users.find().lean()
    // if (!users?.length) {
    //     return res.json({ massage: 'No users Found' })
    // }
    // const showYusers = users.map((u) => { return { ...u, password: "...." } })
    // return res.json(showYusers)
    return res.json(users)
}
//update
const updateUser = async (req, res) => {
    const {_id, userName, password, email, adress, phone, roles, active } = req.body
    //Validations

    if (!userName) {
        return res.status(400).json({ massage: 'user name is required for updating' })
    }
    // -------to chack--------
    const user = await Users.findById(_id).exec()
    if (!user) {
        return res.status(400).json({ message: 'user not found' })
    }
    const users = await Users.find().lean()
    const userExists = users.find((u) => {u._id != _id && u.password === password} )
    if (userExists) {
       return res.json('UserName exists alrady, you have to choose a unique name')
    }   
    // validation of lower case
    if (!password.toLowerCase().includes(password) || (email && !email.toLowerCase().includes(email))) {
       return res.json('Name and UserName required at lowercase only')
    }
    //validation of a correct values
    const Eroles = ["Manager", "Emploee", "Team Leader"]
    const r = Eroles.find((r) => { r === roles })
    if (roles && !r) {
       return res.json('Input valid data in roles: "Manager","Emploee" or "Team Leader"')
    }



    else {
        user.userName = userName
        user.password = password
        user.email = email
        user.address = adress
        user.phone = phone
        user.roles = roles
        user.active = active
        const updateUser = await user.save()
        return res.json(`'${updateUser.userName}' updated`)
    }
}
//delete
//----------chack-------------
const deleateUser = async (req, res) => {
    const { id } = req.body
    const user = await Users.findById(id).exec()
    if (!user) {
        return res.status(400).json({ message: 'user not found' })
    }
    const result = await user.deleteOne()
    const replay = `User ${result.userName}ID ${result._id} deleted`
   return res.json(replay)
}
const getUserById = async (req, res) => {
    const { id } = req.params
    const user = await Users.findById(id).lean()
    if (!user) {
        return res.status(400).json({ message: 'user not found' })
    }
    res.json({ ...user, password: "...." })

}
const updateUserComplete = async (req, res) => {
    const { id } = req.params
    const user = await Users.findById(id).exec()
    if (!user) {
        return res.status(400).json({ message: 'user not found' })
    }
    user.complete = !user.complete
    const updateUser = await user.save()
   return res.json(`${updateUser.name} updated`)
}
module.exports = { createNewUser, getAllUsers, updateUser, deleateUser, getUserById, updateUserComplete }