import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './Page/Dashboard/Dashboard'
import HeaderBar from './Component/Drawer/HeaderBar'
import SideNavBar from './Component/Drawer/SideBar'

function App () {
  return (
    <div>
      <HeaderBar />
      <SideNavBar />
      <Dashboard />
      <Dashboard />
    </div>
  )
}

export default App
