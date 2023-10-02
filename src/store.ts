import { configureStore } from "@reduxjs/toolkit";
import templateReducer from "./app/templates/template.reducer";
 
export const store = configureStore({
    reducer: {
        template: templateReducer,
 
    }
});



export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch