import { combineReducers, createStore } from "redux";
import dialogsReducer from "./reducer/dialogsReducer";
import newsReducer from "./reducer/newsReducer";
import profileReducer from "./reducer/profileReducer";
import sidebarReducer from "./reducer/sidebarReducer";

const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    postsPage: profileReducer,
    newsPage: newsReducer,
    sidebar: sidebarReducer,
});

const store = createStore(reducers);

export default store;
