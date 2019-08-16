function createProjectViewer() {

    webix.ui({

        view: 'window',
        id: 'createProjectWindow',
        move: true,
        // close: true,
        head: 'Создание проекта ',
        width: 400,
        height: 400,
        autofocus: true,
        position: 'center',
        body: {
            rows: [
                {labelAlign: 'right', view: 'text', label: 'Название:', id: 'wroteName'},
                {labelAlign: 'right', view: 'text', label: 'Автор:'},

                {
                    cols: [
                        {
                            view: 'button', value: 'Создать',
                            on: {
                                'onItemClick': function () {
                                    let value = {};
                                    value.name = $$('wroteName').getValue();
                                    projectModel.create(value);
                                    $$('createProjectWindow').close();
                                    alert('Проект создан');
                                    const bankTable = $$ ('projectList');
                                    bankTable.define("data",projectModel.getAll());
                                    bankTable.refresh();

                                }
                            }
                        },

                        {
                            view: 'button', value: 'Отмена',
                            on: {
                                'onItemClick': function () {
                                    $$('createProjectWindow').close();
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
        id: 'createTaskWindow',
        move: true,
        head: 'Создание проекта ',
        width: 600,
        height: 600,
        autofocus: true,
        position: 'center',
        body: {
            rows: [

                {labelAlign: 'right', view: 'text', label: 'Название:', name: 'name', id: 'name'},
                {labelAlign: 'right', view: 'text', label: 'Трудозатраты:', name: 'worktime', id: 'worktime'},
                {labelAlign: 'right', view: 'text', label: 'Состояние:', name: 'state', id: 'state'},
                {labelAlign: 'right', view: 'text', label: 'Приоритет:', name: 'priority', id: 'priority'},
                {labelAlign: 'right', view: 'text', label: 'Выполняет:', name: 'employee', id: 'employee'},
                {labelAlign: 'right', view: 'text', label: 'Назначил:', name: 'author', id: 'author'},
                {labelAlign: 'right', view: 'text', label: 'parenttask', name: 'parenttask', id: 'parenttask'},
                {labelAlign: 'right', view: 'text', label: 'Проект:', name: 'project', id: 'project'},
                {labelAlign: 'right', view: 'text', label: 'Дата создания:', name: 'createdate', id: 'createdate'},
                {
                    cols: [
                        {
                            view: 'button', value: 'Создать',
                            on: {
                                'onItemClick': function () {
                                    const value = {};
                                    value.name = $$('name').getValue();
                                    value.state = $$('state').getValue();
                                    value.priority = $$('priority').getValue();
                                    value.employee = $$('employee').getValue();
                                    value.author = $$('author').getValue();
                                    value.parenttask = $$('parenttask').getValue();
                                    value.project = $$('project').getValue();
                                    value.worktime = $$('worktime').getValue();
                                    value.createdate = $$('createdate').getValue();

                                    taskModel.create(value);

                                    $$('createTaskWindow').close();
                                    alert('Задача добавлена');
                                    const bankTable = $$ ('taskList');
                                    bankTable.define("data",taskModel.getAll());
                                    bankTable.refresh();
                                }
                            }
                        },

                        {
                            view: 'button', value: 'Отмена',
                            on: {
                                'onItemClick': function () {
                                    $$('createTaskWindow').close();
                                }
                            }
                        }]
                }
            ]
        }
    }).show();

}

// function confirmWindow(){
// webix.confirm({
//     id: 'confirm',
//     text: 'Сохранить изменения?',
//     ok: 'Сохранить', cancel: 'Отмена'
// })
//     .then(function () {debugger
//         return true
//     } )
//     .fail( )}