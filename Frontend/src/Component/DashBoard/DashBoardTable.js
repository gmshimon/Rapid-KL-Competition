import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from 'react'
import './css/DashBoardTable.css'
import Modal from 'react-bootstrap/Modal'
import AnalyticPage from '../../Page/Dashboard/AnalyticPage/AnalyticPage'
import Button from 'react-bootstrap/Button'

const DashboardTable = () => {
  const [busData, setData] = useState([])
  const [selectedId, setSelectedId] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    fetch('Bus_data.json')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  const handleBusDashBoard = id => {
    setSelectedId(id)
    setShowModal(true)
    // console.log(id);
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <Row>
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
                    <th>Grade</th>
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
                      <td>
                        {(bus.Grade === 0 && 'A') ||
                          (bus.Grade === 1 && 'B') ||
                          (bus.Grade === 2 && 'C')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop='static'
        keyboard={false}
        dialogClassName='modal-90w'
      >
        <Modal.Header closeButton>
          <Modal.Title>Bus Analytics</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedId !== null && busData !== null && (
            <AnalyticPage id={selectedId} data={busData} />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DashboardTable
