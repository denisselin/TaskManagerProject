webix.ready(function () {
    /* массивы:Проекты, Задачи, Пользователи*/
    const ProjectStorage = [];
    const TaskStorage = [];
    const UserStorage = [];

    /* пример заполнения массивов*/
    {
        let a = new Projects('ABC');
        FillingContainer(ProjectStorage, a);

        let b = new Tasks('abc');
        FillingContainer(TaskStorage, b);

        let c = new Users(
            'Denis',
            'Selin',
            'Andreevch',
            'deniskaselin@gmail.com',
            89218983, 1);
        FillingContainer(UserStorage, c);
    }

    /* заполнение блока проекта:Спикок проектов, Информация о выбранном проекте */
    const ProjectBlock = {
        cols: [ProjectContainer(ProjectStorage), ProjectView()]
    };

    /* запонение блока задачи:Список задач проекта, Информация о выбранной задаче */
    const TaskBlock = {
        cols: [TaskContainer(TaskStorage), TaskView()]
    };

    /* заполнение блока пользователя:ФИО, Должность */
    const UserBlock = {
        rows: [{
            template: ' #lastname# #firstname# #middlename#', data: UserStorage
        },
            {template: 'employee`s position'}]
    };

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
                    {view: 'search', id: '', label: 'Поиск:', placeholder: 'search', labelAlign: 'center'/*,width:400*/}
                ]
            },

            //ProjectContainer, ProjectViewer
            ProjectBlock,
            //TaskContainer, TaskViewer
            TaskBlock,
        ]
    });

});