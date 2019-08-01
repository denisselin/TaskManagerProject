function TaskContainer(TaskStorage) {
    return {
        view: 'list',
        id: '',
        template: '#name#',
        select: true, //выбранный элемент будет подсвечен
        data:TaskStorage
    }
}

function TaskView() {
    return{
        rows: [
            {
                cols: [{template: 'Информация о задаче'},
                    {
                        view: 'menu',
                        data: [{value: 'Меню', submenu: ['Создать', 'Редактровать', 'Удалить']}],
                        width: 60,

                    }]
            },
            {
                view: 'form',
                elementsConfig: {
                    labelWidth: 100
                },
                elements: [
                    {template: 'name', view: 'label'},
                    {template: 'createdate', view: 'label'}

                ]
            }

        ]
    }

}