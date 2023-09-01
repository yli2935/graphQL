// project import

import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    loading: false,
    loggedIn: false,
    user: undefined,
    error: undefined,
};
const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest(state, action) {
            console.log("action: loginRequest");
            state.loading = true;
          },
          loginSuccess(state, action) {
            console.log("action: loginSuccess");
            state.loading = false;
            state.loggedIn = true;
            state.user = action.payload;
          },
          loginFailure(state, action) {
            console.log("action: loginFailure");
            state.loading = false;
            state.loggedIn = false;
            state.user = undefined;
            state.error = action.payload;
          },
          logoutRequest(state, action) {
            console.log("action: logoutRequest");
            state.loggedIn = false;
            state.user = undefined;
          }
    }

})

// extract action-creators from slice
const { loginRequest, loginSuccess, loginFailure } = authSlice.actions;

