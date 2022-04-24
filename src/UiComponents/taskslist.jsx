import { Panel, Checkbox } from "@webeetle/windy";

const TasksList=(props)=>{
    return(
    <div className="flex flex-col justify-center items-center space-y-5 m-20px">
        {  
            props.tasks.map(elem=>{
                return (
                <Panel key={elem.id} className="flex justify-start w-27.5rem space-x-5 px-4 py-2 bg-white">
                    <Checkbox className='pt-4'/>
                    <span>{elem.taskName}</span>
                </Panel>)
            })
        }
    
    </div>)
}
export default TasksList
