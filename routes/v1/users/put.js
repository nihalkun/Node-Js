const userService = require('../../../services/user')
module.exports = () => {
    return (req, res) => {
        const userId = req.params.id
        const username = req.body.name
        const useremail = req.body.email
        const userphone = req.body.phone
        const user = userService.getUser(userId)
       let message = ''
        if(user.length>0){
         user[0].name = username
         user[0].email = useremail
         user[0].mobile = userphone
         message = user
        } else {
            message = 'User not found'
        }
        res.status(200).json({
            success : true,
            message 
        })
    }
}