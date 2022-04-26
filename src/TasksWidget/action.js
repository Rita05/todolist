import TasksApi from './tasksapi'

export const TYPES = {
    TYPE_ONCHANGED_TASK: 'get-array-users',
    TYPE_ONADD_TASK: 'add-new-task',
    TYPE_ONDELETE_TASK: 'delete-task',
    TYPE_ONGET_TASKS: 'loaded-tasks',
    TYPE_RESET_INPUT: 'reset-inputTask-field'
}


const onTaskСhangedAction = (value) => {
    return{
        type: TYPES.TYPE_ONCHANGED_TASK,
        task: value
    }
}

const resetInputTaskAction = ()=>{
    return{
        type: TYPES.TYPE_RESET_INPUT
    }
}


export const onAddTask=(tasks) =>{
    return{
        type: TYPES.TYPE_ONADD_TASK,
        tasks
    }
}

export const onDeletTask=(updatedTasks)=>{
    return{
        type: TYPES.TYPE_ONDELETE_TASK,
        updatedTasks: updatedTasks
    }
}

export const onGetTasks=(tasks)=>{
    return{
        type: TYPES.TYPE_ONGET_TASKS,
        tasks
    }
}


export const createNewTaskAction=(task, api)=>async(dispatch)=>{
    let tasks= await TasksApi.addTask(task)
    if(tasks){
        dispatch(onAddTask(tasks))
    }
}

export const RemoveTaskAction=(taskId)=>async(dispatch)=>{
    let updatedTasks= await TasksApi.deleteTask(taskId)
    if(updatedTasks){
        dispatch(onDeletTask(updatedTasks))
    }
}

export const getTasksAction=()=>async(dispatch)=>{
    let tasks=await TasksApi.getTasks()
    if(tasks){
        dispatch(onGetTasks(tasks))
    }
}

export default {
    onTaskСhangedAction,
    createNewTaskAction,
    RemoveTaskAction,
    getTasksAction,
    resetInputTaskAction
}
