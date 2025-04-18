import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subreddits: ['TurtleFacts']
}

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {
        addSubreddit(state, action) {
            state.subreddits.push(action.payload);
        },

        removeSubreddit(state, action) {
            state.subreddits.filter((subreddit) => subreddit !== action.payload);
        }
    }
})

export default subredditsSlice.reducer;