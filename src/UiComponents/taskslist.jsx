const TasksList=(props)=>{
    return(
    <div className="flex flex-col justify-center items-center space-y-5 m-20px">
        {  
            props.tasks?.map(elem=>{
                return (
                <div key={elem.id} className="flex justify-between w-27.5rem px-4 py-2 bg-white">
                <div className="flex justify-start items-center space-x-5">
                    <input type='checkbox' className='pt-4'/>
                    <span className="text-center">{elem.taskName}</span>
                </div>
                    <button className='bg-teal-400 w-4rem h-2.5rem rounded-md' onClick={()=>props.onRemoveTask(elem.id)}>Delete</button>
                </div>
                )
            })
        }
    
    </div>)
}
export default TasksList
