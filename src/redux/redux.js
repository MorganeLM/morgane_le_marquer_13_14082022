/* eslint-disable no-unused-expressions */
import { createSlice, configureStore } from "@reduxjs/toolkit";


// ----------------------- LOGIN SLICE -------------------------------
const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLogged: false,
        token: '',
    },
    reducers: {
        userLogin: (state, action) => {
          state.isLogged = true;
          state.token = action.payload;
        },
        userLogoff: state => {
            state.isLogged = false;
            state.token = "";
          }
    }
});

export const { userLogin, userLogoff } = loginSlice.actions


// ----------------------- USER SLICE (user profile management) -------------------------------
const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    },
    reducers: {
        updateProfile: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        }
    }
})

export const { updateProfile } = userSlice.actions


// ----------------------- STORE -------------------------------
export const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        user: userSlice.reducer
    }
})