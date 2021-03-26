import TestRenderer from 'react-test-renderer';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import App from '../components/app/App';
import Home from '../pages/home';
import Quotes from '../pages/quotes';
import CalculatorPage from '../pages/calculator';

const history = createBrowserHistory();

it('renders App', () => {
  const tree = TestRenderer
    .create(
      <Router history={history}>
        <App />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Home', () => {
  const tree = TestRenderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('renders Calculator Page', () => {
  const tree = TestRenderer
    .create(<CalculatorPage />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

jest.mock('../pages/quotes.js', () => jest.fn(() => ({ quote: 'Any Random Quote', author: 'QuoteAuthor' })));

it('renders Quotes', () => {
  const tree = TestRenderer
    .create(<Quotes />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
