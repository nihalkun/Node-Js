const allUsers = [{
    id: 1,
    name: 'Nihal12',
    email:'nihal@gmail.com',
    mobile:8210623493,
    password:'dcdcdc11'
},

{
    id: 2,
    name: 'Gaurav',
    email:'gaurav@gmail.com',
    mobile:8290643493,
    password:'njdcdc11'
}

]

const getAllUsers = () => {
    return allUsers
}

const getUser = (id) => {
    const user = allUsers.filter((eachUser) => eachUser.id == id )
    return user
}


module.exports = {
    getUser,
    getAllUsers
   
}