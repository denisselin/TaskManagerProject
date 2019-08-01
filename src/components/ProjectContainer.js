function ProjectContainer(ProjectStorage) {
    return {
        view: 'list',
        id: '',
        template: '#name#',
        select: true,
        data:ProjectStorage
    }
}

function ProjectView() {
    return{
        rows: [
            {
                cols: [
                    {template: 'Информация о проекте'},
                    {
                        view: 'menu',
                        data: [{value: 'Меню', submenu: ['Создать', 'Редактровать', 'Удалить']}],
                        width: 60
                    }
                ]
            },//header
            {
                view: 'form',
                elementsConfig: {
                    labelWidth: 100
                },
                elements: [
                    {template: 'name', view: 'label'},
                    {template: 'createdate', view: 'label'}

                ]
            }//information about project

        ]
    }

}