function TaskView() {

    return {
        rows: [

            {

                view: 'toolbar',
                id: 'TaskMenu',
                cols: [
                    {view:'label',label:'Информация о задаче',align:'center'},
                    {view: 'icon', icon: 'wxi-plus-circle', id: 'createTaskSubMenu'},
                    {view: 'icon', icon: 'wxi-pencil', id: 'editTaskSubMenu'},
                    {view: 'icon', icon: 'wxi-trash', id: 'deleteTaskSubMenu'}
                ]


            },
            {
                view: 'form',
                id: 'taskInfo',
                elementsConfig: {
                    labelWidth: 100
                },
                scroll: true,
                elements: [
                    {view: 'text', label: 'Название:', name: 'name',labelWidth:120},
                    {view: 'text', label: 'Трудозатраты:', name: 'worktime',labelWidth:120},
                    {view: 'text', label: 'Состояние:', name: 'state',labelWidth:120},
                    {view: 'text', label: 'Приоритет:', name: 'priority',labelWidth:120},
                    {view: 'text', label: 'Выполняет:', name: 'employee',labelWidth:120},
                    {view: 'text', label: 'Назначил:', name: 'author',labelWidth:120},
                    {view: 'text', label: 'parenttask', name: 'parenttask',labelWidth:120},
                    {view: 'text', label: 'Проект:', name: 'project',labelWidth:120},
                    {view: 'text', label: 'Дата создания:', name: 'createdate',labelWidth:120}

                ]
            }

        ]
    }

}
