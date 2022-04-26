import TaskListReducer from './reducer'
import {onAddTask, onDeletTask,onGetTasks} from './action'
import TasksApi from './tasksapi'
import {getMockTasks, deleteMockTasks} from '../__mocks__/request'


describe("Check all actions of getting tasks", () => {


    it(('get all tasks'), async()=>{
        let initialState={
            tasks: []
        }
        let mockTasks=await getMockTasks()
        console.log(mockTasks)

        let action = onGetTasks(mockTasks)
        let newState=TaskListReducer(initialState, action)

        expect(newState.tasks.length).toBe(2)
    })
    it('new task should be added', async()=>{

        let initialState={
            tasks: []
        }

        let updatedTasks=await TasksApi.addTask("buy new products")

        let action = onAddTask(updatedTasks)
        let newState=TaskListReducer(initialState, action)

        console.log(newState.tasks)

        expect(newState.tasks.length).toBe(1)

    }) 
    it('chosen task should be deleted', async()=>{

        let initialState={
            tasks: []
        }
        
        let updatedTasks=await deleteMockTasks(2)

        console.log(updatedTasks)

        let action = onDeletTask(updatedTasks)
        let newState=TaskListReducer(initialState, action)

        console.log(newState.tasks)

        expect(newState.tasks.length).toBe(1)

    })
})

