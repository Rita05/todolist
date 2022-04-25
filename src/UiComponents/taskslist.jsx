import { Panel, Checkbox, Button } from "@webeetle/windy";

const TasksList=(props)=>{
    return(
    <div className="flex flex-col justify-center items-center space-y-5 m-20px">
        {  
            props.tasks.map(elem=>{
                return (
                <Panel key={elem.id} className="flex justify-between w-27.5rem px-4 py-2 bg-white">
                <div className="flex justify-start items-center space-x-5">
                    <Checkbox className='pt-4'/>
                    <span className="text-center">{elem.taskName}</span>
                </div>
                    <Button className='bg-teal-400 w-4rem h-2.5rem rounded-md' onClick={()=>props.onRemoveTask(elem.id)}>Delete</Button>
                </Panel>
                )
            })
        }
    
    </div>)
}
export default TasksList
