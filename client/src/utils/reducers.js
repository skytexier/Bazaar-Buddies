import {
    GET_PRODUCTS
} from './actions';

const initalState = {
    products: []
};

export const reducers = (state = initalState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };

            default: 
            return state;
    }
}

export default reducers;