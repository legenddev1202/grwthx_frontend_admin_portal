// project imports
import { makeId } from 'utils/helpers';
import config from '../config';

// action - state management
import * as actionTypes from './actions';

export const initialState = {
    isOpen: [], // for active default menu
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    opened: true,
    assignments: [],
    assignment: {},
    refetchData: '',
    pickAssignmentDate: ''
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const customizationReducer = (state = initialState, action) => {
    let id;
    switch (action.type) {
        case actionTypes.MENU_OPEN:
            id = action.id;
            return {
                ...state,
                isOpen: [id]
            };
        case actionTypes.SET_MENU:
            return {
                ...state,
                opened: action.opened
            };
        case actionTypes.SET_FONT_FAMILY:
            return {
                ...state,
                fontFamily: action.fontFamily
            };
        case actionTypes.SET_BORDER_RADIUS:
            return {
                ...state,
                borderRadius: action.borderRadius
            };
        case actionTypes.SET_ASSIGNMENTS:
            return {
                ...state,
                assignments: action.payload
            };
        case actionTypes.SET_ASSIGNMENT:
            return {
                ...state,
                assignment: action.payload
            };
        case actionTypes.SET_REFETCH_DATA:
            return {
                ...state,
                refetchData: action.payload
            };
        case actionTypes.SET_CALENDAR_DATE_DATA:
            return {
                ...state,
                pickAssignmentDate: action.payload
            };
        default:
            return state;
    }
};

export default customizationReducer;
