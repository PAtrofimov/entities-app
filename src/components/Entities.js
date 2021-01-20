import React, { useEffect, useState } from 'react';
import { Card, Button, ButtonGroup, Badge, Form, Col, Image } from 'react-bootstrap';
import AddEntity from './AddEntity';
import DeleteEntity from './DeleteEntity';
import UpdateEntity from './UpdateEntity';
import { run as runHolder } from 'holderjs/holder';
import { entityColors } from '../utils';

const EntitiesHeaders = ({ race, show, onHide, onShow, onAdd }) => {
    const result = (
        <Form>
            <Form.Row className="justify-content-end">
                <Col>
                    <h1 style={{ width: '100%' }}>
                        <Badge variant="secondary" style={{ width: '100%' }}>
                            {race}
                        </Badge>
                    </h1>
                </Col>
                <Col>
                    <h1 style={{ width: '100%' }}>
                        <Button onClick={onShow} style={{ width: '100%' }}>
                            Добавить
                        </Button>
                    </h1>
                </Col>
            </Form.Row>
            <AddEntity race={race} show={show} onHide={onHide} onAdd={onAdd} />
        </Form>
    );

    return result;
};

const Entities = ({ data, race, onAddEntity, onChangeEntity, onDeleteEntity }) => {
    const [modalAddShow, setModalAddShow] = useState(false);
    const [modalEditShow, setModalEditShow] = useState(false);
    const [modalDeleteShow, setModalDeleteShow] = useState(false);

    useEffect(() => {
        runHolder('image-class-name-no-initial-dot');
    });

    const handleClose = fn => () => {
        fn(false);
    };

    const handleShow = fn => () => {
        fn(true);
    };

    const result = (
        <section>
            <EntitiesHeaders
                race={race}
                show={modalAddShow}
                onAdd={onAddEntity}
                onHide={handleClose(setModalAddShow)}
                onShow={handleShow(setModalAddShow)}
            />
            {data
                .filter(el => el.race === race)
                .map(el => (
                    <Card key={el.id} className="text-center">
                        <Card.Body>
                            <Image
                                src={`holder.js/50px50px?text= &bg=${entityColors[race]}`}
                                roundedCircle
                                style={{ margin: 'auto' }}
                            />
                            <Card.Title className="mt-3">{el.name}</Card.Title>

                            <ButtonGroup className="justify-content-center" style={{ width: '100%' }}>
                                <Button variant="primary" onClick={handleShow(setModalEditShow)}>
                                    Изменить
                                </Button>
                                <Button variant="warning" onClick={handleShow(setModalDeleteShow)}>
                                    Удалить
                                </Button>
                            </ButtonGroup>

                            <UpdateEntity
                                id={el.id}
                                name={el.name}
                                show={modalEditShow}
                                onHide={handleClose(setModalEditShow)}
                                onUpdate={onChangeEntity}
                            />
                            <DeleteEntity
                                id={el.id}
                                name={el.name}
                                show={modalDeleteShow}
                                onHide={handleClose(setModalDeleteShow)}
                                onDelete={onDeleteEntity}
                            />
                        </Card.Body>
                    </Card>
                ))}
        </section>
    );

    return result;
};

export default Entities;
