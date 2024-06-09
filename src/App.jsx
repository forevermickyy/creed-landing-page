import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Heading from './components/Heading'
import Nav from './components/Nav'
import Circle from './components/Circle'
import Explore from './components/Explore'
import Order from './components/Order'
import List from './components/List'
import Warrant from './components/Warrant'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <Heading/>
     <Circle/>
     <Explore/>
     <Order/>
     <List/>
     <Warrant/>
     <Footer/>
    </>
  )
}

export default App
