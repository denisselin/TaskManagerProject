/**
 * firstname,lastname,middlename,email, - string
 * phone - integer
 */
class Users {
    constructor(firstname, lastname, middlename, /*birthdate,*/ email, phone, id) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.middlename = middlename;
        // this.birthdate = birthdate;
        this.email = email;
        this.phone = phone;
    }
}

