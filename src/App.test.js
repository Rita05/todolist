
// import { it, describe } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { it, expect } from 'vitest';
import App from './App';

// import { render } from "@testing-library/react";

import renderer from 'react-test-renderer';

describe("Making sure it works", () => {
  it("should sum 1 plus 1", () => {
    // expect(1 + 1).toEqual(2)
    //let { getByText } = render("<App />");
    renderer.create(<App />);
  })
})


// export function add(...args) {
//   return args.reduce((a, b) => a + b, 0)
// }

// it('add', () => {
//   expect(add()).toBe(0)
//   expect(add(1)).toBe(1)
//   expect(add(1, 2, 3)).toBe(6)
// })


// in-source test suites
// if (import.meta.vitest) {
//   //const { it, expect } = import.meta.vitest
//   it('add', () => {
//     expect(add()).toBe(0)
//     expect(add(1)).toBe(1)
//     expect(add(1, 2, 3)).toBe(6)
//   })
// }
 


// it('renders App component test', () => {
//   let div = documnet.createElement('div')
//   ReactDOM.render(<App/>, div)
//   ReactDOM.unmountComponentAtNode(div)
//   // const component = render(<App/>)
//   // console.log(component)
//   // render(<App/>);
//   // expect(screen.getByTestId('add-todolist')).toBeInTheDocument();
// });
