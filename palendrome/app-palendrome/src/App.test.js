import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import App from './App';

/* Start Testing */
describe('Start Testing', () => {
  test('renders initial test', () => {
    render(<App />);
    const linkElement = screen.getByText(/start now/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('renders the main container exists', () => {
    // const { app } = render(<App />);
    // const mainContainer = screen.queryAllByText('main');
    // const mainContainer = app.firstChild();
    // console.log(mainContainer, 1001);
    // expect(mainContainer).toBeInTheDocument();

    // const mainContainer = screen.getByRole('div');
    // expect(mainContainer).toHaveClass('main');

    ReactDOM.render(<App />);

    let mainContainer = TestUtils.findRenderedDOMComponentWithClass('main');
    expect(mainContainer).to.exists();
  });
});