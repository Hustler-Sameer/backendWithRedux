
    import { createSlice } from "@reduxjs/toolkit";



  const uiSlice =  createSlice({
        name: 'ui',
        initialState: {
            cartIsVisible : false,
            notification : null,
        },
        reducers :{
            toggle (state) {
                state.cartIsVisible = !state.cartIsVisible;
                console.log('toggle called')
            },
            setNotification(state,payload) {
                state.notification = {
                    status: payload.status,
                    title: payload.title,
                    message:payload.message,
                }
                // state.notification={
                //     status : state.payload.status,
                //     title: state.payload.title,
                //     message: state.payload.message,
                // }
            },

        }

    })

    export const uiActions= uiSlice.actions ;
    export default uiSlice;