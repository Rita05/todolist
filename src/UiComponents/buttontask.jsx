import { Button } from '@webeetle/windy'

const ButtonTask=(props)=>{
    return(
        <Button className='bg-teal-400 w-8rem h-2.5rem rounded-md' onClick={()=>props.onAddTask()}>Add task</Button>
    )
}

export default ButtonTask