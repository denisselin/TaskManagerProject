// //UserButton Event
// {
//     $$('createUserButton').attachEvent('onItemClick', () => {
//         userModel.create()
//     });
//
//     $$('editUserButton').attachEvent('onItemClick', () => {
//         userModel.update()
//     });
//
//     $$('deleteUserButton').attachEvent('onItemClick', () => {
//         userModel.delete()
//     });
// }



function EventsActive() {

    //project toolbar
    {
        $$('createProjectSubMenu').attachEvent('onItemClick', () => {
            createProjectViewer();


        });

        $$('editProjectSubMenu').attachEvent('onItemClick', () => {
            const id = $$('projectList').getSelectedId();
            debugger;
            let elem = JSON.stringify($$('projectInfo').getValues(), null, 2);
            debugger;
            projectModel.update(id, elem);
            debugger;
            $$('projectList').refresh();

        });

        $$('deleteProjectSubMenu').attachEvent('onItemClick', () => {
            const id = $$('projectList').getSelectedId();
            debugger;
            projectModel.delete(id);
            debugger;
            $$('projectList').refresh();
            alert('Проект удален');
        });
    }

    //task toolbar
    {
        $$('createTaskSubMenu').attachEvent('onItemClick', () => {
            createTaskViewer();

        });

        $$('editTaskSubMenu').attachEvent('onItemClick', () => {
            const id = $$('taskList').getSelectedId();
            debugger;
            let elem = new Tasks;
                elem = JSON.stringify($$('taskInfo').getValues(), null, 2);
            debugger;
            taskModel.update(id, elem);
            debugger;
            $$('taskList').refresh();
        });

        $$('deleteTaskSubMenu').attachEvent('onItemClick', () => {
            const id = $$('taskList').getSelectedId();
            debugger;
            taskModel.delete(id);
            debugger;
            $$('taskList').refresh();
            alert('Задача удалена');
        });
    }


//get project to view
    $$('projectList').attachEvent('onItemClick', (id) => {
        const item = $$('projectList').getItem(id);
        $$('projectInfo').parse(item);
    });

//get task to view
    $$('taskList').attachEvent('onItemClick', (id) => {
        const item = $$('taskList').getItem(id);
        $$('taskInfo').parse(item);
    });

}
