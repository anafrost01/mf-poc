import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { Login } from './features/Login/Login';
import { Navigation } from './features/Navigation/Navigation';
import './index.scss';
import store from './state/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <main className="h-screen flex md:flex-row flex-col-reverse">
        <Navigation />
        <section className="flex-grow bg-gray-200">
          {/* <Login /> */}
          <article className="flex-1 h-full flex justify-center items-center">
            <h1 className="text-2xl font-bold">Nothing to see here yet</h1>
          </article>
        </section>
      </main>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
