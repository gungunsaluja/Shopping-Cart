import {createSlice} from "@reduxjs/toolkit";

export const CartSlice = createSlice({

    // reducers function input me do arguments lete hai state and action 
    name:'cart',
    initialState:[],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload);
            //jo b input diya h uskoo payload se handle krenge
        },
        remove:(state, action)=>{
                return state.filter((item)=>item.id !== action.payload);
        },

    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;