import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './Page/Dashboard/Dashboard'
import Drawer from './Component/Drawer/Drawer'

function App () {
  return (
    <div>
      <Drawer>
        <Dashboard />
      </Drawer>
    </div>
  )
}

export default App
