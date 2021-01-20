import {
    GET_ENTITIES_REQUEST,
    GET_ENTITIES_FAILURE,
    GET_ENTITIES_SUCCESS,
    ADD_ENTITY,
    UPDATE_ENTITY,
    DELETE_ENTITY
} from './entityTypes';

const initialState = {
    loading: false,
    data: [],
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ENTITIES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_ENTITIES_SUCCESS: {
            const data = action.payload;
            return { ...state, loading: false, data, error: '' };
        }
        case GET_ENTITIES_FAILURE:
            return { ...state, loading: false, data: [], error: action.payload };

        case ADD_ENTITY: {
            const id = Math.max(...state.data.map(el => el.id)) + 1;
            const newEntity = { id, ...action.payload };

            return { ...state, data: [...state.data, newEntity] };
        }
        case UPDATE_ENTITY: {
            const data = state.data.map(el => {
                const { id, name } = action.payload;

                if (el.id === id) {
                    return {
                        ...el,
                        name
                    };
                }

                return el;
            });
            return { ...state, data };
        }
        case DELETE_ENTITY: {
            const data = state.data.filter(el => el.id !== action.payload);
            return { ...state, data };
        }
        default:
            return state;
    }
};

export default reducer;

