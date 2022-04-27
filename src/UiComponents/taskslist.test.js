import { render } from "@testing-library/react"
import renderer from 'react-test-renderer'
import {TasksListDefault} from './taskslist.stories'
import TasksList from './taskslist'

describe("Testing render of taskslist component", () => {
  it("test render", () => {
    const props = {
      tasks: [
        {
          id: 1, 
          taskName: "Buy Products"
        },
        {
            id: 2, 
            taskName: "meet with friends"
        },
      ],
      onRemoveTask: () => {}, 
    }
    render(<TasksList {...props}/>);
    
  })
  it('render taskslist storybook component', ()=>{
    render(<TasksListDefault/>)
  })
  it('render correctly input task from', () => {
    const TasksListComponent = renderer.create(<TasksListDefault/>).toJSON();
    expect(TasksListComponent).toMatchSnapshot();
  });
})


