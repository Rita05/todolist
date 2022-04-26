import {createNewTaskAction} from './action'
import TasksApi from './tasksapi'


it(('create new task action added new task'), ()=>{

    let task='buy products'

    const Func = createNewTaskAction(task, TasksApi)
    const testDispatch = event => {
        console.log(event)
    }
    Func(testDispatch)


})
