import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  websites: [],
  origin: "",
  searchedWebsite: { name: "ahmet" },
};

export const websitesSlice = createSlice({
  name: "website",
  initialState,
  reducers: {
    setWebsites: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.websites = action.payload;
    },

    setSearchedOrigin: (state, action) => {
      state.origin = action.payload;
    },

    setSearchedWebsite: (state, action) => {
      state.searchedWebsite = action.payload;
    },
  },
});

export const { setWebsites, setSearchedOrigin, setSearchedWebsite } =
  websitesSlice.actions;

// can retrieve by useSelector(allWebsites) in any component
export const allWebsites = (state) => state.websites.websites;
export const searchedOrigin = (state) => state.websites.origin;
export const searchedWebsite = (state) => state.websites.searchedWebsite;

export default websitesSlice.reducer;
