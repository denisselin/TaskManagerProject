webix.ready(function () {

    /**
     * firstname,lastname,middlename,email, - string
     * phone - integer
     */
    class User {
        constructor(firstname, lastname, middlename, birthdate, email, phone) {
            this.id = id;
            this.firstname = firstname;
            this.lastname = lastname;
            this.middlenam = middlename;
            this.birthdate = birthdate;
            this.email = email;
            this.phone = phone;
        }
    }

    /**
     * name - string
     */
    class Project {
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
    class Task {
        constructor(name, trytime, state, priority, employee, author, parenttask, project, createdate) {
            this.id = id;
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

    const ProjectStorage =[];
    let  a = new Project('ABC');
    ProjectStorage.push(a);

    webix.ui({
        rows: [
            //ProjectName, UserInform
            {
                cols: [
                    {template: 'Учет и контроль задач и проектов', type: 'header'},
                    {rows: [{template:'Username...'
                            },{template:'User...'}]}
                ]
            },
            //SelectedName, Search
            {
                cols: [
                    {template: 'breadcrumbs'},//breadcrumbs
                    {view: 'text', id: 'SelectionName', label: ' Поиск:', value: 'no founded', labelAlign: 'center'}
                ]
            },
            //ProjectContainer, ProjectViewer
            {
                cols: [
                    {
                        view: 'list',
                        id: '',
                        template: '#name#',
                        select: true, //выбранный элемент будет подсвечен
                        data:ProjectStorage
                    },
                    {
                        rows: [
                            {
                                cols: [
                                    {template: 'Информация о проекте'},
                                    {
                                        view: 'menu',
                                        data: [{value: 'Меню', submenu: ['Создать', 'Редактровать', 'Удалить']}]
                                    },
                                ]
                            },
                            {
                                    view:'form',
                                    elementsConfig:{
                                        labelWidth:100
                                    },
                                    elements:[
                                        {template:'name',view:'label'},
                                        {template:'createdate',view:'label'}

                                    ]
                            }

                        ]
                    }
                ]
            },
            //TaskContainer, TaskViewer
            {
                cols: [
                    {
                        view: 'list',
                        id: '',
                        template: '#name#',
                        select: true, //выбранный элемент будет подсвечен
                        // data:
                    },
                    {
                        rows: [
                            {
                                cols: [{template: 'Информация о задаче'},
                                    {},

                                    {
                                        view: 'menu',
                                        data: [{value: 'Меню', submenu: ['Создать', 'Редактровать', 'Удалить']}],


                                    }]
                            },
                            {
                                view:'form',
                                elementsConfig:{
                                    labelWidth:100
                                },
                                elements:[
                                    {template:'name',view:'label'},
                                    {template:'createdate',view:'label'}

                                ]
                            }

                        ]
                    }
                ]
            },
        ]
    });


});