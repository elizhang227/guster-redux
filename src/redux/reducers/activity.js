import { ACTION_SET_ACTIVITY, ACTION_SET_NAME } from '../actions/actionTypes';

const initialState = {
    name: 'Guster',
    activity: 'blep'
}

const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SET_ACTIVITY: {
            return {
                ...state,
                activity: action.payload.activity
            }
        }
        case ACTION_SET_NAME: {
            return {
                ...state,
                name: action.payload.name
            }
        }
        default: {
            return state;
        }
    }
}

export default activityReducer;