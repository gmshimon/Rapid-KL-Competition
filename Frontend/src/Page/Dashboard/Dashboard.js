import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import DashboardTable from '../../Component/DashBoard/DashBoardTable'
import DashboardCounter from '../../Component/DashBoard/DashBoardCounter'

const Dashboard = () => {
  return (
    <Container>
      <DashboardCounter />
      <DashboardTable />
    </Container>
  )
}

export default Dashboard
