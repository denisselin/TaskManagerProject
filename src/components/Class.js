/**
 * name - string
 */
class Projects {
    constructor(name, createdate) {
        // this.id = id;
        this.name = name;
        this.createdate = createdate;
    }
}

/**
 * name- string;
 * trytime,state,priority,EmployeeId,AuthorId,ParentTaskId,ProjectId - integer
 */
class Tasks {
    constructor(name, trytime, state, priority, employee, author, parenttask, project, createdate) {
        // this.id = id;
        this.name = name;
        this.state = state;
        this.priority = priority;
        this.employee = employee;
        this.author = author;
        this.parenttask = parenttask;
        this.project = project;
        this.trytime = trytime;
        this.createdate = createdate;
    }
}

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