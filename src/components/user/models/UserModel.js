const users = [];

const userModel = {
        //возвращает все элемнеты массива users
        getAll: () => {
            return users;
        },

        // возвращает элемент user
        get: (id) => {
            return users.find(user => user.id === id);
        },

        //изменяет элемент user
    update: (id, elem) => {
        const item = users.find(user => user.id === id);
        for (const key2 in item) {
            if (item[key] !== elem[key]) {
                item[key] = elem[key]
            }

        }

    },

        //создание элемента user
        create: (user) => {
            users.push(user);
        },

        // удаление элемента user
        delete: (id) => {
            const i = users.forEach(function (item, index) {
                if (item.id === id) {
                    return index;
                }
            });
            users.splice(i, 1)
        }
    }

;