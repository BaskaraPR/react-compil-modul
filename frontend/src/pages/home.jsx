import React from "react";
import Layout from "../components/Layout";
import { Row, Col, Card } from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <Layout>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Welcome to the Home Page!</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam tincidunt semper magna, a dapibus est consectetur
                    quis.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </Layout>
    );
  }
}

export default Home;
