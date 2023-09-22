import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './css/dashboard-cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxesStacked,
  faBus,
  faToolbox,
} from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function DashboardCounter() {
  const [busData, setData] = useState([]);
  let total = 0;
  useEffect(() => {
    fetch('/Bus_data.json')
      .then((res) => res.json())
      .then((data) => {
        data.forEach((element) => {
          if (element.Grade === 2) total++;
        });
        setData(total);
      });
  }, []);
  const totalCustomer = 297;
  const WaitingForParts = 59;
  const totalFeedback = 1;
  return (
    <div className="counter-cards">
      <Row>
        <Col className="col-3 col-m-6 col-sm-6">
          <Card className="counter bg-customer">
            <Card.Body>
              <FontAwesomeIcon icon={faBus} />
              <Card.Title>{totalCustomer}</Card.Title>
              <Card.Text>Total Bus</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-3 col-m-6 col-sm-6">
          <Card className="counter bg-feedback">
            <Card.Body>
              <FontAwesomeIcon icon={faToolbox} />
              <Card.Title>{busData}</Card.Title>
              <Card.Text>Need Maintenance</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-3 col-m-6 col-sm-6">
          <Card className="counter bg-enquiry">
            <Card.Body>
              <FontAwesomeIcon icon={faBoxesStacked} />
              <Card.Title>{WaitingForParts}</Card.Title>
              <Card.Text>Waiting for parts</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-3 col-m-6 col-sm-6">
          <Card className="counter bg-mechanic">
            <Card.Body>
              <FontAwesomeIcon icon={faComments} />
              <Card.Title>{totalFeedback}</Card.Title>
              <Card.Text>Total Feedback</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default DashboardCounter;
