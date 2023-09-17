import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './Page/Dashboard/Dashboard'
import Drawer from './Component/Drawer/Drawer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ComplaintForm from './Component/ComplaintForm/ComplaintForm'
import { useEffect, useState } from 'react'
import AnalyticPage from './Page/Dashboard/AnalyticPage/AnalyticPage'

function App () {
  const [busData, setData] = useState([])
  useEffect(() => {
    fetch('Bus_data.json')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
  }, [])
  return (
    <BrowserRouter>
      <Drawer>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route
            path='/analytics/:id'
            element={<AnalyticPage data={busData} />}
          />
          <Route path='/feedback' element={<ComplaintForm />} />
        </Routes>
      </Drawer>
    </BrowserRouter>
  )
}

export default App
