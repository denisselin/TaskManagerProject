function createProjectViewer() {

    webix.ui({

        view: 'window',
        id: 'createWindow',
        move: true,
        // close: true,
        head: 'Создание проекта ',
        width: 400,
        height: 400,
        autofocus: true,
        position: 'center',
        body: {
            rows: [
                {labelAlign: 'right', view: 'text', label: 'Название:', id:'wroteName'},
                {labelAlign: 'right', view: 'text', label: 'Автор:'},

                {
                    cols: [
                        {
                            view: 'button', value: 'Создать',
                            // on: {
                            //     'onItemClick': function () {
                            //         let a = new Projects;
                            //         a.name = $$('wroteName').getValue();
                            //         projectModel.create(a);}
                            // }
                        },

                        {
                            view: 'button', value: 'Отмена',
                            on: {
                                'onItemClick': function () {
                                    $$('createWindow').close();
                                }
                            }
                        }]
                }
            ]
        }


    }).show();
}


function createTaskViewer() {
    webix.ui({

        view: 'window',
        id: 'createWindow',
        move: true,
        head: 'Создание проекта ',
        width: 600,
        height: 600,
        autofocus: true,
        position: 'center',
        body: {
            rows: [

                {labelAlign: 'right', view: 'text', label: 'Название:', name: 'name'},
                {labelAlign: 'right', view: 'text', label: 'Трудозатраты:', name: 'worktime'},
                {labelAlign: 'right', view: 'text', label: 'Состояние:', name: 'state'},
                {labelAlign: 'right', view: 'text', label: 'Приоритет:', name: 'priority'},
                {labelAlign: 'right', view: 'text', label: 'Выполняет:', name: 'employee'},
                {labelAlign: 'right', view: 'text', label: 'Назначил:', name: 'author'},
                {labelAlign: 'right', view: 'text', label: 'parenttask', name: 'parenttask'},
                {labelAlign: 'right', view: 'text', label: 'Проект:', name: 'project'},
                {labelAlign: 'right', view: 'text', label: 'Дата создания:', name: 'createdate'},
                {
                    cols: [
                        {view: 'button', value: 'Создать'},

                        {
                            view: 'button', value: 'Отмена',
                            on: {
                                'onItemClick': function () {
                                    $$('createWindow').close();
                                }
                            }
                        }]
                }
            ]
        }
    }).show();

}
