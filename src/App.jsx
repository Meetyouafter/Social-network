import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './Components/Content/Profile';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Setting from './Components/Content/Setting/Setting';
import Profile from './Components/Content/Profile';
import Music from './Components/Content/Music/Music';
import SidebarContainer from './Components/Sidebar/SidebarContainer';
import NewsContainer from './Components/Content/News/NewsContainer';
import DialogsContainer from './Components/Content/Dialogs/DialogsContainer';

const App = ({store}) => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <SidebarContainer />
        <Body />
        <div className='content_container'>
          <Routes>
            <Route
              path='/profile'
              element={
                <Profile />
              }
            />
            <Route
              path='/dialogs'
              element={
                <DialogsContainer />
              }
            />
            <Route path='/news' element={<NewsContainer store={store}/>} />
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
