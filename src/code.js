webix.ready(function () {
    /* пример заполнения массивов*/
    {

        let e = {id: '1', name: 'dadad'};
        projectModel.create(e);
        let r = {id: '2', name: '1231@QRWQe'};
        projectModel.create(r);


        let b = {
            id : '1',
            name : 'ATas',
            state : 'doing',
            priority : '1',
            employee : 'Dadaev',
            author : 'Vlasolov',
            parenttask : '',
            project : 'ABC',
            worktime : '120',
            createdate : '12/12/19'
        };

        taskModel.create(b);
        let de = {
            id : '2',
            name : 'BAas',
            state : 'doing',
            priority : '2',
            employee : 'Rogov',
            author : 'Veselov',
            parenttask : '',
            project : 'ABC',
            worktime : '8',
            createdate : '10/12/19'
        };
        taskModel.create(de);

        let c = new Users(
            'Denis',
            'Selin',
            'Andreevich',
            'deniskaselin@gmail.com',
            89218983, '1');
        userModel.create(c);
    }

    /* заполнение блока проекта:Список проектов, Информация о выбранном проекте */
    const ProjectBlock = {
        cols: [ProjectContainer(projects), ProjectView()]
    };

    /* запонение блока задачи:Список задач проекта, Информация о выбранной задаче */
    const TaskBlock = {
        cols: [TaskContainer(tasks), TaskView()]
    };

    /* заполнение блока пользователя:ФИО, Должность, элемент массива */
    const UserBlock = UserView(users);

    webix.ui({
        rows: [

            //ProjectName, UserInform
            {
                cols: [
                    {
                        view: 'template',
                        template: 'Учет и контроль задач и проектов',
                        type: 'header'
                    },
                    UserBlock


                ]
            },
            //SelectedName, Search
            {
                cols: [
                    {view: 'template', template: 'breadcrumbs',},//breadcrumbs
                    {
                        view: 'search',
                        id: 'search',
                        label: 'Поиск:',
                        placeholder: 'search',
                        labelAlign: 'center'/*,width:400*/
                    }
                ]
            },
            //ProjectContainer, ProjectViewer
            ProjectBlock,
            //TaskContainer, TaskViewer
            TaskBlock,
        ]


    }).show();

    EventsActive();

});