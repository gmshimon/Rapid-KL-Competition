import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import './css/DashBoardTable.css';
import Modal from 'react-bootstrap/Modal';
import AnalyticPage from '../../Page/Dashboard/AnalyticPage/AnalyticPage';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const DashboardTable = () => {
  const [busData, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    fetch('Bus_data.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleBusDashBoard = (id) => {
    setSelectedId(id);
    setShowModal(true);
    // console.log(id);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSearch = () => {
    const buses = busData;
    if (searchText.length > 0) {
      const result = busData.filter(
        (bus) => bus.bus_id.toLowerCase() === searchText.toLowerCase()
      );
      setData(result);
    } else {
      fetch('Bus_data.json')
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="input-group mb-3 mt-3 w-50">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Search by Bus ID"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            onClick={handleSearch}
            className="btn btn-outline-success mt-2"
            type="button"
            id="button-addon2"
            style={{
              height: '38px',
              marginLeft: '10px',
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>

      <Row>
        <Col className="col-12 col-m-12 col-sm-12">
          <Card className="enquiry-table" style={{ height: '500px' }}>
            <div className="legend">
              <ul>
                <li>
                  <span
                    className="legend-heading"
                    style={{ fontWeight: 'bold' }}
                  >
                    Engine Status:
                  </span>
                </li>
                <li>
                  <span className="legend-bullet legend-red"></span> Critical
                  Maintenance Needed
                </li>
                <li>
                  <span className="legend-bullet legend-yellow"></span>{' '}
                  Maintenance Suggested
                </li>
                <li>
                  <span className="legend-bullet legend-green"></span> Engine in
                  Good Health
                </li>
              </ul>
            </div>
            <Card.Header className="enquiry-table">
              <h3>Bus Details</h3>
            </Card.Header>
            <Card.Body className="enquiry-table">
              <Table>
                <thead className="each-row">
                  <tr id="enquiry-header">
                    <th>#</th>
                    <th>bus_id</th>
                    <th>depot_nm</th>
                    <th>model_num</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {busData?.length > 0 ? (
                    busData.map(
                      (bus, index) =>
                        bus.Grade === 2 && (
                          <tr
                            onClick={() => handleBusDashBoard(index)}
                            key={index}
                            className={`table-row ${
                              (bus.Grade === 0 && 'table-success') ||
                              (bus.Grade === 1 && 'table-warning') ||
                              (bus.Grade === 2 && 'table-danger')
                            }`}
                          >
                            <td>{index + 1}</td>
                            <td>{bus.bus_id}</td>
                            <td>{bus.depot_nm}</td>
                            <td>{bus.model_num}</td>
                            <td>
                              {(bus.Grade === 0 && 'A') ||
                                (bus.Grade === 1 && 'B') ||
                                (bus.Grade === 2 && 'C')}
                            </td>
                          </tr>
                        )
                    )
                  ) : (
                    <p>Zero Result Found</p>
                  )}
                  {busData?.length > 0 ? (
                    busData.map(
                      (bus, index) =>
                        bus.Grade === 1 && (
                          <tr
                            onClick={() => handleBusDashBoard(index)}
                            key={index}
                            className={`table-row ${
                              (bus.Grade === 0 && 'table-success') ||
                              (bus.Grade === 1 && 'table-warning') ||
                              (bus.Grade === 2 && 'table-danger')
                            }`}
                          >
                            <td>{index + 1}</td>
                            <td>{bus.bus_id}</td>
                            <td>{bus.depot_nm}</td>
                            <td>{bus.model_num}</td>
                            <td>
                              {(bus.Grade === 0 && 'A') ||
                                (bus.Grade === 1 && 'B') ||
                                (bus.Grade === 2 && 'C')}
                            </td>
                          </tr>
                        )
                    )
                  ) : (
                    <p>Zero Result Found</p>
                  )}
                  {busData?.length > 0 ? (
                    busData.map(
                      (bus, index) =>
                        bus.Grade === 0 && (
                          <tr
                            onClick={() => handleBusDashBoard(index)}
                            key={index}
                            className={`table-row ${
                              (bus.Grade === 0 && 'table-success') ||
                              (bus.Grade === 1 && 'table-warning') ||
                              (bus.Grade === 2 && 'table-danger')
                            }`}
                          >
                            <td>{index + 1}</td>
                            <td>{bus.bus_id}</td>
                            <td>{bus.depot_nm}</td>
                            <td>{bus.model_num}</td>
                            <td>
                              {(bus.Grade === 0 && 'A') ||
                                (bus.Grade === 1 && 'B') ||
                                (bus.Grade === 2 && 'C')}
                            </td>
                          </tr>
                        )
                    )
                  ) : (
                    <p>Zero Result Found</p>
                  )}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
        dialogClassName="modal-90w"
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
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DashboardTable;
