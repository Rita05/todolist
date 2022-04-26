import Todo from '../UiComponents/todo'
import actions from './action'
import {connect} from 'react-redux'
import {useEffect} from 'react'
import TasksApi from  './tasksapi'


const TaskListContainer=(props)=>{


    useEffect(() => {
        props.ongetTasksFromInterval()
        const interval = setInterval(() => {
            props.ongetTasksFromInterval()
            console.log('tasks loading')
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const onAddTask=()=>{
        props.createNewTask(props.task, TasksApi)
    }

    const templateProps={
        onTaskСhanged: props.onTaskСhanged,
        onAddTask,
        task: props.task,
        tasks: props.tasks,
        onRemoveTask: props.onRemoveTask
    }

    //console.log(props.task)

    return(
        <>
            <Todo {...templateProps}/>
        </>
    )

}

const mapStateToProps = (state) => {
    return {
       tasks: state.TaskListReducer.tasks,
       task: state.TaskListReducer.task

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTaskСhanged: (value) => dispatch(actions.onTaskСhangedAction(value)),
        createNewTask: (task, api)=>dispatch(actions.createNewTaskAction(task, api)),
        onRemoveTask: (taskId)=>dispatch(actions.RemoveTaskAction(taskId)),
        ongetTasksFromInterval: ()=>dispatch(actions.getTasksAction())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer)
