import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Headnav from '../navigation/Headnav';
import "./Contact.css"
const Contact = () => {
    return (
        <div>
            <Headnav></Headnav>
            <img width="500px" src="./Digital-Marketing.gif" alt="" />
            <div className="from">
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Fullname</Form.Label>
                            <Form.Control type="email" placeholder="Enter Your Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control type="password" placeholder="To" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control placeholder="Enter Your Message Here!" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>



                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <Button className="button">SUBMIT</Button>
                </Form>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Contact;