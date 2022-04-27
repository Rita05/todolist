import TasksList from './taskslist'


export default  {
    title: 'UIComponents/UITasksList',
    component: TasksList,
    argTypes: {
        onRemoveTask: { action: 'onRemoveTask' },
        tasks: {control: 'Array'}
    }
}

const Template = (args) => <TasksList {...args}/>;

export const TasksListDefault = Template.bind({});

TasksListDefault.args={
    tasks: [{id: 1, taskName: 'buy products'}, 
            {id: 2, taskName: 'wash the dishes'},
            {id: 3, taskName: 'meet with friends'},
    ]
}

