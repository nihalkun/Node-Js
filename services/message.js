const getUserMessage = (method)=>{
   return createMessage(method)
}

const createMessage = (method)=> {
    let message = ''
    switch (method) {
        case 'GET':
            message = 'Hello from GET method!'
            break;
        
        case 'POST':
            message = 'Hello from POST method!'
            break;

        default:
            message = 'Hello'
            break;
    }

    return message
}

module.exports = {
    getUserMessage
}