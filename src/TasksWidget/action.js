import UsersListApi from './tasksapi'

export const TYPES = {
    TYPE_ONCHANGED_TASK: 'get-array-users',
    TYPE_ONADD_TASK: 'add-new-task',
    TYPE_ONDELETE_TASK: 'delete-task'
}


const onTaskСhangedAction = (value) => {
    return{
        type: TYPES.TYPE_ONCHANGED_TASK,
        task: value
    }
}

const onAddTask=(tasks) =>{
    return{
        type: TYPES.TYPE_ONADD_TASK,
        tasks: tasks
    }
}

const onDeletTask=(updatedTasks)=>{
    return{
        type: TYPES.TYPE_ONDELETE_TASK,
        updatedTasks: updatedTasks
    }
}


export const createNewTaskAction=(task)=>async(dispatch)=>{
    let tasks= await UsersListApi.addTask(task)
    if(tasks){
        dispatch(onAddTask(tasks))
    }
}

export const RemoveTaskAction=(taskId)=>async(dispatch)=>{
    let updatedTasks= await UsersListApi.deleteTask(taskId)
    if(updatedTasks){
        dispatch(onDeletTask(updatedTasks))
    }
}

export default {
    onTaskСhangedAction,
    createNewTaskAction,
    RemoveTaskAction
}
