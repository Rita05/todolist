const tasks = [
    {id: 1,  taskName: 'buy products'},
    {id: 2,  taskName: 'wash the dishes'},
];
  
export  async function getMockTasks() {
    return tasks
}

export  async function deleteMockTasks(taskId) {
    let index = tasks.findIndex(function(task){
        return task.id === taskId;
    })
    if (index !== -1) tasks.splice(index, 1);
    return tasks
}