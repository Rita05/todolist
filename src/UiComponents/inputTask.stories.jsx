import InputField from './inputform'


export default {
    title: 'UIComponents/UIInputField',
    component: InputField,
    argTypes: {
        onTaskСhanged: { action: 'onTaskСhanged'},
        handleReset: {ction: 'handleReset'},
        task: {control: 'text'}
    }
    
}

const Template = (args) => <InputField {...args}/>;

export const TasksDefault = Template.bind({});

// TasksDefault.args={
//     task: 'sgdsgdgas',
//     ...TasksDefault.onTaskСhanged
// }

// export const TasksChanged = Template.bind({});

// TasksChanged.args={
//     task: ""
// }
