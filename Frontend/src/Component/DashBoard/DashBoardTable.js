import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import { customer } from '../../Data/dummyData'
import { vehicles } from '../../Data/dummyData'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from 'react'
import './css/DashBoardTable.css'
import { useNavigate } from 'react-router-dom'
const DashboardTable = () => {
  const navigate = useNavigate()
  const [busData, setData] = useState([])
  useEffect(() => {
    fetch('Bus_data.json')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  const handleBusDashBoard = id => {
    navigate(`/analytics/${id}`)
    console.log(id)
  }

  return (
    <Row className=''>
      <Col className='col-12 col-m-12 col-sm-12'>
        <Card
          className='enquiry-table'
          style={{ height: '500px', overflowY: 'scroll' }}
        >
          <Card.Header className='enquiry-table'>
            <h3>Recent Enquiry By Customer</h3>
          </Card.Header>
          <Card.Body className='enquiry-table'>
            <Table>
              <thead className='each-row'>
                <tr>
                  <th>bus_id</th>
                  <th>depot_nm</th>
                  <th>model_num</th>
                </tr>
              </thead>
              <tbody>
                {busData.map((bus, index) => (
                  <tr
                    onClick={() => handleBusDashBoard(index)}
                    key={index}
                    className='table-row'
                  >
                    <td>{bus.bus_id}</td>
                    <td>{bus.depot_nm}</td>
                    <td>{bus.model_num}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default DashboardTable
