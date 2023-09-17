import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import './css/complaint-form.css'

const ComplaintForm = () => {
  const [currentDatetime] = useState(new Date().toISOString().slice(0, 16))

  return (
    <Card className='complaint-form'>
      <Card.Header>
        <h3>Complaint Form</h3>
      </Card.Header>

      <Card.Body>
        <Form>
          <Form.Group
            className='mb-1 mg-bottom-spacing'
            controlId='formComplaintEmail'
          >
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='Please enter your name' />
          </Form.Group>

          <Form.Group
            className='mb-1 mg-bottom-spacing'
            controlId='formComplaintEmail'
          >
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email for contact purposes'
            />
          </Form.Group>

          <Form.Group
            className='mb-1 mg-bottom-spacing'
            controlId='formComplaintBusName'
          >
            <Form.Label>Bus Name</Form.Label>
            <Form.Control type='text' placeholder='Enter the bus name' />
          </Form.Group>

          <Form.Group
            className='mb-1 mg-bottom-spacing'
            controlId='formComplaintBusModel'
          >
            <Form.Label>Bus Model</Form.Label>
            <Form.Select placeholder='Please select a bus model'>
              <option value='1'>Volvo B7RLE</option>
              <option value='2'>Mercedes Benz CBC1725</option>
              <option value='3'>Scania K270UB</option>
            </Form.Select>
          </Form.Group>

          <Form.Group
            className='mb-1 mg-bottom-spacing'
            controlId='formComplaintTime'
          >
            <Form.Label>Complaint Time</Form.Label>
            <Form.Control
              type='datetime-local'
              defaultValue={currentDatetime}
              disabled
            />
          </Form.Group>

          <Form.Group
            className='mb-1 mg-bottom-spacing text-area'
            controlID='formComplaintDesc'
          >
            <Form.Label>Describe your problem</Form.Label>
            <Form.Control as='textarea' rows={8}></Form.Control>
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default ComplaintForm
