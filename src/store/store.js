import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../slices/toggleSlice";
export default configureStore({
    reducer: {
        togglePage: toggleReducer
    },

});