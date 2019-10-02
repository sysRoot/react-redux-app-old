import {
    FETCH_QUOTE_START,
    FETCH_QUOTE_SUCCESS,
    FETCH_QUOTE_FAILURE
} from "../actions";

import { initialState } from "../state";

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUOTE_START: {
            return {
                ...state,
                error: ""
            };
        }
        case FETCH_QUOTE_SUCCESS: {
            return {
                ...state,
                error: "",
                someQuoteHere: action.payload.quote
            };
        }
        case FETCH_QUOTE_FAILURE: {
            return { ...state, error: action.payload };
        }
        default: {
            return state;
        }
    }
};
