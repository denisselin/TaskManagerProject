function ProjectContainer(ProjectStorage) {
    return {
        view: 'list',
        id: 'projectList',
        template: '#name#',
        select: true,
        data:ProjectStorage
    }
}