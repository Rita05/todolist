

class UsersListApi {

    tasks=[]
    tasksCounter=0

    addTask(task) {
        this.tasksCounter=this.tasksCounter+1
        this.tasks.push({id: this.tasksCounter, taskName: task })
        return this.tasks
    }
  }
  
  export default new UsersListApi()