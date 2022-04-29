// import { createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import { reducers } from "./reducers";
import users from './features/users/users.slice';


// export const store = createStore(reducers);

export default configureStore({
    reducer: {
        users
    }
})
    