import React from 'react';
import ReactDOM from 'react-dom';
import { Navigation } from './components/Navigation/Navigation';
import Empty from './assets/empty.svg';

import './index.scss';

const App = () => (
  <main className='h-screen flex md:flex-row flex-col-reverse'>
    <Navigation />
    <section className='flex-grow bg-gray-200'>
      <article>
        <h1 className='text-2xl font-bold'>Nothing to see here yet</h1>
        <img src={Empty} alt='React Logo' />
      </article>
    </section>
  </main>
);

ReactDOM.render(<App />, document.getElementById('app'));
