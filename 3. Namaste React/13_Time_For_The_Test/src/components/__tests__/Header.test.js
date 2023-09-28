import { render, screen } from '@testing-library/react';
import Header from '../Header';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';

it('Should render header component with a login button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //  const loginButton = screen.getByText('login');

  const loginButton = screen.getByRole('button', { name: 'login' });

  expect(loginButton).toBeInTheDocument();
});

it('Should render header component with cart item 0', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //  const loginButton = screen.getByText('login');

  const cartItem = screen.getByText('Cart : 0 Items');

  //  const cartItem = screen.getByText(/Cart/);

  expect(cartItem).toBeInTheDocument();
});
