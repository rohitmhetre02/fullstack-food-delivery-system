import React from 'react'
import Navbar from './componets/navbar/Navbar'
import Sidebar from './componets/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import Orders from './pages/Orders/Orders'
import List from './pages/List/List'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const url = "http://localhost:5000"

  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr></hr>
      <div className="app-contain">
        <Sidebar />
        <Routes>
         <Route path="/add" element={<Add url={url}/>}></Route>
         <Route path="/list" element={<List url={url}/>}></Route>
         <Route path="/orders" element={<Orders url={url}/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App