import { configureStore } from "@reduxjs/toolkit";
import websiteReducer from "../features/websitesSlice";

export default configureStore({
  reducer: {
    websites: websiteReducer,
  },
});
