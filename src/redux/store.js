import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers/appReducer";


const store = configureStore({
    reducer: {
        rootReducer: rootReducer,

    }
}
);


export default store;