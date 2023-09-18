import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './css/dashboard-cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxesStacked,
  faBus,
  faToolbox,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { faHatCowboy } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';

function DashboardCounter() {
  const totalCustomer = 297;
  const totolMaintenance = 130;
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
          <Card className="counter bg-mechanic">
            <Card.Body>
              <FontAwesomeIcon icon={faToolbox} />
              <Card.Title>{totolMaintenance}</Card.Title>
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
          <Card className="counter bg-feedback">
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
