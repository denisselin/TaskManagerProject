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

function getEdition() {
    const item = $$().getValues();
    return

}

function EventsActive (){

    $$('createProjectSubMenu').attachEvent('onItemClick',()=>{createProjectViewer()});

    $$('editProjectSubMenu').attachEvent('onItemClick',()=>{alert('edit')});

    $$('deleteProjectSubMenu').attachEvent('onItemClick',()=>{alert('delete')});

    $$('createTaskSubMenu').attachEvent('onItemClick',()=>{createTaskViewer()});

    $$('editTaskSubMenu').attachEvent('onItemClick',()=>{alert('edit')});

    $$('deleteTaskSubMenu').attachEvent('onItemClick',()=>{alert('delete')});



//get project to view
$$('projectList').attachEvent('onItemClick', (id) => {
    const item = $$('projectList').getItem(id);
    $$('projectInfo').parse(item);
});

//get task to view
$$('taskList').attachEvent('onItemClick', (id) => {
    const item = $$('taskList').getItem(id);
    $$('taskInfo').parse(item);
});}
