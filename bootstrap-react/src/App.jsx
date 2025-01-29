import "./App.css"

import { Button, Container, Row, Col, Form, Card } from "react-bootstrap"
import BasicExample from "./components/Dropdown"
import Slider from "./components/Slider"

function App() {
  return (
    <>
      <Container className="mt-5 mb-5">
        <Row>
          <Col>
            <Button>Text</Button>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
            <BasicExample>Drop</BasicExample>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We will never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="../public/3.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Slider />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
