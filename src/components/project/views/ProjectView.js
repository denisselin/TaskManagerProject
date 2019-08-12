function ProjectView() {
    return {
        rows: [


            {
                view: 'toolbar',
                id: 'projectMenu',

                cols: [
                    {view:'label',label:'Информация о проекте',align:'center'},
                    {view: 'icon', icon: 'wxi-plus-circle', id: 'createProjectSubMenu'},
                    {view: 'icon', icon: 'wxi-pencil', id: 'editProjectSubMenu'},
                    {view: 'icon', icon: 'wxi-trash', id: 'deleteProjectSubMenu'}
                ]


            },//header

            {
                view: 'form',
                id: 'projectInfo',
                elementsConfig: {
                    labelWidth: 100
                },
                elements: [
                    {view: 'text', label: 'Название:', name: 'name', readonly: true, labelWidth: 120},
                    {view: 'text', label: 'Дата создания:', value: '12.12.18', readonly: true, labelWidth: 120}
                ],

            }//information about project

        ]
    }

}




