
const ButtonTask=(props)=>{
    return(
        <button className='bg-teal-400 w-8rem h-2.5rem rounded-md' onClick={()=>props.onAddTask()}>Add task</button>
    )
}

export default ButtonTask