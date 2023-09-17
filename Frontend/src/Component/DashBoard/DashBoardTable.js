import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { customer } from '../../Data/dummyData';
import { vehicles } from '../../Data/dummyData';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const getTableData = customer.map((customer, index) => {
  return (
    <tr>
      <td>{customer.name}</td>
      <td>{vehicles[index].name}</td>
      <td>{vehicles[index].category}</td>
      <td>{vehicles[index].model}</td>
      <td>{vehicles[index].brand}</td>
      <td>{vehicles[index].problemDesc}</td>
    </tr>
  );
});

const DashboardTable = () => {
  return (
    <Row>
      <Col className="col-12 col-m-12 col-sm-12">
        <Card>
          <Card.Header>
            <h3>Recent Enquiry By Customer</h3>
          </Card.Header>
          <Card.Body className="enquiry-table">
            <Table>
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Vehicle Name</th>
                  <th>Category</th>
                  <th>Vehicle Model</th>
                  <th>Vehicle Brand</th>
                  <th>Problem Description</th>
                </tr>
              </thead>
              <tbody>{getTableData}</tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardTable;
