const userService = require('../../../services/user')
module.exports = () => {
    return (req, res) => {
        const userId = req.params.id
        const userpassword = req.body.password
        const user = userService.getUser(userId)
       let message = ''
        if(user.length>0){
           user[0].password = userpassword
           message = user[0].password
        } else {
            message = 'User not found'
        }
        res.status(200).json({
            success : true,
            message 
        })
    }
}