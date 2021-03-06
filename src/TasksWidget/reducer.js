import {TYPES} from './action'

const initialState={
    task: '',
    tasks: []
}


const TaskListReducer=(state=initialState, action)=>{

    switch(action.type){
        case TYPES.TYPE_ONCHANGED_TASK:
            return{
                ...state,
                task: action.task
            }
        case TYPES.TYPE_ONADD_TASK:
            return{
                ...state,
                tasks: [...action.tasks]
            }
        case TYPES.TYPE_ONDELETE_TASK:
            return{
                ...state,
                tasks: [...action.updatedTasks]
            }
        case TYPES.TYPE_ONGET_TASKS:
            return{
                ...state,
                tasks: action.tasks
            }
        case TYPES.TYPE_RESET_INPUT:
            return{
                ...state,
                task: ''
            }
        default:
            return state
    }

}

export default TaskListReducer

