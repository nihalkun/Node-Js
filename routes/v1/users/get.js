const userService = require('../../../services/user')
module.exports = () => {
    return (req, res) => {
        const userId = req.params.id
        const user = userService.getUser(userId)
        console.log(user)
        let message = ''
        if(user.length>0){
            message = user[0].name
        } else {
            message = 'User not found'
            console.log(userId)
        }
        res.status(200).json({
            success : true,
            message 
        })
    }
}