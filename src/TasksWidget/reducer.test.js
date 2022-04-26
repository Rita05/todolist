import TaskListReducer from './reducer'
import {onAddTask, onDeletTask,onGetTasks} from './action'


describe("Check all actions of getting tasks", () => {

    it(('get all tasks'), async()=>{
        let initialState={
            tasks: []
        }
        
        const  serverTasks= [
            {id: 1,  taskName: 'buy products'},
            {id: 2,  taskName: 'wash the dishes'} 
        ]

        let action = onGetTasks(serverTasks)
        let newState=TaskListReducer(initialState, action)

        expect(newState.tasks.length).toBe(2)
    })
    
    it('new task should be added', async()=>{

        let initialState={
            tasks: [ 
                    {id: 1,  taskName: 'buy products'},
                    {id: 2,  taskName: 'wash the dishes'}
            ]
        }
        let newTasks=[ 
            {id: 1,  taskName: 'buy products'},
            {id: 2,  taskName: 'wash the dishes'},
            {id: 3,  taskName: 'take a shower'}
        ]

        let action = onAddTask(newTasks)
        let newState=TaskListReducer(initialState, action)

        console.log(newState.tasks)

        expect(newState.tasks.length).toBe(3)

    }) 
    // it('chosen task should be deleted', async()=>{

    //     let initialState={
    //         tasks: []
    //     }
        
    //     let updatedTasks=await deleteMockTasks(2)

    //     console.log(updatedTasks)

    //     let action = onDeletTask(updatedTasks)
    //     let newState=TaskListReducer(initialState, action)

    //     console.log(newState.tasks)

    //     expect(newState.tasks.length).toBe(1)

    // })
})

