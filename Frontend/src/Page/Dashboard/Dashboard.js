import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import DashboardTable from '../../Component/DashBoard/DashBoardTable'
import DashboardCounter from '../../Component/DashBoard/DashBoardCounter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
  return (
    <Container>
      <DashboardCounter />
      <DashboardTable />
    </Container>
  )
}

export default Dashboard
