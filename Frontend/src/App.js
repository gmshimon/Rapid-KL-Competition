import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Page/Dashboard/Dashboard';
import Drawer from './Component/Drawer/Drawer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Drawer>
        <Routes>
          <Route path="/" element={Dashboard} />
        </Routes>
        <Dashboard />
      </Drawer>
    </div>
  );
}

export default App;
