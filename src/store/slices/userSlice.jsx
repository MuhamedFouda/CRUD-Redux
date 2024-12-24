import { createSlice } from "@reduxjs/toolkit";
import { userList } from './../../data';

const userSlice=createSlice({
    name: 'users',
    initialState:userList,
    reducers: {
        adduser:(state,action)=>{
               state.push(action.payload);
        },
        updateUser:(state,action)=>{
            const {id,name,email}=action.payload;
            const uu=state.find(user=>user.id ==id);
            if(uu){
                uu.name=name;
                uu.email=email;
            }
        },
        deleteUser:(state,action)=>{
            const id = action.payload;

            // Update Redux state
            const index = state.find(user => user.id === id);
            if (index !== -1) state.splice(index, 1);


        }

    }
})

export const { adduser,updateUser,deleteUser } = userSlice.actions;
export default userSlice.reducer;