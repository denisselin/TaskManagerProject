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
        const item = tasks.find(task => task.id === id);
        for (const key2 in item) {
            if (item[key] !== elem[key]) {
                item[key] = elem[key]
            }

        }

    },

    //создает элемент task
    create: (task) => {
        tasks.push(task);
    },

    //удаляет элемент task
    delete: (id) => {
        const i = tasks.forEach(function (item, index) {
            if (item.id === id) {
                return index;
            }
        });
        tasks.splice(i, 1)

    }
};
