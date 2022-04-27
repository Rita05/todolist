import ButtonTask from './buttontask'  


export default {
    title: 'UIComponents/UIButtonTask',
    component: ButtonTask,
    argTypes: {
        onAddTask: { action: 'onAddTask' },
    }
}
const Template = (args) => <ButtonTask {...args} />;

export const Primary = Template.bind({});

