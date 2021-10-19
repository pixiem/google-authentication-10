import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Card, CardGroup, Modal } from 'react-bootstrap';
import "./Course.css"

const Course = (props) => {
    const { name, Duration, price, enrolled, teacher, img } = props.course
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="col" >
            <CardGroup>
                <Card>
                    <div className="course-image">
                        <img width="100%" height="150px" src={img} alt="" />
                    </div>
                    <Card.Body className="card-body">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <img width="20px" src="./favpng_bangladeshi-taka-currency-symbol-money.png" alt="" />
                                    {price}
                                </div>
                                <span className="hours">{Duration}</span>
                            </div>
                        </Card.Text>

                        <Button className="button" variant="primary" onClick={handleShow}>
                            Details
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body> <img width="100%" src={img} alt="" /> </Modal.Body>
                            <Modal.Footer>
                                <Button className="button" variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button className="button" variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Card.Body>
                </Card>


            </CardGroup>

        </div>
    );
};

export default Course;