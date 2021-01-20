import {
    GET_ENTITIES_FAILURE,
    GET_ENTITIES_REQUEST,
    GET_ENTITIES_SUCCESS,
    ADD_ENTITY,
    UPDATE_ENTITY,
    DELETE_ENTITY
} from './entityTypes';

export const getEntities = () => {
    return dispatch => {
        dispatch(getEntitiesRequest());
        const socket = new WebSocket('ws://testapi.marit.expert:3004');
        socket.onopen = () => socket.send({ cmd: 'get_list' });

        socket.onmessage = message => {
            dispatch(getEntitiesSuccess(JSON.parse(message.data)));
        };

        socket.onerror = error => {
            dispatch(getEntitiesFailure(error));
        };
    };
};

export const getEntitiesRequest = () => {
    return {
        type: GET_ENTITIES_REQUEST
    };
};

export const getEntitiesSuccess = data => {
    return {
        type: GET_ENTITIES_SUCCESS,
        payload: data
    };
};

export const getEntitiesFailure = error => {
    return {
        type: GET_ENTITIES_FAILURE,
        payload: error
    };
};

export const addEntity = data => {
    return {
        type: ADD_ENTITY,
        payload: data
    };
};

export const changeEntity = data => {
    return {
        type: UPDATE_ENTITY,
        payload: data
    };
};

export const deleteEntity = id => {
    return {
        type: DELETE_ENTITY,
        payload: id
    };
};