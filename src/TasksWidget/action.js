import UsersListApi from './tasksapi'

export const TYPES = {
    TYPE_ONCHANGED_TASK: 'get-array-users',
    TYPE_ONADD_TASK: 'add-new-task'
}


const onTaskСhangedAction = (value) => {
    return{
        type: TYPES.TYPE_ONCHANGED_TASK,
        task: value
    }
}

const onAddNewTask=(tasks) =>{
    return{
        type: TYPES.TYPE_ONADD_TASK,
        tasks: tasks
    }
}

export const createNewTaskAction=(task)=>(dispatch)=>{
    let tasks= UsersListApi.addTask(task)
    if(tasks){
        dispatch(onAddNewTask(tasks))
    }
}

export default {
    onTaskСhangedAction,
    createNewTaskAction
}

