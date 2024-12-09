
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { createContext, useState } from 'react';

export const CountContext = createContext()

function App() {
  const [count, setCount] = useState('')
  const [countW, setCountW] = useState('')
  // const handleCount = () => {
  //   console.log('counected')
  //   setCount(count + 1)
  // }
  const authInfo={
    setCount,
    count,
    countW,
    setCountW
  }
  console.log(count)


  return (
    <>
      <div>
        <CountContext.Provider value={authInfo}>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </CountContext.Provider>
      </div>
      <ToastContainer></ToastContainer>

    </>
  )
}

export default App
