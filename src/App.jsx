import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomeFeed from './components/HomeFeed'
import { useOutletContext } from 'react-router-dom';
import './App.css'

function App() {
  const { searchField } = useOutletContext().searchField;

  return (
    <HomeFeed searchField={searchField}></HomeFeed>
  )
}

export default App
