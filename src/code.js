webix.ready(function () {
    /* пример заполнения массивов*/
    {

        let e = new Projects('CBA');
        projectModel.create(e);


        let b = new Tasks(
            '1',
            'avc',
            4,
            1,
            1,
            'Dadaev',
            'Veselov',
            'name parent task',
            'name project',
            12 / 12 / 2019);
        taskModel.create(b);
        let de = new Tasks('2',
            'vca',
            4,
            1,
            1,
            'Mamaev',
            'Okov',
            'name parent task',
            'name project',
            12 / 12 / 2019
            );
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


    });

    EventsActive();

});