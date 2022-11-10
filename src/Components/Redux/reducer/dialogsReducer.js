const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      const newMessage = {
        id: 10,
        message: state.newMessage,
      };
      state.dialogs.push(newMessage);
      state.newMessage = '';
      return state;
    case UPDATE_NEW_MESSAGE:
      state.newMessage = action.text;
      return state;
    default:
      return state;
  }
};

export const addNewMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE });
export const updateNewMessageActionCreator = (newText) => ({
  type: UPDATE_NEW_MESSAGE,
  text: newText,
});

export default dialogsReducer;
