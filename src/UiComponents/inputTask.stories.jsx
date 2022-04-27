import InputField from './inputform'


export default {
    title: 'UI-InputField-Task/InputField',
    component: InputField,
    argTypes: {
        onTaskСhanged: { action: 'onTaskСhanged' },
        value: ''
    }
    
}

const Template = (args) => <InputField {...args}/>;

export const TasksChanged = Template.bind({});

TasksChanged.agrs={
    value: ''
}

export const ChangedProps = Template.bind({});

ChangedProps.agrs={
    ...TasksChanged.args,
    value: "sjfhshdfhsd"
}

