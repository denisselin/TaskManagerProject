/**
 * name- string;
 * trytime,state,priority,EmployeeId,AuthorId,ParentTaskId,ProjectId - integer
 */
class Tasks {
    constructor(id, name, worktime, state, priority, employee, author, parenttask, project, createdate) {
        this.id = id;
        this.name = name;
        this.state = state;
        this.priority = priority;
        this.employee = employee;
        this.author = author;
        this.parenttask = parenttask;
        this.project = project;
        this.worktime = worktime;
        this.createdate = createdate;
    }

    // get name() {
    //     return this._name;
    // }
    // set name(value) {
    //     this._name = value;
    // }
    //
    // get state() {
    //     return this._state
    // }
    // set state(value) {
    //     this._state = value;
    // }
    //
    // get priority(){
    //     return this._priority
    // }
    // set priority(value){
    //     this._priority = value
    // }
}

