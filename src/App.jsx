import React from 'react'
import Head from './components/head'
import Card from './components/card'
import data from "./data"

export default function App() {
  const cards = data.map(item => {
      return (
          <Card
              key={item.id}
              {...item}
          />
      )
  })        
  
  return (
      <>
          <Head />
          <section className="cards-list">
              {cards}
          </section>
      </>
  )
}
