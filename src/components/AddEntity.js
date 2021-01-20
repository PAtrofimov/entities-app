import { Button, Form, Modal } from 'react-bootstrap';
import React, { useState } from 'react';

const AddEntity = ({ race, onHide, show, onAdd }) => {
    const [value, setValue] = useState("");

    const handleChange = e => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({race, name: value});
        onHide();
    }
    return (
        <Modal onHide={onHide} show={show} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Добавить существо</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control type="text" placeholder="Name" onChange={handleChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                 <Button onClick={handleSubmit}>Добавить</Button>
                 <Button onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddEntity;
