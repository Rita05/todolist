
import { render } from "@testing-library/react";
import renderer from 'react-test-renderer';

import Todo from './todo';

describe("Making sure it works", () => {
  it("test render", () => {
    const props = {
      tasks: [
        {
          id: 1, 
          taskName: "testTask"
        }
      ],
      task: "Buy Products",
      onTaskСhanged: () => console.log("app adding tasks"), 
      onRemoveTask: () => {}, 
      onAddTask: () => {}
    }
    render(<Todo {...props}/>);
  })
  it("test without props", () => {
    render(<Todo />);
  })
  it('render correctly input task from', () => {
    const TodoListComponent = renderer.create(<Todo/>).toJSON();
    expect(TodoListComponent).toMatchSnapshot();
  });

})
