import { Button, Modal } from 'react-bootstrap';
import React from 'react';

const DeleteEntity = ({ id, name, show, onHide, onDelete }) => {
   
    const handleSubmit = e => {
        e.preventDefault();
        onDelete(id);
        onHide();
    };

    return (
        <Modal onHide={onHide} show={show} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Существо {name}</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button onClick={handleSubmit}>Удалить</Button>
                <Button onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteEntity;
