import ButtonTask from './buttontask'  
import { action } from "@storybook/addon-actions"
// import { createEventDispatcher } from 'svelte'


export default {
    title: 'UI-Button-Task/ButtonTask',
    component: ButtonTask,
    argTypes: {
        onAddTask: { action: 'onAddTask' },
    }
}
const Template = (args) => <ButtonTask {...args} />;

export const Primary = Template.bind({});

