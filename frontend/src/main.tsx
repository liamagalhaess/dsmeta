import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import SalesCard from './components/SalesCard';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>

  </React.StrictMode>
)
