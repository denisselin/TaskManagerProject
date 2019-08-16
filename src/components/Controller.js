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
            if (id !== '') {
                let elem = $$('projectInfo').getValues();
                projectModel.update(id, elem);
                alert('Проект изменен');
                $$('projectList').refresh();
            }
        });

        $$('deleteProjectSubMenu').attachEvent('onItemClick', () => {
            const id = $$('projectList').getSelectedId();
            if (id !== '') {
                projectModel.delete(id);
                alert('Проект удален');
            const bankTable = $$ ('projectList');
            bankTable.define("data",projectModel.getAll());
            bankTable.refresh();}
        });
    }

    //task toolbar
    {
        $$('createTaskSubMenu').attachEvent('onItemClick', () => {
            createTaskViewer();
        });

        $$('editTaskSubMenu').attachEvent('onItemClick', () => {
            const id = $$('taskList').getSelectedId();
            if (id !== '') {
                let elem = $$('taskInfo').getValues();
                taskModel.update(id, elem);
                alert('Задача изменена');
                $$('taskList').refresh();
            }
        });

        $$('deleteTaskSubMenu').attachEvent('onItemClick', () => {
            const id = $$('taskList').getSelectedId();
            if (id !== '') {
                taskModel.delete(id);
                alert('Задача удалена');
            }
            const bankTable = $$ ('taskList');
            bankTable.define("data",taskModel.getAll());
            bankTable.refresh();
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
