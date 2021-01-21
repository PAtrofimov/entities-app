import { Button, Form, Modal } from 'react-bootstrap';
import React, { useState } from 'react';

const UpdateEntity = ({ id, name, show, onHide, onUpdate }) => {
    const [value, setValue] = useState(name);

    const handleChange = e => {
        setValue(e.target.value);
    };

    const handleSubmit = e => {
        if (!value.trim()) {
            return;
        }
        e.preventDefault();
        onUpdate({id, name: value});
        onHide();
    };

    return (
        <Modal onHide={onHide} show={show} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Изменить существо</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control type="text" placeholder="Name" value={value} onChange={handleChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleSubmit}>Изменить</Button>
                <Button onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateEntity;
