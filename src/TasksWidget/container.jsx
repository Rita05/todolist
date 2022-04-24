import Todo from '../UiComponents/todo'
import actions from './action'
import {connect} from 'react-redux'


const TaskListContainer=(props)=>{


    const onAddTask=()=>{
        props.createNewTask(props.task)
    }

    const templateProps={
        onTaskСhanged: props.onTaskСhanged,
        onAddTask,
        tasks: props.tasks
    }

    console.log(props.task)

    return(
        <>
            <Todo {...templateProps}/>
        </>
    )

}

const mapStateToProps = (state) => {
    return {
       ...state.TaskListReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTaskСhanged: (value) => dispatch(actions.onTaskСhangedAction(value)),
        createNewTask: (task)=>dispatch(actions.createNewTaskAction(task))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer)

