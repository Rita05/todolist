import ButtonTask from './buttontask'
import InputField from './inputform'
import TasksList from './taskslist'


const Todo=(props)=>{
    return(
        <div className="flex flex-col w-full max-w-500px mt-100px p-30px rounded-10px bg-zinc-100">
            <h1 className='uppercase text-center font-serif italic text-green-400 font-bold'>my todolist</h1>
            <div className="flex justify-center items-center space-x-20px pt-20px">
                <InputField onTaskСhanged={props.onTaskСhanged} task={props.task}/>
                <ButtonTask onAddTask={props.onAddTask}/>
            </div>
                <TasksList tasks={props.tasks} onRemoveTask={props.onRemoveTask}/>
       </div>
    )
}


export default Todo

