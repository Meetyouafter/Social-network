const ADD_NEW_NEWS = 'ADD_NEW_NEWS';
const UPDATE_NEW_NEWS = 'UPDATE_NEW_NEWS';

const initialState = {
  news: [
    {id:1, body: 'Today is good weather'},
    {id:2, body: 'Cats are beautiful'},
    {id:3, body: 'Youm youm youm'},
  ],
  newNews: 'Write me',
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_NEWS:
      const newNews = {
        id: 10,
        body: state.newNews,
      };
      state.news.push(newNews);
      state.newNews = '';
      return state;
    case UPDATE_NEW_NEWS:
      state.newNews = action.text;
      return state;
    default:
      return state;
  }
};

export const addNewNewsActionCreator = () => ({ type: ADD_NEW_NEWS });
export const updateNewNewsActionCreator = (newText) => ({
  type: UPDATE_NEW_NEWS,
  text: newText,
});

export default newsReducer;
