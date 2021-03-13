import authReducer from "./authReducers";
import designReducer from "./designReducer";

import { combineReducers } from 'redux';

const mainReducer = combineReducers({
    auth: authReducer,
    design: designReducer
})

export default mainReducer;