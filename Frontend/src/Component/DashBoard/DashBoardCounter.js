import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './css/dashboard-cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faHatCowboy } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';

function DashboardCounter() {
  const totalCustomer = 3;
  const totalMechanic = 1;
  const totalEnquiry = 5;
  const totalFeedback = 1;
  return (
    <Row>
      <Col className="col-3 col-m-6 col-sm-6">
        <Card className="counter bg-customer">
          <Card.Body>
            <FontAwesomeIcon icon={faUsers} />
            <Card.Title>{totalCustomer}</Card.Title>
            <Card.Text>Total Customer</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-3 col-m-6 col-sm-6">
        <Card className="counter bg-mechanic">
          <Card.Body>
            <FontAwesomeIcon icon={faHatCowboy} />
            <Card.Title>{totalMechanic}</Card.Title>
            <Card.Text>Total Mechanic</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-3 col-m-6 col-sm-6">
        <Card className="counter bg-enquiry">
          <Card.Body>
            <FontAwesomeIcon icon={faSpinner} />
            <Card.Title>{totalEnquiry}</Card.Title>
            <Card.Text>Total Enquiry</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-3 col-m-6 col-sm-6">
        <Card className="counter bg-feedback">
          <Card.Body>
            <FontAwesomeIcon icon={faComments} />
            <Card.Title>{totalFeedback}</Card.Title>
            <Card.Text>Total Feedback</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default DashboardCounter;
