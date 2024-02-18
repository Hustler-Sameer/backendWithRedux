
    import { createSlice } from "@reduxjs/toolkit";



  const uiSlice =  createSlice({
        name: 'ui',
        initialState: {
            cartIsVisible : false
        },
        reducers :{
            toggle (state) {
                state.cartIsVisible = !state.cartIsVisible;
                console.log('toggle called')
            }
        }

    })

    export const uiActions= uiSlice.actions ;
    export default uiSlice;