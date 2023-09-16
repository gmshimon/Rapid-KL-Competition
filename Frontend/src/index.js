import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardCounter from './js/DashboardCounter';
import DashboardTable from './js/DashboardTable';
import Container from 'react-bootstrap/esm/Container';

function Greeting() {
  return (
    <Container>
      <DashboardCounter />
    </Container>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
