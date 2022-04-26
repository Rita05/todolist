

class TasksApi {

    tasks=[]
    tasksCounter=0

    async addTask(task) {
        this.tasksCounter=this.tasksCounter+1
        this.tasks.push({id: this.tasksCounter, taskName: task })
        return this.tasks
    }

    async deleteTask(taskId){
       let index = this.tasks.findIndex(function(task){
            return task.id === taskId;
       })
       if (index !== -1) this.tasks.splice(index, 1);
       return this.tasks
    }

    async getTasks(){
        return this.tasks
    }

  }
  
export default new TasksApi()


