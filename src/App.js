import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './Components/Content/Home';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Dialogs from './Components/Content/Dialogs/Dialogs';
import Setting from './Components/Content/Setting/Setting';
import News from './Components/Content/News/News';
import Home from './Components/Content/Home';
import Music from './Components/Content/Music/Music';

const App = (props) => {
  console.log(props);
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Sidebar sidebar={props.state.sidebar} />
        <Body />
        <div className='content_container'>
          <Routes>
            <Route
              path='/home'
              element={
                <Home
                  postsPage={props.state.postsPage}
                  addNewPost={props.addNewPost}
                  updateNewPost={props.updateNewPost}
                />
              }
            />
            <Route
              path='/dialogs'
              element={
                <Dialogs
                  state={props.state.dialogsPage}
                  addNewMessage={props.addNewMessage}
                  newMessageText={props.dialogsChange}
                />
              }
            />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/setting' element={<Setting />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
