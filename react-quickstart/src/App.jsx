import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function AboutPage() {
  return(
    <>
      <img className='avatar' src='https://i.imgur.com/yXOvdOSs.jpg'/>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

function App() {

  return (
    <>
      <AboutPage />
    </>
  )
}

export default App
