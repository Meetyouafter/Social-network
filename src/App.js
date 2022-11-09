import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './Components/Content/Profile';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Dialogs from './Components/Content/Dialogs/Dialogs';
import Setting from './Components/Content/Setting/Setting';
import News from './Components/Content/News/News';
import Profile from './Components/Content/Profile';
import Music from './Components/Content/Music/Music';

const App = (props) => {
  console.log(props);
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Sidebar sidebar={props.store.getSidebar()} />
        <Body />
        <div className='content_container'>
          <Routes>
            <Route
              path='/profile'
              element={
                <Profile
                  postsPage={props.store.getPostsPage()}
                  addNewPost={props.addNewPost}
                  updateNewPost={props.updateNewPost}
                />
              }
            />
            <Route
              path='/dialogs'
              element={
                <Dialogs
                  dialogsPage={props.store.getDialogsPage()}
                  addNewMessage={props.addNewMessage}
                  updateNewMessage={props.updateNewMessage}
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
