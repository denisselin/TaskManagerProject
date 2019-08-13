const projects = [];

const projectModel = {
    //возвращает все элементы массива projects
    getAll: () => {
        return projects;
    },

    //возвращает элемент project
    get: (id) => {
        return projects.find(project => project.id === id);
    },

    //изменение элемента project
    update: (id, elem) => {
        let item = projects.find(project => project.id === id);

        debugger;
        for (const key2 in item) {
            if (item[key] !== elem[key]) {
                item[key] = elem[key]
            }

        }


    },

    // создание элемента project
    create: (project) => {
        projects.push(project);
    },

    //удаление элемента project
    delete: (id) => {
        projects.forEach(function (item, index) {

            if (item.id === id) {
                projects.splice(index, 1);

            }
        });


    },


};