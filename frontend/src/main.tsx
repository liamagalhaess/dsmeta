import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './components/Header'
import NotificationButton from './components/NotificationButton'
import SalesCard from './components/SalesCard'
import './index.css'

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
      <App />
      <NotificationButton />

    </>

  </React.StrictMode>
)
