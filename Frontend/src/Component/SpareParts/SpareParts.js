import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import Card from 'react-bootstrap/Card';
import { partsData } from '../../Data/dummyData';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import './SpareParts.css';
import CloseButton from 'react-bootstrap/esm/CloseButton';

const SpareParts = () => {
  const [busData, setData] = useState([]);

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const [costsPopoverData, setCostsPopoverData] = useState([]);
  const [partsPopoverData, setPartsPopoverData] = useState([]);

  const handleClick = (event, partsCost, partsName) => {
    setShow(!show);
    setTarget(event.target);
    setCostsPopoverData(partsCost);
    setPartsPopoverData(partsName);
  };

  const handleClickButton = () => {
    setShow(!show);
  };

  const CostBreakdownPopover = ({
    show,
    target,
    costsPopoverData,
    partsPopoverData,
  }) => (
    <Overlay show={show} target={target} placement="bottom">
      <Popover
        id="popover-contained"
        style={{ fontSize: '17px', width: '300px' }}
      >
        <Popover.Header as="h3" style={{ fontSize: '20px' }}>
          <span>Cost Breakdown</span>
          <span></span>
          <CloseButton
            onClick={handleClickButton}
            style={{
              padding: 0,
              position: 'absolute',
              top: '10px',
              right: '8px',
            }}
          ></CloseButton>
        </Popover.Header>
        <Popover.Body>
          {costsPopoverData.map((cost, i) => (
            <div key={i}>
              {partsPopoverData[i]}: {cost} MYR
            </div>
          ))}
          <hr />
          <strong>
            {'Total Price: '}
            {costsPopoverData.reduce((partialSum, a) => partialSum + a, 0) +
              ' MYR'}
          </strong>
        </Popover.Body>
      </Popover>
    </Overlay>
  );

  useEffect(() => {
    fetch('Bus_data.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const filteredBusData = busData.filter((bus) => bus.Grade === 2);

  const displayCostPopover = () => {
    return (
      <CostBreakdownPopover
        show={show}
        target={target}
        costsPopoverData={costsPopoverData}
        partsPopoverData={partsPopoverData}
      />
    );
  };

  return (
    <Row>
      <Col className="col-12 col-m-12 col-sm-12">
        <Card className="enquiry-table" style={{ height: '91vh' }}>
          <Card.Header className="enquiry-table" style={{ color: 'black' }}>
            <h3>Spare Parts Management</h3>
          </Card.Header>
          <Card.Body className="enquiry-table">
            <Table>
              <thead className="each-row">
                <tr>
                  <th>Bus ID</th>
                  <th>Parts</th>
                  <th>Quantity</th>
                  <th>Cost</th>
                  <th>Transaction</th>
                </tr>
              </thead>
              <tbody>
                {filteredBusData.map((bus, index) => (
                  <tr>
                    <td className="align-middle">{bus.bus_id}</td>
                    <td className="align-middle">
                      {partsData[index].parts &&
                        partsData[index].parts.map((item, i) => (
                          <div key={i} style={{ padding: '5px 0' }}>
                            {item}
                          </div>
                        ))}
                    </td>
                    <td className="align-middle">
                      {partsData[index].quantity &&
                        partsData[index].quantity.map((item, i) => (
                          <div key={i} style={{ padding: '5px 0' }}>
                            {item}
                          </div>
                        ))}
                    </td>
                    <td className="align-middle" ref={ref}>
                      <span
                        onClick={(event) => {
                          handleClick(
                            event,
                            partsData[index].cost,
                            partsData[index].parts
                          );
                        }}
                        className="spare-parts-styling"
                      >
                        {partsData[index].cost &&
                          partsData[index].cost.reduce(
                            (partialSum, a) => partialSum + a,
                            0
                          ) + ' MYR'}
                      </span>
                    </td>
                    <td className="align-middle">
                      <Button
                        variant="success"
                        size="lg"
                        style={{
                          marginRight: '20px',
                          marginBottom: '8px',
                          marginTop: '8px',
                        }}
                      >
                        Accept
                      </Button>
                      <Button
                        variant="danger"
                        size="lg"
                        style={{
                          paddingLeft: '19.5px',
                          paddingRight: '19.5px',
                          marginBottom: '8px',
                          marginTop: '8px',
                        }}
                      >
                        Reject
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {displayCostPopover()}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SpareParts;
