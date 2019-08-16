const tasks = [];

const taskModel = {
    //возвращает все элементы массива tasks
    getAll: () => {
        return tasks;
    },

    //возвращат элемент task
    get: (id) => {
        return tasks.find(task => task.id === id);
    },

    //изменяет элемент task

    update: (id, elem) => {
        let item = tasks.find(task =>task.id === id);
debugger
        for (const key in item) {
            if (item[key] !== elem[key]) {
                item[key] = elem[key]
            }
        }debugger
    },

    //создает элемент task
    create: (task) => {
        tasks.push(task);
    },

    //удаляет элемент task
    delete: (id) => {
        tasks.forEach(function (item, index) {
            if (item.id === id) {
                tasks.splice(index, 1)
            }
        });


    }
};
