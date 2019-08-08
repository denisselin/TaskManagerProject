function TaskContainer(TaskStorage) {
    return {
        view: 'list',
        id: 'taskList',
        template: '#name#',
        select: true, //выбранный элемент будет подсвечен
        data:TaskStorage
    }
}