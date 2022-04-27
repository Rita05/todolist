
const ButtonTask=(props)=>{
    return(
    <div className="flex space-x-5">
        <button className='bg-teal-400 w-7rem h-2.5rem rounded-md' onClick={()=>props.onAddTask()}>Add task</button>
        <button className='bg-teal-400 w-7rem h-2.5rem rounded-md' onClick={()=>props.handleReset()}>Reset</button>
    </div>     
    )
}

export default ButtonTask
