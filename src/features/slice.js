import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[],
    count:0
}
export const appSlice =createSlice({name:'app-slice',initialState,reducers : {
    addTodo:(state,action)=>{
        const todo = {
            id:nanoid(),
            item:action.payload
        }
        state.todos.push(todo);
        state.count=state.count+1;
    },
    removeTodo:(state,action)=>{
        state.todos.filter((item)=>item.id!=action.payload)
        state.count=state.count-1;

    }
}})

export const {addTodo,removeTodo}=appSlice.actions;
export default appSlice.reducer;