webix.ready(function () {
    /* пример заполнения массивов*/
    {
        let a = new Projects('ABC');
        projectModel.create(a);

        let b = new Tasks('1', 'avc');
        taskModel.create(b);

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


    const item = $$('projectMenu').getMenuItem('createProjectSubMenu');

    debugger

    //test error
    alert($$('menu'));
    $$('Sub').attachEvent('onMenuItemClick', (id) => {
        alert(id)
    })
});