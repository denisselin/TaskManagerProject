function UserView(mass) {
    return {
        rows: [{
            template: ' #lastname# #firstname# #middlename#', data: mass
        },
            {template: 'employee`s position'}]
    }
}