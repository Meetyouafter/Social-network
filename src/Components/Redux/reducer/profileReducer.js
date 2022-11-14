const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';

const initialState = {
  posts: [
    { id: 1, likes: 28, content: "What's up?" },
    { id: 2, likes: 12, content: 'I am tired' },
    { id: 3, likes: 178, content: 'I love pizza' },
    { id: 4, likes: 3, content: 'I bougth a cat yestarday' },
    { id: 5, likes: 77, content: 'It is my first post' },
  ],
  newPost: 'newPost!!!!!!!!!!!!!!',
}
const profileReducer = (state = initialState, action) => {
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
