import {useState} from 'react'

const InputField = (props) => {

    return (
        <input id='inputFormTask' type='text' className='w-22rem h-2.5rem p-5px border-1 rounded-md' placeholder="Enter Task"
         value={props.task} onChange={(event)=>props.onTaskСhanged(event.target.value)}/>
    )
}

export default InputField


