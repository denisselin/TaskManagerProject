function UserView(mass) {
    return {
        cols:[
             {template: ' #lastname# #firstname# #middlename# employee`s position', data: mass},

             {view:'icon', icon:'mdi mdi-account'}]

    }
}