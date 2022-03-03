import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Nav from './components/nav.js'
import Entry from './components/entry.js';
import data from './data.js'

export default function App() {
  const entries = data.map(entry => {
    return (<Entry
              key={entry.id}
              {...entry}
            />
            )
    })
  return (
    <div className=''>
      <Nav />
      <section className='entries flex col ai'>
        {entries}
      </section>
    </div>
  )
}