import { Input } from '@webeetle/windy'

const InputField = (props) => {
    return (
        <Input type='text' className='w-20rem h-2.5rem p-5px border-1 rounded-md' placeholder="Enter Task"
            defaultValue={props.task} onChange={(event)=>props.onTaskСhanged(event.target.value)}/>
    )
}

export default InputField
