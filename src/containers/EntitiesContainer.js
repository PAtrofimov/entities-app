import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addEntity, changeEntity, deleteEntity, getEntities } from '../redux/entity/entityActions';
import { Col, Container, Jumbotron, Row, Spinner } from 'react-bootstrap';
import Entities from '../components/Entities';

const entityRaces = {
    Hobbit: 'Hobbit',
    Human: 'Human',
    Dworf: 'Dworf',
    Elf: 'Elf'
};

function EntitiesContainer({ entityData, addEntity, changeEntity, deleteEntity, getEntities }) {
    const handleAddEntity = data => {
        addEntity(data);
    };

    const handleUpdateEntity = data => {
        changeEntity(data);
    };
    const handleRemoveEntity = id => {
        deleteEntity(id);
    };

    useEffect(() => {
        getEntities();
    }, []);
    return (
        <Jumbotron fluid>
            <Container>
                <Row className="justify-content-center">
                    {entityData.loading ? (
                        <Spinner animation="border" role="status" style={{ textAlign: 'center' }}>
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    ) : entityData.error ? (
                        <Alert variant="danger">{entityData.error}</Alert>
                    ) : (
                        <>
                            {Object.values(entityRaces).map(race => (
                                <Col key={race} xs={12} sm={6} md={3}>
                                    <Entities
                                        race={race}
                                        data={entityData.data}
                                        onAddEntity={handleAddEntity}
                                        onChangeEntity={handleUpdateEntity}
                                        onDeleteEntity={handleRemoveEntity}
                                    />
                                </Col>
                            ))}
                        </>
                    )}
                </Row>
            </Container>
        </Jumbotron>
    );
}

const mapStateToProps = state => {
    return {
        entityData: state.entity
    };
};

const actions = { addEntity, changeEntity, deleteEntity, getEntities };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EntitiesContainer);
