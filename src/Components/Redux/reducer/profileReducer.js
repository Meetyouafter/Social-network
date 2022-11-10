const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      const newPost = {
        id: 10,
        likes: 0,
        content: state.newPost,
      };
      state.posts.push(newPost);
      state.newPost = '';
      return state;
    case UPDATE_NEW_POST:
      state.newPost = action.text;
      return state;
    default:
      return state;
  }
};

export const addNewPostActionCreator = () => ({type: ADD_NEW_POST})
export const updateNewPostActionCreator = (newText) => ({type: UPDATE_NEW_POST, text: newText})

export default profileReducer;
