function TaskView() {

    return {
        rows: [
            {
                cols: [{template: 'Информация о задаче'},
                    {
                        view: 'menu',
                        id:'ds',
                        data: [{
                            value: 'Меню', submenu: [
                                {value: 'Создать', id: 'createTaskSubMenu'},
                                {value: 'Редактровать', id: 'editTaskSubMenu'},
                                {value: 'Удалить', id: 'deleteTaskSubMenu'}]
                        }],

                        width: 60,

                    }]
            },
            {
                view: 'form',
                id: 'taskInfo',
                elementsConfig: {
                    labelWidth: 100
                },
                scroll: true,
                elements: [
                    {view: 'text', label: 'name', value: 'dasdas', readonly: true},

                ]
            }

        ]
    }

}
