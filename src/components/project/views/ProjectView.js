
function ProjectView() {
    return {
        rows: [
            {
                cols: [
                    {template: 'Информация о проекте'},
                    {
                        view: 'menu',
                        id: 'projectMenu',
                        data: {
                            value: 'Меню',
                            submenu:[
                                    {value: 'Создать', id: 'createProjectSubMenu'},
                                    {value: 'Редактровать', id: 'editProjectSubMenu'},
                                    {value: 'Удалить', id: 'deleteProjectSubMenu'}],
                            id: 'Sub'
                        },
                        width: 60,
                        // on:{
                        //     onMenuItemClick:function(id){
                        //         if(id === 'createProjectSubMenu'){alert('create project')}
                        //     }
                        // }
                    }
                ]
            },//header
            {
                view: 'form',
                // elementsConfig: {
                //     labelWidth: 100
                // },
                elements: [
                    {view: 'text', label: 'name', value: 'asddas', readonly: true},
                    {view: 'text', label: 'createdate', value: '12.12.18', readonly: true}

                ]
            }//information about project

        ]
    }

}




